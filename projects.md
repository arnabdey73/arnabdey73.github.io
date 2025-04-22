---
title: Projects
permalink: /projects/
---

# Projects

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
    height: 20px;
    vertical-align: middle;
  }

  .github-button {
    display: inline-block;
    margin-top: 15px;
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
</style>

<div class="project-list">
  <!-- Project 1 -->
  <div class="project-card">
    <h3>DevOps Automation</h3>
    <p>Automated Azure infrastructure deployment using Python, Terraform, and GitHub Actions.</p>
    <a class="github-button" href="https://github.com/arnabdey73/devops-python-automation-project" target="_blank">
      <img class="badge-icon" src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" />
    </a>
    <div class="badge-row">
      <img class="badge-icon" src="https://img.shields.io/badge/Python-3670A0?style=flat&logo=python&logoColor=white" alt="Python Badge" />
      <img class="badge-icon" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white" alt="Terraform Badge" />
      <img class="badge-icon" src="https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoft-azure&logoColor=white" alt="Azure Badge" />
      <img class="badge-icon" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions Badge" />
    </div>
  </div>
</div>
