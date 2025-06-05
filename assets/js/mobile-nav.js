/**
 * Mobile Navigation Handling
 * Enhanced mobile navigation menu with smooth transitions and improved UX
 */
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (!menuToggle || !navList) return;
  
  // Toggle mobile navigation
  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
    this.setAttribute('aria-expanded', navList.classList.contains('show'));
    
    // Swap icon between bars and times
    const icon = this.querySelector('i');
    if (navList.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
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
      
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  // Close mobile navigation when window resizes beyond mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navList.classList.contains('show')) {
      navList.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
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
