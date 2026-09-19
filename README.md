# Sakshi Enterprises Website

A static B2B website for Sakshi Enterprises — packaging machinery supplier.
"Packing Solutions for a Better Tomorrow"

## Folder structure

```
sakshi-enterprises/
├── index.html          # Main page (all sections: home, about, products, industries, services, gallery, quote, contact)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Product data, filtering, search, modal, form handling
├── images/              # Reserved for your machine photos (empty — see note below)
├── fonts/                # Reserved for self-hosted fonts (empty — see note below)
├── package.json
└── README.md
```

All paths in `index.html` are relative (`css/style.css`, `js/main.js`), so the
site works straight out of the ZIP with no build step.

## Notes on assets

- **Fonts**: the site uses Google Fonts (Space Grotesk + Inter), loaded via a
  `<link>` tag in `index.html` from Google's CDN. No local font files are
  required. If you'd rather self-host them (e.g. for offline use or GDPR
  reasons), download the `.woff2` files into `fonts/` and update the
  `@font-face` rule at the top of `css/style.css`.
- **Images**: the product cards and gallery currently use simple inline SVG
  icons instead of photography, so the site has no external image
  dependencies. Drop your real machine photos into `images/` and update the
  `.p-visual` and `.g-item` sections in `css/style.css` / `js/main.js` to
  reference them (e.g. `images/band-sealer.jpg`) once you have them ready.

## Running locally

You don't need Node.js or any build tool — this is a plain static site.

**Option 1 — just open it**
Double-click `index.html`, or open it directly in your browser.

**Option 2 — local server (recommended, avoids browser file-access quirks)**
```bash
npm install
npm start
```
Then visit `http://localhost:3000`.

**Option 3 — Python (no Node.js needed)**
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000`.

## Deploying

This is a static site, so it can be deployed anywhere that serves static
files — no backend required for the current version.

- **Netlify / Vercel**: drag-and-drop the whole folder into the dashboard,
  or connect a Git repo and set the publish directory to the project root.
- **GitHub Pages**: push this folder to a repo and enable Pages on the
  `main` branch (root folder).
- **Any shared hosting / cPanel**: upload the contents of this folder to
  `public_html/` (or your site's web root) via FTP/SFTP.

## Making the quote form work

The "Request a Quote" form currently shows a confirmation message in the
browser but does not send data anywhere (there's no backend). To make it
functional, either:

1. **Formspree / Getform / Basin** (easiest): sign up for a free form
   endpoint, then change the `<form>` tag in `index.html` to
   `<form action="https://formspree.io/f/YOUR_ID" method="POST">` and remove
   the `onsubmit="return submitQuote(event)"` handler.
2. **Your own backend**: point the form at your API endpoint and adjust
   `submitQuote()` in `js/main.js` to send a `fetch()` request instead of
   just showing the toast message.

## Customizing

- **Colors, type, spacing**: all defined as CSS variables at the top of
  `css/style.css` (`--navy`, `--sky`, etc.) — change them once and the whole
  site updates.
- **Products**: edit the `products` array at the top of `js/main.js`. Each
  entry drives its card, filter tags, and modal automatically — no HTML
  editing needed to add/remove machines.
- **Contact details**: phone numbers, email, and address appear in the
  Contact section and footer of `index.html`, and are also used for the
  `tel:`, `mailto:` and WhatsApp (`wa.me`) links.
