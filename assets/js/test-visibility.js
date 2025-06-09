/**
 * Test Script for Visibility Fixes
 * Run this in the browser console to check if elements are visible
 */

function testVisibilityFixes() {
  console.log('=== VISIBILITY FIXES TEST ===');
  
  // Test 1: Terraform Logo
  const terraformLogos = document.querySelectorAll('.terraform-logo');
  console.log(`\n1. TERRAFORM LOGOS (${terraformLogos.length} found):`);
  terraformLogos.forEach((logo, index) => {
    const computed = window.getComputedStyle(logo);
    const beforeComputed = window.getComputedStyle(logo, '::before');
    console.log(`   Logo ${index + 1}:`);
    console.log(`     - Display: ${computed.display}`);
    console.log(`     - Opacity: ${computed.opacity}`);
    console.log(`     - Visibility: ${computed.visibility}`);
    console.log(`     - Before background: ${beforeComputed.backgroundColor}`);
    console.log(`     - Before mask: ${beforeComputed.maskImage || beforeComputed.webkitMaskImage}`);
  });
  
  // Test 2: Skill Levels
  const skillLevels = document.querySelectorAll('.skill-level');
  console.log(`\n2. SKILL LEVELS (${skillLevels.length} found):`);
  skillLevels.forEach((level, index) => {
    const computed = window.getComputedStyle(level);
    const dots = level.querySelectorAll('.skill-dot');
    console.log(`   Level ${index + 1}:`);
    console.log(`     - Display: ${computed.display}`);
    console.log(`     - Opacity: ${computed.opacity}`);
    console.log(`     - Visibility: ${computed.visibility}`);
    console.log(`     - Dots: ${dots.length} (filled: ${level.querySelectorAll('.skill-dot.filled').length})`);
    
    dots.forEach((dot, dotIndex) => {
      const dotComputed = window.getComputedStyle(dot);
      console.log(`       Dot ${dotIndex + 1}: ${dotComputed.display}, ${dotComputed.opacity}, ${dotComputed.backgroundColor}`);
    });
  });
  
  // Test 3: Mobile Navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  console.log(`\n3. MOBILE NAVIGATION:`);
  
  if (menuToggle) {
    const computed = window.getComputedStyle(menuToggle);
    console.log(`   Menu Toggle:`);
    console.log(`     - Display: ${computed.display}`);
    console.log(`     - Opacity: ${computed.opacity}`);
    console.log(`     - Visibility: ${computed.visibility}`);
    console.log(`     - Z-index: ${computed.zIndex}`);
  } else {
    console.log(`   Menu Toggle: NOT FOUND`);
  }
  
  if (navList) {
    const computed = window.getComputedStyle(navList);
    console.log(`   Nav List:`);
    console.log(`     - Display: ${computed.display}`);
    console.log(`     - Opacity: ${computed.opacity}`);
    console.log(`     - Visibility: ${computed.visibility}`);
    console.log(`     - Z-index: ${computed.zIndex}`);
    console.log(`     - Max-height: ${computed.maxHeight}`);
    console.log(`     - Has 'show' class: ${navList.classList.contains('show')}`);
  } else {
    console.log(`   Nav List: NOT FOUND`);
  }
  
  // Test 4: Theme
  const theme = document.documentElement.getAttribute('data-theme');
  console.log(`\n4. THEME: ${theme || 'not set'}`);
  
  // Test 5: CSS Files Loaded
  console.log(`\n5. CSS FILES:`);
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  const relevantLinks = Array.from(links).filter(link => 
    link.href.includes('visibility-fixes') || 
    link.href.includes('tech-logos') || 
    link.href.includes('menu-toggle-fix')
  );
  
  relevantLinks.forEach(link => {
    console.log(`   - ${link.href}`);
  });
  
  console.log('\n=== TEST COMPLETE ===');
  
  // Suggestions
  console.log('\n=== SUGGESTIONS ===');
  if (terraformLogos.length === 0) {
    console.log('⚠️  No terraform logos found. Check if tech-stack.html is loaded.');
  }
  if (skillLevels.length === 0) {
    console.log('⚠️  No skill levels found. Check if tech-stack.html is loaded.');
  }
  if (!menuToggle) {
    console.log('⚠️  Menu toggle not found. Check if header.html is loaded.');
  }
  if (relevantLinks.length === 0) {
    console.log('⚠️  No visibility fix CSS files detected. Check if they are included in head.');
  }
}

// Auto-run test when script loads
testVisibilityFixes();

// Make function available globally for manual testing
window.testVisibilityFixes = testVisibilityFixes;
