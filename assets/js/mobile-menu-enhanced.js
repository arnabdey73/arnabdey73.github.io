/**
 * Enhanced Mobile Menu Functionality
 * Ensures mobile menu toggle is visible and navigation works properly
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('🔧 Enhanced Mobile Menu initialization starting...');
  
  // Create mobile menu toggle if it doesn't exist
  ensureMobileMenuToggle();
  
  // Setup mobile navigation functionality
  setupMobileNavigation();
  
  // Fix navigation visibility issues
  fixNavigationVisibility();
  
  console.log('✅ Enhanced Mobile Menu initialization complete');
});

function ensureMobileMenuToggle() {
  let menuToggle = document.querySelector('.menu-toggle');
  const topNav = document.querySelector('.top-nav');
  
  if (!menuToggle && topNav) {
    console.log('🔧 Creating missing mobile menu toggle...');
    
    // Create menu toggle button
    menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    
    // Insert at the beginning of top-nav
    topNav.insertBefore(menuToggle, topNav.firstChild);
    console.log('✅ Mobile menu toggle created');
  }
  
  // Ensure menu toggle is visible on mobile
  if (menuToggle) {
    menuToggle.style.display = 'none'; // Hidden on desktop
    
    // Show on mobile screens
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMobileView(e) {
      if (e.matches) {
        menuToggle.style.display = 'flex';
        menuToggle.style.visibility = 'visible';
        menuToggle.style.opacity = '1';
      } else {
        menuToggle.style.display = 'none';
      }
    }
    
    mediaQuery.addListener(handleMobileView);
    handleMobileView(mediaQuery); // Initial check
  }
}

function setupMobileNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (!menuToggle || !navList) {
    console.warn('❌ Mobile navigation elements not found');
    return;
  }
  
  console.log('🔧 Setting up mobile navigation...');
  
  // Setup toggle functionality
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const isOpen = navList.classList.contains('mobile-nav-open');
    
    if (isOpen) {
      // Close menu
      navList.classList.remove('mobile-nav-open');
      navList.style.display = 'none';
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      // Open menu
      navList.classList.add('mobile-nav-open');
      navList.style.display = 'flex';
      menuToggle.innerHTML = '<i class="fas fa-times"></i>';
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    
    console.log('📱 Mobile menu toggled:', !isOpen ? 'open' : 'closed');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.top-nav')) {
      navList.classList.remove('mobile-nav-open');
      navList.style.display = 'none';
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking on nav links
  const navLinks = navList.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navList.classList.remove('mobile-nav-open');
      navList.style.display = 'none';
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navList.classList.remove('mobile-nav-open');
      navList.style.display = '';
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

function fixNavigationVisibility() {
  console.log('🔧 Fixing navigation visibility...');
  
  const navList = document.querySelector('.nav-list');
  const topNav = document.querySelector('.top-nav');
  
  if (navList) {
    // Ensure navigation is visible on desktop
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    function handleDesktopView(e) {
      if (e.matches) {
        navList.style.display = 'flex';
        navList.style.visibility = 'visible';
        navList.style.opacity = '1';
        navList.classList.remove('mobile-nav-open');
      } else {
        navList.style.display = 'none';
        navList.classList.remove('mobile-nav-open');
      }
    }
    
    mediaQuery.addListener(handleDesktopView);
    handleDesktopView(mediaQuery); // Initial check
  }
  
  if (topNav) {
    // Ensure top nav is properly visible
    topNav.style.visibility = 'visible';
    topNav.style.opacity = '1';
    topNav.style.display = 'flex';
  }
  
  console.log('✅ Navigation visibility fixed');
}

// Add mobile-specific styles dynamically if needed
function injectMobileStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Enhanced mobile menu styles */
    @media (max-width: 768px) {
      .menu-toggle {
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 1001 !important;
      }
      
      .nav-list {
        display: none !important;
      }
      
      .nav-list.mobile-nav-open {
        display: flex !important;
        flex-direction: column !important;
        position: fixed !important;
        top: 60px !important;
        left: 0 !important;
        right: 0 !important;
        background: var(--bg-color, #1a1a1a) !important;
        padding: 1rem !important;
        z-index: 1000 !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
      }
    }
    
    @media (min-width: 769px) {
      .menu-toggle {
        display: none !important;
      }
      
      .nav-list {
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Inject styles when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectMobileStyles);
} else {
  injectMobileStyles();
}
