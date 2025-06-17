/**
 * Devicon Tech Icons Integration - June 2025
 * Replaces existing tech icons with brand-appropriate ones from devicon.dev
 */

// Set a global flag to indicate this script has been loaded
window.deviconIntegrationLoaded = true;

// Execute immediately
(function() {
  console.log('🔄 Devicon Tech Icons: Loading Immediately...');
  
  // Load devicon CSS
  loadDeviconCSS();
  
  // Apply devicon icons right away
  applyDeviconIcons();
  
  // Fix tech icons visibility
  fixTechIconsVisibility();
  
  // Also run on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Devicon Tech Icons: DOM Content Loaded');
    applyDeviconIcons();
    fixTechIconsVisibility();
    
    // Run again after a short delay to catch any late-rendered elements
    setTimeout(() => {
      applyDeviconIcons();
      fixTechIconsVisibility();
    }, 500);
    
    // And one more time after everything has settled
    setTimeout(() => {
      applyDeviconIcons();
    }, 1500);
  });
})();

// Load devicon CSS from CDN
function loadDeviconCSS() {
  if (!document.querySelector('link[href*="devicon"]')) {
    const deviconLink = document.createElement('link');
    deviconLink.rel = 'stylesheet';
    deviconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    
    // Insert at the beginning of the head for earliest possible loading
    if (document.head.firstChild) {
      document.head.insertBefore(deviconLink, document.head.firstChild);
    } else {
      document.head.appendChild(deviconLink);
    }
    
    console.log('💉 Injected Devicon CSS at top of head');
    
    // Set a flag on window to indicate devicon CSS has been loaded
    window.deviconCSSLoaded = true;
  } else {
    console.log('✅ Devicon CSS already loaded');
    window.deviconCSSLoaded = true;
  }
}

// Apply devicon icons to tech items based on their labels
// Export to window for external use
window.applyDeviconIcons = applyDeviconIcons;

