/**
 * Tech Grid 2x2 Fix - June 2025
 * Ensures tech icons appear correctly in 2x2 grid and fixes issues with small boxes
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('🔄 Tech Grid 2x2 Fix: Starting...');
  
  // Run immediately
  fixTechGrid();
  
  // Run again after a short delay to ensure everything is loaded
  setTimeout(fixTechGrid, 500);
  
  // Run one final time to catch any late-rendered elements
  setTimeout(fixTechGrid, 1500);
  
  // Set up a MutationObserver to watch for any new tech items
  setupTechGridObserver();
});

// Set up a MutationObserver to watch for any DOM changes that might add new tech items
function setupTechGridObserver() {
  // Create a MutationObserver to watch for DOM changes
  const observer = new MutationObserver(function(mutations) {
    let shouldReapply = false;
    
    // Check if any mutations are relevant to tech grid
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        // Check if added nodes contain tech-item elements
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1 && // Element node
              (node.classList && 
               (node.classList.contains('tech-item') || 
                node.classList.contains('tech-category') ||
                node.querySelector('.tech-item')))) {
            shouldReapply = true;
          }
        });
      }
    });
    
    // If relevant changes detected, reapply our fixes
    if (shouldReapply) {
      console.log('🔄 Tech Grid: Changes detected, reapplying fixes...');
      fixTechGrid();
    }
  });
  
  // Start observing the document body for DOM changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  console.log('🔍 Tech Grid Observer: Watching for DOM changes...');
}

function fixTechGrid() {
  // 1. Apply 2x2 grid layout to tech categories
  const techCategories = document.querySelectorAll('.tech-category');
  
  // First check if we should use devicon instead (new in June 2025)
  const useDevicons = typeof window.applyDeviconIcons === 'function';
  
  // Define SVG icons for special cases (as fallback if devicons aren't available)
  const svgIcons = {
    openstack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 48px; height: 48px; fill: #ED1944;">
      <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm-91.8 352l-18-90 90 18-72 72zm166.2-167.4L167 217.8l1.2-2.4 90-18.2-73.6 73.6L184 273l101.4-101.6-2.5 163.2H212l50.2-50.2-46.6-9.4 120-24.2-5.2 26-37-7.4z"/>
    </svg>`,
    vmware: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 48px; height: 48px;">
      <path fill="#607078" d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm92.3 296.8h-36.5l-55.8-84.1v84.1h-36.3V184h36.3l56 84.1V184h36.3v144.8zm-184.6 0h-38V184h38v144.8z"/>
    </svg>`,
    azure: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="width: 48px; height: 48px; fill: #0078D4;">
      <path d="M88.9,66.9c0.3-0.4,0.4-0.9,0.2-1.4c-0.1-0.2-0.2-0.4-0.4-0.5l-26-15.6L84.5,27c0.4-0.3,0.6-0.9,0.4-1.4 c-0.1-0.5-0.6-0.9-1.1-0.9H44.7c-0.5,0-0.9,0.3-1.1,0.7L31.9,50.9L6.8,63.3c-0.5,0.3-0.8,0.8-0.7,1.3c0.1,0.5,0.5,1,1.1,1h25.4 l13.3,21.4c0.2,0.3,0.5,0.5,0.9,0.6c0.1,0,0.1,0,0.2,0c0.3,0,0.6-0.1,0.9-0.3l12.3-10.1l19.7,8.7c0.2,0.1,0.3,0.1,0.5,0.1 c0.3,0,0.6-0.1,0.8-0.3c0.3-0.2,0.5-0.5,0.6-0.9l7.9-17.2C89.6,67.2,89.3,67,88.9,66.9z M48.7,73.6L37.4,55.5 c-0.2-0.3-0.5-0.5-0.8-0.6c-0.4-0.1-0.7,0-1,0.2L12,66.2l21.6-36c0.2-0.3,0.2-0.6,0.2-0.9c0-0.3-0.2-0.6-0.4-0.8l-5.9-7h39.5 L45.2,43.8c-0.3,0.3-0.4,0.7-0.3,1.1c0.1,0.4,0.4,0.7,0.8,0.8l26.9,16.2l-5.7,12.4L47.8,65.5c-0.3-0.1-0.7-0.1-1,0.1 c-0.3,0.2-0.5,0.5-0.6,0.8l-3.7,16.6L48.7,73.6z"/>
    </svg>`
  };
  
  // 1. Fix OpenStack icon
  const openStackItems = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
    return item.textContent.toLowerCase().includes('openstack');
  });
  
  openStackItems.forEach(item => {
    // Replace the icon with SVG
    const existingIcon = item.querySelector('i');
    if (existingIcon && existingIcon.className.includes('fa-cloud')) {
      // Create a wrapper for the SVG
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'special-icon openstack-icon';
      iconWrapper.style.width = '48px';
      iconWrapper.style.height = '48px';
      iconWrapper.style.margin = '0 auto 0.5rem auto';
      iconWrapper.style.display = 'flex';
      iconWrapper.style.alignItems = 'center';
      iconWrapper.style.justifyContent = 'center';
      
      // Insert SVG
      iconWrapper.innerHTML = svgIcons.openstack;
      
      // Replace the existing icon
      existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
    }
  });
  
  // 2. Fix VMware icon
  const vmwareItems = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
    return item.textContent.toLowerCase().includes('vmware');
  });
  
  vmwareItems.forEach(item => {
    // Replace the icon with SVG
    const existingIcon = item.querySelector('i');
    if (existingIcon && existingIcon.className.includes('fa-server')) {
      // Create a wrapper for the SVG
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'special-icon vmware-icon';
      iconWrapper.style.width = '48px';
      iconWrapper.style.height = '48px';
      iconWrapper.style.margin = '0 auto 0.5rem auto';
      iconWrapper.style.display = 'flex';
      iconWrapper.style.alignItems = 'center';
      iconWrapper.style.justifyContent = 'center';
      
      // Insert SVG
      iconWrapper.innerHTML = svgIcons.vmware;
      
      // Replace the existing icon
      existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
    }
  });
  
  // 3. Fix Azure icon
  const azureItems = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
    return item.textContent.toLowerCase().includes('azure');
  });
  
  azureItems.forEach(item => {
    // Replace the icon with SVG
    const existingIcon = item.querySelector('i');
    if (existingIcon && existingIcon.className.includes('fa-microsoft')) {
      // Create a wrapper for the SVG
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'special-icon azure-icon';
      iconWrapper.style.width = '48px';
      iconWrapper.style.height = '48px';
      iconWrapper.style.margin = '0 auto 0.5rem auto';
      iconWrapper.style.display = 'flex';
      iconWrapper.style.alignItems = 'center';
      iconWrapper.style.justifyContent = 'center';
      
      // Insert SVG
      iconWrapper.innerHTML = svgIcons.azure;
      
      // Replace the existing icon
      existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
    }
  });
  
  console.log(`✅ Fixed special icons (OpenStack: ${openStackItems.length}, VMware: ${vmwareItems.length}, Azure: ${azureItems.length})`);
}

// Function to physically remove span elements from tech items
function removeTextLabels() {
  console.log('🏷️ Removing all text labels from tech items...');
  
  // Define selectors to find all possible text spans
  const selectors = [
    '.tech-item > span:not(.skill-dot):not(.terraform-fallback)',
    '.tech-item span:not(.skill-dot):not(.terraform-fallback)',
    '.tech-item:not(.skill-container) > span',
    '.tech-icons span:not(.skill-dot)',
    '#tech-stack .tech-item > span'
  ];

  // Combined selector for maximum coverage
  const combinedSelector = selectors.join(', ');
  const textLabels = document.querySelectorAll(combinedSelector);
  
  let removedCount = 0;
  
  // FIRST PASS: Try to physically remove spans
  textLabels.forEach(span => {
    // Skip skill dots and terraform fallback spans
    if (span.className.includes('skill-dot') || span.className.includes('terraform-fallback')) {
      return;
    }

    try {
      // First empty content
      span.textContent = '';
      span.innerHTML = '';
      
      // Then remove completely
      if (span.parentNode) {
        span.parentNode.removeChild(span);
        removedCount++;
      }
    } catch (e) {
      console.warn('Could not remove span in first pass:', e);
    }
  });
  
  // SECOND PASS: Process each tech-item individually to catch any remaining spans
  document.querySelectorAll('.tech-item').forEach(item => {
    // Get all spans within this tech item
    const spans = item.querySelectorAll('span');
    
    spans.forEach(span => {
      // Skip skill dots and terraform fallback spans
      if (span.className.includes('skill-dot') || span.className.includes('terraform-fallback')) {
        return;
      }
      
      try {
        // Empty content first
        span.textContent = '';
        span.innerHTML = '';
        
        // Then remove
        if (span.parentNode) {
          span.parentNode.removeChild(span);
          removedCount++;
        }
      } catch (e) {
        console.warn('Could not remove span in second pass:', e);
      }
    });
    
    // Check for direct child text nodes that might contain labels
    Array.from(item.childNodes).forEach(node => {
      if (node.nodeType === 3) { // Text node
        if (node.textContent.trim()) {
          try {
            node.textContent = '';
            removedCount++;
          } catch (e) {
            console.warn('Could not remove text node:', e);
          }
        }
      }
    });
  });
  
  // THIRD PASS: Apply aggressive inline styles to any spans that couldn't be removed
  document.querySelectorAll('.tech-item span').forEach(span => {
    if (!span.className.includes('skill-dot') && !span.className.includes('terraform-fallback')) {
      // Empty content
      span.textContent = '';
      span.innerHTML = '';
      
      // Hide with every possible CSS property
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
        'transform': 'scale(0)',
        'z-index': '-9999'
      };
      
      // Apply all hiding styles
      Object.entries(hideStyles).forEach(([prop, value]) => {
        span.style[prop] = value + ' !important';
      });
      
      // Add a class for CSS targeting
      span.classList.add('removed-label');
    }
  });
  
  // FOURTH PASS: Add a style tag with !important rules to guarantee no labels show
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    /* Aggressive label removal */
    .tech-item span:not(.skill-dot):not(.terraform-fallback),
    .tech-item > span:not(.skill-dot):not(.terraform-fallback),
    .removed-label {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0 !important;
      width: 0 !important;
      max-height: 0 !important;
      max-width: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      font-size: 0 !important;
      line-height: 0 !important;
      overflow: hidden !important;
      position: absolute !important;
      pointer-events: none !important;
      clip: rect(0, 0, 0, 0) !important;
      color: transparent !important;
    }
  `;
  document.head.appendChild(styleTag);
  
  console.log(`✅ Removed or hidden ${removedCount} text labels from tech items`);
}

// Force proper styling for tech icons grid
(function injectGridStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Critical inline styles for tech grid */
    .tech-category-2x2-grid .tech-icons {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-rows: repeat(2, 1fr) !important;
      gap: 0.2rem !important;
      width: 100% !important;
      max-width: 280px !important;
      height: 200px !important;
      padding: 1rem !important;
      margin: 1rem auto !important;
      justify-content: center !important;
      align-items: center !important;
    }
    
    .tech-category-2x2-grid .tech-item {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      padding: 0.75rem !important;
      width: 90px !important;
      height: 90px !important;
      background: rgba(0, 0, 0, 0.2) !important;
      border-radius: 10px !important;
      border: 1px solid rgba(255, 255, 255, 0.08) !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
    }
  `;
  document.head.appendChild(style);
})();
