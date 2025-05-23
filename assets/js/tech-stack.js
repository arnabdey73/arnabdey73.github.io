/**
 * Tech Stack Grid Auto Layout Management
 * Improves tech category layout on desktop screens with dark theme
 */
document.addEventListener('DOMContentLoaded', function() {
  // Wait for images and fonts to load
  window.addEventListener('load', function() {
    // Apply dark theme optimization
    applyDarkThemeEffects();
    
    // Only apply grid layout on desktop
    if (window.innerWidth >= 992) {
      optimizeGridLayout();
    }

    // Re-run on resize
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth >= 992) {
          optimizeGridLayout();
        }
      }, 250);
    });
    
    // Re-apply on theme change
    document.querySelector('#theme-toggle')?.addEventListener('click', function() {
      setTimeout(optimizeGridLayout, 400);
    });
  });

  function optimizeGridLayout() {
    const techCategories = document.querySelectorAll('.tech-category');
    
    // Reset to avoid calculation issues
    techCategories.forEach(category => {
      category.style.gridRow = 'auto';
    });
    
    // Count items in each category
    techCategories.forEach(category => {
      const itemCount = category.querySelectorAll('.tech-item').length;
      const minHeight = Math.max(250, 80 + (Math.ceil(itemCount / 3) * 90));
      
      category.style.minHeight = `${minHeight}px`;
      
      // Add a data attribute to use for styling if needed
      category.dataset.itemCount = itemCount;
    });
    
    // Optional: Set equal heights within the same row
    const grid = document.querySelector('.tech-categories');
    if (grid) {
      const computedStyle = window.getComputedStyle(grid);
      const columns = computedStyle.getPropertyValue('grid-template-columns').split(' ').length;
      
      // Process rows
      let currentRow = [];
      let rowIndex = 1;
      
      techCategories.forEach((category, index) => {
        const colIndex = (index % columns) + 1;
        
        category.dataset.position = `${rowIndex}-${colIndex}`;
        currentRow.push(category);
        
        if (colIndex === columns || index === techCategories.length - 1) {
          // Find max height in row
          let maxHeight = 0;
          currentRow.forEach(cat => {
            maxHeight = Math.max(maxHeight, cat.offsetHeight);
          });
          
          // Apply max height to row
          currentRow.forEach(cat => {
            cat.style.minHeight = `${maxHeight}px`;
          });
          
          // Reset for next row
          currentRow = [];
          rowIndex++;
        }
      });
    }
  }
  
  // Apply additional visual effects for dark theme
  function applyDarkThemeEffects() {
    const techSection = document.querySelector('.tech-stack-section');
    const techCategories = document.querySelectorAll('.tech-category');
    
    // Add subtle glow to tech categories
    techCategories.forEach(category => {
      // Add slight hover animation
      category.addEventListener('mouseenter', function() {
        if (window.innerWidth >= 768) {
          const icons = this.querySelectorAll('i');
          icons.forEach(icon => {
            icon.style.textShadow = '0 0 15px rgba(42, 157, 244, 0.7)';
            icon.style.transition = 'text-shadow 0.3s ease';
          });
        }
      });
      
      category.addEventListener('mouseleave', function() {
        const icons = this.querySelectorAll('i');
        icons.forEach(icon => {
          icon.style.textShadow = '';
        });
      });
    });
    
    // Add subtle background effect
    if (techSection) {
      // Optional: Uncomment to add background effect
      // techSection.style.backgroundImage = 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #121212 100%)';
    }
  }
});
