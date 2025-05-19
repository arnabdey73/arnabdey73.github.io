---
layout: default
title: Contact
permalink: /contact/
---
<style>
/* Adjusted styles for the contact card */
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: clamp(16px, 4vw, 24px); /* Responsive padding */
    background-color: #000; /* Changed background color to black */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%; /* Full width by default */
    max-width: 400px; /* Maximum width */
    margin: 20px auto;
    text-align: center;
    transition: all 0.4s ease; /* Smooth transition for all properties */
}

.card:hover {
    background-color: #fff; /* Changed to white background on hover */
    box-shadow: 0 6px 10px rgba(255, 255, 255, 0.2); /* Updated shadow on hover */
    color: #000; /* Text color changes to black for contrast */
}

@media (max-width: 768px) {
    .card {
      width: 90%; /* Adjust width for smaller screens */
      padding: 14px;
    }
}

@media (max-width: 480px) {
    .card {
      width: 95%; /* Even smaller screens get wider card */
      padding: 12px;
    }
}

.card h3 {
    margin-bottom: clamp(10px, 3vw, 16px);
    font-size: clamp(0.9rem, 2.5vw, 1.2rem); /* Responsive font size */
    color: #fff; /* Changed font color to white for contrast */
    transition: color 0.3s ease; /* Smooth transition for color change */
}
.card p {
    margin: clamp(6px, 2vw, 10px) 0;
    font-size: clamp(0.8rem, 2vw, 1rem); /* Responsive font size */
    color: #ddd; /* Changed font color to a lighter shade for readability */
    transition: color 0.3s ease; /* Smooth transition for color change */
}
.card:hover h3,
.card:hover p {
    color: #000; /* Change text color to black when card is hovered */
}
.card a {
    color: #007BFF;
    text-decoration: none;
    padding: 2px 4px; /* Add padding for better touch targets */
    border-radius: 3px; /* Slight rounded corners */
    transition: background-color 0.2s, color 0.2s; /* Smooth hover effect */
}
.card a:hover {
    background-color: rgba(0, 123, 255, 0.1); /* Light background on hover */
    color: #0056b3; /* Darker blue on hover for better contrast */
}
.card a:active {
    transform: scale(0.98); /* Slight scale effect when clicked */
}
.card:hover a {
    color: #0056b3; /* Darker blue for links when card is hovered for better contrast on white */
}
.card:hover a:hover {
    background-color: rgba(0, 86, 179, 0.15); /* Slightly darker background when hovered */
    color: #003d7f; /* Even darker blue for double-hover state */
}

/* Ensure hero banner visibility */
body {
    margin: 0;
    padding: 0;
    display: block; /* Changed from flex to block */
    background-color:rgb(4, 0, 0); /* Optional: Add a subtle background color */
    min-height: 100vh;
}

/* Improved spacing for contact card items */
.card p {
    width: 100%;
    padding: clamp(5px, 1.5vw, 10px) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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

.card {
    animation: cardAppear 0.5s ease-out forwards;
    transform-origin: center; /* Ensures transforms happen from the center */
}
</style>
<div class="card">
  <h3>Contact Details</h3>
  <p>📍 Stockholm, Sweden</p>
  <p>📞 <a href="tel:+460764516092">(+46) 0764516092</a></p>
  <p>📧 <a href="mailto:arnabdey009@gmail.com">arnabdey009@gmail.com</a></p>
  <p>🔗 <a href="https://www.linkedin.com/in/arnabdey73/" target="_blank">LinkedIn</a></p>
  <p>💻 <a href="https://github.com/arnabdey73" target="_blank">GitHub</a></p>
</div>