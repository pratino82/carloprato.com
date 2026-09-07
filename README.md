# carloprato.com

Editable source for Carlo Prato's academic website. The site is statically generated and published to GitHub Pages after every push to `main`.

## Edit the site

- Most publication, research, biography, teaching, and recommendation text is in `data/site-content.json`.
- Page structure is in `app/`.
- Typography, colors, spacing, and responsive behavior are in `app/globals.css`.
- Images are in `public/images/`.

The `html` fields in `data/site-content.json` may contain normal inline HTML such as `<a>`, `<em>`, `<strong>`, and `<br>`.

## Preview on Windows

This project requires Node.js 22.13.0 or later. On a normally configured computer, verify that both Node.js and npm are available:

```powershell
node --version
npm.cmd --version
```

If either command is not recognized, install Node.js and reopen PowerShell so the updated `PATH` takes effect.

Open PowerShell in the project folder. After editing `data/site-content.json`, validate its JSON syntax before starting the website:

```powershell
cd "C:\Users\pratino\Documents\Codex\GPT Repository\carlo_codex_workspace\Personal Website"
Get-Content -Raw .\data\site-content.json | ConvertFrom-Json | Out-Null
```

Install dependencies after the initial checkout or whenever `package.json` or `package-lock.json` changes:

```powershell
npm.cmd install
```

Start the development preview:

```powershell
npm.cmd run dev
```

Then open `http://localhost:3000`. Keep PowerShell running while previewing; press `Ctrl+C` to stop the server.

### Codex runtime fallback

If `npm.cmd` is unavailable but the dependencies in `node_modules` are already installed, the local Next.js server can be started with Codex's bundled Node.js:

```powershell
cd "C:\Users\pratino\Documents\Codex\GPT Repository\carlo_codex_workspace\Personal Website"
$codexNode = "C:\Users\pratino\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
& $codexNode ".\node_modules\next\dist\bin\next" dev
```

To check the production build:

```powershell
npm.cmd run build
```

With the Codex runtime fallback, use:

```powershell
& $codexNode ".\node_modules\next\dist\bin\next" build
```

## Publish

Commit and push changes to `main`. `.github/workflows/pages.yml` automatically builds the static pages and deploys them to GitHub Pages.

```powershell
git status --short
git add data/site-content.json README.md
git commit -m "Update website content and instructions"
git push origin main
```

Stage only the files intended for publication; adjust the `git add` line when other source files were deliberately changed. After pushing, the deployment normally takes a few minutes and can be monitored in the repository's GitHub Actions tab.

The custom domain is declared in `public/CNAME`. Do not remove that file while `carloprato.com` points to GitHub Pages.
