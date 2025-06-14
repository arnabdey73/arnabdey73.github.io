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
  
  // Define SVG icons for special cases
  const svgIcons = {
    openstack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 48px; height: 48px; fill: #ED1944;">
      <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm-91.8 352l-18-90 90 18-72 72zm166.2-167.4L167 217.8l1.2-2.4 90-18.2-73.6 73.6L184 273l101.4-101.6-2.5 163.2H212l50.2-50.2-46.6-9.4 120-24.2-5.2 26-37-7.4z"/>
    </svg>`,
    vmware: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 48px; height: 48px;">
      <path fill="#607078" d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm92.3 296.8h-36.5l-55.8-84.1v84.1h-36.3V184h36.3l56 84.1V184h36.3v144.8zm-184.6 0h-38V184h38v144.8z"/>
    </svg>`
  };
  
  techCategories.forEach(category => {
    // Always add the 2x2 grid class
    category.classList.add('tech-category-2x2-grid');
    
    // Set grid class and count items
    const techItems = category.querySelectorAll('.tech-item');
    const itemCount = Math.min(techItems.length, 4); // Max 4 items in 2x2 grid
    
    // Set data attribute for CSS styling
    category.setAttribute('data-item-count', itemCount);
    
    // Hide items beyond 4
    techItems.forEach((item, index) => {
      if (index < 4) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
    
    // Force proper grid area placement for each item in the grid
    const techIcons = category.querySelector('.tech-icons');
    if (techIcons) {
      techIcons.style.display = 'grid';
      techIcons.style.gridTemplateColumns = 'repeat(auto-fit, minmax(80px, 1fr))';
      
      // Adjust layout based on item count
      if (itemCount === 1) {
        techIcons.style.gridTemplateColumns = '1fr';
        techIcons.style.maxWidth = '110px';
      } else if (itemCount === 2) {
        techIcons.style.maxWidth = '200px';
      } else {
        techIcons.style.maxWidth = '200px';
      }
    }
  });
  
  // 2. Fix Font Awesome icons that appear as boxes
  fixFontAwesomeIcons();
  
  // 3. Fix terraform logo specifically
  fixTerraformLogos();
  
  // 4. Fix specific icons like OpenStack and VMware
  fixSpecialIcons();
  
  // 5. Remove unnecessary text labels from tech items
  removeTextLabels();
  
  console.log(`✅ Fixed ${techCategories.length} tech categories with 2x2 grid layout`);
}

function fixFontAwesomeIcons() {
  // Create a link element for Font Awesome if it doesn't exist
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    fontAwesomeLink.integrity = 'sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==';
    fontAwesomeLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontAwesomeLink);
    console.log('💉 Injected Font Awesome CSS');
  }
  
  // Force proper display for Font Awesome icons
  const fontAwesomeIcons = document.querySelectorAll('.tech-item i');
  fontAwesomeIcons.forEach(icon => {
    // Apply styling inline for maximum compatibility
    icon.style.display = 'block';
    icon.style.fontSize = '2.25rem';
    icon.style.width = '48px';
    icon.style.height = '48px';
    icon.style.lineHeight = '1';
    icon.style.margin = '0 auto 0.5rem auto';
    icon.style.color = '#2a9df4';
    icon.style.opacity = '1';
    icon.style.visibility = 'visible';
    icon.style.objectFit = 'contain';
    
    // Fix for Font Awesome brand icons
    if (icon.classList.contains('fab')) {
      icon.style.fontFamily = '"Font Awesome 5 Brands", "Font Awesome 6 Brands"';
    }
    
    // Ensure Font Awesome classes are present
    if (!icon.className.includes('fa')) {
      // If icon has no Font Awesome class, add a default
      if (icon.parentNode.textContent.toLowerCase().includes('terraform')) {
        icon.className = 'fas fa-cube';
      } else if (icon.parentNode.textContent.toLowerCase().includes('azure')) {
        icon.className = 'fab fa-microsoft';
      } else if (icon.parentNode.textContent.toLowerCase().includes('aws')) {
        icon.className = 'fab fa-aws';
      } else if (icon.parentNode.textContent.toLowerCase().includes('python')) {
        icon.className = 'fab fa-python';
      } else if (icon.parentNode.textContent.toLowerCase().includes('javascript')) {
        icon.className = 'fab fa-js';
      } else if (icon.parentNode.textContent.toLowerCase().includes('bash')) {
        icon.className = 'fas fa-terminal';
      } else {
        icon.className = 'fas fa-code';
      }
    }
  });
  
  console.log(`✅ Fixed ${fontAwesomeIcons.length} Font Awesome icons`);
}

