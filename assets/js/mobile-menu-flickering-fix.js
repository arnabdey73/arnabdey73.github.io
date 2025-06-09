// Mobile Menu Flickering Fix - Single Event Listener Approach
// This fixes the flickering issue by consolidating all mobile menu functionality

(function() {
    'use strict';
    
    console.log('🔧 Mobile Menu Flickering Fix: Initializing...');
    
    let mobileMenuInitialized = false;
    
    function initializeMobileMenuFix() {
        if (mobileMenuInitialized) {
            console.log('⚠️ Mobile menu already initialized, skipping...');
            return;
        }
        
        // Remove any existing event listeners to prevent conflicts
        const existingToggles = document.querySelectorAll('.menu-toggle');
        existingToggles.forEach(toggle => {
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
        });
        
        // Create or find mobile toggle
        let mobileToggle = document.querySelector('.menu-toggle');
        const topNav = document.querySelector('.top-nav');
        const navList = document.querySelector('.nav-list');
        
        if (!mobileToggle && topNav) {
            console.log('🔧 Creating new mobile toggle...');
            mobileToggle = document.createElement('button');
            mobileToggle.className = 'menu-toggle';
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
            mobileToggle.setAttribute('aria-expanded', 'false');
            
            // Insert at the beginning of top-nav
            topNav.insertBefore(mobileToggle, topNav.firstChild);
        }
        
        if (!mobileToggle || !navList) {
            console.error('❌ Required elements not found');
            return;
        }
        
        // Apply enhanced mobile toggle styles
        const enhancedStyles = `
            .menu-toggle {
                display: none !important;
                position: relative !important;
                z-index: 1001 !important;
                background: linear-gradient(135deg, #0078D4, #106ebe) !important;
                color: white !important;
                border: none !important;
                border-radius: 8px !important;
                padding: 12px 15px !important;
                font-size: 18px !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
                box-shadow: 0 4px 12px rgba(0, 120, 212, 0.3) !important;
                min-width: 50px !important;
                min-height: 50px !important;
                align-items: center !important;
                justify-content: center !important;
            }
            
            .menu-toggle:hover {
                background: linear-gradient(135deg, #106ebe, #005a9e) !important;
                transform: translateY(-2px) !important;
                box-shadow: 0 6px 20px rgba(0, 120, 212, 0.4) !important;
            }
            
            .menu-toggle:active {
                transform: translateY(0) !important;
                transition: transform 0.1s ease !important;
            }
            
            @media (max-width: 768px) {
                .menu-toggle {
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
                
                .nav-list {
                    display: none !important;
                    position: absolute !important;
                    top: 100% !important;
                    left: 0 !important;
                    right: 0 !important;
                    background: linear-gradient(135deg, #1a1a1a, #2a2a2a) !important;
                    border-radius: 0 0 12px 12px !important;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
                    backdrop-filter: blur(10px) !important;
                    border-top: 2px solid #0078D4 !important;
                    z-index: 1000 !important;
                    padding: 20px 0 !important;
                    flex-direction: column !important;
                    gap: 15px !important;
                }
                
                .nav-list.mobile-nav-open {
                    display: flex !important;
                    animation: slideDownFade 0.3s ease forwards !important;
                }
                
                .nav-list li {
                    margin: 0 !important;
                    padding: 8px 25px !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                }
                
                .nav-list li:last-child {
                    border-bottom: none !important;
                }
                
                .nav-list a {
                    color: #e6e6e6 !important;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    display: block !important;
                    padding: 10px 0 !important;
                }
                
                .nav-list a:hover {
                    color: #0078D4 !important;
                    transform: translateX(10px) !important;
                }
            }
            
            @keyframes slideDownFade {
                0% {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        
        // Apply styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = enhancedStyles;
        document.head.appendChild(styleSheet);
        
        // Single consolidated event listener - no conflicts
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('📱 Mobile menu toggle clicked');
            
            const isOpen = navList.classList.contains('mobile-nav-open');
            
            if (isOpen) {
                // Close menu
                navList.classList.remove('mobile-nav-open');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                console.log('📱 Menu closed');
            } else {
                // Open menu
                navList.classList.add('mobile-nav-open');
                mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
                mobileToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
                console.log('📱 Menu opened');
            }
        });
        
        // Close menu when clicking outside (single listener)
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.top-nav') && navList.classList.contains('mobile-nav-open')) {
                navList.classList.remove('mobile-nav-open');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                console.log('📱 Menu closed (click outside)');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navList.classList.contains('mobile-nav-open')) {
                navList.classList.remove('mobile-nav-open');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                console.log('📱 Menu closed (escape key)');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navList.classList.contains('mobile-nav-open')) {
                navList.classList.remove('mobile-nav-open');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                console.log('📱 Menu closed (window resize)');
            }
        });
        
        mobileMenuInitialized = true;
        console.log('✅ Mobile Menu Flickering Fix: Complete');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMobileMenuFix);
    } else {
        initializeMobileMenuFix();
    }
    
    // Backup initialization after slight delay
    setTimeout(initializeMobileMenuFix, 500);
    
})();
