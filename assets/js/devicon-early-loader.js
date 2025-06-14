// Early devicon loader - Critical path (June 2025)
(function() {
  // Add devicon CSS to the document head as soon as possible
  if (!document.querySelector('link[href*="devicon"]')) {
    var deviconLink = document.createElement('link');
    deviconLink.rel = 'stylesheet';
    deviconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    deviconLink.id = 'devicon-early-loader';
    
    // Insert at the beginning of head
    if (document.head.firstChild) {
      document.head.insertBefore(deviconLink, document.head.firstChild);
    } else {
      document.head.appendChild(deviconLink);
    }
    
    console.log('⚡ Early devicon CSS loaded');
  }
  
  // Set a global flag for diagnostic purposes
  window.deviconEarlyLoaded = true;
})();
