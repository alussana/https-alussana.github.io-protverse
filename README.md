# ProtVerse website

A simple, modern landing page for ProtVerse, built as static files for GitHub Pages.

## Files

| File         | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| `index.html` | Page structure (hero + placeholder for content sections).      |
| `styles.css` | All styling. Palette and layout tokens live in `:root` at top. |
| `main.js`    | Download-link config and footer year.                          |
| `assets/`    | Images, including `ProtVerse_logo.png`.                        |

## Configure the download button

Open `main.js` and set the URL:

```js
const DOWNLOAD_URL = "https://example.com/download";
```

External `http(s)` links open in a new tab automatically.

## Add content later

Drop new sections inside `<main class="page">` in `index.html`:

```html
<section class="section">
  <h2 class="section__title">About ProtVerse</h2>
  <p class="section__body">Your text here.</p>
</section>
```

They're automatically centered, width-constrained, and styled to match the logo.

## Tweak the look

Edit the variables at the top of `styles.css` (`--color-blue`, `--color-purple`,
`--max-width`, etc.) to restyle the whole page in one place.

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Push these files to the repository (the page lives at the repo root).
2. In **Settings → Pages**, set **Source** to **Deploy from a branch**, pick your
   branch (e.g. `main`) and the `/ (root)` folder.
3. The site publishes at `https://<user-or-org>.github.io/<repo>/`.
