const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const rootDir = path.join(__dirname, '..');

// Files/folders to copy from out to root
const filesToCopy = [
  'index.html',
  '_not-found.html',
  '404.html',
  '.nojekyll',
  'robots.txt',
  '_next',
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',
  '10.jpg', '11.jpg', '12.jpg', '13.jpg',
  'logo.png',
  'lenusia.png',
  'apple-icon.png',
  'icon-dark-32x32.png',
  'icon-light-32x32.png',
  'icon.svg',
  'placeholder-logo.png',
  'placeholder-logo.svg',
  'placeholder-user.jpg',
  'placeholder.jpg',
  'placeholder.svg',
];

function copyFileOrDir(src, dest) {
  const srcPath = path.join(outDir, src);
  const destPath = path.join(rootDir, src);
  
  if (!fs.existsSync(srcPath)) {
    console.log(`⚠ Skipping ${src} - not found in out folder`);
    return;
  }
  
  const stat = fs.statSync(srcPath);
  
  if (stat.isDirectory()) {
    // Copy directory recursively
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    fs.cpSync(srcPath, destPath, { recursive: true });
    console.log(`✓ Copied directory: ${src}`);
  } else {
    // Copy file
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied file: ${src}`);
  }
}

console.log('Copying built files from out/ to root...\n');

// Copy all files
filesToCopy.forEach(file => {
  copyFileOrDir(file, file);
});

// Copy any other files in out that aren't in the list
const outFiles = fs.readdirSync(outDir);
outFiles.forEach(file => {
  if (filesToCopy.includes(file) || file.startsWith('__next')) return;
  if (file.endsWith('.txt')) return; // skip debug .txt; robots.txt is in filesToCopy
  copyFileOrDir(file, file);
});

console.log('\n✓ All files copied to root directory');
console.log('\nNext steps:');
console.log('1. Review the changes in GitHub Desktop');
console.log('2. Commit all the new/changed files');
console.log('3. Push to GitHub');
console.log('4. Your site will update automatically on GitHub Pages!');
