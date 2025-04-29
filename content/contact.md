---
layout: default
title: Contact
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
    padding: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 300px; /* Reduced width */
    margin: 20px auto;
    text-align: center;
}

@media (max-width: 768px) {
    .card {
      width: 90%; /* Adjust width for smaller screens */
    }
}

.card h3 {
    margin-bottom: 12px;
    font-size: 1.5rem;
    color: #333;
}
.card p {
    margin: 8px 0;
    font-size: calc(1em + 1vw);
    color: #555;
}
.card a {
    color: #007BFF;
    text-decoration: none;
}
.card a:hover {
    text-decoration: underline;
}

/* Ensure hero banner visibility */
body {
    margin: 0;
    padding: 0;
    display: block; /* Changed from flex to block */
    background-color: #f4f4f4; /* Optional: Add a subtle background color */
    min-height: 100vh;
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