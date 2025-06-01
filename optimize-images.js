const fs = require('fs');
const path = require('path');
const imagemin = require('imagemin');

// Handle import methods for newer NodeJS versions
let imageminJpegtran, imageminPngquant;
try {
  imageminJpegtran = require('imagemin-jpegtran');
} catch (e) {
  console.log('Warning: imagemin-jpegtran not available, using default compression');
  imageminJpegtran = () => async(buffer) => buffer;
}

try {
  imageminPngquant = require('imagemin-pngquant');
} catch (e) {
  console.log('Warning: imagemin-pngquant not available, using default compression');
  imageminPngquant = () => async(buffer) => buffer;
}

(async () => {
  console.log('Optimizing JPEG and PNG images...');
  
  // Optimize main images
  const mainFiles = await imagemin(['assets/img/*.{jpg,jpeg,png}'], {
    destination: 'assets/img/optimized',
    plugins: [
      imageminJpegtran({
        progressive: true,
        quality: [0.6, 0.8]
      }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  
  // Optimize blog images
  const blogFiles = await imagemin(['assets/img/blog/*.{jpg,jpeg,png}'], {
    destination: 'assets/img/blog/optimized',
    plugins: [
      imageminJpegtran({
        progressive: true,
        quality: [0.6, 0.8]
      }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  
  console.log('Images optimized:', [...mainFiles, ...blogFiles].map(file => file.destinationPath));
  
  // After optimization, create directories if they don't exist
  if (!fs.existsSync('assets/img/optimized')) {
    fs.mkdirSync('assets/img/optimized', { recursive: true });
  }
  
  if (!fs.existsSync('assets/img/blog/optimized')) {
    fs.mkdirSync('assets/img/blog/optimized', { recursive: true });
  }
  
  // Then copy the optimized files back to their original locations
  const copyOptimizedFiles = (files, sourceDir, destDir) => {
    files.forEach(file => {
      const fileName = path.basename(file.destinationPath);
      fs.copyFileSync(file.destinationPath, path.join(destDir, fileName));
      console.log(`Replaced ${path.join(destDir, fileName)} with optimized version`);
    });
  };
  
  copyOptimizedFiles(mainFiles, 'assets/img/optimized', 'assets/img');
  copyOptimizedFiles(blogFiles, 'assets/img/blog/optimized', 'assets/img/blog');
})();
