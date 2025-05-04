---
layout: default
title: Assignments
permalink: /assignments/
---
<style>
  .assignments {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .assignment-card {
    border: 1px solid #444;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #333;
    color: #fff;
    text-align: left; /* Align text to the left */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .assignment-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  }

  .assignment-card h3 {
    margin: 0 0 10px;
    font-size: 1.2em;
  }

  .assignment-card .date {
    font-size: calc(0.8em + 0.4vw);
      color: #aaa;
  }

  .assignment-card ul {
    margin: 0;
    padding-left: 20px;
  }

  .assignment-card li {
    margin-bottom: 8px;
  }

  .assignment-card img {
    width: 100px; /* Adjust the size as needed */
    display: inline-block; /* Display badges inline */
    margin: 10px 5px 0; /* Add spacing between badges */
  }

  .assignment-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .assignments {
      flex-direction: column;
    }
  }
</style>

<div style="text-align: center;">
<div class="assignments">
  <div class="assignment-card">
    <h3>DevOps Engineer – AFRY AB <span class="date">(May 2025 - Present)</span></h3>
    <ul>
      <li>Coming soon...</li>
    </ul>
    <img src="https://img.shields.io/badge/DevOps-blue" alt="DevOps" style="width: 150px; height: auto;">
  </div>

  <div class="assignment-card">
    <h3>Cloud Engineer – Stena Metall AB <span class="date">(August 2024 - January 2025)</span></h3>
    <ul>
      <li>Upgraded the Cloud Adoption Framework (v5.2.1 to v6.0.0), improving compliance with Azure Governance standards.</li>
      <li>Conducted security audits and automated tasks using Terraform and Azure Pipelines, reducing manual intervention by 40%.</li>
      <li>Monitored cloud platform patterns and anomalies using KQL and resolved incidents per SLA, achieving a 20% reduction in downtime.</li>
      <li>Managed Azure services including Logic Apps, IaaS, PaaS, and Entra ID (formerly Azure AD).</li>
    </ul>
    <img src="https://img.shields.io/badge/Cloud%20Adoption%20Framework-v6.0.0-blue" alt="Cloud Adoption Framework v6.0.0" style="width: 170px; height: auto;">
    <img src="https://img.shields.io/badge/Terraform-blue" alt="Terraform" style="width: 150px; height: auto;">
  </div>

  <div class="assignment-card">
    <h3>Senior Software Engineer (DevOps) – Capgemini Sverige AB <span class="date">(September 2021 - July 2024)</span></h3>
    <ul>
      <li>Implemented CI/CD pipeline automation using Azure DevOps, cutting deployment time by 30%.</li>
      <li>Upgraded on-prem hardware to prepare for Kubeflow platform using Ubuntu, xCAT, and Rancher RKE.</li>
      <li>Automated Azure Databricks cluster scaling with Terraform and GitHub Actions.</li>
      <li>Acted as a Product Owner, coordinating backlog priorities and ensuring alignment with stakeholder vision by creating product roadmap and vision board.</li>
    </ul>
    <img src="https://img.shields.io/badge/CI%2FCD-Automation-brightgreen" alt="CI/CD Automation" style="width: 150px; height: auto;">
  </div>

  <div class="assignment-card">
    <h3>Senior Business Consultant (DevOps) – Tech Mahindra <span class="date">(February 2017 - September 2021)</span></h3>
    <ul>
      <li>Deployed CI/CD pipelines using Jenkins and Azure DevOps for business applications hosted on public/hybrid cloud platforms.</li>
      <li>Automated microservice orchestration with Docker and Kubernetes, enhancing resource utilization by 25%.</li>
      <li>Managed ELK stack for indexing product generated CSVs as well as centralized logging and monitoring.</li>
      <li>Reduced operational overhead by 20% through automated platform/infrastructure provisioning with Terraform/Ansible.</li>
    </ul>
    <img src="https://img.shields.io/badge/DevOps-Kubernetes-blue" alt="DevOps Kubernetes" style="width: 150px; height: auto;">
  </div>
</div>
</div>