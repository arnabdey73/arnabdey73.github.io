/**
 * Devicon Console Testing Tool - June 2025
 * Copy and paste this entire file into your browser console to diagnose devicon issues
 */

(function() {
  console.clear();
  console.group('🔍 DEVICON DIAGNOSTICS');
  
  // 1. Check if devicon CSS is loaded
  const deviconCssLoaded = Array.from(document.styleSheets).some(sheet => {
    try {
      return sheet.href && sheet.href.includes('devicon');
    } catch (e) {
      return false;
    }
  });
  console.log(`1. Devicon CSS loaded: ${deviconCssLoaded ? '✅ YES' : '❌ NO'}`);
  
  // 2. Check if script variables exist
  console.log(`2. Script flags present:`)
  console.log(`   - deviconEarlyLoaded: ${window.deviconEarlyLoaded ? '✅ YES' : '❌ NO'}`);
  console.log(`   - deviconIntegrationLoaded: ${window.deviconIntegrationLoaded ? '✅ YES' : '❌ NO'}`);
  console.log(`   - deviconIntegrationExecuted: ${window.deviconIntegrationExecuted ? '✅ YES' : '❌ NO'}`);
  console.log(`   - deviconCSSLoaded: ${window.deviconCSSLoaded ? '✅ YES' : '❌ NO'}`);
  
  // 3. Check if devicon elements are present
  const deviconElements = document.querySelectorAll('[class*="devicon-"]');
  console.log(`3. Devicon elements: ${deviconElements.length > 0 ? '✅ YES (' + deviconElements.length + ')' : '❌ NO'}`);
  
  // 4. Check for tech items with data-icon-replaced attribute
  const replacedItems = document.querySelectorAll('[data-icon-replaced]');
  console.log(`4. Replaced icons: ${replacedItems.length > 0 ? '✅ YES (' + replacedItems.length + ')' : '❌ NO'}`);
  
  // 5. Check for tech items
  const techItems = document.querySelectorAll('.tech-item');
  console.log(`5. Total tech items: ${techItems.length}`);
  
  // 6. Check for applyDeviconIcons function
  console.log(`6. applyDeviconIcons function exists: ${typeof window.applyDeviconIcons === 'function' ? '✅ YES' : '❌ NO'}`);
  
  // 7. Get tech item text content for debugging
  console.log(`7. Tech item contents (first 5):`);
  Array.from(techItems).slice(0, 5).forEach((item, i) => {
    console.log(`   ${i+1}. "${item.textContent.trim().substring(0, 30)}..."`);
  });
  
  // 8. Attempt test fix if needed
  if (!deviconElements.length && techItems.length > 0) {
    console.log(`🔧 No devicon elements found but tech items exist. Attempting test fix...`);
    
    // Inject test devicon
    const firstTechItem = techItems[0];
    const testIcon = document.createElement('i');
    testIcon.className = 'devicon-azure-plain colored';
    testIcon.style.cssText = 'font-size: 48px; margin-bottom: 10px; display: block;';
    
    // Add to DOM temporarily to test
    document.body.appendChild(testIcon);
    
    // Check if it rendered correctly
    setTimeout(() => {
      const computedStyle = window.getComputedStyle(testIcon);
      const fontFamily = computedStyle.fontFamily;
      console.log(`   Test icon font-family: "${fontFamily}"`);
      console.log(`   Devicon font appears to be ${fontFamily.toLowerCase().includes('devicon') ? '✅ WORKING' : '❌ NOT WORKING'}`);
      
      // Remove test element
      document.body.removeChild(testIcon);
      
      // Force fix
      console.log('⚡ Attempting to fix by manually injecting CSS and applying devicons...');
      
      // Add devicon CSS inline if needed
      if (!deviconCssLoaded) {
        const style = document.createElement('style');
        style.textContent = '@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css");';
        document.head.appendChild(style);
      }
      
      // Call apply function directly if it exists
      if (typeof window.applyDeviconIcons === 'function') {
        try {
          window.applyDeviconIcons();
          console.log('✅ Called applyDeviconIcons()');
          
          // Check results
          setTimeout(() => {
            const fixedElements = document.querySelectorAll('[class*="devicon-"]');
            console.log(`   Result: ${fixedElements.length} devicon elements now present`);
            console.groupEnd();
          }, 500);
        } catch (e) {
          console.error('❌ Error calling applyDeviconIcons():', e);
          console.groupEnd();
        }
      } else {
        console.log('❌ applyDeviconIcons function not found!');
        console.groupEnd();
      }
    }, 300);
  } else {
    console.groupEnd();
  }
})();
