const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const jsDir = path.join(__dirname, 'assets', 'js');
const outputDir = path.join(__dirname, 'assets', 'js', 'min');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// List all JS files
const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js') && !file.includes('min.js'));

// Minify each file individually
jsFiles.forEach(file => {
  const inputPath = path.join(jsDir, file);
  const outputPath = path.join(outputDir, file.replace('.js', '.min.js'));
  
  const command = `npx terser ${inputPath} --compress --mangle --output ${outputPath}`;
  
  console.log(`Minifying ${file}...`);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error minifying ${file}:`, error);
      return;
    }
    
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const minifiedSize = fs.statSync(outputPath).size;
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(2);
    
    console.log(`✓ ${file}: ${originalSize} bytes → ${minifiedSize} bytes (${savings}% savings)`);
  });
});

// Create a bundle of all JS files
console.log('Creating bundle.min.js...');
const bundleContent = jsFiles.map(file => fs.readFileSync(path.join(jsDir, file), 'utf8')).join('\n');
fs.writeFileSync(path.join(jsDir, 'bundle.js'), bundleContent);

const bundleCommand = `npx terser ${path.join(jsDir, 'bundle.js')} --compress --mangle --output ${path.join(outputDir, 'bundle.min.js')}`;

exec(bundleCommand, (error, stdout, stderr) => {
  if (error) {
    console.error('Error creating bundle:', error);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  
  // Delete the temporary bundle file
  fs.unlinkSync(path.join(jsDir, 'bundle.js'));
  
  const bundleSize = fs.statSync(path.join(outputDir, 'bundle.min.js')).size;
  console.log(`✓ bundle.min.js: ${bundleSize} bytes`);
  
  console.log('JavaScript minification complete!');
});
