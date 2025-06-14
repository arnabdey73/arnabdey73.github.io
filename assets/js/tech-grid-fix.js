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
  // Call devicon integration first if available (priority June 2025) - Enhanced for Terraform
  if (typeof window.applyDeviconIcons === 'function') {
    console.log('🔄 Tech Grid: Calling devicon integration from fixTechGrid...');
    try {
      // First apply all devicons
      window.applyDeviconIcons();
      
      // Then normalize icon sizes for consistency
      normalizeIconSizes();
      
      // Special focus on ensuring Terraform uses proper devicons
      ensureTerraformDevicon();
    } catch (e) {
      console.error('Error calling icon enhancements:', e);
    }
  }

  // 1. Apply 2x2 grid layout to tech categories
  const techCategories = document.querySelectorAll('.tech-category');
  
  // Check if devicons are available and being used
  const useDevicons = typeof window.applyDeviconIcons === 'function' && 
                      document.querySelectorAll('[class*="devicon-"]').length > 0;
  
  // We're now using devicons for all tech icons, no need for SVG fallbacks
  
  // No need to replace icons with SVGs since we're now using devicons directly in the HTML
  console.log('✅ Using devicons directly in HTML - no need for SVG icon replacement');
}

// Helper function to verify all Terraform items use devicon
function ensureTerraformDevicon() {
  console.log('� Verifying Terraform devicon usage...');
  
  // Find all Terraform items
  const terraformItems = Array.from(document.querySelectorAll('.tech-item'))
    .filter(item => {
      const text = item.textContent.toLowerCase();
      return text.includes('terraform');
    });
    
  console.log(`🔍 Found ${terraformItems.length} Terraform items to verify`);
  
  // Check which ones don't have devicon
  const missingDevicons = terraformItems.filter(item => !item.querySelector('.devicon-terraform-plain'));
    
  if (missingDevicons.length > 0) {
    console.warn(`⚠️ Found ${missingDevicons.length} Terraform items without devicon`);
    
    // Fix any missing devicons
    missingDevicons.forEach(item => {
      // Create the terraform devicon
      const iconWrapper = document.createElement('i');
      iconWrapper.className = 'devicon-terraform-plain colored';
      
      // Style properly
      iconWrapper.style.cssText = `
        color: #844FBA !important; 
        filter: drop-shadow(0 0 3px rgba(132, 79, 186, 0.5)) !important;
        font-size: 2.5rem !important; 
        width: 48px !important; 
        height: 48px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin: 0 auto 0.5rem auto !important;
      `;
      
      // Find and replace ANY existing icon
      const existingIcon = item.querySelector('i') || 
                          item.querySelector('.terraform-logo') ||
                          item.querySelector('svg') ||
                          item.querySelector('[class*="icon"]');
      
      if (existingIcon) {
        existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
      } else {
        // If no icon at all, insert as first child
        item.insertBefore(iconWrapper, item.firstChild);
      }
      
      // Mark as fixed
      item.setAttribute('data-terraform-fixed', 'true');
    });
    
    console.log(`✅ Fixed ${missingDevicons.length} Terraform items with devicon`);
  } else {
    console.log('✅ All Terraform items correctly using devicon-terraform-plain');
  }
}

// Helper function to normalize all icon sizes for consistency
function normalizeIconSizes() {
  console.log('📐 Normalizing all devicon sizes for consistency...');
  
  // Target all devicon elements for consistent sizing
  const allDevicons = document.querySelectorAll([
    '[class*="devicon-"]',
    '.tech-item [class*="devicon-"]',
    '.tech-category [class*="devicon-"]',
    'i[class*="devicon-"]',
    '.devicon-terraform-plain',
    '.devicon-terraform-plain.colored'
  ].join(', '));
  
  console.log(`🔍 Found ${allDevicons.length} devicon elements to normalize`);
  
  // Apply consistent sizing
  allDevicons.forEach(icon => {
    // Skip skill dots and small indicators
    if (icon.className.includes('skill-dot')) return;
    
    // Apply standardized size (48x48px)
    icon.style.width = '48px';
    icon.style.height = '48px';
    icon.style.fontSize = '2.5rem';
    icon.style.display = 'flex';
    icon.style.alignItems = 'center';
    icon.style.justifyContent = 'center';
    
    // Special handling for Terraform
    if (icon.className.includes('terraform')) {
      icon.style.color = '#844FBA';
      icon.style.filter = 'drop-shadow(0 0 3px rgba(132, 79, 186, 0.5))';
    }
  });
  
  console.log('✅ Devicon sizes normalized for consistency');
}

// Function to check if devicon CSS is properly loaded
function checkDeviconCSS() {
  console.log('🔍 Checking if devicon CSS is properly loaded...');
  
  // Check if link element exists
  const deviconLink = document.querySelector('link[href*="devicon"]');
  
  if (!deviconLink) {
    console.warn('⚠️ Devicon CSS link not found! Adding it now...');
    
    // Create and inject link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    
    // Add to head
    document.head.appendChild(link);
    
    console.log('✅ Added devicon CSS link to head');
  } else {
    console.log('✅ Devicon CSS link found');
  }
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
