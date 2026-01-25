const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute paths with relative paths
  // /_next/ -> ./_next/ or _next/ depending on file location
  content = content.replace(/href="\/_next\//g, 'href="./_next/');
  content = content.replace(/src="\/_next\//g, 'src="./_next/');
  content = content.replace(/href='\/_next\//g, "href='./_next/");
  content = content.replace(/src='\/_next\//g, "src='./_next/");
  
  // Fix image paths
  content = content.replace(/href="\/([^"]+\.(jpg|png|svg|gif|webp|ico))"/g, 'href="./$1"');
  content = content.replace(/src="\/([^"]+\.(jpg|png|svg|gif|webp|ico))"/g, 'src="./$1"');
  content = content.replace(/href='\/([^']+\.(jpg|png|svg|gif|webp|ico))'/g, "href='./$1'");
  content = content.replace(/src='\/([^']+\.(jpg|png|svg|gif|webp|ico))'/g, "src='./$1'");
  
  // Fix JSON paths in script tags
  content = content.replace(/src="\/([^"]+\.js)"/g, 'src="./$1"');
  content = content.replace(/src='\/([^']+\.js)'/g, "src='./$1'");
  
  // Fix CSS paths
  content = content.replace(/href="\/([^"]+\.css)"/g, 'href="./$1"');
  content = content.replace(/href='\/([^']+\.css)'/g, "href='./$1'");
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json')) {
      fixPathsInFile(filePath);
    }
  }
}

if (fs.existsSync(outDir)) {
  console.log('Fixing paths in generated files...');
  processDirectory(outDir);
  console.log('Paths fixed successfully!');
} else {
  console.error('Out directory not found. Please run "npm run build" first.');
  process.exit(1);
}
