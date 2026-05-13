# Codegineers — Website

The marketing website for **Codegineers**, a software engineering studio.

Built as a fast, dependency-free static site so it can be deployed anywhere in seconds — GitHub Pages, Netlify, Vercel, Cloudflare Pages, or just a plain S3 bucket.

## Stack

- Plain HTML, CSS, and a small amount of vanilla JavaScript
- No build step, no framework, no npm install
- Google Fonts (Fraunces, Manrope, JetBrains Mono)

## Project structure

```
.
├── index.html       # All page content
├── styles.css       # Full stylesheet
├── script.js        # Mobile menu, scroll reveal, year stamp
├── assets/
│   └── logo.png     # Brand logo
├── README.md
├── LICENSE
└── .gitignore
```

## Run locally

Just open `index.html` in a browser. Or, if you want a proper local server:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then visit http://localhost:8000.

## Deploy

### GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, pick the `main` branch and the `/ (root)` folder.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute.

### Netlify / Vercel / Cloudflare Pages

Connect the repo. No build command. Publish directory is the project root.

## Customising

- **Copy**: edit `index.html` directly. Sections are clearly commented.
- **Colours / fonts**: change the CSS variables at the top of `styles.css` (look for `:root`).
- **Logo / favicon**: replace `assets/logo.png`.
- **Contact form**: currently the form shows a success message client-side. To actually receive submissions, wire it up to a service like Formspree, Basin, or your own endpoint by adding an `action` attribute to the `<form>` and removing the inline `onsubmit`.

## License

MIT — see `LICENSE`.
