/**
 * Blog Feed - Fetches and displays latest posts from the blog
 */
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  
  // Blog URL and RSS proxy service to avoid CORS issues
  const BLOG_URL = 'blog.arnabdey.dev';
  const BLOG_BASE_URL = 'https://blog.arnabdey.dev';
  const RSS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';
  
  // Try to fetch blog posts using RSS feed with a proxy to avoid CORS issues
  // You may need to replace BLOG_RSS_URL with your actual RSS feed URL
  const BLOG_RSS_URL = encodeURIComponent(`${BLOG_BASE_URL}/rss.xml`); 
  
  fetch(`${RSS_PROXY}${BLOG_RSS_URL}`)
    .then(response => response.json())
    .then(data => {
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      if (data.status !== 'ok') {
        console.error('RSS feed error:', data);
        showFallbackPosts();
        return;
      }
      
      const posts = data.items;
      
      if (!posts || posts.length === 0) {
        showFallbackPosts();
        return;
      }
      
      // Only show the first 3 posts
      posts.slice(0, 3).forEach(post => {
        const postElement = createPostElement(post);
        blogPostsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
      
      // Alternative approach: try to fetch using a JSONP approach
      fetchBlogPostsAlternative();
    });
    
  // Alternative approach to fetch blog posts if the RSS method fails
  function fetchBlogPostsAlternative() {
    console.log("Trying alternative method to fetch blog posts...");
    // Simply show fallback posts for now
    showFallbackPosts();
  }
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
    // Fallback posts with static content
    const fallbackPosts = [
      {
        title: "Implementing Infrastructure as Code with Terraform",
        description: "Learn how to manage your cloud infrastructure using Terraform, a powerful IaC tool that enables consistent, version-controlled deployment across multiple providers.",
        link: "https://blog.arnabdey.dev/terraform-iac",
        thumbnail: "https://placehold.co/600x400/2a9df4/e6e6e6?text=Terraform",
        pubDate: new Date().toISOString()
      },
      {
        title: "Containerization Best Practices with Docker",
        description: "Explore advanced Docker techniques to build efficient, secure, and scalable containerized applications for modern cloud environments.",
        link: "https://blog.arnabdey.dev/docker-best-practices",
        thumbnail: "https://placehold.co/600x400/2a9df4/e6e6e6?text=Docker",
        pubDate: new Date().toISOString()
      },
      {
        title: "CI/CD Pipelines for Cloud-Native Applications",
        description: "A comprehensive guide to building robust CI/CD pipelines using GitHub Actions, enabling automated testing and deployment for your applications.",
        link: "https://blog.arnabdey.dev/cicd-pipelines",
        thumbnail: "https://placehold.co/600x400/2a9df4/e6e6e6?text=CI/CD",
        pubDate: new Date().toISOString()
      }
    ];
    
    // Render fallback posts
    fallbackPosts.forEach(post => {
      const postElement = createPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
  }
});
