---
layout: default
title: Contact
permalink: /contact/
---
<style>
/* Contact card styling to match project cards */
.contact-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.card {
  width: 100%;
  max-width: 450px; /* Slightly wider for contact information */
  background-color: #121212; /* Dark background color matching project cards */
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease; /* Smooth transition for all properties */
  color: #e0e0e0; /* Light text color for dark background */
  text-align: center;
  animation: cardAppear 0.5s ease-out forwards;
  transform-origin: center;
}

.card:hover {
  transform: translateY(-5px); /* Slight lift on hover */
  background-color: white; /* Change to white on hover */
  color: #121212; /* Change text to dark on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

.card h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5rem; /* Consistent heading size with project cards */
  color: #0078D4; /* Bright blue color for heading */
  transition: color 0.4s ease; /* Smooth transition for color change */
}

.card:hover h3 {
  color: #005A9E; /* Darker blue on white background when hovered */
}

.card p {
  margin: 12px 0;
  font-size: clamp(0.9rem, 2vw, 1rem); /* Responsive font size */
  color: #bbb; /* Light gray text for better readability on dark background */
  transition: color 0.4s ease; /* Smooth transition for color change */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  line-height: 1.5;
}

.card:hover p {
  color: #333; /* Darker text on white background when hovered */
}

.card a {
  color: #0078D4; /* Match project card blue */
  text-decoration: none;
  padding: 4px 6px; /* Larger padding for better touch targets */
  border-radius: 4px; /* Rounded corners */
  transition: all 0.3s ease; /* Smooth hover effect */
}

.card a:hover {
  background-color: rgba(0, 120, 212, 0.1); /* Light background on hover */
  color: #005A9E; /* Darker blue on hover for better contrast */
  transform: translateY(-1px); /* Slight lift effect */
}

.card a:active {
  transform: scale(0.98); /* Slight scale effect when clicked */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card {
    padding: 20px;
    max-width: 400px;
  }
  
  .card h3 {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 15px;
    max-width: 95%;
  }
  
  .card h3 {
    font-size: 1.3rem;
  }
  
  .card p {
    font-size: 0.9rem;
  }
}

/* Add animation for card appear */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<div class="contact-container">
  <div class="card">
    <h3>Contact Details</h3>
    <p>📍 Stockholm, Sweden</p>
    <p>📞 <a href="tel:+460764516092">(+46) 0764516092</a></p>
    <p>📧 <a href="mailto:arnabdey009@gmail.com">arnabdey009@gmail.com</a></p>
    <p>🔗 <a href="https://www.linkedin.com/in/arnabdey73/" target="_blank">LinkedIn</a></p>
    <p>💻 <a href="https://github.com/arnabdey73" target="_blank">GitHub</a></p>
  </div>
</div>