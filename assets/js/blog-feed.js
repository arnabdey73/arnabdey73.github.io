/**
 * Blog Feed - Fetches and displays latest posts from the blog with performance optimizations
 */
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  
  // Enable for debugging info in console
  const DEBUG = true;
  
  // Blog URL - Set to your Hashnode blog URL (custom domain)
  const BLOG_URL = 'arnabdey73.github.io/blog';
  // For linking back to blog site
  const BLOG_BASE_URL = 'https://arnabdey73.github.io/blog';
  
  // Function to fetch blog posts from Hashnode
  function fetchHashnodeBlogPosts() {
    if (DEBUG) console.log('Fetching blog posts from Hashnode API');
    
    // Show loading spinner with improved accessibility
    blogPostsContainer.innerHTML = '<div class="loading-spinner loading-hashnode" role="status" aria-live="polite"><div class="spinner"></div><p>Loading latest posts...</p></div>';
    
    // The GraphQL query to get blog posts from Hashnode using the updated API structure
    // This query should work with the current Hashnode API as of 2023
    const graphqlQuery = {
      query: `
        query {
          publication(host: "arnabdey73.github.io/blog") {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  canonical_url
                  publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `
    };
    
    // Hashnode's GraphQL API endpoint (updated to the newer version)
    const HASHNODE_API_URL = 'https://gql.hashnode.com';
    
    // Make request to Hashnode GraphQL API with proper headers
    if (DEBUG) {
      console.log('Sending request to Hashnode API:', HASHNODE_API_URL);
      console.log('Query:', JSON.stringify(graphqlQuery, null, 2));
    }
    
    fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Portfolio Website/1.0',
        'Accept': 'application/json',
        'Origin': window.location.origin,
        'Referer': window.location.href
      },
      body: JSON.stringify(graphqlQuery),
      credentials: 'omit' // Don't send cookies for cross-origin requests
    })
    .then(response => {
      if (DEBUG) console.log('Hashnode API response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Hashnode API response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (DEBUG) {
        console.log('Hashnode API response:', data);
      }
      
      // Check if we got valid data with thorough validation
      if (!data) {
        throw new Error('Empty response from Hashnode API');
      }
      
      if (data.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
      }
      
      if (!data.data || !data.data.publication) {
        throw new Error('Publication not found in Hashnode API response');
      }
      
      if (!data.data.publication.posts || !data.data.publication.posts.edges) {
        throw new Error('Posts not found in publication data');
      }
      
      const postEdges = data.data.publication.posts.edges;
      
      // Check if there are any posts
      if (!postEdges || postEdges.length === 0) {
        throw new Error('No posts found in Hashnode API response');
      }
      
      if (DEBUG) console.log(`Found ${postEdges.length} posts in Hashnode API response`);
      
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      // Display the posts (up to 3)
      postEdges.slice(0, 3).forEach(edge => {
        const post = edge.node;
        if (!post) return;
        
        if (DEBUG) console.log('Processing Hashnode post:', post.title);
        
        // Extract the publication date - use publishedAt if available, fall back to dateAdded
        const pubDate = post.publishedAt || post.dateAdded || new Date().toISOString();
        
        // Convert Hashnode post format to our expected format
        const processedPost = {
          title: post.title || 'Untitled Post',
          link: `${BLOG_BASE_URL}/${post.slug}`,
          pubDate: pubDate,
          description: post.brief || '',
          content: post.contentMarkdown || post.brief || '',
          thumbnail: post.coverImage?.url || '',
          isHashnode: true // Mark this as a Hashnode post
        };
        
        if (DEBUG) console.log('Processed post data:', processedPost);
        
        const postElement = createPostElement(processedPost);
        postElement.classList.add('hashnode-post'); // Add Hashnode-specific class
        blogPostsContainer.appendChild(postElement);
      });
      
      // Add a success indicator
      const successElement = document.createElement('div');
      successElement.className = 'hashnode-success-indicator';
      successElement.innerHTML = '<p><small><i class="fas fa-check-circle"></i> Latest posts from Hashnode</small></p>';
      successElement.style.gridColumn = '1 / -1';
      successElement.style.textAlign = 'center';
      successElement.style.fontSize = '0.8rem';
      successElement.style.opacity = '0.7';
      blogPostsContainer.appendChild(successElement);
      
      console.log('Successfully loaded blog content from Hashnode');
    })
    .catch(error => {
      console.error('Error fetching from Hashnode API:', error);
      
      // Show a brief error message before trying RSS feed
      const tempErrorMessage = document.createElement('div');
      tempErrorMessage.className = 'feed-temp-error hashnode-error';
      tempErrorMessage.innerHTML = `
        <p>
          <i class="fas fa-exclamation-circle"></i>
          Could not connect to Hashnode blog. Trying alternative methods...
        </p>
        <p class="error-details">${error.message}</p>
      `;
      
      blogPostsContainer.innerHTML = '';
      blogPostsContainer.appendChild(tempErrorMessage);
      
      if (DEBUG) {
        console.log('Hashnode API failed, details:', error.message);
      }
      
      // Try RSS feed as a fallback after a short delay
      setTimeout(() => {
        tryRSSFeed();
      }, 1500);
    });
  }
  
  // Try RSS feed as a fallback
  function tryRSSFeed() {
    if (DEBUG) console.log('Trying RSS feed as fallback');
    
    // RSS proxy service to avoid CORS issues
    const RSS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';
    // Hashnode's RSS feed URL pattern - make sure we're using the correct URL
    const rssUrl = encodeURIComponent(`https://arnabdey73.github.io/blog/rss.xml`);
    
    blogPostsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Trying RSS feed...</p></div>';
    
    if (DEBUG) console.log(`Fetching RSS feed from: ${RSS_PROXY}${rssUrl}`);
    
    fetch(`${RSS_PROXY}${rssUrl}`, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Portfolio Website/1.0'
      }
    })
    .then(response => {
      if (DEBUG) console.log('RSS feed response status:', response.status);
      if (!response.ok) {
        throw new Error(`RSS feed response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (DEBUG) console.log('RSS feed data received:', data);
      
      if (!data || data.status !== 'ok' || !data.items || data.items.length === 0) {
        throw new Error('Invalid or empty RSS feed');
      }
      
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      // Success! Display the posts
      data.items.slice(0, 3).forEach(post => {
        if (DEBUG) console.log('Processing RSS post:', post.title);
        const postElement = createPostElement(post);
        postElement.classList.add('rss-post'); // Add RSS-specific class
        blogPostsContainer.appendChild(postElement);
      });
      
      console.log('Successfully loaded RSS feed');
    })
    .catch(error => {
      console.error('RSS feed method failed:', error);
      
      // Show detailed error in console for debugging
      if (DEBUG) console.log('RSS feed error details:', error.message);
      
      // Last resort: try direct API proxy
      tryDirectAPIProxy();
    });
  }
  
  // Try direct API proxy as a last resort
  function tryDirectAPIProxy() {
    if (DEBUG) console.log('Trying direct API proxy');
    
    // Using a CORS proxy to fetch the Hashnode blog directly
    const CORS_PROXY = 'https://corsproxy.io/?';
    
    // Try to use the Hashnode API directly with the proxy
    // This URL should work with the newer Hashnode blogs
    const PROXY_URL = `${CORS_PROXY}${encodeURIComponent(`${BLOG_BASE_URL}/api/stories`)}`;
    
    if (DEBUG) console.log(`Using blog base URL: ${BLOG_BASE_URL}`);
    
    if (DEBUG) console.log(`Fetching via CORS proxy: ${PROXY_URL}`);
    
    blogPostsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Trying alternative method...</p></div>';
    
    fetch(PROXY_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Portfolio Website/1.0'
      }
    })
      .then(response => {
        if (DEBUG) console.log('Direct API proxy response status:', response.status);
        if (!response.ok) throw new Error(`API proxy failed with status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (DEBUG) console.log('Direct API proxy response data:', data);
        
        let posts = [];
        // Handle different response formats that Hashnode might return
        if (data && data.data && Array.isArray(data.data)) {
          posts = data.data;
        } else if (data && Array.isArray(data)) {
          posts = data;
        } else if (data && data.stories && Array.isArray(data.stories)) {
          posts = data.stories;
        } else {
          throw new Error('Unexpected API response format');
        }
        
        if (!posts || posts.length === 0) {
          throw new Error('No posts found in API proxy response');
        }
        
        // Clear loading spinner
        blogPostsContainer.innerHTML = '';
        
        // Process and display the posts
        posts.slice(0, 3).forEach(post => {
          if (DEBUG) console.log('Processing API proxy post:', post.title);
          
          const processedPost = {
            title: post.title || 'Untitled Post',
            link: post.canonical_url || post.url || (post.slug ? `${BLOG_BASE_URL}/${post.slug}` : BLOG_BASE_URL),
            pubDate: post.publishedAt || post.dateAdded || post.date_added || post.date || new Date().toISOString(),
            description: post.brief || post.content_text || post.excerpt || '',
            thumbnail: post.coverImage?.url || post.cover_image || post.feature_image || '',
            isProxy: true // Mark this as coming from the proxy
          };
          
          const postElement = createPostElement(processedPost);
          postElement.classList.add('proxy-post'); // Add proxy-specific class
          blogPostsContainer.appendChild(postElement);
        });
        
        console.log('Successfully loaded blog content via direct API proxy');
        
        // Add a note that these came from the API proxy
        const noteElement = document.createElement('div');
        noteElement.className = 'blog-note proxy-note';
        noteElement.innerHTML = '<p><small><i class="fas fa-sync"></i> Posts loaded via alternative method</small></p>';
        noteElement.style.gridColumn = '1 / -1';
        noteElement.style.textAlign = 'center';
        blogPostsContainer.appendChild(noteElement);
      })
      .catch(error => {
        console.error('Direct API proxy method failed:', error);
        if (DEBUG) console.log('API proxy error details:', error.message);
        
        // Try one last method or show error with fallback option
        showErrorWithFallbackOption();
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
        
        // Handle Hashnode-specific CDN URLs
        if (imageUrl.includes('cdn.hashnode.com') && !imageUrl.includes('?')) {
          // Add auto-optimization parameters for Hashnode CDN
          imageUrl += '?auto=compress,format&w=800&h=420';
        }
      } else if (post.coverImage) {
        // Handle different coverImage formats
        if (typeof post.coverImage === 'object' && post.coverImage.url) {
          // New Hashnode format with coverImage.url
          imageUrl = post.coverImage.url;
        } else if (typeof post.coverImage === 'string') {
          // Old format with direct string
          imageUrl = post.coverImage;
        }
        
        // Handle Hashnode-specific CDN URLs
        if (imageUrl.includes('cdn.hashnode.com') && !imageUrl.includes('?')) {
          // Add auto-optimization parameters for Hashnode CDN
          imageUrl += '?auto=compress,format&w=800&h=420';
        }
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
      
      // Log the extracted image URL for debugging
      if (DEBUG) console.log('Extracted image URL:', imageUrl);
    } catch (e) {
      console.error('Error extracting image:', e);
      if (DEBUG) console.log('Image extraction error details:', e.message);
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
     // Get post URL - prioritize canonical URL for Hashnode posts
    const postUrl = post.canonical_url || post.link || post.url || (post.slug ? `${BLOG_BASE_URL}/${post.slug}` : BLOG_BASE_URL);

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
  
  // Show an error with a fallback option
  function showErrorWithFallbackOption() {
    if (DEBUG) console.log('All API methods failed, showing error with fallback option');
    
    // Clear any loading indicators
    blogPostsContainer.innerHTML = '';
    
    // Create an error message with options
    const errorElement = document.createElement('div');
    errorElement.className = 'blog-error-message';
    errorElement.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <p>Unable to load blog posts at this moment.</p>
      <div class="error-options">
        <button class="retry-button" onclick="location.reload()">
          <i class="fas fa-sync"></i> Retry
        </button>
        <button class="fallback-button" id="show-fallback-posts">
          <i class="fas fa-newspaper"></i> Show Featured Posts
        </button>
        <a href="${BLOG_BASE_URL}" target="_blank" rel="noopener" class="visit-blog-button">
          <i class="fas fa-external-link-alt"></i> Visit Blog
        </a>
      </div>
    `;
    
    blogPostsContainer.appendChild(errorElement);
    
    // Add event listener for fallback button
    document.getElementById('show-fallback-posts').addEventListener('click', function() {
      showFallbackPosts();
    });
  }

  // Show fallback posts when feed cannot be loaded
  function showFallbackPosts() {
    if (DEBUG) console.log('Showing static featured posts as fallback');
    
    // Clear any previous content
    blogPostsContainer.innerHTML = '';
    
    // Reset display to grid (in case it was changed)
    blogPostsContainer.style.display = 'grid';
    
    // Featured blog posts with thumbnails - create these based on actual blog content
    // but serve them as static content when API fails
    const recentPosts = [
      {
        title: "Infrastructure as Code: Using Pulumi with Python for Azure Deployments",
        description: "In this post, I share my experience using Pulumi with Python to automate Azure infrastructure deployments. I compare it with traditional tools like Terraform and demonstrate how Python's flexibility can streamline complex cloud resource management and improve developer experience.",
        link: `${BLOG_BASE_URL}/iac-pulumi-python-azure`,
        thumbnail: "", // Special CSS class instead of image URL
        cssClass: "pulumi-python",
        pubDate: "2023-10-15T10:15:00Z"
      },
      {
        title: "Kubernetes Monitoring: Setting Up Prometheus and Grafana on AKS",
        description: "A detailed walkthrough of implementing a robust monitoring solution for Azure Kubernetes Service using Prometheus and Grafana. I cover deployment via Helm charts, custom metric configurations, and creating insightful dashboards for real-time cluster visibility.",
        link: `${BLOG_BASE_URL}/kubernetes-monitoring-prometheus-grafana`,
        thumbnail: "", // Special CSS class instead of image URL
        cssClass: "prometheus-grafana",
        pubDate: "2023-09-22T08:45:00Z"
      },
      {
        title: "Building Resilient Node.js Applications with Circuit Breakers",
        description: "Exploring how to implement the circuit breaker pattern in Node.js applications to improve resilience, prevent cascading failures, and ensure graceful degradation when external services fail.",
        link: `${BLOG_BASE_URL}/resilient-nodejs-circuit-breakers`,
        thumbnail: "",
        cssClass: "nodejs-circuit-breaker",
        pubDate: "2023-08-10T14:30:00Z"
      }
    ];
    
    // Create and append blog post elements
    recentPosts.forEach(post => {
      const postElement = createPostElement(post);
      postElement.classList.add('fallback-post'); // Add fallback-specific class
      blogPostsContainer.appendChild(postElement);
    });
    
    // Add a clear note that these are static fallback posts with refresh option
    const noteElement = document.createElement('div');
    noteElement.className = 'blog-note fallback-note';
    noteElement.innerHTML = `
      <p>
        <i class="fas fa-info-circle"></i> 
        <span>Showing featured posts as fallback.</span>
        <button class="tiny-retry-button" onclick="location.reload()">
          <i class="fas fa-sync"></i> Try loading latest posts
        </button>
        <a href="${BLOG_BASE_URL}" target="_blank" rel="noopener" class="tiny-blog-link">
          <i class="fas fa-external-link-alt"></i> Visit blog site
        </a>
      </p>
    `;
    noteElement.style.gridColumn = '1 / -1';
    noteElement.style.textAlign = 'center';
    noteElement.style.marginTop = '20px';
    
    blogPostsContainer.appendChild(noteElement);
  }
});
