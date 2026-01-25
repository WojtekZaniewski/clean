# Deploying to Namecheap

## Issue Fixed
The site was using absolute paths (`/_next/...`) which don't work on Namecheap hosting. All paths have been converted to relative paths (`./_next/...`).

## Build Instructions

1. **Build the site:**
   ```bash
   npm run build
   ```
   This will:
   - Generate static files in the `out` directory
   - Automatically fix all paths to be relative

2. **Upload to Namecheap:**
   - Upload **ALL contents** of the `out` folder to your Namecheap hosting
   - Make sure `index.html` is in the root directory of your domain
   - Ensure the `_next` folder and all image files are uploaded

## Important Files to Upload

Upload these from the `out` directory:
- `index.html` (main page)
- `_not-found.html` (404 page)
- `_next/` folder (all JavaScript, CSS, and fonts)
- All image files: `1.jpg` through `13.jpg`, `logo.png`, `lenusia.png`, etc.
- All other assets (icons, placeholders, etc.)

## File Structure on Namecheap

Your Namecheap hosting root should look like:
```
/
├── index.html
├── _not-found.html
├── _next/
│   └── static/
│       ├── chunks/
│       └── media/
├── 1.jpg
├── 2.jpg
├── ... (all other images)
├── logo.png
└── lenusia.png
```

## Troubleshooting

If styles/images still don't load:
1. Check that all files from `out` folder were uploaded
2. Verify file permissions (should be readable)
3. Clear browser cache
4. Check browser console for 404 errors
5. Ensure `.htaccess` (if using Apache) allows serving static files

## Notes

- The build script automatically fixes paths, so always use `npm run build` before deploying
- Don't manually edit files in the `out` folder - they will be overwritten on next build
- The site works as a static site - no server-side code needed
