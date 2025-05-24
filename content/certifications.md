---
layout: default
title: Certifications
permalink: /certifications/
---
<div style="text-align: center;">
<div class="certification-cards">
  <div class="certification-card">
    <h3>Microsoft Certified: Azure Fundamentals</h3>
    <p>Issued March 2023</p>
    <div class="tech-icons-mini">
      <div class="tech-item-mini">
        <i class="fab fa-microsoft" aria-hidden="true"></i>
        <span>Azure</span>
      </div>
      <div class="tech-item-mini">
        <i class="fas fa-cloud" aria-hidden="true"></i>
        <span>Cloud</span>
      </div>
    </div>
    <div class="cert-button-container">
      <a href="https://learn.microsoft.com/api/credentials/share/en-us/ArnabDey-3507/801D970BAA49297?sharingId=7AA14B7D39956A51" target="_blank" rel="noopener" class="cert-verify-button">
        <i class="fas fa-certificate"></i> View Certificate
      </a>
    </div>
  </div>
  
  <div class="certification-card">
    <h3>HashiCorp Certified: Terraform Associate</h3>
    <p>Issued October 2024</p>
    <div class="tech-icons-mini">
      <div class="tech-item-mini">
        <div class="terraform-logo-mini"></div>
        <span>Terraform</span>
      </div>
      <div class="tech-item-mini">
        <i class="fas fa-server" aria-hidden="true"></i>
        <span>IaC</span>
      </div>
    </div>
    <div class="cert-button-container">
      <a href="#" target="_blank" rel="noopener" class="cert-verify-button">
        <i class="fas fa-certificate"></i> View Certificate
      </a>
    </div>
  </div>
  
  <div class="certification-card">
    <h3>AWS Certified Solutions Architect</h3>
    <p>Issued January 2025</p>
    <div class="tech-icons-mini">
      <div class="tech-item-mini">
        <i class="fab fa-aws" aria-hidden="true"></i>
        <span>AWS</span>
      </div>
      <div class="tech-item-mini">
        <i class="fas fa-network-wired" aria-hidden="true"></i>
        <span>Architecture</span>
      </div>
    </div>
    <div class="cert-button-container">
      <a href="#" target="_blank" rel="noopener" class="cert-verify-button">
        <i class="fas fa-certificate"></i> View Certificate
      </a>
    </div>
  </div>
</div>

<style>
  .certification-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
  }
    .certification-card {
    width: 100%;
    max-width: 600px;
    background-color: var(--card-bg, #1a1a1a);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color, #333);
    transition: all 0.4s ease; /* Smooth transition for all properties */
    color: #e0e0e0; /* Light text color for dark background */
    text-align: center;
  }

  .certification-card:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    background-color: white; /* Change to white on hover */
    color: #121212; /* Change text to dark on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }

  .certification-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5rem; /* Consistent heading size with project cards */
    color: #0078D4; /* Bright blue color for heading */
    transition: color 0.4s ease; /* Smooth transition for color change */
  }
  
  .certification-card:hover h3 {
    color: #005A9E; /* Darker blue on white background when hovered */
  }
  
  .certification-card p {
    color: #bbb; /* Light gray text for better readability on dark background */
    transition: color 0.4s ease; /* Smooth transition for color change */
    line-height: 1.5;
    margin-bottom: 15px;
  }
    .certification-card:hover p {
    color: #333; /* Darker text on white background when hovered */
  }
  
  /* Badge styling to match project cards */
  .badge-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  }
  
  .badge-row {
    display: flex; /* Use flex display */
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
    justify-content: center; /* Center align badges */
    align-items: center; /* Vertically center badges */
    gap: 8px; /* Consistent spacing between badges */
    margin-bottom: 10px;
  }
  
  .badge-icon {
    height: 24px; /* Standardized height for all badges */
    width: auto; /* Calculate width based on aspect ratio */
    min-width: 70px; /* Minimum width to prevent tiny badges */
    max-width: 120px; /* Prevent overly wide badges */
    object-fit: contain; /* Ensure content fits within dimensions */
    vertical-align: middle; /* Align badges properly */
    background-color: #232323; /* Darker background for badges */
    border-radius: 4px; /* Consistent rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
    padding: 2px 4px; /* Consistent padding all around */
    margin: 2px; /* Small margin for spacing */
    transition: all 0.4s ease; /* Smooth transition */
    border: 1px solid #333; /* Subtle border */
  }
  
  .certification-card:hover .badge-icon {
    background-color: #f5f5f5; /* Lighter background on hover */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
    border-color: #ddd; /* Lighter border on hover */
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .badge-row {
      gap: 6px; /* Slightly smaller gap on mobile */
    }
    
    .badge-icon {
      height: 22px; /* Slightly smaller on mobile */
    }
  }
  
  @media (max-width: 480px) {
    .badge-row {
      gap: 4px; /* Even smaller gap on very small screens */
    }
    
    .badge-icon {
      height: 20px; /* Reduce size on very small screens */
      max-width: 100px; /* Narrower width limit */
    }
  }

  .certification-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #0078D4; /* Azure brand color for heading */
    font-size: 1.5em; /* Larger font size */
  }

  .certification-card p {
    margin: 10px 0;
    font-size: 1em; /* Standard font size */
    color: #555; /* Subtle text color */
  }
  .certification-card img {
    height: 24px; /* Larger badge size */
    width: auto;
    vertical-align: middle;
    margin-top: 15px;
  }
    /* Certificate verification button styling */
  .cert-button-container {
    display: flex;
    justify-content: center;
    margin: 20px 0 10px;
    width: 100%;
  }
  
  .cert-verify-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #0078D4;
    color: white;
    padding: 8px 20px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #333;
    width: 160px; /* Fixed width */
    height: 32px; /* Fixed height similar to badges */
  }
  
  .cert-verify-button i {
    margin-right: 8px;
  }
  
  .cert-verify-button:hover {
    background-color: #005A9E;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .cert-verify-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }
  
  .certification-card:hover .cert-verify-button {
    background-color: #005A9E;
    border-color: #0078D4;
  }
</style>
</div>