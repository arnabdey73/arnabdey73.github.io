---
layout: default
title: Projects
permalink: /projects/
---
<div style="text-align: center;">
<div class="project-list">  <!-- Project 0 -->  <div class="project-card">
    <h3>Infrastructure as Code with Python</h3>
    <p>This project demonstrates the use of Python to manage and deploy cloud infrastructure using Infrastructure as Code (IaC) principles. It includes examples of automating resource provisioning and configuration management.</p>    <div class="tech-icons-mini">
      <div class="tech-item-mini">
        <i class="fab fa-python" aria-hidden="true"></i>
        <span>Python</span>
      </div>
      <div class="tech-item-mini">
        <i class="fas fa-cube" aria-hidden="true"></i>
        <span>Pulumi</span>
      </div>
      <div class="tech-item-mini">
        <i class="fab fa-microsoft" aria-hidden="true"></i>
        <span>Azure</span>
      </div>
    </div>
    <div class="github-link">
      <a href="https://github.com/arnabdey73/iac-python" target="_blank" rel="noopener noreferrer" class="github-button">
        <i class="fab fa-github"></i>
        <span>View Code</span>
      </a>
    </div>
  </div>
  <!-- Project 1 -->
  <div class="project-card">
    <h3>DevOps Automation</h3>
    <p>This project automates the deployment of a Kubernetes cluster on Azure using Terraform, Helm, and Python scripts. It includes monitoring with Prometheus and Grafana and automates CI/CD with Azure DevOps.</p>    <div class="tech-icons-mini">
      <div class="tech-item-mini">
        <i class="fab fa-python" aria-hidden="true"></i>
        <span>Python</span>
      </div>
      <div class="tech-item-mini">
        <div class="terraform-logo-mini"></div>
        <span>Terraform</span>
      </div>
      <div class="tech-item-mini">
        <i class="fab fa-microsoft" aria-hidden="true"></i>
        <span>Azure</span>
      </div>
      <div class="tech-item-mini">
        <i class="fas fa-ship" aria-hidden="true"></i>
        <span>Helm</span>
      </div>
    </div>
    <div class="github-link">
      <a href="https://github.com/arnabdey73/devops-python-automation-project" target="_blank" rel="noopener noreferrer" class="github-button">
        <i class="fab fa-github"></i>
        <span>View Code</span>
      </a>
    </div>
  </div>

  <!-- Project 2 -->
  <div class="project-card">
    <h3>Portfolio Website</h3>
    <p>Personal portfolio website showcasing projects, certifications, and contact information, built with Jekyll and Tailwind CSS.</p>    <div class="tech-icons-mini">
      <div class="tech-item-mini">
        <i class="fas fa-vial" aria-hidden="true"></i>
        <span>Jekyll</span>
      </div>
      <div class="tech-item-mini">
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <span>Tailwind</span>
      </div>
      <div class="tech-item-mini">
        <i class="fab fa-html5" aria-hidden="true"></i>
        <span>HTML5</span>
      </div>
      <div class="tech-item-mini">
        <i class="fab fa-css3" aria-hidden="true"></i>
        <span>CSS3</span>
      </div>
    </div>
    <div class="github-link">
      <a href="https://github.com/arnabdey73/arnabdey73.github.io" target="_blank" rel="noopener noreferrer" class="github-button">
        <i class="fab fa-github"></i>
        <span>View Code</span>
      </a>
    </div>
  </div>
</div>

<style>
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
  }

  .project-card {
    width: 100%;
    max-width: 600px;
    background-color: var(--card-bg, #1a1a1a);
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color, #333);
    transition: all 0.4s ease;
    color: #e0e0e0;
    text-align: center;
  }

  .project-card:hover {
    transform: translateY(-5px);
    background-color: white;
    color: #121212;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: #0078D4;
  }

  .project-card h3 {
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
    text-align: left;
  }

  .project-card:hover p {
    color: #333;
  }

  .github-link {
    margin-top: 1rem;
  }

  .github-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #333;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .github-button i {
    font-size: 1.1rem;
  }

  .project-card:hover .github-button {
    background-color: #0078D4;
    transform: translateY(-2px);
  }

  .github-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .project-card {
      margin: 0 15px 30px;
    }
  }  .badge-container {
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
  }
</style>
<link rel="stylesheet" href="{{ '/assets/css/tech-stack-mini.css' | relative_url }}">
