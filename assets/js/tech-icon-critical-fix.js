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
  removeAllTextLabels(); // First, remove all text labels
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

function removeAllTextLabels() {
  console.log('🚫 Aggressively removing ALL text labels from tech items...');
  
  // First, inject a critical style tag for immediate hiding
  if (!document.getElementById('critical-label-removal-style')) {
    const criticalStyle = document.createElement('style');
    criticalStyle.id = 'critical-label-removal-style';
    criticalStyle.innerHTML = `
      /* HIDE ALL TEXT LABELS - CRITICAL PRIORITY */
      .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      .tech-category .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      .tech-category-2x2-grid .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      .tech-icons .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      #tech-stack .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      .tech-stack-section .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      html body .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      html body #tech-stack .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      html body .tech-stack-section .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      .tech-item > span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      body[class] .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup),
      [class*="tech-"] .tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        max-height: 0 !important;
        max-width: 0 !important;
        font-size: 0 !important;
        line-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        pointer-events: none !important;
        clip: rect(0, 0, 0, 0) !important;
        color: transparent !important;
        border: 0 !important;
        z-index: -9999 !important;
      }
    `;
    document.head.appendChild(criticalStyle);
  }
  
  // Define a thorough list of selectors to catch all possible label spans
  const selectors = [
    '.tech-item > span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup)',
    '.tech-item span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup)',
    '.tech-icons span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup)',
    '#tech-stack .tech-item > span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup)',
    '.tech-category .tech-item > span:not(.skill-dot):not(.terraform-fallback):not(.terraform-backup)'
  ];
  
  // Combine all selectors for maximum coverage
  const combinedSelector = selectors.join(', ');
  const spans = document.querySelectorAll(combinedSelector);
  
  let removedCount = 0;
  
  // Process each span
  spans.forEach(span => {
    try {
      // First empty the content
      span.textContent = '';
      span.innerHTML = '';
      
      // Apply strongest possible hiding styles
      const hideStyles = {
        'display': 'none',
        'visibility': 'hidden',
        'opacity': '0',
        'height': '0',
        'width': '0',
        'max-height': '0',
        'max-width': '0',
        'overflow': 'hidden',
        'margin': '0',
        'padding': '0',
        'font-size': '0',
        'line-height': '0',
        'position': 'absolute',
        'pointer-events': 'none',
        'clip': 'rect(0, 0, 0, 0)',
        'color': 'transparent',
        'border': '0',
        'text-indent': '-9999px',
        'z-index': '-9999'
      };
      
      // Apply all hiding styles with !important
      Object.entries(hideStyles).forEach(([prop, value]) => {
        span.style.setProperty(prop, value, 'important');
      });
      
      // Mark it as removed for CSS targeting
      span.classList.add('removed-label');
      
      // Try to physically remove the span if possible
      if (span.parentNode) {
        try {
          span.parentNode.removeChild(span);
          removedCount++;
        } catch (e) {
          console.warn('Could not remove span, but it has been hidden:', e);
        }
      }
    } catch (e) {
      console.warn('Error processing span:', e);
    }
  });
  
  console.log(`✂️ Processed ${spans.length} spans, removed ${removedCount}`);
  
  // Also check for and process any text nodes that might contain labels
  document.querySelectorAll('.tech-item').forEach(item => {
    const childNodes = Array.from(item.childNodes);
    childNodes.forEach(node => {
      if (node.nodeType === 3) { // Text node
        if (node.textContent.trim()) {
          try {
            node.textContent = '';
          } catch (e) {
            console.warn('Could not clear text node:', e);
          }
        }
      }
    });
  });
  
  // Set up a MutationObserver to catch any new spans that might be added
  if (typeof MutationObserver !== 'undefined' && !window._techLabelObserverSet) {
    window._techLabelObserverSet = true;
    
    const observer = new MutationObserver(mutations => {
      let newSpansFound = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'SPAN' || 
                (node.nodeType === 1 && node.querySelector('span'))) {
              newSpansFound = true;
            }
          });
        }
      });
      
      // If new spans were added, run the removal again
      if (newSpansFound) {
        removeAllTextLabels();
      }
    });
    
    // Start observing the entire document
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
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
