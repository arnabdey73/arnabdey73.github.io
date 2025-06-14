/**
 * Terraform Icon Checker - June 2025
 * Verifies that all Terraform icons are properly using devicon-terraform-plain
 * and logs status to console for debugging
 */

// Execute on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  console.group('🔎 Terraform Icon Checker');
  checkTerraformIcons();
  console.groupEnd();
  
  // Run again after a delay to catch any late-loaded elements
  setTimeout(function() {
    console.group('🔍 Terraform Icon Checker (Delayed Check)');
    checkTerraformIcons();
    console.groupEnd();
  }, 1500);
});

// Main checking function
function checkTerraformIcons() {
  // Find all tech items that mention Terraform
  const terraformItems = Array.from(document.querySelectorAll('.tech-item'))
    .filter(item => item.textContent.toLowerCase().includes('terraform'));
    
  console.log(`Found ${terraformItems.length} Terraform tech items`);
  
  if (terraformItems.length === 0) {
    console.log('ℹ️ No Terraform items found in current page');
    return;
  }
  
  // Check each item
  let deviconCount = 0;
  let nonDeviconCount = 0;
  
  terraformItems.forEach((item, index) => {
    const hasDevicon = !!item.querySelector('.devicon-terraform-plain') || 
                       !!item.querySelector('i.devicon-terraform-plain');
                       
    // Get icon element (any type)
    const iconElement = item.querySelector('.devicon-terraform-plain') || 
                       item.querySelector('i[class*="terraform"]') ||
                       item.querySelector('.terraform-logo') ||
                       item.querySelector('i');
    
    // Check icon sizes
    let iconSize = null;
    if (iconElement) {
      const computedStyle = window.getComputedStyle(iconElement);
      iconSize = {
        width: computedStyle.width,
        height: computedStyle.height,
        fontSize: computedStyle.fontSize
      };
    }
    
    if (hasDevicon) {
      deviconCount++;
      console.log(`✅ Item #${index+1}: Using devicon-terraform-plain`, {
        element: item,
        iconSize: iconSize,
        text: item.textContent.trim()
      });
    } else {
      nonDeviconCount++;
      console.warn(`⚠️ Item #${index+1}: NOT using devicon-terraform-plain`, {
        element: item,
        iconElement: iconElement,
        iconSize: iconSize,
        text: item.textContent.trim()
      });
      
      // Try to fix it immediately
      fixTerraformIcon(item);
    }
  });
  
  // Summary
  if (deviconCount === terraformItems.length) {
    console.log(`✅ SUCCESS: All ${deviconCount} Terraform items use devicon-terraform-plain`);
  } else {
    console.warn(`⚠️ ISSUE: ${nonDeviconCount} out of ${terraformItems.length} Terraform items are NOT using devicon-terraform-plain`);
  }
}

// Fix function to correct any issues found
function fixTerraformIcon(item) {
  try {
    // Create new devicon element
    const iconWrapper = document.createElement('i');
    iconWrapper.className = 'devicon-terraform-plain colored';
    
    // Apply proper styling
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
    
    // Find and replace existing icon (any type)
    const existingIcon = item.querySelector('i') || 
                         item.querySelector('.terraform-logo') ||
                         item.querySelector('[class*="icon"]') ||
                         item.querySelector('svg');
    
    if (existingIcon) {
      existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
      console.log('🛠️ Replaced existing icon with devicon-terraform-plain');
    } else {
      // If no icon at all, insert as first child
      item.insertBefore(iconWrapper, item.firstChild);
      console.log('🛠️ Added new devicon-terraform-plain');
    }
    
    // Mark as fixed
    item.setAttribute('data-terraform-fixed', 'true');
    
    return true;
  } catch (error) {
    console.error('❌ Failed to fix Terraform icon:', error);
    return false;
  }
}

// Create a global diagnostic function that can be called from console
window.checkAllTerraformIcons = checkTerraformIcons;
console.log('✨ Terraform Icon Checker loaded. Run window.checkAllTerraformIcons() in console to check again manually.');
