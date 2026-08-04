# carloprato.com

Editable source for Carlo Prato's academic website. The site is statically generated and published to GitHub Pages after every push to `main`.

## Edit the site

- Most publication, research, biography, teaching, and recommendation text is in `data/site-content.json`.
- Page structure is in `app/`.
- Typography, colors, spacing, and responsive behavior are in `app/globals.css`.
- Images are in `public/images/`.

The `html` fields in `data/site-content.json` may contain normal inline HTML such as `<a>`, `<em>`, `<strong>`, and `<br>`.

## Preview on Windows

Open PowerShell in this folder and run:

```powershell
cd "C:\Users\pratino\Documents\Codex\GPT Repository\carlo_codex_workspace\Personal Website"
npm.cmd install
npm.cmd run dev
```

Then open `http://localhost:3000`.

To check the production build:

```powershell
npm.cmd run build
```

## Publish

Commit and push changes to `main`. `.github/workflows/pages.yml` automatically builds the static pages and deploys them to GitHub Pages.

```powershell
git add .
git commit -m "Update website"
git push
```

The custom domain is declared in `public/CNAME`. Do not remove that file while `carloprato.com` points to GitHub Pages.
