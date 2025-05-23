---
layout: default
title: Projects
permalink: /projects/
---
<div style="text-align: center;">
<div class="project-list">  <!-- Project 0 -->  <div class="project-card">
    <h3>Infrastructure as Code with Python</h3>
    <p>This project demonstrates the use of Python to manage and deploy cloud infrastructure using Infrastructure as Code (IaC) principles. It includes examples of automating resource provisioning and configuration management.</p>    <div class="badge-container">      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=white" alt="Python Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Pulumi-5C2D91?style=flat&logo=pulumi&logoColor=white" alt="Pulumi Badge" />
        <img class="badge-icon azure-badge" src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge" />
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
    <div class="badge-container">      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=white" alt="Python Badge" />
        <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge" />
        <img class="badge-icon azure-badge" src="https://img.shields.io/badge/Microsoft_Azure-0078D4?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge" />
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
      <a class="github-button" href="https://github.com/arnabdey73/arnabdey73.github.io" target="_blank">
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
  }  .project-card {
    width: 100%;
    max-width: 600px;
    background-color: var(--card-bg, #1a1a1a);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color, #333);
    transition: all 0.4s ease;
    color: #e0e0e0;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    background-color: white;
    color: #121212;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: #0078D4;
  /* Enhanced shadow on hover is handled in card-shadows.css */
  }  .project-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #0078D4;
    transition: color 0.4s ease;
  }
  
  .project-card:hover h3 {
    color: #005A9E;
  }

  .project-card p {
    color: #bbb;
    transition: color 0.4s ease;
    line-height: 1.5;
    margin: 15px 0;
    padding-left: 20px;
    text-align: left;
  }

  .project-card:hover p {
    color: #333;
  }/* Add responsive adjustments for badges */  @media (max-width: 768px) {
    .badge-row {
      gap: 6px;
    }
    
    .badge-icon {
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    .badge-row {
      gap: 4px;
    }
    
    .badge-icon {
      height: 20px;
      max-width: 100px;
    }
  }
  
  @media (max-width: 360px) {
    .badge-row {
      gap: 2px;
    }
    
    .badge-icon {
      height: 18px;
      min-width: 60px;
      max-width: 90px;
      margin: 1px;
      padding: 0;
    }
  }.badge-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  }
  .badge-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }.badge-icon {
    height: 24px;
    width: auto;
    min-width: 70px;
    max-width: 120px;
    object-fit: contain;
    vertical-align: middle;
    background-color: #232323;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 2px 4px;
    margin: 2px;
    transition: all 0.4s ease;
    border: 1px solid #333;
  }
  
  .project-card:hover .badge-icon {
    background-color: #f5f5f5 !important; /* Lighter background on hover */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
    border-color: #ddd; /* Lighter border on hover */
  }
  
  /* Specific style overrides for Azure badges */
  .azure-badge, .badge-icon[src*="Azure"] {
    background-color: #232323 !important; /* Match other badges */
    /* Force consistent styling - important to override shield.io styles */
    transform: scale(1) !important; /* Prevent scaling */
  }

  .badge-icon[src*="Pulumi"] {
    background-color: #5C2D91; /* Pulumi's primary color */
    color: white; /* Ensure text/logo visibility */
  }.github-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px auto;
    padding: 0;
    background-color: transparent;
    border: none;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .github-button:hover {
    transform: translateY(-2px);
  }

  .github-button img {
    height: 24px;
    width: auto;
    min-width: 70px;
    max-width: 120px;
    object-fit: contain;
    vertical-align: middle;
    background-color: #232323;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 2px 4px;
    margin: 2px;
    transition: all 0.4s ease;
    border: 1px solid #333;
  }
</style>
</div>
