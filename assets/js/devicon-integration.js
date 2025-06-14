/**
 * Devicon Tech Icons Integration - June 2025
 * Replaces existing tech icons with brand-appropriate ones from devicon.dev
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('🔄 Devicon Tech Icons: Loading...');
  
  // Load devicon CSS
  loadDeviconCSS();
  
  // Apply devicon icons to tech items
  setTimeout(() => {
    applyDeviconIcons();
  }, 300);
  
  // Run again after a short delay to catch any late-rendered elements
  setTimeout(() => {
    applyDeviconIcons();
  }, 1000);
});

// Load devicon CSS from CDN
function loadDeviconCSS() {
  if (!document.querySelector('link[href*="devicon"]')) {
    const deviconLink = document.createElement('link');
    deviconLink.rel = 'stylesheet';
    deviconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(deviconLink);
    console.log('💉 Injected Devicon CSS');
  }
}

// Apply devicon icons to tech items based on their labels
function applyDeviconIcons() {
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
  
  // Find all tech items
  const techItems = document.querySelectorAll('.tech-item');
  let replacedCount = 0;
  
  techItems.forEach(item => {
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
  
  // Handle special cases
  handleIaCTech(); // Special handling for Infrastructure as Code tech
  handleCloudTech(); // Special handling for Cloud platforms
}

// Special case function to handle IaC tech (Terraform, etc.)
function handleIaCTech() {
  // Look for Terraform specifically
  const terraformItems = Array.from(document.querySelectorAll('.tech-item')).filter(item => {
    return item.textContent.toLowerCase().includes('terraform');
  });
  
  terraformItems.forEach(item => {
    // Create the terraform devicon
    const iconWrapper = document.createElement('i');
    iconWrapper.className = 'devicon-terraform-plain colored';
    iconWrapper.style.fontSize = '2.5rem';
    iconWrapper.style.width = '48px';
    iconWrapper.style.height = '48px';
    iconWrapper.style.display = 'flex';
    iconWrapper.style.alignItems = 'center';
    iconWrapper.style.justifyContent = 'center';
    iconWrapper.style.margin = '0 auto 0.5rem auto';
    
    // Find and replace existing terraform logo
    const existingLogo = item.querySelector('.terraform-logo');
    if (existingLogo) {
      existingLogo.parentNode.replaceChild(iconWrapper, existingLogo);
    } else {
      // If no terraform logo, find any other icon and replace it
      const existingIcon = item.querySelector('i');
      if (existingIcon) {
        existingIcon.parentNode.replaceChild(iconWrapper, existingIcon);
      } else {
        // If no icon at all, insert as first child
        item.insertBefore(iconWrapper, item.firstChild);
      }
    }
    
    // Mark as fixed
    item.setAttribute('data-icon-replaced', 'devicon-terraform');
  });
  
  console.log(`🛠️ Fixed ${terraformItems.length} Terraform icons with Devicon versions`);
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
