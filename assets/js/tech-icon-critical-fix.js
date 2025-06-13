/**
 * CRITICAL FIX FOR TECH STACK ICONS
 * This script addresses persistent visibility issues with tech stack icons,
 * specifically focusing on the Terraform logo and ensuring all icons display correctly.
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚨 Critical Tech Icon Fix: Starting emergency repair...');
  
  // Execute immediately
  applyEmergencyFixes();
  
  // Then repeat fixes after DOM is fully rendered with a cascade of timeouts
  // to ensure fixes are applied even if DOM updates or style recalculations occur
  setTimeout(() => {
    applyEmergencyFixes();
    
    setTimeout(() => {
      applyEmergencyFixes();
      console.log('✅ Critical Tech Icon Fix: Completed all repair passes');
    }, 1000);
  }, 300);
});

function applyEmergencyFixes() {
  fixTerraformLogo();
  forceTechItemVisibility();
  fixTechIconAlignment();
  repairSkillDots();
}

function fixTerraformLogo() {
  const terraformLogos = document.querySelectorAll('.terraform-logo');
  
  if (terraformLogos.length === 0) {
    console.warn('⚠️ No Terraform logos found in the document!');
    
    // Attempt to find the container that should have Terraform logo
    const terraformContainers = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
      const text = item.textContent.toLowerCase();
      return text.includes('terraform');
    });
    
    if (terraformContainers.length > 0) {
      console.log(`🔍 Found ${terraformContainers.length} containers that should contain Terraform logos`);
      
      // Try to repair these containers
      terraformContainers.forEach(container => {
        // Check if there is a missing or broken logo element
        const existingLogo = container.querySelector('.terraform-logo');
        
        if (!existingLogo) {
          // Create a new terraform logo
          const newLogo = document.createElement('div');
          newLogo.className = 'terraform-logo';
          newLogo.setAttribute('aria-hidden', 'true');
          
          // Find where to insert it (usually before the text span)
          const textSpan = container.querySelector('span');
          if (textSpan) {
            container.insertBefore(newLogo, textSpan);
            console.log('🛠️ Injected missing Terraform logo element');
          } else {
            container.prepend(newLogo);
            console.log('🛠️ Prepended missing Terraform logo element');
          }
        }
      });
    }
  }
  
  // Now find all terraform logos again (including newly created ones)
  const allTerraformLogos = document.querySelectorAll('.terraform-logo');
  allTerraformLogos.forEach(logo => {
    // Apply direct CSS overrides for maximum visibility
    Object.assign(logo.style, {
      opacity: '1 !important',
      visibility: 'visible !important',
      display: 'flex !important',
      alignItems: 'center !important',
      justifyContent: 'center !important',
      width: '40px !important',
      height: '40px !important',
      position: 'relative !important',
      margin: '0 auto 0.5rem !important',
      backgroundColor: 'transparent !important'
    });
    
    // Add backup inline styles for the ::before pseudo-element through a
    // CSS class that we can guarantee will be applied
    logo.classList.add('terraform-logo-fixed');
    
    // Add data attribute to mark as fixed
    logo.setAttribute('data-logo-repaired', 'true');
    
    // Create a safety backup element in case the ::before isn't working
    if (!logo.querySelector('.terraform-backup')) {
      const backup = document.createElement('div');
      backup.className = 'terraform-backup';
      backup.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #844FBA;
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M36.4 20.2v19.6l17-9.8v-19.6l-17 9.8zm-12.8 0l17-9.8v19.6l-17 9.8v-19.6zm-1.6 21.5l17 9.8v-19.6l-17-9.8v19.6z' fill='currentColor'/%3E%3C/svg%3E");
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M36.4 20.2v19.6l17-9.8v-19.6l-17 9.8zm-12.8 0l17-9.8v19.6l-17 9.8v-19.6zm-1.6 21.5l17 9.8v-19.6l-17-9.8v19.6z' fill='currentColor'/%3E%3C/svg%3E");
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
        z-index: 1;
      `;
      logo.appendChild(backup);
    }
  });
  
  console.log(`🛠️ Fixed ${allTerraformLogos.length} Terraform logos`);
}

function forceTechItemVisibility() {
  const techItems = document.querySelectorAll('.tech-item');
  techItems.forEach(item => {
    // Remove any classes that might hide the item
    item.classList.remove('hidden');
    item.classList.add('visible');
    
    // Force visibility with inline styles
    Object.assign(item.style, {
      opacity: '1 !important',
      visibility: 'visible !important',
      display: 'flex !important',
      flexDirection: 'column !important',
      alignItems: 'center !important',
      justifyContent: 'center !important',
      transform: 'none !important',
      animation: 'none !important'
    });
    
    // Force icons to be visible
    const icons = item.querySelectorAll('i');
    icons.forEach(icon => {
      Object.assign(icon.style, {
        opacity: '1 !important',
        visibility: 'visible !important',
        display: 'block !important',
        fontSize: '36px !important',
        width: '36px !important',
        height: '36px !important'
      });
    });
  });
  
  console.log(`🛠️ Forced visibility for ${techItems.length} tech items`);
}

function fixTechIconAlignment() {
  // Fix all tech-icons containers to ensure proper grid layout
  const techIconsContainers = document.querySelectorAll('.tech-icons');
  techIconsContainers.forEach(container => {
    Object.assign(container.style, {
      display: 'grid !important',
      gridTemplateColumns: 'repeat(2, 1fr) !important',
      gridTemplateRows: 'repeat(2, 1fr) !important',
      gap: '1rem !important',
      justifyContent: 'center !important',
      alignItems: 'center !important',
      justifyItems: 'center !important',
      padding: '1rem !important',
      overflow: 'hidden !important'
    });
  });
  
  console.log(`🛠️ Fixed alignment for ${techIconsContainers.length} tech icon containers`);
}

function repairSkillDots() {
  // Fix all skill-level dots to ensure they're properly visible
  const skillDots = document.querySelectorAll('.skill-dot');
  skillDots.forEach(dot => {
    const isFilled = dot.classList.contains('filled');
    
    Object.assign(dot.style, {
      display: 'inline-block !important',
      visibility: 'visible !important',
      opacity: isFilled ? '1 !important' : '0.3 !important',
      width: '8px !important',
      height: '8px !important',
      borderRadius: '50% !important',
      margin: '0 2px !important',
      backgroundColor: isFilled ? '#2a9df4 !important' : 'transparent !important',
      border: '1px solid #2a9df4 !important',
      boxShadow: isFilled ? '0 0 4px rgba(42, 157, 244, 0.6) !important' : 'none !important'
    });
  });
  
  console.log(`🛠️ Repaired ${skillDots.length} skill level dots`);
}

// Automatically inject required CSS
(function injectCriticalCSS() {
  const style = document.createElement('style');
  style.textContent = `
    /* Critical Terraform Logo Fix */
    .terraform-logo-fixed::before {
      content: "" !important;
      position: absolute !important;
      width: 100% !important;
      height: 100% !important;
      background-color: #844FBA !important;
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M36.4 20.2v19.6l17-9.8v-19.6l-17 9.8zm-12.8 0l17-9.8v19.6l-17 9.8v-19.6zm-1.6 21.5l17 9.8v-19.6l-17-9.8v19.6z' fill='currentColor'/%3E%3C/svg%3E") !important;
      mask-size: contain !important;
      mask-repeat: no-repeat !important;
      mask-position: center !important;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M36.4 20.2v19.6l17-9.8v-19.6l-17 9.8zm-12.8 0l17-9.8v19.6l-17 9.8v-19.6zm-1.6 21.5l17 9.8v-19.6l-17-9.8v19.6z' fill='currentColor'/%3E%3C/svg%3E") !important;
      -webkit-mask-size: contain !important;
      -webkit-mask-repeat: no-repeat !important;
      -webkit-mask-position: center !important;
      opacity: 1 !important;
      display: block !important;
      visibility: visible !important;
      z-index: 1 !important;
    }
    
    /* Force visibility for critical elements */
    .tech-item, .tech-icons, .skill-level, .terraform-logo {
      opacity: 1 !important;
      visibility: visible !important;
      display: flex !important;
    }
    
    /* Ensure proper skill dot visibility */
    .skill-dot {
      display: inline-block !important;
      visibility: visible !important;
    }
    
    /* Critical Tech Category Fixes */
    .tech-category {
      overflow: visible !important;
    }
    
    /* Force tech icons to be visible */
    .tech-item i {
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
  `;
  document.head.appendChild(style);
  console.log('💉 Injected critical CSS fixes');
})();
