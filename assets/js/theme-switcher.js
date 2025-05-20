/**
 * Theme Switcher
 * Handles toggling between light and dark themes with local storage persistence
 */
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or respect OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the right theme on initial load
  // For this site, dark is the default theme
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // If no saved theme, default to dark theme
    // We're not using OS preference since the site's default is dark
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Toggle theme when button is clicked
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Get current theme
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      
      // Toggle theme
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme attribute
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Save preference to local storage
      localStorage.setItem('theme', newTheme);
      
      // Announce theme change for screen readers
      announceThemeChange(newTheme);
    });
  }
  
  // Listen for OS theme preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // Only apply OS preference if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
      const newTheme = event.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      announceThemeChange(newTheme);
    }
  });
  
  // Announce theme change for screen readers
  function announceThemeChange(theme) {
    // Create announcement for screen readers
    let announcement = document.getElementById('theme-announcement');
    if (!announcement) {
      announcement = document.createElement('div');
      announcement.id = 'theme-announcement';
      announcement.setAttribute('aria-live', 'polite');
      announcement.classList.add('sr-only');
      document.body.appendChild(announcement);
    }
    
    announcement.textContent = `Theme changed to ${theme} mode`;
    
    // Clear announcement after a few seconds
    setTimeout(() => {
      announcement.textContent = '';
    }, 3000);
  }
});
