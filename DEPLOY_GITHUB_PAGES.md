# Deploying to GitHub Pages

## Important Files

1. **`.nojekyll`** - This file is automatically created in the `out` folder. It tells GitHub Pages not to process files with Jekyll (which can break Next.js apps).

2. **`CNAME`** - Your custom domain file (already exists)

## Deployment Steps

### Option 1: Using GitHub Desktop (Your Current Method)

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Copy files to repository root:**
   - Copy ALL contents from the `out` folder
   - Paste them into your GitHub repository root
   - Make sure `.nojekyll` is included
   - Make sure `CNAME` is in the root

3. **Commit and push:**
   - Commit all files
   - Push to GitHub

4. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
   - Save

### Option 2: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## File Structure on GitHub

Your repository root should have:
```
/
├── .nojekyll          ← Important! Prevents Jekyll processing
├── CNAME              ← Your custom domain
├── index.html         ← Main page
├── _not-found.html    ← 404 page
├── _next/             ← All JavaScript, CSS, fonts
│   └── static/
│       ├── chunks/
│       └── media/
├── 1.jpg through 13.jpg
├── logo.png
├── lenusia.png
└── (all other assets)
```

## Troubleshooting

### Styles/Images Not Loading

1. **Check `.nojekyll` exists** - This is critical for GitHub Pages
2. **Verify all files uploaded** - Check that `_next` folder and all images are in the repo
3. **Check browser console** - Look for 404 errors on specific files
4. **Clear cache** - Hard refresh (Ctrl+F5 or Cmd+Shift+R)
5. **Check file paths** - All should be relative (starting with `./`)

### Common Issues

- **404 on CSS/JS files**: Make sure `_next` folder is uploaded
- **404 on images**: Verify all image files are in root
- **Jekyll processing errors**: Ensure `.nojekyll` is present
- **Custom domain not working**: Check `CNAME` file is in root

## Verification

After deploying, check:
1. Visit `https://nettoyageliege.com/`
2. Open browser DevTools (F12)
3. Check Console for errors
4. Check Network tab - all files should load with 200 status
5. Verify styles are applied

## Notes

- Always run `npm run build` before deploying
- The build script automatically fixes paths and creates `.nojekyll`
- Don't manually edit files in `out` folder
- GitHub Pages may take a few minutes to update after push
