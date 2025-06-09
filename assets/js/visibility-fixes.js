---
---
/**
 * Visibility Fixes for Tech Stack Elements
 * Ensures terraform logo and skill levels are visible after page load
 */
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Fix Terraform Logo Visibility
  function fixTerraformLogo() {
    const terraformLogos = document.querySelectorAll('.terraform-logo');
    terraformLogos.forEach(logo => {
      // Force visibility
      logo.style.opacity = '1';
      logo.style.visibility = 'visible';
      logo.style.display = 'flex';
      
      // Ensure the ::before pseudo-element is working
      logo.setAttribute('data-logo-loaded', 'true');
    });
    
    if (terraformLogos.length > 0) {
      console.log(`Fixed ${terraformLogos.length} Terraform logo(s)`);
    }
  }
  
  // 2. Fix Skill Level Visibility
  function fixSkillLevels() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
      // Force visibility for container
      skillLevel.style.opacity = '1';
      skillLevel.style.visibility = 'visible';
      skillLevel.style.display = 'flex';
      
      // Force visibility for skill dots
      const skillDots = skillLevel.querySelectorAll('.skill-dot');
      skillDots.forEach(dot => {
        dot.style.opacity = dot.classList.contains('filled') ? '1' : '0.3';
        dot.style.visibility = 'visible';
        dot.style.display = 'inline-block';
      });
    });
    
    if (skillLevels.length > 0) {
      console.log(`Fixed ${skillLevels.length} skill level indicator(s)`);
    }
  }
  
  // 3. Fix Mobile Navigation
  function fixMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle) {
      // Ensure menu toggle is visible on mobile
      if (window.innerWidth <= 768) {
        menuToggle.style.display = 'flex';
        menuToggle.style.opacity = '1';
        menuToggle.style.visibility = 'visible';
        menuToggle.style.zIndex = '1001';
      }
    }
    
    if (navList) {
      // Ensure nav list has proper z-index but is hidden by default
      navList.style.zIndex = '1000';
      if (!navList.classList.contains('show')) {
        navList.style.opacity = '0';
        navList.style.maxHeight = '0';
        navList.style.visibility = 'hidden';
      }
    }
    
    if (menuToggle && navList) {
      console.log('Fixed mobile navigation elements');
    }
  }
    // 4. Apply fixes immediately and after a short delay
  function applyFixes() {
    fixTerraformLogo();
    fixSkillLevels();
    fixMobileNavigation();
    
    // Fix animation and intersection observer issues
    fixAnimationIssues();
  }
  
  // 5. Fix animation and intersection observer issues
  function fixAnimationIssues() {
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
      // Remove problematic classes
      item.classList.remove('hidden');
      item.classList.add('visible');
      
      // Force visibility styles
      item.style.opacity = '1';
      item.style.visibility = 'visible';
      item.style.transform = 'translateY(0)';
      item.style.animation = 'none';
      
      // Remove any animation delays that might be causing issues
      item.style.animationDelay = '0s';
    });
    
    if (techItems.length > 0) {
      console.log(`Fixed ${techItems.length} tech item animation(s)`);
    }
  }
  
  // Apply fixes immediately
  applyFixes();
  
  // Apply fixes again after a short delay to handle any late-loading content
  setTimeout(applyFixes, 100);
  
  // Apply fixes when theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        setTimeout(applyFixes, 50);
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
  
  // Apply fixes on window resize for mobile navigation
  window.addEventListener('resize', function() {
    setTimeout(fixMobileNavigation, 100);
  });
  
  console.log('Visibility fixes script loaded and initialized');
});