function applyDeviconIcons() {
  console.log('🔍 Searching for tech items to apply devicon icons...');
  // Define comprehensive mapping of technologies to devicon classes
  const iconMapping = {
    // Cloud Platforms
    'azure': 'devicon-azure-plain colored',
    'microsoft azure': 'devicon-azure-plain colored',
    'aws': 'devicon-amazonwebservices-original colored',
    'amazon': 'devicon-amazonwebservices-original colored',
    'amazon web services': 'devicon-amazonwebservices-original colored',
    'google cloud': 'devicon-googlecloud-plain colored',
    'gcp': 'devicon-googlecloud-plain colored',
    'openstack': 'devicon-openstack-plain colored',
    'digitalocean': 'devicon-digitalocean-plain colored',
    'heroku': 'devicon-heroku-original colored',
    
    // OS & Platforms
    'ubuntu': 'devicon-ubuntu-plain colored',
    'linux': 'devicon-linux-plain colored',
    'red hat': 'devicon-redhat-plain colored',
    'redhat': 'devicon-redhat-plain colored',
    'centos': 'devicon-centos-plain colored',
    'debian': 'devicon-debian-plain colored',
    'windows': 'devicon-windows8-original colored',
    'windows server': 'devicon-windows8-original colored',
    'vmware': 'devicon-vmware-plain colored',
    'docker': 'devicon-docker-plain colored',
    'podman': 'devicon-podman-plain colored',
    
    // Languages
    'python': 'devicon-python-plain colored',
    'javascript': 'devicon-javascript-plain colored',
    'typescript': 'devicon-typescript-plain colored',
    'bash': 'devicon-bash-plain colored',
    'powershell': 'devicon-powershell-plain colored',
    'java': 'devicon-java-plain colored',
    'c#': 'devicon-csharp-plain colored',
    'csharp': 'devicon-csharp-plain colored',
    'c++': 'devicon-cplusplus-plain colored',
    'cplusplus': 'devicon-cplusplus-plain colored',
    'golang': 'devicon-go-original-wordmark colored',
    'go': 'devicon-go-original-wordmark colored',
    'rust': 'devicon-rust-plain colored',
    'php': 'devicon-php-plain colored',
    'ruby': 'devicon-ruby-plain colored',
    'scala': 'devicon-scala-plain colored',
    'swift': 'devicon-swift-plain colored',
    'kotlin': 'devicon-kotlin-plain colored',
    
    // Infrastructure as Code
    'terraform': 'devicon-terraform-plain colored',
    'ansible': 'devicon-ansible-plain colored',
    'puppet': 'devicon-puppet-plain colored',
    'chef': 'devicon-chef-plain colored',
    'kubernetes': 'devicon-kubernetes-plain colored',
    'k8s': 'devicon-kubernetes-plain colored',
    'openshift': 'devicon-openshift-plain colored',
    'helm': 'devicon-helm-plain colored',
    
    // Databases
    'mongodb': 'devicon-mongodb-plain colored',
    'mysql': 'devicon-mysql-plain colored',
    'mariadb': 'devicon-mysql-plain colored',
    'postgresql': 'devicon-postgresql-plain colored',
    'postgres': 'devicon-postgresql-plain colored',
    'redis': 'devicon-redis-plain colored',
    'cassandra': 'devicon-cassandra-plain colored',
    'oracle': 'devicon-oracle-original colored',
    'dynamodb': 'devicon-amazonwebservices-plain-wordmark colored',
    'cosmosdb': 'devicon-azure-plain colored',
    'sqlite': 'devicon-sqlite-plain colored',
    'neo4j': 'devicon-neo4j-plain colored',
    
    // Web Technologies
    'html': 'devicon-html5-plain colored',
    'html5': 'devicon-html5-plain colored',
    'css': 'devicon-css3-plain colored',
    'css3': 'devicon-css3-plain colored',
    'sass': 'devicon-sass-original colored',
    'less': 'devicon-less-plain-wordmark colored',
    'bootstrap': 'devicon-bootstrap-plain colored',
    'tailwind': 'devicon-tailwindcss-plain colored',
    'tailwindcss': 'devicon-tailwindcss-plain colored',
    'webpack': 'devicon-webpack-plain colored',
    'gulp': 'devicon-gulp-plain colored',
    'grunt': 'devicon-grunt-plain colored',
    
    // JS Frameworks and Libraries
    'react': 'devicon-react-original colored',
    'angular': 'devicon-angularjs-plain colored',
    'vue': 'devicon-vuejs-plain colored',
    'vuejs': 'devicon-vuejs-plain colored',
    'svelte': 'devicon-svelte-plain colored',
    'nodejs': 'devicon-nodejs-plain colored',
    'node.js': 'devicon-nodejs-plain colored',
    'express': 'devicon-express-original colored',
    'express.js': 'devicon-express-original colored',
    'nextjs': 'devicon-nextjs-original colored',
    'next.js': 'devicon-nextjs-original colored',
    'nuxt': 'devicon-nuxtjs-plain colored',
    'nuxt.js': 'devicon-nuxtjs-plain colored',
    'jquery': 'devicon-jquery-plain colored',
    'd3': 'devicon-d3js-plain colored',
    'd3.js': 'devicon-d3js-plain colored',
    
    // Python Frameworks
    'flask': 'devicon-flask-original colored',
    'django': 'devicon-django-plain colored',
    'fastapi': 'devicon-fastapi-plain colored',
    'pandas': 'devicon-pandas-original colored',
    'numpy': 'devicon-numpy-original colored',
    'tensorflow': 'devicon-tensorflow-original colored',
    'pytorch': 'devicon-pytorch-original colored',
    
    // .NET
    '.net': 'devicon-dot-net-plain colored',
    'dotnet': 'devicon-dot-net-plain colored',
    'dot-net': 'devicon-dot-net-plain colored',
    'aspnet': 'devicon-dot-net-plain colored',
    'asp.net': 'devicon-dot-net-plain colored',
    
    // DevOps Tools
    'git': 'devicon-git-plain colored',
    'github': 'devicon-github-original colored',
    'gitlab': 'devicon-gitlab-plain colored',
    'bitbucket': 'devicon-bitbucket-original colored',
    'jenkins': 'devicon-jenkins-plain colored',
    'circleci': 'devicon-circleci-plain colored',
    'travis': 'devicon-travis-plain colored',
    'sonarqube': 'devicon-sonarqube-plain colored',
    'jira': 'devicon-jira-plain colored',
    'grafana': 'devicon-grafana-original colored',
    'prometheus': 'devicon-prometheus-original colored',
    
    // Editors/IDEs
    'vscode': 'devicon-vscode-plain colored',
    'visual studio code': 'devicon-vscode-plain colored',
    'visual studio': 'devicon-visualstudio-plain colored',
    'intellij': 'devicon-intellij-plain colored',
    'pycharm': 'devicon-pycharm-plain colored',
    'vim': 'devicon-vim-plain colored',
    'atom': 'devicon-atom-original colored'
  };
  
  // Find all tech items using multiple selectors to be more thorough
  const techItemSelectors = [
    '.tech-item',                  // Standard class
    '.tech-category-2x2-grid .tech-item', // With grid parent
    '.tech-category .tech-item',   // With category parent
    '.tech-icons > div',           // Direct children of tech-icons
    '[class*="tech-"] > div'       // Any tech-* class children
  ];
  
  // Combine all results from different selectors
  const techItemSelector = techItemSelectors.join(', ');
  const techItems = document.querySelectorAll(techItemSelector);
  console.log(`📊 Found ${techItems.length} tech items using enhanced selectors`);
  
  let replacedCount = 0;
  let skippedCount = 0;
  
  // Set global execution flag for diagnostic purposes
  window.deviconIntegrationExecuted = true;
  
  // Log all tech items for debugging
  console.log('Tech items found:', Array.from(techItems).map(item => item.textContent.trim()));
  
  techItems.forEach((item, index) => {
    // Get text content to identify the technology
    const techText = item.textContent.toLowerCase().trim();
    let iconReplaced = false;
    
    // Try to find an exact match in our mapping
    Object.entries(iconMapping).forEach(([tech, iconClass]) => {
      if (techText.includes(tech) && !iconReplaced) {
        // Find the existing icon element
        const existingIcon = item.querySelector('i') || item.querySelector('.terraform-logo') || 
                             item.querySelector('.special-icon') || item.querySelector('div[class*="icon"]');
        
        if (existingIcon) {
          // Create a new icon with devicon
          const deviconElement = document.createElement('i');
          deviconElement.className = iconClass;
          deviconElement.setAttribute('aria-hidden', 'true');
          
          // Apply consistent styling
          deviconElement.style.fontSize = '2.5rem';
          deviconElement.style.width = '48px';
          deviconElement.style.height = '48px';
          deviconElement.style.display = 'flex';
          deviconElement.style.alignItems = 'center';
          deviconElement.style.justifyContent = 'center';
          deviconElement.style.margin = '0 auto 0.5rem auto';
          
          // Replace the existing icon
          existingIcon.parentNode.replaceChild(deviconElement, existingIcon);
          iconReplaced = true;
          replacedCount++;
          
          // Add data attribute to mark as replaced
          item.setAttribute('data-icon-replaced', 'devicon');
        }
      }
    });
  });
  
  console.log(`✅ Replaced ${replacedCount} icons with Devicon versions`);
  
  // If no replacements were made, try a more aggressive approach
  if (replacedCount === 0) {
    forceApplyIcons();
  }
  
  // Handle special cases
  handleIaCTech(); // Special handling for Infrastructure as Code tech
  handleCloudTech(); // Special handling for Cloud platforms
}

