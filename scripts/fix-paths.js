const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // First, fix any incorrect ../ paths back to ./
  content = content.replace(/href="\.\.\/_next\//g, 'href="./_next/');
  content = content.replace(/src="\.\.\/_next\//g, 'src="./_next/');
  content = content.replace(/href='\.\.\/_next\//g, "href='./_next/");
  content = content.replace(/src='\.\.\/_next\//g, "src='./_next/");
  
  // Replace absolute paths with relative paths (careful not to double-replace)
  // Only replace if it's an absolute path (starts with / and not already ./)
  content = content.replace(/href="\/_next\//g, 'href="./_next/');
  content = content.replace(/src="\/_next\//g, 'src="./_next/');
  content = content.replace(/href='\/_next\//g, "href='./_next/");
  content = content.replace(/src='\/_next\//g, "src='./_next/");
  
  // Fix image paths (only if absolute, not already relative)
  content = content.replace(/href="\/([^"./][^"]*\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))"/gi, 'href="./$1"');
  content = content.replace(/src="\/([^"./][^"]*\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))"/gi, 'src="./$1"');
  content = content.replace(/href='\/([^'./][^']*\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))'/gi, "href='./$1'");
  content = content.replace(/src='\/([^'./][^']*\.(jpg|jpeg|png|svg|gif|webp|ico|woff|woff2|ttf|eot))'/gi, "src='./$1'");
  
  // Fix JSON paths in script tags (only absolute paths)
  content = content.replace(/src="\/([^"./][^"]*\.js)"/g, 'src="./$1"');
  content = content.replace(/src='\/([^'./][^']*\.js)'/g, "src='./$1'");
  
  // Fix CSS paths (only absolute paths)
  content = content.replace(/href="\/([^"./][^"]*\.css)"/g, 'href="./$1"');
  content = content.replace(/href='\/([^'./][^']*\.css)'/g, "href='./$1'");
  
  // Fix paths in JavaScript strings (be careful - only in specific contexts)
  // Fix webpack publicPath
  content = content.replace(/__webpack_require__\.p\s*=\s*["']\/_next\//g, '__webpack_require__.p = "./_next/');
  content = content.replace(/__webpack_require__\.p\s*=\s*["']\.\.\/_next\//g, '__webpack_require__.p = "./_next/');
  
  // Fix paths in JSON-like structures (for chunk loading)
  // Only replace absolute paths in quotes that are clearly paths
  content = content.replace(/"\/_next\//g, '"./_next/');
  content = content.replace(/'\/_next\//g, "'./_next/");
  
  // Fix any remaining absolute paths in script content (but be careful)
  // Only in specific patterns we know are safe
  content = content.replace(/(["'])\/_next\//g, '$1./_next/');
  
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
