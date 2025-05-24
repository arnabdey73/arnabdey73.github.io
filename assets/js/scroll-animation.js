/* Scroll Animation for Profile Image */
document.addEventListener('DOMContentLoaded', function() {
  // Function to handle intersection observations
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      // Add the animation class when the element is visible
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Optionally stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // viewport is used as the root
    threshold: 0.2, // trigger when 20% of the element is visible
    rootMargin: '0px' // no margin
  });

  // Start observing the profile image
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    // Initially hide the image
    profileImage.style.opacity = '0';
    observer.observe(profileImage);
  }
});