// Force apply icons even if text content isn't recognized
function forceApplyIcons() {
  console.log('⚠️ No icons replaced. Trying aggressive icon replacement...');
  
  // Common tech mapping for quick detection
  const quickMapping = {
    'Azure': 'devicon-azure-plain colored',
    'AWS': 'devicon-amazonwebservices-original colored', 
    'Terraform': 'devicon-terraform-plain colored',
    'Kubernetes': 'devicon-kubernetes-plain colored',
    'Docker': 'devicon-docker-plain colored',
    'Python': 'devicon-python-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'TypeScript': 'devicon-typescript-plain colored',
    'React': 'devicon-react-original colored',
    'Node': 'devicon-nodejs-plain colored'
  };
  
  // Find tech-item divs
  const techItems = document.querySelectorAll('.tech-item');
  let forcedCount = 0;
  
  techItems.forEach(item => {
    // Get any text content
    const text = item.innerText || item.textContent;
    
    // Find a matching tech
    let iconClass = null;
    for (const [tech, className] of Object.entries(quickMapping)) {
      if (text.includes(tech)) {
        iconClass = className;
        break;
      }
    }
    
    // If we found a match and item doesn't have a devicon already
    if (iconClass && !item.querySelector('[class*="devicon-"]')) {
      // Find existing icon
      const existingIcon = item.querySelector('i') || item.querySelector('.terraform-logo') || 
                          item.querySelector('.special-icon') || item.querySelector('div[class*="icon"]');
      
      if (existingIcon) {
        // Create new devicon
        const deviconElement = document.createElement('i');
        deviconElement.className = iconClass;
        deviconElement.setAttribute('aria-hidden', 'true');
        
        // Apply consistent styling
        deviconElement.style.cssText = 'font-size: 2.5rem; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem auto;';
        
        // Replace old icon
        existingIcon.parentNode.replaceChild(deviconElement, existingIcon);
        forcedCount++;
        
        // Mark as replaced
        item.setAttribute('data-icon-replaced', 'devicon-forced');
      }
    }
  });
  
  console.log(`🛠️ Force-replaced ${forcedCount} icons with best-guess devicon versions`);
}

