/**
 * Mobile Navigation Handling - Simplified version
 * Enhanced mobile navigation menu with smooth transitions
 */
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (!menuToggle || !navList) {
    console.error("Mobile nav elements not found");
    return;
  }
  
  // Toggle mobile navigation
  menuToggle.addEventListener('click', function(event) {
    // Toggle menu classes
    navList.classList.toggle('show');
    const isExpanded = navList.classList.contains('show');
    this.setAttribute('aria-expanded', isExpanded);
    this.classList.toggle('active', isExpanded);
    
    // Prevent default behavior and propagation
    event.preventDefault();
    event.stopPropagation();
  });
  
  // Close mobile navigation when clicking outside
  document.addEventListener('click', function(event) {
    if (
      navList.classList.contains('show') && 
      !event.target.closest('.nav-list') && 
      !event.target.closest('.menu-toggle')
    ) {
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    }
  });
  
  // Close mobile navigation when window resizes beyond mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navList.classList.contains('show')) {
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
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
