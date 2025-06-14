# Devicon Standardization for Tech Stack

This document outlines how devicons have been standardized across the website:

## Implementation Overview

All technology icons on the site have been standardized to use devicon.dev icons, ensuring consistent styling, brand colors, and responsive behavior across:

1. Main tech stack section (2x2 grid)
2. Project cards (horizontal row)
3. Assignment cards (horizontal row)

## Key Components

### HTML Structure

```html
<!-- For main tech stack (larger icons with skill dots) -->
<div class="tech-item">
  <i class="devicon-[technology]-plain colored" aria-hidden="true"></i>
  <span>[Technology Name]</span>
  <div class="skill-level" role="img" aria-label="Skill level: X out of 5">
    <!-- Skill dots -->
  </div>
</div>

<!-- For project/assignment cards (smaller icons in row) -->
<div class="tech-item-mini">
  <i class="devicon-[technology]-plain colored" aria-hidden="true"></i>
  <span>[Technology Name]</span>
</div>
```

### Icon Classes Used

We've standardized on the following devicon classes for common technologies:

- Azure: `devicon-azure-plain colored`
- AWS: `devicon-amazonwebservices-original colored`
- Google Cloud: `devicon-googlecloud-plain colored`
- OpenStack: `devicon-openstack-plain colored`
- Ubuntu: `devicon-ubuntu-plain colored`
- Red Hat: `devicon-redhat-plain colored`
- Windows: `devicon-windows8-original colored`
- VMware: `devicon-vmware-plain colored`
- Bash: `devicon-bash-plain colored`
- Python: `devicon-python-plain colored`
- JavaScript: `devicon-javascript-plain colored`
- CSS: `devicon-css3-plain colored`
- Terraform: `devicon-terraform-plain colored`
- Ansible: `devicon-ansible-plain colored`
- Docker: `devicon-docker-plain colored`
- Kubernetes: `devicon-kubernetes-plain colored`
- GitHub: `devicon-github-plain colored`
- Jenkins: `devicon-jenkins-plain colored`

### CSS Implementation

Different styling has been applied based on context:

1. **Main tech stack**: Larger icons with skill indicators
2. **Project/assignment cards**: Smaller icons in a compact horizontal row

## Script Cleanup

To reduce redundancy, the following script optimizations were made:

1. Removed duplicate devicon loading scripts
2. Consolidated multiple tech icon repair scripts
3. Eliminated redundant theme toggle mechanisms
4. Streamlined the scripts.html file to prevent multiple script inclusions

## Benefits

1. **Consistent branding**: All tech icons maintain their proper brand colors
2. **Responsive behavior**: Icons adapt to different screen sizes and device types
3. **Improved accessibility**: Proper aria attributes and screen reader support
4. **Performance optimizations**: Reduced code duplication and script loading
5. **Maintenance simplicity**: Easier to add new technology icons in the future

## Future Considerations

- Consider adding a toggle to hide tech labels on smaller screens
- Implement lazy loading for devicons in off-screen sections
- Further consolidate CSS files for tech icons to reduce redundancy
