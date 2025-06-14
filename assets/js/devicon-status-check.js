/**
 * Devicon Status Check - Added June 2025
 * This file helps verify if devicon icons are properly loaded and applied
 */
(function() {
  // Run check when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(checkDeviconStatus, 1500);
  });
  
  function checkDeviconStatus() {
    console.group('Devicon Implementation Status Check');
    
    // Check if devicon CSS is loaded
    const deviconCssLoaded = Array.from(document.styleSheets).some(sheet => {
      try {
        return sheet.href && sheet.href.includes('devicon');
      } catch (e) {
        return false;
      }
    });
    console.log(`Devicon CSS loaded: ${deviconCssLoaded ? '✅' : '❌'}`);
    
    // Check for early loader execution
    console.log(`Early loader executed: ${window.deviconEarlyLoaded ? '✅' : '❌'}`);
    
    // Check if devicon-integration.js was loaded
    console.log(`Integration script loaded: ${window.deviconIntegrationLoaded ? '✅' : '❌'}`);
    
    // Check if devicon-integration.js was executed
    console.log(`Integration script executed: ${window.deviconIntegrationExecuted ? '✅' : '❌'}`);
    
    // Check for any devicon elements in the DOM
    const deviconElements = document.querySelectorAll('[class*="devicon-"]');
    console.log(`Devicon elements found: ${deviconElements.length}`);
    
    // Check for tech items with data-icon-replaced attribute
    const replacedItems = document.querySelectorAll('[data-icon-replaced]');
    console.log(`Tech items with replaced icons: ${replacedItems.length}`);
    
    // Verify font awesome classes don't have devicon applied
    const remainingFontAwesome = document.querySelectorAll('.tech-item .fab, .tech-item .fas');
    console.log(`Remaining Font Awesome icons: ${remainingFontAwesome.length}`);
    
    console.groupEnd();
    
    // If no devicon elements found but CSS is loaded, try to manually fix
    if (deviconCssLoaded && deviconElements.length === 0) {
      console.warn('Devicons not applied despite CSS loading. Attempting manual fix...');
      attemptManualFix();
    }
  }
  
  function attemptManualFix() {
    // Force reapplication of devicon icons if the integration function exists
    if (typeof applyDeviconIcons === 'function') {
      console.log('Calling applyDeviconIcons() manually...');
      applyDeviconIcons();
    } else {
      console.error('applyDeviconIcons() function not found! Cannot attempt manual fix.');
    }
  }
})();
