# Personal Portfolio

Welcome to my personal portfolio repository! This project showcases my work, certifications, and contact information. It is built using Jekyll and Tailwind CSS and has been optimized for performance.

## Features

- **Projects**: Highlights my key projects with descriptions and badges for technologies used.
- **Certifications**: Displays my professional certifications.
- **Contact**: Provides a way to get in touch with me.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Performance Optimized**: Achieved high performance scores through various optimizations.

## Technologies Used

- **Jekyll**: Static site generator.
- **Tailwind CSS**: Utility-first CSS framework.
- **HTML5 & CSS3**: Markup and styling.
- **JavaScript**: Interactive elements.

## Performance Optimizations

This portfolio site has been optimized for performance in several ways:

1. **Image Optimization**: 
   - Compressed and optimized all images
   - Reduced file sizes while maintaining quality

2. **CSS Optimization**:
   - Consolidated multiple CSS files into fewer requests
   - Organized CSS by category (layout, components, styles, icons)

3. **JavaScript Optimization**:
   - Minified all JavaScript files
   - Created a unified bundle for faster loading

4. **Font Loading Improvements**:
   - Added font-display: swap for better font rendering
   - Optimized external font loading with preconnect and media strategies

5. **Caching Strategy**:
   - Added cache headers for optimal resource caching
   - Implemented long-term caching for static assets

## Build Process

This project includes several build scripts to optimize the site for production:

```bash
# Run all optimizations
npm run build

# Individual optimization tasks
npm run optimize-images   # Compress and optimize images
npm run consolidate-css   # Consolidate CSS files
npm run minify-js         # Minify JavaScript files
```

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