---
layout: default
title: Projects
permalink: /projects/
---
<div style="text-align: center;">
<div class="project-list">  <!-- Project 0 -->  <div class="project-card">
    <h3>Infrastructure as Code with Python</h3>
    <p>This project demonstrates the use of Python to manage and deploy cloud infrastructure using Infrastructure as Code (IaC) principles. It includes examples of automating resource provisioning and configuration management.</p>    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=white" alt="Python Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Pulumi-5C2D91?style=flat&logo=pulumi&logoColor=white" alt="Pulumi Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge" />
      </div>
      <a class="github-button" href="https://github.com/arnabdey73/iac-python" target="_blank">
        <img class="badge-icon" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" />
      </a>
    </div>
  </div>
  <!-- Project 1 -->
  <div class="project-card">
    <h3>DevOps Automation</h3>
    <p>This project automates the deployment of a Kubernetes cluster on Azure using Terraform, Helm, and Python scripts. It includes monitoring with Prometheus and Grafana and automates CI/CD with Azure DevOps.</p>
    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=white" alt="Python Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Helm-0F1689?style=flat&logo=helm&logoColor=white" alt="Helm Badge" />
      </div>
      <a class="github-button" href="https://github.com/arnabdey73/devops-python-automation-project" target="_blank">
        <img class="badge-icon" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" />
      </a>
    </div>
  </div>

  <!-- Project 2 -->
  <div class="project-card">
    <h3>Portfolio Website</h3>
    <p>Personal portfolio website showcasing projects, certifications, and contact information, built with Jekyll and Tailwind CSS.</p>
    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Jekyll-CC0000?style=flat&logo=jekyll&logoColor=white" alt="Jekyll Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5 Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3 Badge" />
      </div>
      <a class="github-button" href="https://github.com/arnabdey73/portfolio-website" target="_blank">
        <img class="badge-icon" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" />
      </a>
    </div>
  </div>
</div>

<style>
  .project-list {
    display: flex;
    flex-direction: row; /* Change to row for horizontal alignment */
    flex-wrap: wrap; /* Allow wrapping to next line if needed */
    justify-content: center; /* Center align the cards */
    gap: 30px;
    margin-top: 30px;
  }
  .project-card {
    width: 100%;
    max-width: 600px; /* Limit the width for better readability */
  }

  .project-card {
    background-color: #121212; /* Dark background color */
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease; /* Smooth transition for all properties */
    color: #e0e0e0; /* Light text color for dark background */
  }
  
  .project-card:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    background-color: white; /* Change to white on hover */
    color: #121212; /* Change text to dark on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }
  .project-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5rem; /* Consistent heading size */
    color: #0078D4; /* Bright blue color for heading */
    transition: color 0.4s ease; /* Smooth transition for color change */
  }
  
  .project-card:hover h3 {
    color: #005A9E; /* Darker blue on white background when hovered */
  }
    /* Project card paragraph styles */
  .project-card p {
    color: #bbb; /* Light gray text for better readability on dark background */
    transition: color 0.4s ease; /* Smooth transition for color change */
    line-height: 1.5;
    margin-bottom: 15px;
  }
  
  .project-card:hover p {
    color: #333; /* Darker text on white background when hovered */
  }

  /* Add responsive adjustments for badges */
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
  }  .badge-container {
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
  }  .badge-icon {
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
  
  .project-card:hover .badge-icon {
    background-color: #f5f5f5; /* Lighter background on hover */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
    border-color: #ddd; /* Lighter border on hover */
  }

  .badge-icon[src*="Azure"] {
    background-color: #232323; /* Match other badges */
    border-radius: 4px;
    background-image: none; /* Remove any conflicting background image */
  }
  
  .project-card:hover .badge-icon[src*="Azure"] {
    background-color: #f5f5f5; /* Match other badges on hover */
  }

  .badge-icon[src*="Pulumi"] {
    background-color: #5C2D91; /* Pulumi's primary color */
    color: white; /* Ensure text/logo visibility */
  }.github-button {
    display: inline-flex; /* Ensure proper alignment */
    align-items: center; /* Vertically center content */
    justify-content: center; /* Horizontally center content */
    margin-top: 8px; /* Increased spacing */
    padding: 0; /* Remove padding to match other badges */
    background-color: transparent; /* Ensure no background color */
    border: none; /* Remove border */
    border-radius: 4px; /* Match other badges */
    transition: all 0.3s ease; /* Smooth transition for all properties */
    position: relative; /* For pseudo-element positioning */
  }

  .github-button:hover {
    transform: translateY(-2px); /* Slight lift on hover */
  }
  
  .github-button::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #0078D4;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }
  
  .github-button:hover::after {
    width: 80%;
  }

  .github-button img {
    height: 24px; /* Match height of other badges */
    width: auto; /* Maintain aspect ratio */
    max-width: 120px; /* Consistent with other badges */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: all 0.3s ease;
  }
</style>
</div>
