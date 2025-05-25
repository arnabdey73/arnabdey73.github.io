/**
 * Blog Feed - Fetches and displays latest posts from the blog
 */
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  
  // Enable for debugging info in console
  const DEBUG = true;
  
  // Blog URL - Set to your Hashnode blog URL
  const BLOG_URL = 'blog.arnabdey.dev';
  // For linking back to blog site
  const BLOG_BASE_URL = 'https://blog.arnabdey.dev';
  
  // Function to fetch blog posts from Hashnode
  function fetchHashnodeBlogPosts() {
    if (DEBUG) console.log('Fetching blog posts from Hashnode API');
    
    // Show loading spinner with Hashnode-specific styling
    blogPostsContainer.innerHTML = '<div class="loading-spinner loading-hashnode"><div class="spinner"></div><p>Loading latest posts...</p></div>';
    
    // The GraphQL query to get blog posts from Hashnode
    const graphqlQuery = {
      query: `
        query GetUserArticles {
          user(username: "arnabdey73") {
            publication {
              posts(page: 0) {
                title
                brief
                slug
                dateAdded
                coverImage
              }
            }
          }
        }
      `
    };
    
    // Hashnode's GraphQL API endpoint
    const HASHNODE_API_URL = 'https://api.hashnode.com';
    
    // Make request to Hashnode GraphQL API
    fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Hashnode API response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (DEBUG) {
        console.log('Hashnode API response:', data);
      }
      
      // Check if we got valid data
      if (!data || !data.data || !data.data.user || !data.data.user.publication || !data.data.user.publication.posts) {
        throw new Error('Invalid response from Hashnode API');
      }
      
      const posts = data.data.user.publication.posts;
      
      // Check if there are any posts
      if (!posts || posts.length === 0) {
        throw new Error('No posts found in Hashnode API response');
      }
      
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      // Display the posts (limit to 3)
      posts.slice(0, 3).forEach(post => {
        if (DEBUG) console.log('Processing Hashnode post:', post.title);
        
        // Convert Hashnode post format to our expected format
        const processedPost = {
          title: post.title || 'Untitled Post',
          link: `${BLOG_BASE_URL}/${post.slug}`,
          pubDate: post.dateAdded || new Date().toISOString(),
          description: post.brief || '',
          content: post.brief || '',
          thumbnail: post.coverImage || '',
          isHashnode: true // Mark this as a Hashnode post
        };
        
        const postElement = createPostElement(processedPost);
        postElement.classList.add('hashnode-post'); // Add Hashnode-specific class
        blogPostsContainer.appendChild(postElement);
      });
      
      console.log('Successfully loaded blog content from Hashnode');
    })
    .catch(error => {
      console.error('Error fetching from Hashnode API:', error);
      
      // Show a brief error message before trying RSS feed
      const tempErrorMessage = document.createElement('div');
      tempErrorMessage.className = 'feed-temp-error hashnode-error';
      tempErrorMessage.innerHTML = '<p>Could not connect to Hashnode blog. Trying alternative methods...</p>';
      
      blogPostsContainer.innerHTML = '';
      blogPostsContainer.appendChild(tempErrorMessage);
      
      // Try RSS feed as a fallback after a short delay
      setTimeout(() => {
        tryRSSFeed();
      }, 1000);
    });
  }
  
  // Try RSS feed as a fallback
  function tryRSSFeed() {
    if (DEBUG) console.log('Trying RSS feed as fallback');
    
    // RSS proxy service to avoid CORS issues
    const RSS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const rssUrl = encodeURIComponent(`${BLOG_BASE_URL}/rss.xml`);
    
    blogPostsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Trying RSS feed...</p></div>';
    
    fetch(`${RSS_PROXY}${rssUrl}`, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`RSS feed response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data || data.status !== 'ok' || !data.items || data.items.length === 0) {
        throw new Error('Invalid or empty RSS feed');
      }
      
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      // Success! Display the posts
      data.items.slice(0, 3).forEach(post => {
        if (DEBUG) console.log('Processing RSS post:', post.title);
        const postElement = createPostElement(post);
        blogPostsContainer.appendChild(postElement);
      });
      
      console.log('Successfully loaded RSS feed');
    })
    .catch(error => {
      console.error('RSS feed method failed:', error);
      
      // Last resort: try direct API proxy
      tryDirectAPIProxy();
    });
  }
  
  // Try direct API proxy as a last resort
  function tryDirectAPIProxy() {
    if (DEBUG) console.log('Trying direct API proxy');
    
    // Using a CORS proxy to fetch the Hashnode blog directly
    const CORS_PROXY = 'https://corsproxy.io/?';
    const PROXY_URL = `${CORS_PROXY}${encodeURIComponent(`${BLOG_BASE_URL}/api/posts`)}`;
    
    blogPostsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Trying alternative method...</p></div>';
    
    fetch(PROXY_URL)
      .then(response => {
        if (!response.ok) throw new Error('API proxy failed');
        return response.json();
      })
      .then(posts => {
        if (!posts || !Array.isArray(posts) || posts.length === 0) {
          throw new Error('No posts found in API proxy response');
        }
        
        // Clear loading spinner
        blogPostsContainer.innerHTML = '';
        
        // Process and display the posts
        posts.slice(0, 3).forEach(post => {
          const processedPost = {
            title: post.title || 'Untitled Post',
            link: post.url || `${BLOG_BASE_URL}/${post.slug || ''}`,
            pubDate: post.date_added || post.date || new Date().toISOString(),
            description: post.brief || post.content_text || '',
            thumbnail: post.cover_image || post.feature_image || ''
          };
          
          const postElement = createPostElement(processedPost);
          blogPostsContainer.appendChild(postElement);
        });
        
        console.log('Successfully loaded blog content via direct API proxy');
      })
      .catch(error => {
        console.error('Direct API proxy method failed:', error);
        // If all methods fail, show our fallback posts
        showFallbackPosts();
      });
  }

  // Start the process - First try Hashnode API
  fetchHashnodeBlogPosts();
  
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
      } else if (post.dateAdded) {
        date = new Date(post.dateAdded);
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
      } else if (post.coverImage && post.coverImage !== '') {
        // Hashnode format
        imageUrl = post.coverImage;
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
    
    // Truncate excerpt if necessary - handle various formats
    let excerpt;
    if (post.excerpt && post.excerpt.rendered) {
      excerpt = truncateText(stripHtml(post.excerpt.rendered), 120);
    } else if (post.brief) {
      // Hashnode format
      excerpt = truncateText(stripHtml(post.brief), 120);
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
    
    // Add Hashnode badge for Hashnode posts
    const hashnodeBadge = post.isHashnode ? 
      `<span class="hashnode-badge"><i class="fas fa-hexagon"></i>Hashnode</span>` : '';
    
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
          ${hashnodeBadge}
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
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  }
  
  // Helper function to strip HTML tags
  function stripHtml(html) {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  }
  
  // Show fallback posts when feed cannot be loaded
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
    
    // Add a note that these are fallback posts
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
