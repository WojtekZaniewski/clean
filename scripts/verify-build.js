const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

console.log('Verifying build for GitHub Pages...\n');

const requiredFiles = [
  'index.html',
  '.nojekyll',
  '_next/static',
  'logo.png',
  'lenusia.png',
  '1.jpg',
  '2.jpg',
  '3.jpg',
];

const missing = [];
const found = [];

requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    found.push(`✓ ${file}`);
  } else {
    missing.push(`✗ ${file} - MISSING!`);
  }
});

console.log('Required files:');
found.forEach(f => console.log(f));
if (missing.length > 0) {
  console.log('\nMissing files:');
  missing.forEach(f => console.log(f));
  process.exit(1);
}

// Check for paths in index.html (absolute paths are correct for GitHub Pages)
const indexHtml = path.join(outDir, 'index.html');
if (fs.existsSync(indexHtml)) {
  const content = fs.readFileSync(indexHtml, 'utf8');
  const absolutePaths = content.match(/href="\/[^"]+|src="\/[^"]+/g);
  const relativePaths = content.match(/href="\.\.\/[^"]+|src="\.\.\/[^"]+/g);
  
  if (relativePaths && relativePaths.length > 0) {
    console.log('\n⚠ Warning: Found incorrect relative paths (../) in index.html:');
    relativePaths.slice(0, 5).forEach(p => console.log(`  ${p}`));
    console.log('\nThese should be absolute paths (/) for GitHub Pages');
  } else if (absolutePaths && absolutePaths.length > 0) {
    console.log('\n✓ All paths are absolute (correct for GitHub Pages)');
  } else {
    console.log('\n✓ Paths verified');
  }
}

console.log('\n✓ Build verification complete!');
console.log('\nNext steps:');
console.log('1. Copy ALL contents from the "out" folder to your GitHub repository root');
console.log('2. Make sure .nojekyll is included');
console.log('3. Commit and push to GitHub');
console.log('4. Configure GitHub Pages: Settings → Pages → Source: Deploy from branch → Branch: main → Folder: / (root)');
