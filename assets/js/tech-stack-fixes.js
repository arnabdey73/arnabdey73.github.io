/**
 * Enhanced Tech Stack Fixes - Address specific issues
 * Fixes: half-moon appearance, skill visibility, title overflow
 */

document.addEventListener('DOMContentLoaded', function() {
  // Apply fixes after DOM is ready
  fixTechStackIssues();
  
  // Also apply on window load to ensure all styles are loaded
  window.addEventListener('load', function() {
    setTimeout(fixTechStackIssues, 100); // Small delay to ensure CSS is fully applied
  });
});

function fixTechStackIssues() {
  console.log('Applying tech stack fixes...');
  
  // Fix 1: Ensure data attributes are properly set
  applyDataAttributes();
  
  // Fix 2: Force skill level visibility
  forceSkillLevelVisibility();
  
  // Fix 3: Fix title overflow issues
  fixTitleOverflow();
  
  // Fix 4: Prevent half-moon appearance
  preventHalfMoonAppearance();
  
  console.log('Tech stack fixes applied successfully');
}

function applyDataAttributes() {
  const techCategories = document.querySelectorAll('.tech-category');
  
  techCategories.forEach(category => {
    const techItems = category.querySelectorAll('.tech-item, .tech-icon');
    const itemCount = techItems.length;
    
    // Set data attribute for CSS targeting
    category.setAttribute('data-item-count', itemCount);
    
    // Add grid class
    category.classList.add('tech-category-2x2-grid');
    
    // Ensure only first 4 items are visible for proper 2x2 grid
    if (itemCount > 4) {
      techItems.forEach((item, index) => {
        if (index >= 4) {
          item.style.display = 'none';
        }
      });
      category.setAttribute('data-item-count', '4');
    }
  });
}

function forceSkillLevelVisibility() {
  const skillLevels = document.querySelectorAll('.skill-level');
  
  skillLevels.forEach(skillLevel => {
    // Ensure skill level container is visible
    skillLevel.style.display = 'flex';
    skillLevel.style.visibility = 'visible';
    skillLevel.style.opacity = '1';
    skillLevel.style.zIndex = '20';
    skillLevel.style.position = 'relative';
    
    // Ensure skill dots are visible
    const skillDots = skillLevel.querySelectorAll('.skill-dot');
    skillDots.forEach(dot => {
      dot.style.display = 'inline-block';
      dot.style.visibility = 'visible';
      dot.style.opacity = '1';
      dot.style.minWidth = '6px';
      dot.style.minHeight = '6px';
      dot.style.flexShrink = '0';
      
      // Add proper background for filled dots
      if (dot.classList.contains('filled')) {
        dot.style.backgroundColor = '#2a9df4';
        dot.style.borderColor = '#1a7abf';
        dot.style.boxShadow = '0 0 4px rgba(42, 157, 244, 0.6)';
      } else {
        dot.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        dot.style.borderColor = 'rgba(42, 157, 244, 0.4)';
      }
    });
  });
}

function fixTitleOverflow() {
  const categoryTitles = document.querySelectorAll('.tech-category h3');
  
  categoryTitles.forEach(title => {
    // Ensure proper text wrapping
    title.style.whiteSpace = 'normal';
    title.style.wordWrap = 'break-word';
    title.style.overflowWrap = 'break-word';
    title.style.textAlign = 'center';
    title.style.padding = '0 0.5rem';
    title.style.boxSizing = 'border-box';
    title.style.maxWidth = '100%';
    title.style.lineHeight = '1.3';
    
    // Adjust font size for long titles
    const titleText = title.textContent.trim();
    if (titleText.length > 12) {
      title.style.fontSize = '1.1rem';
    }
    if (titleText.length > 16) {
      title.style.fontSize = '1rem';
    }
  });
}

function preventHalfMoonAppearance() {
  const techItems = document.querySelectorAll('.tech-item, .tech-icon');
  
  techItems.forEach(item => {
    // Force proper layout
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'center';
    item.style.textAlign = 'center';
    item.style.borderRadius = '8px';
    item.style.overflow = 'visible';
    item.style.position = 'relative';
    item.style.background = 'transparent';
    
    // Fix icon rendering
    const icon = item.querySelector('i');
    if (icon) {
      icon.style.borderRadius = '0';
      icon.style.overflow = 'visible';
      icon.style.display = 'block';
      icon.style.lineHeight = '1';
      icon.style.textAlign = 'center';
    }
    
    // Fix text rendering
    const span = item.querySelector('span');
    if (span) {
      span.style.display = 'block';
      span.style.textAlign = 'center';
      span.style.whiteSpace = 'nowrap';
      span.style.overflow = 'hidden';
      span.style.textOverflow = 'ellipsis';
      span.style.maxWidth = '100%';
    }
  });
}

// Debug function to check current state
function debugTechStack() {
  console.log('=== Tech Stack Debug Info ===');
  
  const categories = document.querySelectorAll('.tech-category');
  categories.forEach((category, index) => {
    const title = category.querySelector('h3')?.textContent || 'Unknown';
    const itemCount = category.querySelectorAll('.tech-item, .tech-icon').length;
    const dataCount = category.getAttribute('data-item-count');
    const skillLevels = category.querySelectorAll('.skill-level').length;
    const visibleSkillDots = category.querySelectorAll('.skill-dot:not([style*="display: none"])').length;
    
    console.log(`Category ${index + 1}: ${title}`);
    console.log(`  - Items: ${itemCount}, Data attribute: ${dataCount}`);
    console.log(`  - Skill levels: ${skillLevels}, Visible dots: ${visibleSkillDots}`);
  });
}

// Expose debug function globally
window.debugTechStack = debugTechStack;
