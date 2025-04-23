# Personal Portfolio

Welcome to my personal portfolio repository! This project showcases my work, certifications, and contact information. It is built using Jekyll and Tailwind CSS.

## Features

- **Projects**: Highlights my key projects with descriptions and badges for technologies used.
- **Certifications**: Displays my professional certifications.
- **Contact**: Provides a way to get in touch with me.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Jekyll**: Static site generator.
- **Tailwind CSS**: Utility-first CSS framework.
- **HTML5 & CSS3**: Markup and styling.
- **JavaScript**: Interactive elements.

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/arnabdey73/arnabdey73.github.io.git
   ```
2. Navigate to the project directory:
   ```bash
   cd arnabdey73.github.io
   ```
3. Install dependencies:
   ```bash
   bundle install
   ```
4. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```
5. Open your browser and go to `http://localhost:4000`.

### Updated Project Structure

The project has been reorganized for better maintainability. Below is the new structure:

```
assets/
  css/
    main.scss
    style.css
  js/
    ... (all JavaScript files moved here)
  img/
    avatar.jpg
    banner.png
    ... (all images moved here)
content/
  about.md
  assignments.md
  certifications.md
  contact.md
  projects.md
_includes/
  footer.html
  header.html
  scripts.html
  sidebar.html
_layouts/
  default.html
_config.yml
Gemfile
Gemfile.lock
index.md
package.json
tailwind.config.js
```

### Changes Made
- All CSS files moved to `assets/css`.
- All JavaScript files moved to `assets/js`.
- All images moved to `assets/img`.
- Content markdown files moved to `content/`.
- Updated `_config.yml` to reflect the new structure.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

Feel free to reach out via [email](mailto:arnabdey73@example.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/arnabdey73/).