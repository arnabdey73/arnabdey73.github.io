---
title: Projects
permalink: /projects/
---

# Projects

<div class="project-list">
  <!-- Project 1 -->
  <div class="project-card">
    <h3>DevOps Automation</h3>
    <p>This project automates the deployment of a Kubernetes cluster on Azure using Terraform, Helm, and Python scripts. It includes monitoring with Prometheus and Grafana and automates CI/CD with Azure DevOps.</p>
    <div class="badge-row">
      <img class="badge-icon" src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=white" alt="Python Badge" />
      <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge" />
      <img class="badge-icon" src="https://img.shields.io/badge/Azure-Cloud%20Services-0078D4?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge" />
      <img class="badge-icon" src="https://img.shields.io/badge/Helm-0F1689?style=flat&logo=helm&logoColor=white" alt="Helm Badge" />
    </div>
    <a class="github-button" href="https://github.com/arnabdey73/devops-python-automation-project" target="_blank">
      <img class="badge-icon" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" />
    </a>
  </div>

  <!-- Project 2 -->
  <div class="project-card">
    <h3>Portfolio Website</h3>
    <p>Personal portfolio website showcasing projects, certifications, and contact information, built with Jekyll and Tailwind CSS.</p>
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

<style>
  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    .project-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  .project-card {
    background-color: #111;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added transition for hover effect */
  }

  .project-card:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1); /* Enhanced shadow on hover */
  }

  .project-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .badge-icon {
    height: 16px; /* Standardized height for all badges */
    width: auto; /* Maintain aspect ratio */
    vertical-align: middle;
  }

  .github-button {
    display: block; /* Ensure the button appears below the badges */
    margin-top: 10px; /* Add spacing between badges and button */
    padding: 6px 14px;
    background-color: #1da1f2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .github-button:hover {
    background-color: #0d8ddb;
  }

  .github-button img {
    height: 32px; /* Increased size for better visibility */
    width: auto; /* Maintain aspect ratio */
    vertical-align: middle;
  }

  .badge-icon[src*="Azure"] {
    background-color: white;
    border-radius: 3px;
  }
</style>
