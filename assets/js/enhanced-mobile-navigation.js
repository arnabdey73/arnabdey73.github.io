/**
 * Mobile Navigation Enhancement - June 2025
 * Ensures proper dropdown behavior for mobile navigation menu
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 Mobile Navigation: Initializing enhanced mobile menu...');
  
  // Get navigation elements
  const menuToggle = document.getElementById('menu-toggle-mobile');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('.top-nav');
  
  if (!menuToggle || !navMenu) {
    console.warn('⚠️ Mobile Navigation: Required elements not found');
    return;
  }
  
  // Position the menu dropdown properly
  function positionMenu() {
    if (window.innerWidth <= 768 && header) {
      const headerRect = header.getBoundingClientRect();
      // Position menu right below the header
      navMenu.style.top = `${headerRect.bottom}px`;
      navMenu.style.position = 'fixed';
      navMenu.style.width = '100%';
    } else {
      navMenu.style.top = '';
      navMenu.style.position = '';
      navMenu.style.width = '';
    }
  }
  
  // Toggle menu function
  function toggleMenu() {
    positionMenu();
    
    const isOpen = navMenu.classList.contains('show');
    const newState = !isOpen;
    
    // Toggle menu visibility
    navMenu.classList.toggle('show', newState);
    
    // Toggle active class on button
    menuToggle.classList.toggle('active', newState);
    
    // Update ARIA attributes
    menuToggle.setAttribute('aria-expanded', newState);
    
    // Change button icon
    const iconElement = menuToggle.querySelector('i');
    if (iconElement) {
      if (newState) {
        iconElement.className = 'fas fa-times';
        menuToggle.setAttribute('title', 'Close site navigation');
      } else {
        iconElement.className = 'fas fa-bars';
        menuToggle.setAttribute('title', 'Open site navigation');
      }
    }
    
    console.log(`📱 Mobile Navigation: Menu ${newState ? 'opened' : 'closed'}`);
  }
  
  // Add click event to menu toggle
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
  });
  
  // Make navigation links work properly
  const navLinks = document.querySelectorAll('#nav-menu li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Get the href attribute
      const href = this.getAttribute('href');
      
      // Close the menu
      navMenu.classList.remove('show');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      
      // Change button icon back to bars
      const iconElement = menuToggle.querySelector('i');
      if (iconElement) {
        iconElement.className = 'fas fa-bars';
      }
      
      // Navigate to the page (don't prevent default)
      // The default navigation will happen naturally
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu.classList.contains('show') && 
        !event.target.closest('#menu-toggle-mobile') && 
        !event.target.closest('#nav-menu')) {
      toggleMenu();
    }
  });
  
  // Close menu when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navMenu.classList.contains('show')) {
      toggleMenu();
    }
  });
  
  // Reposition menu on resize
  window.addEventListener('resize', function() {
    if (navMenu.classList.contains('show')) {
      positionMenu();
    }
  });
  
  // Fix navigation when scrolling
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    // Only do this on mobile
    if (window.innerWidth <= 768) {
      if (st > lastScrollTop && st > 50) {
        // Scrolling down
        header.classList.add('nav-hidden');
        
        // Close menu when scrolling down
        if (navMenu.classList.contains('show')) {
          toggleMenu();
        }
      } else {
        // Scrolling up
        header.classList.remove('nav-hidden');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }
  });
  
  console.log('✅ Mobile Navigation: Enhancement initialized');
});
