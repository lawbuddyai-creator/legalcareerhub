# CommonCounsel AI — GitHub Pages Static Site

This folder contains a **fully static** (no Next.js required) GitHub Pages site designed to work as a **Project Pages** site at:

`https://lawbuddyai-creator.github.io/legalcareerhub/`

## Why this fixes the white screen issue
The earlier deployment broke because the generated Next.js assets (`/_next/...`) were being requested from the wrong path (404s).
This version avoids Next.js entirely and serves plain HTML/CSS/JS from `/docs`.

## Deploy (recommended)
1. In your GitHub repo **lawbuddyai-creator/legalcareerhub**, keep these files:
   - `docs/` (this folder)
2. GitHub → **Settings → Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
   - Save
3. Wait for GitHub Pages to rebuild, then hard refresh the site.

## Local preview
Open `docs/index.html` in your browser.

> Note: some links and assets are referenced with the repo base path `/legalcareerhub/`.  
> This is correct for GitHub Project Pages. If you later move to a custom domain root, adjust the `base` constant in the HTML template or update paths.

## Pages included
- Home
- Product
- Demo Chat
- Document Reader
- Pricing
- Resources (+ 4 detail pages)
- About
- Contact
- Privacy
- Terms
- 404 page