// Special case function to handle IaC tech (Terraform, etc.) - Enhanced June 2025
function handleIaCTech() {
  // Comprehensive selectors to find ANY Terraform items
  const terraformSelectors = [
    '.tech-item:contains("Terraform")',
    '.tech-item span:contains("Terraform")',
    '.tech-item > .terraform-logo',
    '.tech-category-2x2-grid .tech-item:contains("Terraform")',
    '#tech-stack .tech-item:contains("Terraform")',
    '[class*="tech-"] .tech-item:contains("Terraform")',
    '[data-tech="terraform"]', 
    '[data-tech*="terraform"]'
  ];
  
  // Use jQuery-like contains selector functionality for broader detection
  function getElementsContainingText(selector, text) {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).filter(element => 
      element.textContent.toLowerCase().includes(text.toLowerCase())
    );
  }
  
  // First find all direct elements with classes
  let terraformItems = Array.from(document.querySelectorAll('.tech-item'))
    .filter(item => item.textContent.toLowerCase().includes('terraform'));
  
  // Then find elements with terraform-logo class
  const terraformLogoItems = Array.from(document.querySelectorAll('.terraform-logo'))
    .map(logo => logo.closest('.tech-item') || logo.parentElement);
  
  // Combine results and remove duplicates
  terraformItems = [...new Set([...terraformItems, ...terraformLogoItems])];
  
  console.log(`🔍 Found ${terraformItems.length} Terraform items using enhanced selectors`);
  
  terraformItems.forEach((item, index) => {
    // Create the terraform devicon with optimal styling
    const iconWrapper = document.createElement('i');
    iconWrapper.className = 'devicon-terraform-plain colored';
    iconWrapper.setAttribute('aria-hidden', 'true');
    
    // Apply correct styles inline for immediate effect
    iconWrapper.style.cssText = `
      color: #844FBA !important; 
      filter: drop-shadow(0 0 3px rgba(132, 79, 186, 0.5)) !important;
      font-size: 2.5rem !important; 
      width: 48px !important; 
      height: 48px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0 auto 0.5rem auto !important;
      visibility: visible !important;
      opacity: 1 !important;
    `;
    
    // Find and replace ANY existing terraform logo
    const existingLogo = item.querySelector('.terraform-logo') || 
                          item.querySelector('[class*="terraform"]') ||
                          item.querySelector('svg[class*="terraform"]');
                          
    if (existingLogo) {
      existingLogo.parentNode.replaceChild(iconWrapper, existingLogo);
      console.log(`✅ Replaced existing Terraform logo in item ${index+1}`);
    } else {
      // If no terraform logo, find any other icon and replace it
      const existingIcon = item.querySelector('i') || 
                           item.querySelector('[class*="fa-"]') ||
                           item.querySelector('[class*="icon"]') ||
                           item.querySelector('svg');
                           
      if (existingIcon) {
        existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
        console.log(`✅ Replaced existing icon with Terraform devicon in item ${index+1}`);
      } else {
        // If no icon at all, insert as first child
        item.insertBefore(iconWrapper, item.firstChild);
        console.log(`✅ Added new Terraform devicon to item ${index+1}`);
      }
    }
    
    // Mark as fixed with enhanced data attribute
    item.setAttribute('data-icon-replaced', 'devicon-terraform');
    item.setAttribute('data-terraform-enhanced', 'true');
    
    // Remove any label spans that might still exist
    const spans = item.querySelectorAll('span:not(.skill-dot)');
    spans.forEach(span => {
      if (span.textContent.toLowerCase().includes('terraform')) {
        span.style.display = 'none';
        span.style.visibility = 'hidden';
        span.style.opacity = '0';
        span.style.height = '0';
        span.style.width = '0';
        span.style.overflow = 'hidden';
        span.style.position = 'absolute';
        span.style.pointerEvents = 'none';
      }
    });
  });
  
  console.log(`🛠️ Fixed ${terraformItems.length} Terraform icons with enhanced Devicon versions`);
}

