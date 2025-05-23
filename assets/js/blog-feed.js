/**
 * Blog Feed - Fetches and displays latest posts from Hashnode blog
 */
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  
  // Hashnode GraphQL API endpoint
  const HASHNODE_API = 'https://api.hashnode.com/';
  const BLOG_URL = 'codemyinfra.hashnode.dev'; // Your Hashnode blog URL
  
  // GraphQL query to get the latest posts
  const query = `
    query GetUserArticles {
      publication(host: "${BLOG_URL}") {
        title
        posts(first: 3) {
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              dateAdded
            }
          }
        }
      }
    }
  `;

  // Fetch the blog posts
  fetch(HASHNODE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then(response => response.json())
    .then(data => {
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      if (data.errors) {
        showError('Failed to load blog posts. Please check back later.');
        console.error('GraphQL errors:', data.errors);
        return;
      }
      
      const posts = data.data.publication.posts.edges;
      
      if (posts.length === 0) {
        showError('No blog posts found.');
        return;
      }
      
      // Render each post
      posts.forEach(({ node }) => {
        const postElement = createPostElement(node);
        blogPostsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      showError('Failed to load blog posts. Please check back later.');
      console.error('Fetch error:', error);
    });
  
  // Create a post element
  function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'blog-post-card';
    
    // Format date
    const date = new Date(post.dateAdded);
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
    
    // Default image if none is provided
    const imageUrl = post.coverImage?.url || 'https://placehold.co/600x400/2a9df4/e6e6e6?text=Blog+Post';
    
    // Truncate excerpt if necessary
    const excerpt = post.brief ? truncateText(post.brief, 120) : 'No excerpt available...';
    
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
          <a href="https://${BLOG_URL}/${post.slug}" class="blog-post-readmore" target="_blank" rel="noopener">
            Read more
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    
    return postElement;
  }
  
  // Show error message
  function showError(message) {
    blogPostsContainer.innerHTML = `
      <div class="blog-error-message">
        <i class="fas fa-exclamation-circle"></i>
        <p>${message}</p>
      </div>
    `;
  }
  
  // Truncate text to a certain length
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  }
});
