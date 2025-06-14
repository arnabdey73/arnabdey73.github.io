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
});

function fixTechGrid() {
  // 1. Apply 2x2 grid layout to tech categories
  const techCategories = document.querySelectorAll('.tech-category');
  
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
      techIcons.style.gridTemplateColumns = 'repeat(2, 1fr)';
      techIcons.style.gridTemplateRows = 'repeat(2, 1fr)';
      
      // Adjust height based on item count
      if (itemCount <= 2) {
        techIcons.style.height = '120px';
      } else {
        techIcons.style.height = '200px';
      }
    }
  });
  
  // 2. Fix Font Awesome icons that appear as boxes
  fixFontAwesomeIcons();
  
  // 3. Fix terraform logo specifically
  fixTerraformLogos();
  
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
    icon.style.fontSize = '2rem';
    icon.style.width = '2rem';
    icon.style.height = '2rem';
    icon.style.lineHeight = '1';
    icon.style.margin = '0 auto 0.5rem auto';
    icon.style.color = '#2a9df4';
    icon.style.opacity = '1';
    icon.style.visibility = 'visible';
    
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
    terraformLogo.style.width = '2rem';
    terraformLogo.style.height = '2rem';
    terraformLogo.style.position = 'relative';
    terraformLogo.style.margin = '0 auto 0.5rem auto';
    terraformLogo.style.display = 'flex';
    terraformLogo.style.alignItems = 'center';
    terraformLogo.style.justifyContent = 'center';
    
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
