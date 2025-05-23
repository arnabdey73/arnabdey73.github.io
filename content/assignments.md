---
layout: default
title: Assignments
permalink: /assignments/
---
<style>
  .assignments {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
  }
  .assignment-card {
    width: 100%;
    max-width: 800px; /* Wider than project cards for more content */
    margin: 0 auto; /* Center the cards */
    background-color: var(--card-bg, #1a1a1a); /* Use theme variable */
    padding: 20px;
    border-radius: 12px;
    border: 1px solid var(--border-color, #333);
    /* White/lighter shadows will be applied from card-shadows.css */
    transition: all 0.4s ease; /* Smooth transition for all properties */
    color: var(--text-color, #e0e0e0); /* Theme variable for text color */
    text-align: left; /* Keep text left-aligned */
  }

  .assignment-card:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    background-color: var(--button-hover-bg, #333333); /* Use theme variable */
    color: var(--text-color, #e0e0e0); /* Maintain text color from theme */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }

  .assignment-card h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.5rem; /* Consistent heading size with project cards */
    color: #0078D4; /* Bright blue color for heading */
    transition: color 0.4s ease; /* Smooth transition for color change */
  }
  
  .assignment-card:hover h3 {
    color: #005A9E; /* Darker blue on white background when hovered */
  }

  .assignment-card .date {
    font-size: calc(0.8em + 0.2vw);
    color: #aaa;
    transition: color 0.4s ease;
  }
  
  .assignment-card:hover .date {
    color: #666; /* Darker color on hover */
  }

  .assignment-card ul {
    margin: 10px 0;
    padding-left: 20px;
    color: #bbb; /* Light gray text for better readability on dark background */
    transition: color 0.4s ease; /* Smooth transition for color change */
    line-height: 1.5;
  }
  
  .assignment-card:hover ul {
    color: #333; /* Darker text on white background when hovered */
  }

  .assignment-card li {
    margin-bottom: 8px;
  }
    /* Badge styling to match project cards */
  .badge-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align for assignment cards */
    margin: 10px 0; /* Reduced vertical margin */
    width: 100%; /* Ensure full width */
  }
  
  .badge-row {
    display: flex; /* Use flex display */
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
    justify-content: center; /* Center badges horizontally */
    align-items: center; /* Vertically center badges */
    gap: 6px; /* Slightly reduced spacing between badges */
    margin-bottom: 8px; /* Slightly reduced bottom margin */
    width: 100%; /* Full width to ensure proper centering */
  }  .badge-icon {
    height: 25px !important; /* Strict standardized height for all badges */
    width: 110px !important; /* Fixed consistent width for all badges */
    object-fit: contain !important; /* Ensure content fits within dimensions */
    vertical-align: middle; /* Align badges properly */
    background-color: #232323 !important; /* Consistent dark background */
    border-radius: 4px; /* Consistent rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
    padding: 1px 2px; /* Reduced padding for more compact appearance */
    margin: 2px; /* Reduced margin spacing */
    transition: all 0.3s ease; /* Smooth transition */
    border: 1px solid #333; /* Subtle border */
    display: inline-block; /* Ensure consistent display behavior */
    max-height: 25px !important; /* Prevent any height overflow */
    line-height: normal !important; /* Reset line height */
    overflow: hidden; /* Hide any overflow */
  }
  
  .assignment-card:hover .badge-icon {
    background-color: #f5f5f5 !important; /* Lighter background on hover */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
    border-color: #ddd; /* Lighter border on hover */
  }
    /* Specific style overrides for Azure badges */
  .azure-badge, .badge-icon[src*="Azure"] {
    background-color: #232323 !important; /* Match other badges */
    /* Force consistent styling - important to override shield.io styles */
    transform: scale(1) !important; /* Prevent scaling */
  }  /* Responsive adjustments */  @media (max-width: 768px) {
    .badge-row {
      gap: 5px; /* Reduced spacing on mobile */
      justify-content: center; /* Maintain center alignment on mobile */
      flex-wrap: wrap; /* Ensure wrapping on smaller screens */
      width: 100%; /* Full width to center properly */
    }
    
    .badge-icon {
      height: 24px !important; /* Consistent height on mobile */
      width: 90px !important; /* Narrower on mobile to fit more icons */
      padding: 1px 1px; /* Minimal padding */
      transform: scale(0.95); /* Slightly reduce the size */
    }
  }
    @media (max-width: 480px) {
    .badge-row {
      gap: 3px; /* Minimal gap on very small screens */
      margin-bottom: 5px; /* Reduced margin between rows */
    }
    
    .badge-icon {
      height: 20px !important; /* Smaller on very small screens */
      width: 80px !important; /* Much narrower on small screens */
    }
  }
  
  @media (max-width: 360px) {
    .badge-row {
      gap: 2px; /* Minimal gap on tiny screens */
      margin-bottom: 3px; /* Reduced margin between rows */
    }
    
    .badge-icon {
      height: 18px !important; /* Even smaller on tiny screens */
      width: 70px !important; /* Narrower on tiny screens */
      margin: 1px; /* Minimal margin */
      padding: 0; /* No padding */
      transform: scale(0.9); /* Further reduce the size */
      font-size: 90%; /* Reduce font size for badge text */
    }
  }
</style>

<div style="text-align: center;">
<div class="assignments">  <div class="assignment-card">
    <h3>DevOps Engineer – AFRY AB <span class="date">(May 2025 - Present)</span></h3>
    <ul>
      <li>Coming soon...</li>
    </ul>
    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/DevOps-blue?style=flat" alt="DevOps Badge">
        <img class="badge-icon azure-badge" src="https://img.shields.io/badge/Azure-0089D6?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge">
      </div>
    </div>
  </div>

  <div class="assignment-card">
    <h3>Cloud Engineer – Stena Metall AB <span class="date">(August 2024 - January 2025)</span></h3>
    <ul>
      <li>Upgraded the Cloud Adoption Framework (v5.2.1 to v6.0.0), improving compliance with Azure Governance standards.</li>
      <li>Conducted security audits and automated tasks using Terraform and Azure Pipelines, reducing manual intervention by 40%.</li>
      <li>Monitored cloud platform patterns and anomalies using KQL and resolved incidents per SLA, achieving a 20% reduction in downtime.</li>
      <li>Managed Azure services including Logic Apps, IaaS, PaaS, and Entra ID (formerly Azure AD).</li>
    </ul>
    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Cloud%20Adoption%20Framework-v6.0.0-0089D6?style=flat" alt="Cloud Adoption Framework v6.0.0">
        <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge">
        <img class="badge-icon azure-badge" src="https://img.shields.io/badge/Azure-0089D6?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge">
      </div>
    </div>
  </div>
  <div class="assignment-card">
    <h3>Senior Software Engineer (DevOps) – Capgemini Sverige AB <span class="date">(September 2021 - July 2024)</span></h3>
    <ul>
      <li>Implemented CI/CD pipeline automation using Azure DevOps, cutting deployment time by 30%.</li>
      <li>Upgraded on-prem hardware to prepare for Kubeflow platform using Ubuntu, xCAT, and Rancher RKE.</li>
      <li>Automated Azure Databricks cluster scaling with Terraform and GitHub Actions.</li>
      <li>Acted as a Product Owner, coordinating backlog priorities and ensuring alignment with stakeholder vision by creating product roadmap and vision board.</li>
    </ul>
    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/CI%2FCD-Automation-brightgreen?style=flat" alt="CI/CD Automation">
        <img class="badge-icon azure-badge" src="https://img.shields.io/badge/Azure_DevOps-0078D7?style=flat&logo=azure-devops&logoColor=white" alt="Azure DevOps Badge">
        <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge">
      </div>
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Databricks-FF3621?style=flat&logo=databricks&logoColor=white" alt="Databricks Badge">
        <img class="badge-icon" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions Badge">
      </div>
    </div>
  </div>

  <div class="assignment-card">
    <h3>Senior Business Consultant (DevOps) – Tech Mahindra <span class="date">(February 2017 - September 2021)</span></h3>
    <ul>
      <li>Deployed CI/CD pipelines using Jenkins and Azure DevOps for business applications hosted on public/hybrid cloud platforms.</li>
      <li>Automated microservice orchestration with Docker and Kubernetes, enhancing resource utilization by 25%.</li>
      <li>Managed ELK stack for indexing product generated CSVs as well as centralized logging and monitoring.</li>
      <li>Reduced operational overhead by 20% through automated platform/infrastructure provisioning with Terraform/Ansible.</li>
    </ul>
    <div class="badge-container">
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white" alt="Kubernetes Badge">
        <img class="badge-icon" src="https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white" alt="Jenkins Badge">
        <img class="badge-icon" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker Badge">
      </div>
      <div class="badge-row">
        <img class="badge-icon" src="https://img.shields.io/badge/ELK_Stack-005571?style=flat&logo=elastic&logoColor=white" alt="ELK Stack Badge">
        <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge">
        <img class="badge-icon" src="https://img.shields.io/badge/Ansible-EE0000?style=flat&logo=ansible&logoColor=white" alt="Ansible Badge">
      </div>
    </div>
  </div>
</div>
</div>