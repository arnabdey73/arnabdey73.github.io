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
    
    // Reset styles for all tech categories
    techCategories.forEach(category => {
      category.style.gridRow = 'auto';
      category.style.minHeight = '';
      category.style.height = '';
    });
    
    // Add data attribute for item count (for potential styling)
    techCategories.forEach(category => {
      const itemCount = category.querySelectorAll('.tech-item').length;
      category.dataset.itemCount = itemCount;
    });

    // For desktop view, we want to maintain the square aspect ratio
    // instead of trying to calculate heights manually
    const grid = document.querySelector('.tech-categories');
    if (grid) {
      const computedStyle = window.getComputedStyle(grid);
      const columns = computedStyle.getPropertyValue('grid-template-columns').split(' ').length;
      
      // Just assign position data attributes for potential styling
      let rowIndex = 1;
      
      techCategories.forEach((category, index) => {
        const colIndex = (index % columns) + 1;
        category.dataset.position = `${rowIndex}-${colIndex}`;
        
        if (colIndex === columns || index === techCategories.length - 1) {
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
