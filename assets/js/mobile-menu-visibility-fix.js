// Mobile Menu Visibility and Functionality Enhancement
// Ensures mobile menu toggle is always visible and functional

(function() {
    'use strict';
    
    console.log('Mobile Menu Visibility Fix: Loading...');
    
    function initializeMobileMenu() {
        // Force create mobile toggle if it doesn't exist
        let mobileToggle = document.querySelector('.menu-toggle');
        let mobileContainer = document.querySelector('.mobile-menu-toggle');
        
        if (!mobileToggle && window.innerWidth <= 768) {
            console.log('Creating missing mobile toggle button...');
            
            // Create mobile toggle container if missing
            if (!mobileContainer) {
                mobileContainer = document.createElement('div');
                mobileContainer.className = 'mobile-menu-toggle';
                
                const topNav = document.querySelector('.top-nav');
                if (topNav) {
                    topNav.insertBefore(mobileContainer, topNav.firstChild);
                }
            }
            
            // Create the actual toggle button
            mobileToggle = document.createElement('button');
            mobileToggle.className = 'menu-toggle';
            mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            mobileContainer.appendChild(mobileToggle);
        }
        
        // Force visibility styles on mobile
        if (mobileToggle && window.innerWidth <= 768) {
            console.log('Applying mobile toggle visibility fixes...');
            
            // Apply critical visibility styles
            mobileToggle.style.cssText = `
                display: flex !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: relative !important;
                z-index: 1000 !important;
                background-color: #0078D4 !important;
                color: white !important;
                border: none !important;
                width: 40px !important;
                height: 40px !important;
                border-radius: 6px !important;
                cursor: pointer !important;
                justify-content: center !important;
                align-items: center !important;
                font-size: 1.2rem !important;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
                margin: 0 !important;
                padding: 0 !important;
            `;
            
            // Ensure container is visible
            if (mobileContainer) {
                mobileContainer.style.cssText = `
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    position: relative !important;
                    z-index: 1000 !important;
                `;
            }
        }
        
        // Setup menu toggle functionality
        if (mobileToggle) {
            setupMenuToggle(mobileToggle);
        }
        
        // Setup navigation list behavior
        setupNavigationList();
    }
    
    function setupMenuToggle(toggle) {
        console.log('Setting up mobile menu toggle functionality...');
        
        // Remove existing listeners to prevent duplicates
        toggle.removeEventListener('click', handleToggleClick);
        
        // Add click handler
        toggle.addEventListener('click', handleToggleClick);
        
        // Add visual feedback
        toggle.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        toggle.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        toggle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    function handleToggleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Mobile menu toggle clicked');
        
        const navList = document.querySelector('.nav-list');
        const toggle = e.currentTarget;
        
        if (navList) {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;
            
            // Update aria-expanded
            toggle.setAttribute('aria-expanded', newState.toString());
            
            // Toggle nav list
            if (newState) {
                navList.classList.add('show');
                navList.style.cssText = `
                    display: flex !important;
                    position: fixed !important;
                    top: 60px !important;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100% !important;
                    background-color: var(--header-bg, #23272f) !important;
                    flex-direction: column !important;
                    z-index: 999 !important;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3) !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    max-height: 400px !important;
                    overflow-y: auto !important;
                    transform: translateY(0) !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                `;
                
                // Style nav items for mobile
                const navItems = navList.querySelectorAll('li');
                navItems.forEach(item => {
                    item.style.cssText = `
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                    `;
                    
                    const link = item.querySelector('a');
                    if (link) {
                        link.style.cssText = `
                            display: block !important;
                            width: 100% !important;
                            padding: 15px 20px !important;
                            text-align: center !important;
                            color: white !important;
                            text-decoration: none !important;
                            font-size: 1rem !important;
                            transition: background-color 0.3s ease !important;
                        `;
                        
                        link.addEventListener('mouseenter', function() {
                            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        });
                        
                        link.addEventListener('mouseleave', function() {
                            this.style.backgroundColor = 'transparent';
                        });
                    }
                });
                
                // Update toggle icon
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-times';
                }
                
                console.log('Mobile menu opened');
            } else {
                navList.classList.remove('show');
                navList.style.transform = 'translateY(-100%)';
                navList.style.opacity = '0';
                navList.style.visibility = 'hidden';
                
                // Update toggle icon
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
                
                console.log('Mobile menu closed');
            }
        }
    }
    
    function setupNavigationList() {
        const navList = document.querySelector('.nav-list');
        if (navList && window.innerWidth <= 768) {
            // Ensure initial mobile state
            navList.style.cssText = `
                transform: translateY(-100%) !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transition: all 0.3s ease !important;
            `;
        }
    }
    
    function handleResize() {
        const toggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');
        
        if (window.innerWidth > 768) {
            // Desktop view
            if (toggle) {
                toggle.style.display = 'none';
            }
            if (navList) {
                navList.style.cssText = `
                    display: flex !important;
                    position: static !important;
                    transform: none !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    flex-direction: row !important;
                    background: transparent !important;
                    box-shadow: none !important;
                    z-index: auto !important;
                `;
                navList.classList.remove('show');
            }
        } else {
            // Mobile view
            initializeMobileMenu();
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMobileMenu);
    } else {
        initializeMobileMenu();
    }
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Reinitialize on any dynamic content changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && window.innerWidth <= 768) {
                setTimeout(initializeMobileMenu, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    console.log('Mobile Menu Visibility Fix: Initialized');
})();
