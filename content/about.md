---
layout: single
title: My Professional Journey
permalink: /about/
---
<div class="content-page">
  <div class="timeline">
    <div class="timeline-entry">
      <h3>🔹 2009–2015: Linux System Administrator</h3>
      <p>Started my career managing RHEL and CentOS systems, with a strong focus on shell scripting and on-premise infrastructure.</p>
    </div>
    
    <div class="timeline-entry">
      <h3>🔹 2015–2018: Infrastructure Engineer → DevOps</h3>
      <p>Began transition into DevOps; worked with Jenkins, basic automation, and initial exposure to cloud (Azure).<br>
      Learned infrastructure-as-code using Shell and Python.</p>
    </div>
    
    <div class="timeline-entry">
      <h3>🔹 2018–2020: DevOps Engineer (CI/CD Specialist)</h3>
      <p>Led CI/CD initiatives using Jenkins, Azure DevOps, GitLab CI.<br>
      Started containerizing apps with Docker, and deployed them using Kubernetes.</p>
    </div>
    
    <div class="timeline-entry">
      <h3>🔹 2020–2023: Cloud DevOps Engineer (Azure & Kubernetes)</h3>
      <p>Built and managed cloud-native systems on Azure using Terraform, Helm, and AKS.<br>
      Led end-to-end infrastructure automation pipelines.</p>
    </div>
    
    <div class="timeline-entry">
      <h3>🔹 2023–Present: Freelance/Contracting & Open Source</h3>
      <p>Contributing to open-source DevOps projects using Terraform, Ansible, RKE, Rancher, Prometheus stack.<br>
      Architecting complete DevOps pipelines with GitOps and observability baked in.</p>
    </div>
  </div>
</div>

<style>
  .content-page {
    margin: 5px auto; /* Reduced vertical and horizontal margins */
    padding: 5px; /* Reduced padding */
  }
  
  /* Career heading styling */
  .career-heading {
    color: var(--link-hover-color, #1da1f2);
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
    position: relative;
    padding-bottom: 15px;
  }
  
  .career-heading::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: var(--link-hover-color, #1da1f2);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  /* Additional timeline styles that are page-specific */
  .timeline {
    margin-top: 30px;
  }
  
  .timeline-entry {
    margin-bottom: 25px;
    padding: 20px 25px 20px 45px;
  }
  
  .timeline-entry h3 {
    margin-bottom: 10px;
  }
</style>

<!-- Include the timeline CSS file -->
<link rel="stylesheet" href="{{ '/assets/css/timeline.css' | relative_url }}">