/**
 * Mobile Navigation Handling - Enhanced version
 * Improved mobile navigation menu with better toggle functionality and accessibility
 */
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  const body = document.body;
  
  if (!menuToggle || !navList) {
    console.error("Mobile nav elements not found");
    return;
  }

  // Initialize ARIA attributes
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-controls', 'mobile-nav-list');
  navList.setAttribute('id', 'mobile-nav-list');
  
  // Toggle mobile navigation with enhanced functionality
  menuToggle.addEventListener('click', function(event) {
    const isCurrentlyOpen = navList.classList.contains('show');
    
    // Toggle menu classes
    navList.classList.toggle('show');
    const isExpanded = navList.classList.contains('show');
    
    // Update ARIA attributes
    this.setAttribute('aria-expanded', isExpanded);
    this.classList.toggle('active', isExpanded);
    
    // Prevent body scroll when menu is open
    if (isExpanded) {
      body.style.overflow = 'hidden';
      // Focus trap - focus first menu item
      const firstLink = navList.querySelector('a');
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100);
      }
    } else {
      body.style.overflow = '';
    }
    
    // Prevent default behavior and propagation
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Mobile menu toggled:', isExpanded ? 'open' : 'closed');
  });
  
  // Close mobile navigation when clicking outside
  document.addEventListener('click', function(event) {
    if (
      navList.classList.contains('show') && 
      !event.target.closest('.nav-list') && 
      !event.target.closest('.menu-toggle') &&
      !event.target.closest('.mobile-menu-toggle')
    ) {
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      body.style.overflow = '';
    }
  });

  // Enhanced keyboard navigation
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navList.classList.contains('show')) {
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      body.style.overflow = '';
      menuToggle.focus(); // Return focus to toggle button
    }
  });
  
  // Close mobile navigation when window resizes beyond mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navList.classList.contains('show')) {
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      body.style.overflow = '';
    }
  });
  
  // Add active class to current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-list a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (
      linkPath === currentPath || 
      (linkPath !== '/' && currentPath.startsWith(linkPath)) ||
      (linkPath === '/' && currentPath === '/')
    ) {
      link.classList.add('active');
    }
  });
});
