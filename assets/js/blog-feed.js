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
    
    // Common RSS feed paths to try in order
    let possiblePaths = [
      '/feed',          // WordPress, many blog platforms
      '/rss',           // Common RSS endpoint
      '/feed.xml',      // Jekyll, Hugo, many static sites
      '/rss.xml',       // Common RSS file name
      '/index.xml',     // Hugo and some static site generators
      '/atom.xml',      // Atom feeds
      '/blog/feed',     // Subdirectory feeds
      '/blog/rss',
      '/rss/index.xml',
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
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (DEBUG) console.log(`RSS feed response for ${path}:`, data);
          
          if (data.status !== 'ok' || !data.items || data.items.length === 0) {
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
            tempErrorMessage.innerHTML = '<p>Could not connect to blog feed. Showing placeholder content...</p>';
            
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
  
  // Try an alternative CORS proxy as a last resort
  function tryAlternativeProxy() {
    if (DEBUG) console.log('Trying alternative proxy method');
    
    // Try a few commonly used CORS proxies
    const ALTERNATIVE_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const ALTERNATIVE_URL = `${ALTERNATIVE_PROXY}${BLOG_BASE_URL}/feed`;
    
    blogPostsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div><p>Trying alternative method...</p></div>';
    
    fetch(ALTERNATIVE_URL, {
      headers: {
        'Origin': window.location.origin,
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Alternative proxy failed');
        }
        return response.text();
      })
      .then(xml => {
        if (DEBUG) console.log('Got XML response from alternative proxy');
        
        // Try to parse the XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        
        if (!items || items.length === 0) {
          throw new Error('No items found in XML');
        }
        
        // Create array of posts from XML
        const posts = Array.from(items).slice(0, 3).map(item => {
          return {
            title: item.querySelector('title')?.textContent || 'Untitled Post',
            link: item.querySelector('link')?.textContent || BLOG_BASE_URL,
            pubDate: item.querySelector('pubDate')?.textContent || new Date().toISOString(),
            description: item.querySelector('description')?.textContent || '',
            content: item.querySelector('content\\:encoded')?.textContent || item.querySelector('description')?.textContent || ''
          };
        });
        
        // Clear loading spinner
        blogPostsContainer.innerHTML = '';
        
        // Display posts
        posts.forEach(post => {
          const postElement = createPostElement(post);
          blogPostsContainer.appendChild(postElement);
        });
        
        console.log('Successfully loaded blog content using alternative proxy');
      })
      .catch(error => {
        console.error('Alternative proxy method failed:', error);
        showFallbackPosts();
      });
  }

  // Start the process
  tryFetchWithVariousRSSFormats();
    // Create a post element
  function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'blog-post-card';
    
    // Format date
    const date = new Date(post.pubDate || post.published || post.date || new Date());
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    
    // Extract thumbnail/featured image
    let imageUrl = 'https://placehold.co/600x400/2a9df4/e6e6e6?text=Blog+Post';
    
    // Try to extract an image from content if available
    if (post.thumbnail) {
      imageUrl = post.thumbnail;
    } else if (post.content) {
      const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && imgMatch[1]) {
        imageUrl = imgMatch[1];
      }
    }
    
    // Truncate excerpt if necessary
    const excerpt = post.description || post.summary || post.content 
      ? truncateText(stripHtml(post.description || post.summary || post.content), 120) 
      : 'No excerpt available...';
    
    postElement.innerHTML = `
      <img class="blog-post-image" src="${imageUrl}" alt="${post.title}" loading="lazy">
      <div class="blog-post-content">
        <h3 class="blog-post-title">${post.title}</h3>
        <p class="blog-post-excerpt">${excerpt}</p>
        <div class="blog-post-meta">
          <span class="blog-post-date">
            <i class="far fa-calendar-alt"></i>
            ${formattedDate}
          </span>
          <a href="${post.link || post.url}" class="blog-post-readmore" target="_blank" rel="noopener">
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
  
  // Show fallback posts when API fails
  function showFallbackPosts() {
    if (DEBUG) console.log('Showing fallback posts');
    
    // Current date formatting for more realistic dates
    const today = new Date();
    const twoWeeksAgo = new Date(today);
    twoWeeksAgo.setDate(today.getDate() - 14);
    
    const oneMonthAgo = new Date(today);
    oneMonthAgo.setDate(today.getDate() - 30);
    
    // Fallback posts with static content - using more specific topics
    const fallbackPosts = [
      {
        title: "Securing Azure Applications with Entra ID",
        description: "A deep dive into Microsoft Entra ID (formerly Azure AD) and how to implement robust authentication and authorization for your cloud-native applications.",
        link: "https://blog.arnabdey.dev/securing-azure-applications-with-entra-id",
        thumbnail: "https://placehold.co/600x400/2a9df4/e6e6e6?text=Entra+ID",
        pubDate: today.toISOString()
      },
      {
        title: "Infrastructure as Code: Terraform vs. Bicep",
        description: "Comparing Terraform and Azure Bicep for managing cloud infrastructure, with practical examples and performance benchmarks for enterprise deployments.",
        link: "https://blog.arnabdey.dev/terraform-vs-bicep-comparison",
        thumbnail: "https://placehold.co/600x400/2a9df4/e6e6e6?text=IaC",
        pubDate: twoWeeksAgo.toISOString()
      },
      {
        title: "Monitoring Containerized Applications with Prometheus",
        description: "Learn how to implement comprehensive monitoring for your Docker and Kubernetes environments using Prometheus, Grafana, and Azure Monitor.",
        link: "https://blog.arnabdey.dev/monitoring-containers-prometheus",
        thumbnail: "https://placehold.co/600x400/2a9df4/e6e6e6?text=Monitoring",
        pubDate: oneMonthAgo.toISOString()
      }
    ];
    
    // Render fallback posts
    fallbackPosts.forEach(post => {
      const postElement = createPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
  }
});
