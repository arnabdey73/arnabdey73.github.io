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
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.card h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0078D4, transparent);
  transform: translateX(-50%);
  transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
  box-shadow: 0 0 8px #0078D4;
  opacity: 0;
}

.card:hover h3 {
  color: #005A9E; /* Darker blue on white background when hovered */
}

.card:hover h3::after {
  width: 80%;
  opacity: 1;
  animation: gentle-glow 2s infinite alternate;
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

/* Contact icons styling */
.contact-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px 30px;
  margin: 30px 0;
}

.contact-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 90px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 10;
  cursor: pointer;
  text-decoration: none !important;
  padding: 10px;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.contact-icon i {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #0078D4;
  transition: all 0.3s ease;
  pointer-events: none; /* Prevent icon from capturing clicks */
}

.contact-icon:hover i {
  color: #005A9E;
  transform: scale(1.1);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Add ripple effect */
.contact-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,120,212,0.4) 0%, rgba(0,120,212,0) 70%);
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  top: 0;
  left: 0;
  transition: transform 0.4s, opacity 0.3s;
  z-index: -1;
  border-radius: 50%;
}

.contact-icon:active::after {
  transform: scale(3);
  opacity: 1;
  transition: 0s;
}

/* Add hover glow effect */
.contact-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,120,212,0.2) 0%, rgba(0,120,212,0) 70%);
  opacity: 0;
  pointer-events: none;
  top: 0;
  left: 0;
  transition: opacity 0.4s, transform 0.4s;
  z-index: -1;
  border-radius: 50%;
  transform: scale(0.8);
}

.contact-icon:hover::before {
  opacity: 1;
  transform: scale(1.2);
}

.contact-icon:hover {
  background-color: rgba(0, 120, 212, 0.1);
  transform: scale(1.08);
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 120, 212, 0.2);
}

.contact-icon span {
  font-size: 0.85rem;
  color: #bbb;
  transition: color 0.3s ease;
}

.card:hover .contact-icon span {
  color: #333;
}

.location-info {
  margin: 25px 0 15px;
  font-size: 1rem;
  color: #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.card:hover .location-info {
  color: #333;
}

/* Location link styling */
.location-link {
  color: #bbb;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 10px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.location-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0078D4, transparent);
  transform: translateX(-50%);
  transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
  box-shadow: 0 0 8px #0078D4;
  opacity: 0;
}

.location-link:hover {
  color: #0078D4 !important;
}

.location-link:hover::after {
  width: 80%;
  opacity: 1;
  animation: gentle-glow 2s infinite alternate;
}

@keyframes gentle-glow {
  0% {
    box-shadow: 0 0 4px #0078D4;
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 0 8px #0078D4, 0 0 12px rgba(0, 120, 212, 0.3);
    opacity: 1;
  }
}

.card:hover .location-link {
  color: #333;
}

.card:hover .location-link:hover {
  color: #0078D4 !important;
  background-color: transparent;
}

.location-link i {
  color: #0078D4;
  font-size: 1.2rem;
  transition: color 0.3s ease;
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

/* Responsive adjustments for icons */
@media (max-width: 768px) {
  .contact-icons {
    gap: 15px;
  }
  
  .contact-icon {
    width: 80px;
    height: 80px;
  }
  
  .contact-icon i {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .contact-icons {
    gap: 12px;
  }
  
  .contact-icon {
    width: 70px;
    height: 70px;
    padding: 8px;
  }
  
  .contact-icon i {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
  
  .contact-icon span {
    font-size: 0.8rem;
  }
}
</style>
<div class="contact-container">
  <div class="card">
    <h3>Contact Details</h3>
    <div class="location-info">
      <a href="https://maps.app.goo.gl/LJxobVcKQedHN7t38" target="_blank" class="location-link" aria-label="View Stockholm, Sweden on Google Maps">
        <i class="fas fa-map-marker-alt"></i>
        <span>Stockholm, Sweden</span>
      </a>
    </div>
    
    <div class="contact-icons">
      <a href="tel:+460764516092" class="contact-icon" aria-label="Phone number">
        <i class="fas fa-phone"></i>
        <span>Call</span>
      </a>
      
      <a href="mailto:mail@arnabdey.dev" class="contact-icon" aria-label="Email address">
        <i class="fas fa-envelope"></i>
        <span>Email</span>
      </a>
      
      <a href="https://www.linkedin.com/in/arnabdey73/" target="_blank" class="contact-icon" aria-label="LinkedIn profile">
        <i class="fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      
      <a href="https://github.com/arnabdey73" target="_blank" class="contact-icon" aria-label="GitHub profile">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>
    </div>
  </div>
</div>