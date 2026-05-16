# Shuvro Chakrobartty Personal Site

Local, static personal website for Shuvro Chakrobartty.

## Run locally

This site is plain HTML, CSS, and JavaScript. You can open `index.html` directly, or run a tiny local server:

```bash
python3 -m http.server 5173
```

Then open <http://localhost:5173>.

## Deploy

GitHub Pages deployment is configured with `.github/workflows/pages.yml`.
Pushes to `main` publish the static site from the repository root.

## Maintain content

- Main page structure: `index.html`
- Visual design: `styles.css`
- Small interactions: `script.js`
- Images and downloadable files: `assets/`

Completed versions should be committed and pushed to GitHub after basic local verification.
