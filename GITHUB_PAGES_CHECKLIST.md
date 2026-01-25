# GitHub Pages Deployment Checklist

## ✅ Step 1: Rebuild (DONE)
The site has been rebuilt with correct relative paths. All files in the `out` folder are ready.

## 📤 Step 2: Upload Files to GitHub

### Critical: Upload ALL files from `out` folder

1. **Open your GitHub repository in GitHub Desktop**

2. **Delete old files** (if any):
   - Remove any old `index.html`, `_next` folder, or image files from the root
   - Keep only: `.gitignore`, `CNAME`, and source code files

3. **Copy ALL files from `out` folder:**
   ```
   From: D:\clean\out\
   To: Your GitHub repo root
   ```

4. **Files to upload:**
   - ✅ `index.html`
   - ✅ `.nojekyll` (hidden file - VERY IMPORTANT!)
   - ✅ `_not-found.html`
   - ✅ `_next/` folder (entire folder with all subfolders)
   - ✅ All image files: `1.jpg`, `2.jpg`, `3.jpg`, ... `13.jpg`
   - ✅ `logo.png`
   - ✅ `lenusia.png`
   - ✅ All other files in `out` folder

5. **Verify `.nojekyll` is included:**
   - In GitHub Desktop, make sure you can see `.nojekyll` in the file list
   - If it's hidden, you may need to show hidden files
   - This file prevents Jekyll from processing your files

## ⚙️ Step 3: Configure GitHub Pages

1. Go to your repository on GitHub.com
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/ (root)`
4. Click **Save**

## 🔍 Step 4: Verify Upload

After pushing, check your repository on GitHub.com:

1. **Root directory should contain:**
   - `index.html`
   - `.nojekyll`
   - `_next/` folder
   - All image files

2. **Check file structure:**
   ```
   Your-Repo/
   ├── .nojekyll          ← Must be here!
   ├── CNAME
   ├── index.html
   ├── _next/
   │   └── static/
   │       ├── chunks/
   │       └── media/
   ├── 1.jpg
   ├── 2.jpg
   ├── ... (all images)
   └── logo.png
   ```

## ⏱️ Step 5: Wait and Test

1. **Wait 1-2 minutes** for GitHub Pages to update
2. Visit: `https://nettoyageliege.com/`
3. **Hard refresh:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
4. **Open DevTools (F12)** → Console tab
5. Check for errors

## 🐛 Troubleshooting 404 Errors

If you still see 404 errors:

### Check 1: Files are uploaded
- Go to your GitHub repo
- Click on `index.html` - does it exist?
- Click on `_next` folder - does it exist?
- Check that `.nojekyll` is visible

### Check 2: File paths in browser
- Open DevTools (F12) → Network tab
- Refresh the page
- Click on a failed request (404)
- Check the **Request URL**
- It should be: `https://nettoyageliege.com/_next/...` or `https://nettoyageliege.com/./_next/...`
- If it shows `/_next/...` (without domain), that's correct

### Check 3: GitHub Pages settings
- Settings → Pages
- Source should be: **Deploy from a branch**
- Branch: **main** (or your default)
- Folder: **/ (root)**

### Check 4: Clear cache
- Hard refresh: Ctrl+F5
- Or clear browser cache completely
- Try incognito/private window

### Check 5: Verify `.nojekyll`
- This file MUST exist in your repo root
- Without it, GitHub Pages uses Jekyll which breaks Next.js paths
- If missing, create it (empty file named `.nojekyll`)

## 📝 Quick Fix Commands

If you need to verify locally:

```bash
# Rebuild
npm run build

# Verify files
npm run verify

# Check paths in index.html
# Should see: href="./_next/..." not href="/_next/..."
```

## 🎯 Expected Result

After correct deployment:
- ✅ All CSS loads (no 404 on .css files)
- ✅ All JavaScript loads (no 404 on .js files)
- ✅ All images load (no 404 on .jpg, .png files)
- ✅ Site looks styled (not plain HTML)
- ✅ Carousel works
- ✅ All sections visible

## ⚠️ Common Mistakes

1. **Not uploading `_next` folder** - Most common!
2. **Missing `.nojekyll`** - Causes Jekyll processing
3. **Uploading to wrong branch** - Must be main/default branch
4. **Wrong folder in GitHub Pages settings** - Must be `/ (root)`
5. **Not waiting for GitHub Pages to update** - Takes 1-2 minutes
