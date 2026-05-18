# Codegineers — Website

Marketing website for **Codegineers**, a software engineering studio based in Lebanon.

Live at: **https://codegineers.codes**

## Stack

- Plain HTML, CSS, vanilla JavaScript — no build step
- Font Awesome icons (CDN)
- Google Fonts: Inter + JetBrains Mono
- WhatsApp-integrated contact form (no backend required)

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, about, who we help, services, our work, why us, CTA |
| `services.html` | Services — 6 detailed service blocks + process + CTA |
| `work.html` | Our Work — project grid + CTA |
| `contact.html` | Contact — 3 contact cards + WhatsApp form |

## Brand colors

- **Blue:** `#1e7fc2`
- **Orange:** `#f28b1c`
- **White:** `#ffffff`

All defined as CSS variables at the top of `styles.css`.

## Run locally

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Contact form

The contact form opens WhatsApp with the message pre-filled. No backend needed. To update the phone number, edit the `waNumber` constant in `script.js`.

## Deploy

GitHub Pages with custom domain `codegineers.codes` (CNAME file in root).

## License

MIT — see `LICENSE`.
