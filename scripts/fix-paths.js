const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // For GitHub Pages with custom domain, use absolute paths from root
  // This ensures files are found correctly
  
  // Fix any relative paths back to absolute (for GitHub Pages)
  content = content.replace(/href="\.\.\/_next\//g, 'href="/_next/');
  content = content.replace(/src="\.\.\/_next\//g, 'src="/_next/');
  content = content.replace(/href='\.\.\/_next\//g, "href='/_next/");
  content = content.replace(/src='\.\.\/_next\//g, "src='/_next/");
  
  content = content.replace(/href="\.\/_next\//g, 'href="/_next/');
  content = content.replace(/src="\.\/_next\//g, 'src="/_next/');
  content = content.replace(/href='\.\/_next\//g, "href='/_next/");
  content = content.replace(/src='\.\/_next\//g, "src='/_next/");
  
  // Fix image paths - use absolute from root
  content = content.replace(/href="\.\/([^"]+\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))"/gi, 'href="/$1"');
  content = content.replace(/src="\.\/([^"]+\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))"/gi, 'src="/$1"');
  content = content.replace(/href='\.\/([^']+\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))'/gi, "href='/$1'");
  content = content.replace(/src='\.\/([^']+\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))'/gi, "src='/$1'");
  
  // Fix JSON paths in script tags
  content = content.replace(/src="\.\/([^"]+\.js)"/g, 'src="/$1"');
  content = content.replace(/src='\.\/([^']+\.js)'/g, "src='/$1'");
  
  // Fix CSS paths
  content = content.replace(/href="\.\/([^"]+\.css)"/g, 'href="/$1"');
  content = content.replace(/href='\.\/([^']+\.css)'/g, "href='/$1'");
  
  // Fix paths in JavaScript strings - use absolute paths
  content = content.replace(/__webpack_require__\.p\s*=\s*["']\.\/_next\//g, '__webpack_require__.p = "/_next/');
  content = content.replace(/__webpack_require__\.p\s*=\s*["']\.\.\/_next\//g, '__webpack_require__.p = "/_next/');
  
  // Fix paths in JSON-like structures
  content = content.replace(/"\.\/_next\//g, '"/_next/');
  content = content.replace(/'\.\/_next\//g, "'/_next/");
  
  // Ensure all _next paths are absolute
  content = content.replace(/(["'])(\.\/)?_next\//g, '$1/_next/');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.css')) {
      fixPathsInFile(filePath);
    }
  }
}

// Create .nojekyll file for GitHub Pages
const nojekyllPath = path.join(outDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '', 'utf8');
  console.log('Created .nojekyll file for GitHub Pages');
}

if (fs.existsSync(outDir)) {
  console.log('Fixing paths in generated files...');
  processDirectory(outDir);
  console.log('Paths fixed successfully!');
} else {
  console.error('Out directory not found. Please run "npm run build" first.');
  process.exit(1);
}
