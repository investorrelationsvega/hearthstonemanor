# Hearthstone Manor

Website for **Hearthstone Manor Assisted Living and Memory Care** in Spanish Fork, Utah.

> Come Home to Hearthstone.

Built with React + Vite and deployed to Netlify.

## Stack

- React 18
- Vite 5
- React Router 6
- Netlify (hosting, forms, deploy previews)
- Google Tag Manager (placeholder `GTM-XXXXXXX`)

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Project structure

```
.
├── index.html                 # Vite entry, GTM snippet, Netlify Forms detection
├── netlify.toml               # Build + SPA redirect config
├── public/
│   ├── _redirects             # SPA fallback (backup of netlify.toml)
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                # Routes
    ├── components/
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── WhyHearthstone.jsx
    │   ├── MemoryCare.jsx
    │   ├── AssistedLiving.jsx
    │   ├── AboutUs.jsx
    │   ├── Gallery.jsx
    │   ├── Activities.jsx
    │   └── Contact.jsx
    └── styles/
        └── styles.css
```

## Brand

| Token      | Value     |
| ---------- | --------- |
| Primary    | `#2C3E50` |
| Accent     | `#D4A853` |
| Secondary  | `#C4956A` |
| Background | `#F5F0E8` |
| Text       | `#2C3E50` |

Headings use **Georgia** serif, body uses **Inter** sans-serif.

## Netlify deployment

1. Push this repository to GitHub (done).
2. In Netlify, click **Add new site → Import an existing project → GitHub** and
   pick `investorrelationsvega/hearthstonemanor`.
3. Build settings are already provided by `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. Click **Deploy site**.

### Deploy previews

Netlify automatically creates a unique preview URL for:

- Every pull request against `main`
- Every push to a non-`main` branch (for example,
  `claude/hearthstone-manor-website-FMkNU`, the active development branch)

Open the branch on GitHub, check the Netlify deploy check for the preview link,
or view it in the Netlify dashboard under **Deploys**. The `main` branch is the
only branch that deploys to the production URL.

## Contact form (Netlify Forms)

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/).
Because Vite renders the form at runtime, a hidden static copy of the form
lives in `index.html` so Netlify's build-time bot can detect it. Form
submissions appear in the Netlify dashboard under **Forms**.

The form includes a `bot-field` honeypot for spam protection.

## Google Tag Manager

The GTM container snippet is embedded in `index.html` with placeholder ID
**`GTM-XXXXXXX`**. Replace both occurrences (head script and noscript body
iframe) with the real GTM container ID before production deploy.

## Facility images

`Gallery.jsx` and `Activities.jsx` currently render styled placeholder tiles.
To replace them with real photos:

1. Drop the image files into `public/images/gallery/` and
   `public/images/activities/`.
2. In each page, replace the `<div className="photo-placeholder">...</div>`
   with `<img src="/images/gallery/your-file.jpg" alt="..." />` and update
   the `.photo-tile` styles if needed.

## Pages

- `/` — Home
- `/why-hearthstone` — The Hearthstone Advantage
- `/memory-care` — Memory Care
- `/assisted-living` — Assisted Living
- `/about` — About Us
- `/gallery` — Photo grid
- `/activities` — Activities photo grid
- `/contact` — Contact form + Google Maps embed

## Contact

**Hearthstone Manor**
1424 S 1700 E, Spanish Fork, UT 84660
Phone & Tours: (801) 798-1500
