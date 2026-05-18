# Codegineers — Website

Multi-page editorial website for **Codegineers**, a software engineering studio.

Built as a fast, dependency-free static site. Deploys anywhere in seconds — GitHub Pages, Netlify, Vercel, Cloudflare Pages, or plain object storage.

## Stack

- Plain HTML, CSS, and a small amount of vanilla JavaScript
- No build step, no framework, no npm install
- Shared header & footer are injected by `script.js` to avoid duplication
- Google Fonts (Fraunces, Inter, JetBrains Mono)
- Imagery via Unsplash CDN (swap for your own anytime)

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, services overview, featured work, pullquote, stats, CTA |
| `services.html` | Services — five capabilities laid out in detail |
| `work.html` | Work — asymmetric portfolio grid |
| `about.html` | Studio — story, process, principles, team |
| `contact.html` | Contact — form, info, locations |

## Project structure

```
.
├── index.html
├── services.html
├── work.html
├── about.html
├── contact.html
├── styles.css       # Shared design system
├── script.js        # Shared behaviours + injected header/footer
├── CNAME            # Custom domain for GitHub Pages
├── assets/
│   ├── logo.png
│   ├── favicon.ico
│   └── favicon-*.png
├── README.md
├── LICENSE
└── .gitignore
```

## Run locally

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Open http://localhost:8000.

## Replacing imagery

The site uses Unsplash CDN URLs for placeholder photos. To use your own:

1. Drop image files into `assets/` (e.g. `assets/hero-1.jpg`).
2. In the HTML, replace the relevant `<img src="https://images.unsplash.com/...">` with `<img src="assets/hero-1.jpg">`.
3. Keep the `aspect-ratio` of the container in mind — the existing grid frames expect roughly `3:4`, `1:1`, `4:5`, or `16:10` depending on which slot they fill.

## Deploy

### GitHub Pages
Already wired up — push to `main`, the `CNAME` file points the custom domain at GitHub Pages.

### Netlify / Vercel / Cloudflare Pages
Connect the repo. No build command. Publish directory is the project root.

## Customising the design

CSS variables live at the top of `styles.css` under `:root`. Brand colours, fonts, spacing, and easing curves are all defined there in one place.

## License

MIT — see `LICENSE`.
