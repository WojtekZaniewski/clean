const fs = require("fs")
const path = require("path")

// This script converts JPG images in /public to WebP using sharp.
// Run: node scripts/convert-to-webp.js
// Requires: npm install --save-dev sharp

async function main() {
  let sharp
  try {
    sharp = require("sharp")
  } catch {
    console.error("sharp not installed. Run: npm install --save-dev sharp")
    process.exit(1)
  }

  const publicDir = path.join(__dirname, "..", "public")
  const files = fs.readdirSync(publicDir).filter((f) => /\.jpe?g$/i.test(f))

  for (const file of files) {
    const input = path.join(publicDir, file)
    const output = path.join(publicDir, file.replace(/\.jpe?g$/i, ".webp"))
    if (fs.existsSync(output)) {
      console.log(`Already exists: ${output}`)
      continue
    }
    await sharp(input).webp({ quality: 85 }).toFile(output)
    console.log(`Converted: ${file} → ${file.replace(/\.jpe?g$/i, ".webp")}`)
  }

  console.log("Done.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