// Special case function to handle Cloud tech (Azure, AWS, etc.)
function handleCloudTech() {
  // Special case for Azure
  const azureItems = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
    return item.textContent.toLowerCase().includes('azure') && 
           !item.hasAttribute('data-icon-replaced');
  });
  
  azureItems.forEach(item => {
    // Create Azure devicon
    const iconWrapper = document.createElement('i');
    iconWrapper.className = 'devicon-azure-plain colored';
    iconWrapper.style.color = '#0078D4';
    iconWrapper.style.fontSize = '2.5rem';
    iconWrapper.style.width = '48px';
    iconWrapper.style.height = '48px';
    iconWrapper.style.display = 'flex';
    iconWrapper.style.alignItems = 'center';
    iconWrapper.style.justifyContent = 'center';
    iconWrapper.style.margin = '0 auto 0.5rem auto';
    iconWrapper.style.filter = 'drop-shadow(0 0 3px rgba(0, 120, 212, 0.5))';
    
    // Replace existing icon
    const existingIcon = item.querySelector('i') || item.querySelector('.azure-icon') || 
                         item.querySelector('div[class*="icon"]');
    if (existingIcon) {
      existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
    } else {
      // If no icon at all, insert as first child
      item.insertBefore(iconWrapper, item.firstChild);
    }
    
    // Mark as fixed
    item.setAttribute('data-icon-replaced', 'devicon-azure');
  });
  
  console.log(`☁️ Fixed ${azureItems.length} Azure icons with Devicon versions`);
}

// Function to fix tech icons visibility issues
function fixTechIconsVisibility() {
  // Find all devicon elements
  const deviconElements = document.querySelectorAll('[class*="devicon-"]');
  
  deviconElements.forEach(icon => {
    // Ensure visibility and opacity
    icon.style.visibility = 'visible';
    icon.style.opacity = '1';
    icon.style.display = 'flex';
    
    // Force dimensions
    if (icon.closest('.tech-item-mini')) {
      icon.style.width = '32px';
      icon.style.height = '32px';
      icon.style.fontSize = '1.6rem';
    } else if (icon.closest('.tech-item')) {
      icon.style.width = '48px';
      icon.style.height = '48px';
      icon.style.fontSize = '2.5rem';
    }
  });
  
  // Fix tech item spans (technology titles)
  document.querySelectorAll('.tech-item span:not(.skill-dot)').forEach(span => {
    span.style.display = 'block';
    span.style.visibility = 'visible';
    span.style.opacity = '1';
  });
  
  // Fix tech-item-mini spans
  document.querySelectorAll('.tech-item-mini span').forEach(span => {
    span.style.display = 'block';
    span.style.visibility = 'visible';
    span.style.opacity = '1';
    span.style.textAlign = 'center';
    span.style.fontSize = '0.75rem';
  });
  
  // Fix skill dots
  document.querySelectorAll('.skill-level').forEach(skillLevel => {
    skillLevel.style.display = 'flex';
    skillLevel.style.visibility = 'visible';
    skillLevel.style.opacity = '1';
    
    // Find child dots
    const dots = skillLevel.querySelectorAll('.skill-dot');
    dots.forEach(dot => {
      dot.style.display = 'inline-block';
      dot.style.visibility = 'visible';
      dot.style.opacity = '1';
    });
  });
  
  console.log('✅ Tech icons visibility enforced');
}
