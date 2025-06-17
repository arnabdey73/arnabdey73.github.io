/**
 * Theme Switcher
 * Handles toggling between light and dark themes with local storage persistence
 */
document.addEventListener('DOMContentLoaded', function() {
  // Remove the initializing class to show content once theme is applied
  setTimeout(() => {
    document.body.classList.remove('theme-initializing');
  }, 50);

  // Theme toggle functionality
  const themeToggleDesktop = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  
  // Check for saved theme preference or respect OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the right theme on initial load
  // For this site, dark is the default theme
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // If no saved theme, default to dark theme
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  console.log('🎨 Theme: Initialized with theme:', document.documentElement.getAttribute('data-theme'));

  // Announce theme change for screen readers
  function announceThemeChange(theme) {
    let announcement = document.getElementById('theme-announcement');
    if (!announcement) {
      announcement = document.createElement('div');
      announcement.id = 'theme-announcement';
      announcement.setAttribute('aria-live', 'polite');
      announcement.classList.add('sr-only');
      document.body.appendChild(announcement);
    }
    
    announcement.textContent = `Theme changed to ${theme} mode`;
    
    setTimeout(() => {
      announcement.textContent = '';
    }, 3000);
  }

  // Set up toggling for both theme toggle buttons
  function setupThemeToggle(toggleElement) {
    if (!toggleElement) return;

    toggleElement.addEventListener('click', function() {
      // Get current theme
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      
      // Toggle theme
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme attribute with transition effect
      document.documentElement.classList.add('theme-transition');
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Remove transition class after transition completes
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);
      
      // Store the theme preference
      localStorage.setItem('theme', newTheme);
      
      // Announce theme change for screen readers
      announceThemeChange(newTheme);
      
      // Dispatch theme change event
      document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: newTheme }
      }));
    });
  }
  
  // Set up all theme toggle buttons
  setupThemeToggle(themeToggleDesktop);
  setupThemeToggle(themeToggleMobile);

  // Listen for OS theme preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // Only apply OS preference if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
      const newTheme = event.matches ? 'dark' : 'light';
      
      // Add transition effect
      document.documentElement.classList.add('theme-transition');
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Remove transition class after transition completes
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);
      
      announceThemeChange(newTheme);
      
      // Dispatch theme change event
      document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: newTheme }
      }));
    }
  });
});
