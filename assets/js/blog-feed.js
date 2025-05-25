/**
 * Blog Feed - Fetches and displays latest posts from Hashnode blog
 */
document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts-container');
  
  // Hashnode GraphQL API endpoint - updated to use v1 API
  const HASHNODE_API = 'https://gql.hashnode.com/';
  const BLOG_URL = 'arnabdey.dev/blog'; // Your blog URL
  
  // Updated GraphQL query to match Hashnode's current API structure
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
              publishedAt
            }
          }
        }
      }
    }
  `;

  // Fetch the blog posts with updated headers
  fetch(HASHNODE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': window.location.origin
    },
    body: JSON.stringify({ query }),
  })    .then(response => response.json())
    .then(data => {
      // Clear loading spinner
      blogPostsContainer.innerHTML = '';
      
      if (data.errors) {
        console.error('GraphQL errors:', data.errors);
        showFallbackPosts();
        return;
      }
      
      // Check if data has the expected structure
      if (!data.data || !data.data.publication || !data.data.publication.posts || !data.data.publication.posts.edges) {
        console.error('Unexpected API response structure:', data);
        showFallbackPosts();
        return;
      }
      
      const posts = data.data.publication.posts.edges;
      
      if (posts.length === 0) {
        showFallbackPosts();
        return;
      }
      
      // Render each post
      posts.forEach(({ node }) => {
        const postElement = createPostElement(node);
        blogPostsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
      showFallbackPosts();
    });
    // Create a post element
  function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'blog-post-card';
    
    // Format date - updated to use publishedAt instead of dateAdded
    const date = new Date(post.publishedAt);
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
  
  // Show fallback posts when API fails
  function showFallbackPosts() {
    // Fallback posts with static content
    const fallbackPosts = [
      {
        title: "Implementing Infrastructure as Code with Terraform",
        brief: "Learn how to manage your cloud infrastructure using Terraform, a powerful IaC tool that enables consistent, version-controlled deployment across multiple providers.",
        slug: "",
        coverImage: { url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1/blog/placeholder-terraform.png" },
        publishedAt: new Date().toISOString()
      },
      {
        title: "Containerization Best Practices with Docker",
        brief: "Explore advanced Docker techniques to build efficient, secure, and scalable containerized applications for modern cloud environments.",
        slug: "",
        coverImage: { url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1/blog/placeholder-docker.png" },
        publishedAt: new Date().toISOString()
      },
      {
        title: "CI/CD Pipelines for Cloud-Native Applications",
        brief: "A comprehensive guide to building robust CI/CD pipelines using GitHub Actions, enabling automated testing and deployment for your applications.",
        slug: "",
        coverImage: { url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1/blog/placeholder-cicd.png" },
        publishedAt: new Date().toISOString()
      }
    ];
    
    // Render fallback posts
    fallbackPosts.forEach(post => {
      const postElement = createPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
  }
});
