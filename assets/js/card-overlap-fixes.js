/**
 * Tech Stack and Blog Post Card Overlap and Overflow Fixes
 * Enhances the card layouts by adding data attributes and fixing positioning
 */

document.addEventListener('DOMContentLoaded', function() {
  // Wait for all content to load before applying fixes
  window.addEventListener('load', function() {
    fixTechStackOverflow();
    fixBlogPostCentering();
    fixCardOverlapping();
  });
  /**
   * Fix tech stack card layout by enforcing 2x2 grid for up to 4 items
   */
  function fixTechStackOverflow() {
    const techCategories = document.querySelectorAll('.tech-category');
    
    techCategories.forEach(category => {
      // Count tech items in each category
      const techItems = category.querySelectorAll('.tech-item, .tech-icon');
      const itemCount = techItems.length;
      
      // Add data attribute for CSS targeting (supports 1-4 items in 2x2 grid)
      category.setAttribute('data-item-count', itemCount);
      
      // Ensure proper 2x2 grid layout (no scrolling)
      const techIcons = category.querySelector('.tech-icons');
      if (techIcons) {
        // Reset any inline styles that might conflict
        techIcons.style.gridTemplateColumns = '';
        techIcons.style.maxHeight = '';
        techIcons.style.overflowY = '';
        techIcons.style.gap = '';
        
        // Add appropriate classes for styling
        category.classList.remove('tech-category-overflow', 'tech-category-many-items');
        
        if (itemCount <= 4) {
          category.classList.add('tech-category-2x2-grid');
        } else if (itemCount > 4) {
          // For more than 4 items, hide extra items to maintain 2x2 grid
          console.warn(`Category "${category.querySelector('h3')?.textContent}" has ${itemCount} items. Only first 4 will be displayed in 2x2 grid.`);
          
          // Hide items beyond the first 4
          techItems.forEach((item, index) => {
            if (index >= 4) {
              item.style.display = 'none';
            }
          });
          
          // Update the data attribute to reflect displayed items
          category.setAttribute('data-item-count', '4');
          category.classList.add('tech-category-2x2-grid');
        }
      }
    });
    
    console.log(`Fixed overflow for ${techCategories.length} tech categories`);
  }

  /**
   * Fix blog post content centering
   */
  function fixBlogPostCentering() {
    const blogCards = document.querySelectorAll('.blog-post-card');
    
    blogCards.forEach(card => {
      // Ensure all content within cards is centered
      const content = card.querySelector('.post-content, .blog-post-content');
      if (content) {
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.alignItems = 'center';
        content.style.textAlign = 'center';
        content.style.justifyContent = 'space-between';
      }
      
      // Center title specifically
      const title = card.querySelector('.post-title, .blog-post-title');
      if (title) {
        title.style.textAlign = 'center';
        title.style.width = '100%';
      }
      
      // Center excerpt
      const excerpt = card.querySelector('.post-excerpt, .blog-post-excerpt');
      if (excerpt) {
        excerpt.style.textAlign = 'center';
        excerpt.style.width = '100%';
      }
      
      // Center meta information
      const meta = card.querySelector('.post-meta, .blog-post-meta');
      if (meta) {
        meta.style.display = 'flex';
        meta.style.flexDirection = 'column';
        meta.style.alignItems = 'center';
        meta.style.textAlign = 'center';
      }
      
      // Center read more button
      const readMore = card.querySelector('.read-more, .blog-post-readmore');
      if (readMore) {
        readMore.style.alignSelf = 'center';
        readMore.style.margin = '0 auto';
      }
    });
    
    console.log(`Fixed centering for ${blogCards.length} blog post cards`);
  }

  /**
   * Fix card overlapping issues
   */
  function fixCardOverlapping() {
    // Fix tech stack grid overlapping
    const techGrid = document.querySelector('.tech-categories');
    if (techGrid) {
      techGrid.style.display = 'grid';
      techGrid.style.alignItems = 'start';
      techGrid.style.alignContent = 'start';
      techGrid.style.justifyContent = 'center';
      
      // Ensure proper spacing between cards
      const techCards = techGrid.querySelectorAll('.tech-category');
      techCards.forEach((card, index) => {
        card.style.position = 'relative';
        card.style.zIndex = '1';
        card.style.alignSelf = 'start';
        card.style.justifySelf = 'center';
        card.style.marginBottom = '0';
        
        // Add hover z-index for proper stacking
        card.addEventListener('mouseenter', function() {
          this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.zIndex = '1';
        });
      });
    }
    
    // Fix blog post grid overlapping
    const blogGrid = document.querySelector('.posts-container');
    if (blogGrid) {
      blogGrid.style.display = 'grid';
      blogGrid.style.alignItems = 'start';
      blogGrid.style.alignContent = 'start';
      blogGrid.style.justifyContent = 'center';
      blogGrid.style.justifyItems = 'center';
      
      // Ensure proper spacing between blog cards
      const blogCards = blogGrid.querySelectorAll('.blog-post-card');
      blogCards.forEach((card, index) => {
        card.style.position = 'relative';
        card.style.zIndex = '1';
        card.style.alignSelf = 'start';
        card.style.justifySelf = 'center';
        card.style.marginBottom = '0';
        
        // Add hover z-index for proper stacking
        card.addEventListener('mouseenter', function() {
          this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.zIndex = '1';
        });
      });
    }
    
    console.log('Fixed card overlapping issues');
  }

  /**
   * Handle window resize to maintain fixes
   */
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      fixTechStackOverflow();
      fixBlogPostCentering();
      fixCardOverlapping();
    }, 250);
  });

  /**
   * Re-apply fixes when theme changes
   */
  const themeToggle = document.querySelector('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      setTimeout(function() {
        fixTechStackOverflow();
        fixBlogPostCentering();
        fixCardOverlapping();
      }, 400);
    });
  }
});
