/**
 * Enhanced Tech Icon Repair System
 * Fixes broken icons and ensures proper display with technology-specific styling
 */

(function() {
    'use strict';
    
    console.log('🔧 Enhanced Tech Icon Repair: Starting...');
    
    const techIconEnhancements = {
        // Technology-specific icon configurations
        icons: {
            'ubuntu': { 
                fallback: 'fab fa-ubuntu',
                color: '#E95420',
                bgColor: 'linear-gradient(135deg, #E95420, #D44414)'
            },
            'red hat': { 
                fallback: 'fab fa-redhat',
                color: '#EE0000',
                bgColor: 'linear-gradient(135deg, #EE0000, #CC0000)'
            },
            'windows': { 
                fallback: 'fab fa-windows',
                color: '#0078D6',
                bgColor: 'linear-gradient(135deg, #0078D6, #106ebe)'
            },
            'vmware': { 
                fallback: 'fas fa-server',
                color: '#607078',
                bgColor: 'linear-gradient(135deg, #607078, #4d5a62)'
            },
            'bash': { 
                fallback: 'fas fa-terminal',
                color: '#4EAA25',
                bgColor: 'linear-gradient(135deg, #4EAA25, #3e8b1e)'
            },
            'python': { 
                fallback: 'fab fa-python',
                color: '#3776AB',
                bgColor: 'linear-gradient(135deg, #3776AB, #2d5d8f)'
            },
            'powershell': { 
                fallback: 'fas fa-terminal',
                color: '#012456',
                bgColor: 'linear-gradient(135deg, #012456, #001a3f)'
            },
            'javascript': { 
                fallback: 'fab fa-js',
                color: '#F7DF1E',
                bgColor: 'linear-gradient(135deg, #F7DF1E, #e6ca19)'
            },
            'azure': { 
                fallback: 'fab fa-microsoft',
                color: '#0078D4',
                bgColor: 'linear-gradient(135deg, #0078D4, #106ebe)'
            },
            'aws': { 
                fallback: 'fab fa-aws',
                color: '#FF9900',
                bgColor: 'linear-gradient(135deg, #FF9900, #e6890a)'
            },
            'openstack': { 
                fallback: 'fas fa-cloud',
                color: '#DA1A32',
                bgColor: 'linear-gradient(135deg, #DA1A32, #b71527)'
            },
            'google cloud': { 
                fallback: 'fab fa-google',
                color: '#4285F4',
                bgColor: 'linear-gradient(135deg, #4285F4, #3367d6)'
            },
            'terraform': { 
                fallback: 'fas fa-cube',
                color: '#623CE4',
                bgColor: 'linear-gradient(135deg, #623CE4, #4d2db3)',
                special: 'terraform-logo'
            },
            'bicep': { 
                fallback: 'fab fa-microsoft',
                color: '#0078D4',
                bgColor: 'linear-gradient(135deg, #0078D4, #106ebe)'
            },
            'ansible': { 
                fallback: 'fab fa-redhat',
                color: '#EE0000',
                bgColor: 'linear-gradient(135deg, #EE0000, #CC0000)'
            },
            'azure devops': { 
                fallback: 'fab fa-microsoft',
                color: '#0078D4',
                bgColor: 'linear-gradient(135deg, #0078D4, #106ebe)'
            },
            'jenkins': { 
                fallback: 'fab fa-jenkins',
                color: '#D33833',
                bgColor: 'linear-gradient(135deg, #D33833, #b12e29)'
            },
            'github actions': { 
                fallback: 'fab fa-github',
                color: '#24292E',
                bgColor: 'linear-gradient(135deg, #24292E, #1a1e22)'
            },
            'gitlab ci': { 
                fallback: 'fab fa-gitlab',
                color: '#FC6D26',
                bgColor: 'linear-gradient(135deg, #FC6D26, #e85a1a)'
            },
            'docker': { 
                fallback: 'fab fa-docker',
                color: '#2496ED',
                bgColor: 'linear-gradient(135deg, #2496ED, #1e7abd)'
            },
            'kubernetes': { 
                fallback: 'fas fa-dharmachakra',
                color: '#326CE5',
                bgColor: 'linear-gradient(135deg, #326CE5, #2557b8)'
            },
            'grafana': { 
                fallback: 'fas fa-chart-line',
                color: '#F46800',
                bgColor: 'linear-gradient(135deg, #F46800, #d85600)'
            },
            'prometheus': { 
                fallback: 'fas fa-fire',
                color: '#E6522C',
                bgColor: 'linear-gradient(135deg, #E6522C, #d1401d)'
            },
            'nagios': { 
                fallback: 'fas fa-eye',
                color: '#009639',
                bgColor: 'linear-gradient(135deg, #009639, #007d2e)'
            },
            'entra id': { 
                fallback: 'fas fa-shield-alt',
                color: '#0078D4',
                bgColor: 'linear-gradient(135deg, #0078D4, #106ebe)'
            },
            'iam': { 
                fallback: 'fas fa-user-shield',
                color: '#FF9900',
                bgColor: 'linear-gradient(135deg, #FF9900, #e6890a)'
            },
            'key vault': { 
                fallback: 'fas fa-lock',
                color: '#0078D4',
                bgColor: 'linear-gradient(135deg, #0078D4, #106ebe)'
            },
            'ssl/tls': { 
                fallback: 'fas fa-certificate',
                color: '#4CAF50',
                bgColor: 'linear-gradient(135deg, #4CAF50, #43a047)'
            },
            'github copilot': { 
                fallback: 'fab fa-github',
                color: '#24292E',
                bgColor: 'linear-gradient(135deg, #24292E, #1a1e22)'
            },
            'chatgpt': { 
                fallback: 'fas fa-robot',
                color: '#10A37F',
                bgColor: 'linear-gradient(135deg, #10A37F, #0e8f6f)'
            }
        },
        
        // Enhanced repair function
        repairTechIcons: function() {
            console.log('🔧 Starting tech icon repair process...');
            
            const techItems = document.querySelectorAll('.tech-item');
            let repairedCount = 0;
            
            techItems.forEach((item, index) => {
                const iconElement = item.querySelector('i, .terraform-logo, [class*="logo"]');
                const textElement = item.querySelector('span');
                
                if (!textElement) return;
                
                const techName = textElement.textContent.toLowerCase().trim();
                const iconConfig = this.icons[techName];
                
                if (iconElement && iconConfig) {
                    // Apply enhanced styling
                    this.enhanceIcon(iconElement, iconConfig, techName);
                    
                    // Ensure fallback icon classes
                    if (!iconElement.classList.contains('terraform-logo')) {
                        iconElement.className = iconConfig.fallback + ' fa-3x';
                    }
                    
                    repairedCount++;
                    console.log(`✅ Enhanced icon for: ${techName}`);
                } else {
                    console.warn(`⚠️ No configuration found for: ${techName}`);
                }
                
                // Add enhanced hover effects
                this.addHoverEffects(item, iconConfig);
            });
            
            console.log(`✅ Tech icon repair complete: ${repairedCount} icons enhanced`);
        },
        
        // Enhanced icon styling
        enhanceIcon: function(iconElement, config, techName) {
            const enhancedStyle = `
                color: ${config.color} !important;
                text-shadow: 0 0 10px ${config.color}40 !important;
                filter: drop-shadow(0 4px 8px ${config.color}30) !important;
                transition: all 0.3s ease !important;
                font-size: 32px !important;
                width: 32px !important;
                height: 32px !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
            `;
            
            iconElement.style.cssText = enhancedStyle;
            
            // Special handling for Terraform logo
            if (config.special === 'terraform-logo') {
                iconElement.style.background = config.bgColor;
                iconElement.style.borderRadius = '8px';
                iconElement.style.padding = '4px';
            }
        },
        
        // Add enhanced hover effects
        addHoverEffects: function(techItem, config) {
            if (!config) return;
            
            const originalTransform = techItem.style.transform;
            
            techItem.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                
                const icon = this.querySelector('i, .terraform-logo, [class*="logo"]');
                if (icon) {
                    icon.style.color = config.color;
                    icon.style.textShadow = `0 0 20px ${config.color}60`;
                    icon.style.filter = `drop-shadow(0 6px 12px ${config.color}40)`;
                }
            });
            
            techItem.addEventListener('mouseleave', function() {
                this.style.transform = originalTransform || '';
                
                const icon = this.querySelector('i, .terraform-logo, [class*="logo"]');
                if (icon) {
                    icon.style.textShadow = `0 0 10px ${config.color}40`;
                    icon.style.filter = `drop-shadow(0 4px 8px ${config.color}30)`;
                }
            });
        },
        
        // Force visibility of all tech icons
        forceIconVisibility: function() {
            const allIcons = document.querySelectorAll('.tech-item i, .tech-item [class*="logo"]');
            
            allIcons.forEach(icon => {
                icon.style.cssText += `
                    visibility: visible !important;
                    opacity: 1 !important;
                    display: inline-flex !important;
                    font-family: "Font Awesome 6 Free", "Font Awesome 6 Brands" !important;
                    font-weight: 900 !important;
                `;
            });
            
            console.log(`🔧 Forced visibility for ${allIcons.length} icons`);
        },
        
        // Apply global icon improvements
        applyGlobalIconCSS: function() {
            const globalIconCSS = `
                <style id="enhanced-tech-icons">
                    .tech-item {
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                        border-radius: 12px !important;
                        padding: 12px !important;
                        position: relative !important;
                        overflow: visible !important;
                    }
                    
                    .tech-item:hover {
                        background: rgba(255, 255, 255, 0.05) !important;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
                    }
                    
                    .tech-item i, .tech-item [class*="logo"] {
                        font-size: 32px !important;
                        width: 32px !important;
                        height: 32px !important;
                        line-height: 32px !important;
                        margin-bottom: 8px !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    .tech-item span {
                        font-size: 14px !important;
                        font-weight: 600 !important;
                        color: #e6e6e6 !important;
                        margin-top: 8px !important;
                        text-align: center !important;
                        transition: color 0.3s ease !important;
                    }
                    
                    .tech-item:hover span {
                        color: #ffffff !important;
                    }
                    
                    .skill-level {
                        margin-top: 6px !important;
                        display: flex !important;
                        justify-content: center !important;
                        gap: 3px !important;
                    }
                    
                    .skill-dot {
                        width: 5px !important;
                        height: 5px !important;
                        border-radius: 50% !important;
                        background: rgba(255, 255, 255, 0.3) !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    .skill-dot.filled {
                        background: #0078D4 !important;
                        box-shadow: 0 0 8px rgba(0, 120, 212, 0.5) !important;
                    }
                    
                    /* FontAwesome fallback */
                    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
                </style>
            `;
            
            // Remove existing style if present
            const existingStyle = document.getElementById('enhanced-tech-icons');
            if (existingStyle) {
                existingStyle.remove();
            }
            
            document.head.insertAdjacentHTML('beforeend', globalIconCSS);
            console.log('✅ Global icon CSS applied');
        },
        
        // Initialize all enhancements
        init: function() {
            console.log('🚀 Enhanced Tech Icon Repair: Initializing...');
            
            this.applyGlobalIconCSS();
            this.forceIconVisibility();
            this.repairTechIcons();
            
            // Re-run repair after short delay to catch any late-loading content
            setTimeout(() => {
                this.repairTechIcons();
                console.log('🔄 Secondary icon repair completed');
            }, 1000);
            
            console.log('✅ Enhanced Tech Icon Repair: Complete');
        }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => techIconEnhancements.init());
    } else {
        techIconEnhancements.init();
    }
    
    // Backup initialization
    setTimeout(() => techIconEnhancements.init(), 500);
    
    // Make available globally for debugging
    window.techIconEnhancements = techIconEnhancements;
    
})();
