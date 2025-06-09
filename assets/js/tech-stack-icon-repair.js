/**
 * Tech Stack Icon Repair System
 * Comprehensive fix for broken tech icons and layout issues
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('🔧 Tech Stack Icon Repair System starting...');
  
  // Apply fixes immediately
  repairTechStackIcons();
  
  // Re-apply fixes after a delay to ensure CSS is fully loaded
  setTimeout(() => {
    repairTechStackIcons();
    console.log('✅ Tech Stack Icon Repair System complete');
  }, 500);
});

function repairTechStackIcons() {
  // 1. Fix broken icon layouts and positioning
  fixIconLayouts();
  
  // 2. Repair icon styling and sizing
  repairIconStyling();
  
  // 3. Fix skill level dots visibility
  fixSkillLevelDots();
  
  // 4. Ensure proper grid behavior
  enforceGridBehavior();
  
  // 5. Fix color and theme issues
  fixIconColors();
}

function fixIconLayouts() {
  console.log('🔧 Fixing icon layouts...');
  
  const techItems = document.querySelectorAll('.tech-item, .tech-icon');
  
  techItems.forEach(item => {
    // Reset any problematic styles
    item.style.transform = 'none';
    item.style.overflow = 'visible';
    item.style.position = 'relative';
    item.style.zIndex = '1';
    
    // Ensure proper flex layout
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'center';
    item.style.textAlign = 'center';
    
    // Fix dimensions
    item.style.width = '100%';
    item.style.maxWidth = '120px';
    item.style.height = '70px';
    item.style.padding = '0.5rem';
    item.style.boxSizing = 'border-box';
    
    // Remove any background that might cause issues
    item.style.background = 'transparent';
    item.style.border = 'none';
    item.style.borderRadius = '8px';
  });
}

function repairIconStyling() {
  console.log('🔧 Repairing icon styling...');
  
  // Fix Font Awesome icons
  const fontIcons = document.querySelectorAll('.tech-item i, .tech-icon i');
  fontIcons.forEach(icon => {
    // Reset font icon styles
    icon.style.width = '40px';
    icon.style.height = '40px';
    icon.style.fontSize = '40px';
    icon.style.lineHeight = '1';
    icon.style.display = 'block';
    icon.style.textAlign = 'center';
    icon.style.marginBottom = '0.5rem';
    icon.style.color = 'inherit';
    
    // Remove any problematic transforms
    icon.style.transform = 'none';
    icon.style.borderRadius = '0';
    icon.style.background = 'transparent';
    icon.style.border = 'none';
    
    // Ensure proper font family
    if (icon.classList.contains('fab') || icon.classList.contains('fas')) {
      icon.style.fontFamily = '"Font Awesome 5 Brands", "Font Awesome 5 Free"';
    }
  });
  
  // Fix image icons
  const imageIcons = document.querySelectorAll('.tech-item img, .tech-icon img');
  imageIcons.forEach(img => {
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.objectFit = 'contain';
    img.style.marginBottom = '0.5rem';
    img.style.display = 'block';
    img.style.borderRadius = '0';
  });
  
  // Fix text labels
  const textLabels = document.querySelectorAll('.tech-item span, .tech-icon span, .tech-item .icon-text');
  textLabels.forEach(text => {
    text.style.fontSize = '0.8rem';
    text.style.lineHeight = '1.2';
    text.style.fontWeight = '500';
    text.style.textAlign = 'center';
    text.style.color = 'inherit';
    text.style.margin = '0.2rem 0';
    text.style.maxWidth = '100%';
    text.style.overflow = 'hidden';
    text.style.textOverflow = 'ellipsis';
    text.style.whiteSpace = 'nowrap';
  });
}

function fixSkillLevelDots() {
  console.log('🔧 Fixing skill level dots...');
  
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(skillLevel => {
    skillLevel.style.display = 'flex';
    skillLevel.style.justifyContent = 'center';
    skillLevel.style.alignItems = 'center';
    skillLevel.style.gap = '3px';
    skillLevel.style.marginTop = '0.2rem';
    skillLevel.style.width = '100%';
    skillLevel.style.height = 'auto';
    skillLevel.style.minHeight = '8px';
    skillLevel.style.zIndex = '20';
    skillLevel.style.position = 'relative';
    
    const dots = skillLevel.querySelectorAll('.skill-dot');
    dots.forEach((dot, index) => {
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.borderRadius = '50%';
      dot.style.display = 'inline-block';
      dot.style.flexShrink = '0';
      dot.style.transition = 'all 0.3s ease';
      
      if (dot.classList.contains('filled')) {
        dot.style.backgroundColor = '#2a9df4';
        dot.style.borderColor = '#1a7abf';
        dot.style.boxShadow = '0 0 4px rgba(42, 157, 244, 0.6)';
      } else {
        dot.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        dot.style.border = '1px solid rgba(42, 157, 244, 0.4)';
        dot.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.2)';
      }
    });
  });
}

function enforceGridBehavior() {
  console.log('🔧 Enforcing grid behavior...');
  
  const techCategories = document.querySelectorAll('.tech-category');
  techCategories.forEach(category => {
    const techIcons = category.querySelector('.tech-icons');
    const techItems = category.querySelectorAll('.tech-item, .tech-icon');
    const itemCount = techItems.length;
    
    if (techIcons) {
      // Apply data attribute
      category.setAttribute('data-item-count', itemCount);
      
      // Configure grid based on item count
      techIcons.style.display = 'grid';
      techIcons.style.gap = '1rem';
      techIcons.style.justifyContent = 'center';
      techIcons.style.alignItems = 'center';
      techIcons.style.justifyItems = 'center';
      techIcons.style.width = '100%';
      techIcons.style.maxWidth = '280px';
      techIcons.style.margin = '0 auto';
      techIcons.style.overflow = 'hidden';
      techIcons.style.padding = '1rem 0.5rem';
      techIcons.style.boxSizing = 'border-box';
      
      if (itemCount === 1) {
        techIcons.style.gridTemplateColumns = '1fr';
        techIcons.style.gridTemplateRows = '1fr';
        techIcons.style.height = '80px';
      } else if (itemCount === 2) {
        techIcons.style.gridTemplateColumns = 'repeat(2, 1fr)';
        techIcons.style.gridTemplateRows = '1fr';
        techIcons.style.height = '80px';
      } else {
        techIcons.style.gridTemplateColumns = 'repeat(2, 1fr)';
        techIcons.style.gridTemplateRows = 'repeat(2, 1fr)';
        techIcons.style.height = '160px';
      }
      
      // Hide items beyond 4th for 2x2 grid
      techItems.forEach((item, index) => {
        if (index >= 4) {
          item.style.display = 'none';
        } else {
          item.style.display = 'flex';
        }
      });
    }
  });
}

function fixIconColors() {
  console.log('🔧 Fixing icon colors...');
  
  // Ensure icons inherit proper colors
  const allIcons = document.querySelectorAll('.tech-item i, .tech-icon i, .tech-item img, .tech-icon img');
  allIcons.forEach(icon => {
    // Remove any forced colors that might interfere
    icon.style.removeProperty('filter');
    icon.style.removeProperty('opacity');
    
    // Ensure proper color inheritance for font icons
    if (icon.tagName === 'I') {
      icon.style.color = 'inherit';
    }
  });
  
  // Fix specific icon issues
  fixSpecificIcons();
}

function fixSpecificIcons() {
  // Fix specific problematic icons that might appear broken
  
  // Terraform icon fix
  const terraformIcons = document.querySelectorAll('[class*="terraform"]');
  terraformIcons.forEach(icon => {
    icon.style.display = 'block';
    icon.style.width = '40px';
    icon.style.height = '40px';
  });
  
  // AWS icon fix
  const awsIcons = document.querySelectorAll('.fa-aws');
  awsIcons.forEach(icon => {
    icon.style.color = '#FF9900';
  });
  
  // Azure icon fix
  const azureIcons = document.querySelectorAll('.fa-microsoft');
  azureIcons.forEach(icon => {
    icon.style.color = '#0078D4';
  });
  
  // Google Cloud icon fix
  const googleIcons = document.querySelectorAll('.fa-google');
  googleIcons.forEach(icon => {
    icon.style.color = '#4285F4';
  });
  
  // Docker icon fix
  const dockerIcons = document.querySelectorAll('.fa-docker');
  dockerIcons.forEach(icon => {
    icon.style.color = '#2496ED';
  });
  
  // GitHub icon fix
  const githubIcons = document.querySelectorAll('.fa-github');
  githubIcons.forEach(icon => {
    icon.style.color = '#333';
  });
  
  // Python icon fix
  const pythonIcons = document.querySelectorAll('.fa-python');
  pythonIcons.forEach(icon => {
    icon.style.color = '#3776AB';
  });
}

// Mobile-specific fixes
function applyMobileFixes() {
  if (window.innerWidth <= 768) {
    const techItems = document.querySelectorAll('.tech-item, .tech-icon');
    techItems.forEach(item => {
      item.style.height = '60px';
      item.style.padding = '0.25rem';
      item.style.maxWidth = '90px';
      
      const icons = item.querySelectorAll('i, img');
      icons.forEach(icon => {
        icon.style.width = '30px';
        icon.style.height = '30px';
        icon.style.fontSize = '30px';
      });
      
      const text = item.querySelector('span');
      if (text) {
        text.style.fontSize = '0.65rem';
      }
    });
  }
}

// Apply mobile fixes on window resize
window.addEventListener('resize', applyMobileFixes);

// Apply mobile fixes on load
window.addEventListener('load', applyMobileFixes);
