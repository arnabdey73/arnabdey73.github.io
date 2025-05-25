/**
 * Blog Feed - Fetches and displays latest posts from the blog
 */
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  
  // Enable for debugging info in console
  const DEBUG = true;
  
  // Blog URL and RSS proxy service to avoid CORS issues
  const BLOG_URL = 'blog.arnabdey.dev';
  const BLOG_BASE_URL = 'https://blog.arnabdey.dev';
  const RSS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';
  
  // Try multiple common RSS feed paths to increase chances of success
  function tryFetchWithVariousRSSFormats() {
    // Check if we have a previously successful RSS path in localStorage
    const savedPath = localStorage.getItem('successfulRSSPath');
    
    // Common RSS feed paths to try in order - prioritizing WordPress paths
    let possiblePaths = [
      '/feed',          // WordPress primary feed
      '/feed/',         // WordPress with trailing slash
      '/wp-json/wp/v2/posts', // WordPress REST API
      '/rss',           // Common RSS endpoint
      '/index.php/feed',      // WordPress with index.php
      '/feed.xml',      // Jekyll, Hugo, many static sites
      '/rss.xml',       // Common RSS file name
      '/index.xml',     // Hugo and some static site generators
      '/atom.xml',      // Atom feeds
      '/blog/feed',     // Subdirectory feeds
      '/blog/rss',
      '/rss/index.xml',
      '/feed?x-host=blog.arnabdey.dev', // Based on the redirect we saw
      ''                // Some platforms put it at the root
    ];
    
    // If we have a saved path that worked before, try it first
    if (savedPath) {
      if (DEBUG) console.log('Found previously successful RSS path:', savedPath);
      // Put the saved path at the beginning of the array
      possiblePaths = [savedPath, ...possiblePaths.filter(path => path !== savedPath)];
    }
    
    // Try each path until one works
    let attemptIndex = 0;
    
    function tryNextPath() {
      if (attemptIndex >= possiblePaths.length) {
        console.error('All RSS feed paths failed');
        
        // Try a different proxy service as a last resort
        tryAlternativeProxy();
        return;
      }
      
      const path = possiblePaths[attemptIndex];
      const rssUrl = encodeURIComponent(`${BLOG_BASE_URL}${path}`);
      
      if (DEBUG) console.log(`Attempting RSS feed at: ${BLOG_BASE_URL}${path}`);
      
      fetch(`${RSS_PROXY}${rssUrl}`, { 
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      })
        .then(response => {
          if (DEBUG) console.log(`Response status for ${path}:`, response.status);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (DEBUG) {
            console.log(`RSS feed response for ${path}:`, data);
            // Log the raw data structure to understand what we're getting
            console.log(`Data structure: ${JSON.stringify(data).substring(0, 200)}...`);
          }
          
          if (!data || data.status !== 'ok' || !data.items || data.items.length === 0) {
            throw new Error('Invalid or empty RSS feed');
          }
          
          // Clear loading spinner
          blogPostsContainer.innerHTML = '';
          
          // Success! Display the posts
          data.items.slice(0, 3).forEach(post => {
            if (DEBUG) console.log('Processing post:', post.title);
            const postElement = createPostElement(post);
            blogPostsContainer.appendChild(postElement);
          });
          
          console.log(`Successfully loaded RSS feed from: ${BLOG_BASE_URL}${path}`);
          
          // Save this successful path to localStorage for future use
          localStorage.setItem('successfulRSSPath', path);
        })
        .catch(error => {
          console.error(`Error with path ${path}:`, error);
          
          // If this is the last attempt, show a more informative message
          if (attemptIndex === possiblePaths.length - 1) {
            if (DEBUG) console.log('All feed paths failed, showing last error before fallback');
            
            // Show a brief error message before showing fallback posts
            const tempErrorMessage = document.createElement('div');
            tempErrorMessage.className = 'feed-temp-error';
            tempErrorMessage.innerHTML = '<p>Could not connect to blog feed. Showing recent articles...</p>';
            
            blogPostsContainer.innerHTML = '';
            blogPostsContainer.appendChild(tempErrorMessage);
            
            // After a short delay, show the fallback posts
            setTimeout(() => {
              showFallbackPosts();
            }, 1500);
            
            return;
          }
          
          // Try the next path
          attemptIndex++;
          tryNextPath();
        });
    }
    
    // Start trying paths
    tryNextPath();
  }
  
  // Try WordPress REST API directly as a last resort
  function tryAlternativeProxy() {
    if (DEBUG) console.log('Trying WordPress REST API directly');
    
    // Try WordPress REST API - often accessible without CORS issues
    const WP_API_URL = `${BLOG_BASE_URL}/wp-json/wp/v2/posts?_embed&per_page=3`;
    
    blogPostsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Trying alternative method...</p></div>';
    
    fetch(WP_API_URL)
      .then(response => {
        if (DEBUG) console.log('WordPress API response status:', response.status);
        if (!response.ok) {
          throw new Error(`WordPress API failed: ${response.status}`);
        }
        return response.json();
      })
      .then(posts => {
        if (DEBUG) console.log('WordPress posts response:', posts);
        
        if (!posts || !Array.isArray(posts) || posts.length === 0) {
          throw new Error('No posts found in WordPress API response');
        }
        
        // Clear loading spinner
        blogPostsContainer.innerHTML = '';
        
        // Process WordPress API format posts
        posts.forEach(post => {
          // Convert WordPress REST API format to our expected format
          const processedPost = {
            title: post.title?.rendered || 'Untitled Post',
            link: post.link || BLOG_BASE_URL,
            pubDate: post.date || new Date().toISOString(),
            description: post.excerpt?.rendered || '',
            content: post.content?.rendered || '',
            thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/600x400/2a9df4/e6e6e6?text=Blog+Post'
          };
          
          const postElement = createPostElement(processedPost);
          blogPostsContainer.appendChild(postElement);
        });
        
        console.log('Successfully loaded blog content using WordPress API');
      })
      .catch(error => {
        console.error('WordPress API method failed:', error);
        
        // Try a CORS proxy as a last resort
        const CORS_PROXY = 'https://corsproxy.io/?';
        const PROXY_URL = `${CORS_PROXY}${encodeURIComponent(BLOG_BASE_URL + '/feed')}`;
        
        if (DEBUG) console.log('Trying CORS proxy:', PROXY_URL);
        
        fetch(PROXY_URL)
          .then(response => {
            if (!response.ok) throw new Error('CORS proxy failed');
            return response.text();
          })
          .then(xml => {
            try {
              // Try to parse the XML
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(xml, 'text/xml');
              const items = xmlDoc.querySelectorAll('item');
              
              if (!items || items.length === 0) throw new Error('No items in XML');
              
              // Clear loading spinner
              blogPostsContainer.innerHTML = '';
              
              // Process and display the posts
              Array.from(items).slice(0, 3).forEach(item => {
                const post = {
                  title: item.querySelector('title')?.textContent || 'Untitled Post',
                  link: item.querySelector('link')?.textContent || BLOG_BASE_URL,
                  pubDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
                  description: item.querySelector('description')?.textContent || '',
                  content: item.querySelector('content\\:encoded')?.textContent || ''
                };
                
                const postElement = createPostElement(post);
                blogPostsContainer.appendChild(postElement);
              });
              
              console.log('Successfully loaded blog content using CORS proxy');
            } catch (xmlError) {
              console.error('XML parsing failed:', xmlError);
              showFallbackPosts();
            }
          })
          .catch(() => {
            // All methods failed, show actual static blog posts
            showFallbackPosts();
          });
      });
  }

  // Start the process
  tryFetchWithVariousRSSFormats();
    // Create a post element
  function createPostElement(post) {
    if (DEBUG) console.log('Creating post element for:', post);
    
    const postElement = document.createElement('div');
    postElement.className = 'blog-post-card';
    
    // Format date - handle various date formats
    let date;
    try {
      // Try different date properties and formats
      if (post.pubDate) {
        date = new Date(post.pubDate);
      } else if (post.published) {
        date = new Date(post.published);
      } else if (post.date) {
        date = new Date(post.date);
      } else if (post.date_gmt) {
        date = new Date(post.date_gmt);
      } else {
        date = new Date();
      }
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        date = new Date();
      }
    } catch (e) {
      date = new Date();
    }
    
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    
    // Extract thumbnail/featured image with more fallbacks
    let imageUrl = 'https://placehold.co/600x400/2a9df4/e6e6e6?text=Blog+Post';
    let cssClass = '';
    
    // Try multiple ways to get the featured image
    try {
      // Check if this is a special CSS-styled thumbnail
      if (post.cssClass) {
        cssClass = post.cssClass;
        // For CSS-based images, we'll use a blank placeholder
        imageUrl = ''; 
      } else if (post.thumbnail && post.thumbnail !== '') {
        imageUrl = post.thumbnail;
      } else if (post.featured_media && post._embedded && post._embedded['wp:featuredmedia']) {
        // WordPress REST API format
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
      } else if (post.jetpack_featured_media_url) {
        // Jetpack format
        imageUrl = post.jetpack_featured_media_url;
      } else if (post.content) {
        // Try to extract image from content
        const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          imageUrl = imgMatch[1];
        }
      }
    } catch (e) {
      console.error('Error extracting image:', e);
    }
    
    // Get post title
    const title = post.title?.rendered || post.title || 'Untitled Post';
    
    // Handle WordPress REST API format or standard RSS
    let postTitle = title;
    if (typeof title === 'object' && title.rendered) {
      postTitle = title.rendered;
    }
    
    // Clean title of HTML if needed
    if (typeof postTitle === 'string' && postTitle.includes('<')) {
      postTitle = stripHtml(postTitle);
    }
    
    // Get post URL
    const postUrl = post.link || post.url || post.guid || `https://blog.arnabdey.dev`;
    
    // Truncate excerpt if necessary - handle WordPress REST API format
    let excerpt;
    if (post.excerpt && post.excerpt.rendered) {
      excerpt = truncateText(stripHtml(post.excerpt.rendered), 120);
    } else {
      excerpt = post.description || post.summary || post.content 
        ? truncateText(stripHtml(post.description || post.summary || post.content), 120) 
        : 'Read this post on my blog...';
    }
    
    // Determine if we should use an img tag or a div with CSS class
    let imageHtml = '';
    if (cssClass) {
      // Use a div with CSS class for styled placeholders
      imageHtml = `<div class="blog-post-image ${cssClass}"></div>`;
    } else {
      // Use traditional img tag
      imageHtml = `<img class="blog-post-image" src="${imageUrl}" alt="${postTitle}" loading="lazy">`;
    }
    
    postElement.innerHTML = `
      ${imageHtml}
      <div class="blog-post-content">
        <h3 class="blog-post-title">${postTitle}</h3>
        <p class="blog-post-excerpt">${excerpt}</p>
        <div class="blog-post-meta">
          <span class="blog-post-date">
            <i class="far fa-calendar-alt"></i>
            ${formattedDate}
          </span>
          <a href="${postUrl}" class="blog-post-readmore" target="_blank" rel="noopener">
            Read more
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    
    return postElement;
  }
    // Show error message - improved with retry button
  function showError(message) {
    blogPostsContainer.innerHTML = `
      <div class="blog-error-message">
        <i class="fas fa-exclamation-circle"></i>
        <p>${message}</p>
        <button class="retry-button" onclick="location.reload()">
          <i class="fas fa-redo"></i> Retry
        </button>
      </div>
    `;
  }
    // Truncate text to a certain length
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  }
  
  // Helper function to strip HTML tags
  function stripHtml(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  }
  
  // Show actual blog posts when feed cannot be loaded
  function showFallbackPosts() {
    if (DEBUG) console.log('Unable to load blog posts dynamically, showing static recent posts');
    
    // Clear any loading indicators
    blogPostsContainer.innerHTML = '';
    
    // Reset display to grid (in case it was changed)
    blogPostsContainer.style.display = 'grid';
    
    // My actual recent blog posts with thumbnails based on my tech expertise and projects
    const recentPosts = [
      {
        title: "Infrastructure as Code: Using Pulumi with Python for Azure Deployments",
        description: "In this post, I share my experience using Pulumi with Python to automate Azure infrastructure deployments. I compare it with traditional tools like Terraform and demonstrate how Python's flexibility can streamline complex cloud resource management and improve developer experience.",
        link: "https://blog.arnabdey.dev/iac-pulumi-python-azure",
        thumbnail: "pulumi-python", // Special CSS class instead of image URL
        cssClass: "pulumi-python",
        pubDate: "2025-04-15T10:15:00Z"
      },
      {
        title: "Kubernetes Monitoring: Setting Up Prometheus and Grafana on AKS",
        description: "A detailed walkthrough of implementing a robust monitoring solution for Azure Kubernetes Service using Prometheus and Grafana. I cover deployment via Helm charts, custom metric configurations, and creating insightful dashboards for real-time cluster visibility.",
        link: "https://blog.arnabdey.dev/kubernetes-monitoring-prometheus-grafana",
        thumbnail: "prometheus-grafana", // Special CSS class instead of image URL
        cssClass: "prometheus-grafana",
        pubDate: "2025-03-22T08:45:00Z"
      }
    ];
    
    // Create and append blog post elements
    recentPosts.forEach(post => {
      const postElement = createPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
    
    // Add a note that these are recent blog posts
    const noteElement = document.createElement('div');
    noteElement.className = 'blog-note';
    noteElement.innerHTML = '<p><small><i class="fas fa-bookmark"></i> Featured technical articles from my blog</small></p>';
    noteElement.style.gridColumn = '1 / -1';
    noteElement.style.textAlign = 'center';
    noteElement.style.display = 'block';
    noteElement.style.width = 'fit-content';
    noteElement.style.marginLeft = 'auto';
    noteElement.style.marginRight = 'auto';
    
    blogPostsContainer.appendChild(noteElement);
  }
});
