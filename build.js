#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting website optimization build process...');

// Function to run a command and return a promise
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    console.log(`\n📋 Running: ${command} ${args.join(' ')}`);
    
    const process = spawn(command, args, { stdio: 'inherit' });
    
    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command ${command} ${args.join(' ')} failed with code ${code}`));
      }
    });
  });
}

// Run optimization tasks in sequence
async function runBuild() {
  try {
    // 1. Optimize images
    console.log('\n🖼️  Step 1: Optimizing images...');
    await runCommand('node', ['optimize-images.js']);
    
    // 2. Consolidate CSS
    console.log('\n🎨 Step 2: Consolidating CSS files...');
    await runCommand('node', ['consolidate-css.js']);
    
    // 3. Minify JavaScript
    console.log('\n🔧 Step 3: Minifying JavaScript...');
    await runCommand('node', ['minify-js.js']);
    
    // 4. Create a _headers file for Cloudflare/Netlify
    console.log('\n🔒 Step 4: Creating _headers file for better caching...');
    const headersContent = `# Cache control headers
/*
  Cache-Control: public, max-age=3600
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

# Cache static assets longer
/assets/css/*
  Cache-Control: public, max-age=31536000, immutable
/assets/js/min/*
  Cache-Control: public, max-age=31536000, immutable
/assets/img/*
  Cache-Control: public, max-age=31536000, immutable

# No cache for HTML files
*.html
  Cache-Control: public, max-age=0, must-revalidate
`;
    
    fs.writeFileSync('_headers', headersContent);
    console.log('✓ Created _headers file');
    
    console.log('\n✨ Build completed successfully!');
    console.log('\n🌐 Your website has been optimized for better performance.');
    console.log('   - Images compressed');
    console.log('   - CSS consolidated');
    console.log('   - JavaScript minified');
    console.log('   - Cache headers added');
    
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run the build
runBuild();