function fixTerraformLogos() {
  const terraformItems = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
    return item.textContent.toLowerCase().includes('terraform');
  });
  
  // First create a style for the Terraform logo if it doesn't exist
  if (!document.querySelector('style[data-terraform-logo-style]')) {
    const style = document.createElement('style');
    style.setAttribute('data-terraform-logo-style', 'true');
    style.textContent = `
      .terraform-logo::before {
        content: "" !important;
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        background-color: #844FBA !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M36.4 20.2v19.6l17-9.8v-19.6l-17 9.8zm-12.8 0l17-9.8v19.6l-17 9.8v-19.6zm-1.6 21.5l17 9.8v-19.6l-17-9.8v19.6z' fill='currentColor'/%3E%3C/svg%3E") !important;
        -webkit-mask-size: contain !important;
        -webkit-mask-repeat: no-repeat !important;
        -webkit-mask-position: center !important;
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M36.4 20.2v19.6l17-9.8v-19.6l-17 9.8zm-12.8 0l17-9.8v19.6l-17 9.8v-19.6zm-1.6 21.5l17 9.8v-19.6l-17-9.8v19.6z' fill='currentColor'/%3E%3C/svg%3E") !important;
        mask-size: contain !important;
        mask-repeat: no-repeat !important;
        mask-position: center !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  terraformItems.forEach(item => {
    // Check if it already has a terraform logo div
    let terraformLogo = item.querySelector('.terraform-logo');
    
    if (!terraformLogo) {
      // Create terraform logo div
      terraformLogo = document.createElement('div');
      terraformLogo.className = 'terraform-logo';
      
      // Remove any existing icon
      const existingIcon = item.querySelector('i');
      if (existingIcon) {
        existingIcon.remove();
      }
      
      // Insert terraform logo at the beginning
      const firstChild = item.firstChild;
      item.insertBefore(terraformLogo, firstChild);
    }
    
    // Apply terraform logo styles inline
    terraformLogo.style.width = '48px';
    terraformLogo.style.height = '48px';
    terraformLogo.style.position = 'relative';
    terraformLogo.style.margin = '0 auto 0.75rem auto';
    terraformLogo.style.display = 'flex';
    terraformLogo.style.alignItems = 'center';
    terraformLogo.style.justifyContent = 'center';
    terraformLogo.style.objectFit = 'contain';
    
    // Add fallback span for older browsers that don't support mask-image
    if (!terraformLogo.querySelector('.terraform-fallback')) {
      const fallback = document.createElement('span');
      fallback.className = 'terraform-fallback';
      fallback.textContent = 'T';
      fallback.style.opacity = '0.3'; // Lower opacity so it's less visible when mask works
      fallback.style.fontSize = '1.5rem';
      fallback.style.fontWeight = 'bold';
      fallback.style.color = '#844FBA';
      terraformLogo.appendChild(fallback);
    }
  });
  
  console.log(`✅ Fixed ${terraformItems.length} Terraform logos`);
}

// Function to apply special SVG icons for specific technologies
function fixSpecialIcons() {
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
  
  console.log(`✅ Fixed special icons (OpenStack: ${openStackItems.length}, VMware: ${vmwareItems.length})`);
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
      gap: 1.5rem !important;
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
