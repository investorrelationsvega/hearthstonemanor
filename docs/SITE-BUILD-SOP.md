# Site Build SOP — Internal Playbook
## Standard Operating Procedure for Building & Deploying Client Websites

> **Internal use only.** This document captures the repeatable process used to build hearthstonemanor.com. Use it as a template for future client site builds.

---

## 1. Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | React 18 + Vite 5 | Fast builds, hot reload, modern JS, tiny bundle |
| Routing | React Router 6 | Client-side page navigation (SPA) |
| Hosting | Netlify (free tier) | Auto-deploys from GitHub, free SSL, form handling, deploy previews |
| Forms | Netlify Forms | No backend needed, spam filtering, email notifications |
| Version Control | GitHub | PR-based workflow with deploy previews per branch |
| Domain DNS | Client's registrar (Wix, GoDaddy, etc.) | A record + CNAME pointing at Netlify |
| Analytics | Google Tag Manager (placeholder) | Client swaps in their real GTM ID |

## 2. Project Structure

```
project-root/
├── index.html                  # Vite entry, GTM snippet, Netlify Forms detection,
│                                 Schema.org JSON-LD, Open Graph tags, robots meta
├── netlify.toml                # Build command, publish dir, SPA redirects, Node version
├── package.json                # Dependencies (react, react-dom, react-router-dom)
├── vite.config.js              # Vite + React plugin config
├── docs/                       # Internal docs (NOT deployed)
│   └── SITE-BUILD-SOP.md       # This file
├── public/                     # Static assets (copied to dist/ root by Vite)
│   ├── _redirects              # SPA fallback (backup of netlify.toml)
│   ├── __forms.html            # Standalone Netlify Forms detection file
│   ├── favicon.svg             # Vector favicon
│   ├── favicon-32x32.png       # Raster favicon
│   ├── favicon-192x192.png     # PWA icon
│   ├── apple-touch-icon.png    # iOS home screen icon (180x180)
│   ├── site.webmanifest        # PWA manifest (name, icons, theme color)
│   ├── robots.txt              # Crawl directives + sitemap reference
│   ├── sitemap.xml             # All routes listed for Google
│   └── images/                 # Facility photos, organized by use
│       ├── hero/               # Hero/banner photos
│       ├── gallery/            # Gallery page photos
│       └── activities/         # Activity/event photos
└── src/
    ├── main.jsx                # React entry (BrowserRouter wraps App)
    ├── App.jsx                 # Route definitions
    ├── hooks/
    │   └── usePageMeta.js      # Per-page <title>, meta description, OG tags, canonical
    ├── components/
    │   ├── Layout.jsx          # Persistent chrome: skip link, tour bar, navbar, main, footer
    │   ├── Navbar.jsx          # Fixed nav with hamburger (→ house animation), mobile drawer
    │   ├── Footer.jsx          # Address, phone (call/text), email, nav links, copyright
    │   ├── Slideshow.jsx       # Auto-advancing crossfade carousel with arrows + dots
    │   └── ContactForm.jsx     # Reusable Netlify Forms contact form
    ├── pages/
    │   ├── Home.jsx            # Hero, services list, slideshow, combined CTA + form
    │   ├── WhyHearthstone.jsx  # Three-pillar value prop cards
    │   ├── MemoryCare.jsx      # Service page (narrative)
    │   ├── AssistedLiving.jsx  # Service page (narrative)
    │   ├── AboutUs.jsx         # About page (narrative)
    │   ├── Gallery.jsx         # Grouped photo grid with hover captions
    │   └── Contact.jsx         # Contact info + form + Google Maps embed
    └── styles/
        └── styles.css          # All styles in one file, organized by component
```

## 3. Development Workflow

### Initial Setup
```bash
# 1. Create GitHub repo (empty, private)
# 2. Clone locally
git clone https://github.com/ORG/REPO.git
cd REPO

# 3. Initialize Vite React project
npm create vite@latest . -- --template react
npm install react-router-dom

# 4. Create the folder structure above
# 5. Build the site
# 6. Push to a feature branch
git checkout -b feature/initial-build
git add -A && git commit -m "Initial site build"
git push -u origin feature/initial-build
```

### Branch Strategy
- `main` = production (Netlify auto-deploys this)
- `feature/*` = development branches (Netlify creates deploy previews per PR)
- Never push directly to `main` during active development — use PRs for deploy previews
- Once approved, merge PR → main auto-deploys to production

### Deploy Previews
- Every push to a non-main branch (or every PR) gets a unique Netlify preview URL
- Share preview URLs with client for feedback before merging to production
- Preview URLs look like: `deploy-preview-1--sitename.netlify.app`

## 4. Netlify Configuration

### netlify.toml (in repo root)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Connecting to Netlify
1. app.netlify.com → Add new site → Import from GitHub
2. Select the repo
3. Build settings auto-populate from netlify.toml
4. Click Deploy
5. Production deploys from `main`; previews deploy from PRs/branches

### SPA Routing
The `/* → /index.html` redirect is critical for React Router. Without it, direct links to sub-pages (e.g. `/contact`) return 404. Both `netlify.toml` and `public/_redirects` contain this rule as a belt-and-suspenders approach.

## 5. Netlify Forms Setup

### Why Netlify Forms
- No backend server needed
- Free on Netlify's starter tier (up to 100 submissions/month)
- Built-in spam filtering + honeypot support
- Email notifications configurable in the dashboard

### How It Works
1. A static HTML form with `data-netlify="true"` must exist in the built output so Netlify's build-time bot can detect it
2. Since React renders forms at runtime (invisible to the build-time bot), we use TWO static forms:
   - A hidden form in `index.html`
   - A standalone `public/__forms.html` file (backup — more reliable on Netlify v2 projects)
3. The runtime React form (`ContactForm.jsx`) POSTs to `/` with a hidden `form-name` field that matches the static form's `name` attribute
4. Netlify intercepts the POST, stores the submission, and triggers any configured notifications

### Email Notification Setup (Dashboard)
1. Netlify dashboard → Forms → click the form name
2. Form notifications → Add notification → Email notification
3. Event: New form submission
4. Email to notify: `client@email.com`
5. Optional custom subject line

### Gotcha: Netlify v2 Projects
Modern Netlify projects require form detection to be explicitly enabled:
- Project Configuration → Forms → Form detection → Enable
- Then trigger a fresh deploy (Deploys → Trigger deploy → Clear cache and deploy)

## 6. Domain Setup (DNS)

### Standard Pattern: External DNS → Netlify
Keep DNS at the client's registrar (Wix, GoDaddy, Namecheap, etc.) and add two records:

| Type | Host | Value | TTL |
|---|---|---|---|
| A | `@` | `75.2.60.5` | 1 hour |
| CNAME | `www` | `SITENAME.netlify.app` | 1 hour |

### Netlify Side
1. Site settings → Domain management → Add custom domain → `clientdomain.com`
2. Add www subdomain
3. Set `www.clientdomain.com` as PRIMARY (better CDN performance than apex)
4. Wait for DNS propagation (5-60 min)
5. Netlify auto-issues Let's Encrypt SSL certificate

### Common Issues
- **Wix DNS**: may need to disconnect domain from Wix site first (Account Settings → Domains → "Point to external server")
- **GoDaddy/Namecheap**: straightforward A + CNAME, no disconnection needed
- **SSL pending**: wait 5 min after DNS verifies; hit "Renew certificate" if stuck after 20 min
- **Apex vs www**: always make www the primary domain (Netlify recommends this for CDN)

## 7. SEO Checklist

### Code-Level (implement during build)
- [ ] Unique `<title>` per page (use a `usePageMeta` hook for SPAs)
- [ ] Unique `<meta name="description">` per page (150-160 chars, include local keywords)
- [ ] `<meta name="robots" content="index, follow">`
- [ ] `<link rel="canonical">` per page
- [ ] Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:site_name)
- [ ] Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] Schema.org JSON-LD structured data (LocalBusiness or more specific type like AssistedLivingFacility)
- [ ] `robots.txt` in public/ (Allow all, reference sitemap)
- [ ] `sitemap.xml` in public/ (list all routes with priority weights)
- [ ] `<html lang="en">`
- [ ] Semantic heading hierarchy (one h1 per page, h2/h3 in logical order)
- [ ] Descriptive alt text on all images
- [ ] Fast page load (compress images, lazy load below-fold content)
- [ ] Mobile responsive (Google penalizes non-mobile sites)
- [ ] HTTPS (handled by Netlify's free Let's Encrypt)

### Client-Side (remind client)
- [ ] Claim/update Google Business Profile at business.google.com
- [ ] Ensure GBP website URL points to new domain
- [ ] Ensure GBP address/phone match the site exactly
- [ ] Category: appropriate business type
- [ ] Add photos to GBP from the gallery
- [ ] List on relevant directories (Yelp, industry-specific directories)

### Target Lighthouse Scores
- Accessibility: 95+
- Best Practices: 100
- SEO: 100
- Performance: 80+ (90+ with image optimization)

## 8. Accessibility (ADA/WCAG AA) Checklist

### Structure & Semantics
- [ ] `<html lang="en">`
- [ ] Proper landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`
- [ ] One `<h1>` per page, logical heading hierarchy
- [ ] Skip-to-content link (hidden until keyboard focus)
- [ ] All `<img>` have descriptive `alt` text
- [ ] All `<iframe>` have `title` attribute
- [ ] Decorative SVGs have `aria-hidden="true"`
- [ ] Forms: every input wrapped in `<label>` or has `aria-label`

### Keyboard & Focus
- [ ] `:focus-visible` outlines on all interactive elements
- [ ] `:focus:not(:focus-visible)` suppresses outlines on mouse clicks only
- [ ] Mobile drawer closes on Escape key, returns focus to trigger
- [ ] Tab order follows visual order
- [ ] No focus traps (except intentional ones with Escape exit)

### Color & Contrast
- [ ] Body text: 4.5:1 minimum on background (target 7:1+ / AAA)
- [ ] Large text (18pt+ or 14pt bold): 3:1 minimum
- [ ] UI components (borders, icons): 3:1 minimum
- [ ] Button text: 4.5:1 on button background
- [ ] Run contrast check with: `luminance = 0.2126*R + 0.7152*G + 0.0722*B` (after gamma correction)
- [ ] Verify sage/muted accent colors pass on ALL backgrounds they appear on

### Touch & Interaction
- [ ] Tap targets >= 44x44px (Apple) or 48x48px (Google)
- [ ] Touch-hover media query: `@media (hover: none)` disables sticky hover effects
- [ ] Form inputs 16px+ font-size on mobile (prevents iOS Safari zoom on focus)

### Motion
- [ ] `@media (prefers-reduced-motion: reduce)` disables transitions/animations
- [ ] Slideshow/carousel autoplay respects reduced-motion preference

### Testing
- [ ] Run Lighthouse Accessibility audit (target 95+)
- [ ] Keyboard-only walkthrough (Tab through every page)
- [ ] Screen reader test (VoiceOver on Mac, TalkBack on Android)

## 9. Responsive Design Breakpoints

| Range | Target Devices |
|---|---|
| 0–479px | Small phones (iPhone SE, small Android) |
| 480–639px | Large phones |
| 640–767px | Landscape phones, small tablets |
| 768–1023px | Tablets portrait (iPad) |
| 1024–1199px | Small desktops, iPad landscape |
| 1200–1279px | Desktop nav breakpoint (hamburger → full nav) |
| 1280px+ | Standard desktops |

### Key Patterns
- Mobile-first CSS (base styles = mobile, add complexity in `min-width` queries)
- Container max-width: ~1240px with responsive padding (1rem → 1.25rem → 2rem)
- Use `clamp()` for fluid font sizing (e.g. `clamp(2rem, 4.4vw, 3.3rem)` for h1)
- Grid columns scale: 1 → 2 → 3 (or 4 for galleries) across breakpoints
- Hero: use `aspect-ratio` matching the photo + responsive overrides for phones
- Hamburger nav breakpoint: choose based on how many nav items need to fit

## 10. Image Handling

### Formats & Sizes
- JPG for photos (80% quality, 2000px max width for hero, 1200px for gallery)
- SVG for icons, logos, favicons
- PNG for generated raster icons (favicon, apple-touch-icon)

### Compression
- Use tinyjpg.com or bulkresizephotos.com for batch compression
- Target: <400KB per photo for gallery, <600KB for hero
- GitHub web upload caps at 25MB per file (compressed photos are well under)

### Lazy Loading
- Hero image: `loading="eager"` + `fetchpriority="high"` (above the fold)
- All other images: `loading="lazy"` (below the fold)
- Google Maps iframe: `loading="lazy"`

### Favicon Set
Generate from brand mark at these sizes:
- `favicon.svg` — vector, scales to any tab size (primary)
- `favicon-32x32.png` — legacy browsers
- `favicon-192x192.png` — PWA / Android home screen
- `apple-touch-icon.png` (180x180) — iOS home screen
- `site.webmanifest` — PWA manifest (name, icons, theme-color, background-color)

## 11. Google Tag Manager

### Implementation
Add GTM snippet in two places in `index.html`:
1. `<script>` in `<head>` (the JS snippet)
2. `<noscript><iframe>` immediately after `<body>` (fallback)

Use placeholder `GTM-XXXXXXX` during development. Client replaces with real container ID before go-live (or we replace it once they provide the ID).

## 12. Contact Methods

### Phone Links
- Call: `<a href="tel:+1XXXXXXXXXX">`
- Text: `<a href="sms:+1XXXXXXXXXX">`
- Both work natively on iOS/Android; graceful on desktop

### Email Links
- `<a href="mailto:email@example.com">`

### Address Links
- Wrap in `<a href="https://maps.google.com/?q=ADDRESS" target="_blank">`
- iOS intercepts and opens Apple Maps; Android opens Google Maps

### Pattern: Call/Text Us Block
Show each phone number once with explicit "Call" and "Text" action links:
```
CALL / TEXT US
(801) 798-1500   Call · Text
(801) 420-5196   Call · Text
```

## 13. Pre-Launch Checklist

### Before Sharing Preview
- [ ] All pages render correctly on desktop and mobile
- [ ] Navigation works (all links, hamburger menu, active states)
- [ ] Contact form submits and appears in Netlify Forms dashboard
- [ ] Images load (no broken images, no 404s)
- [ ] Slideshow auto-advances and arrows/dots work
- [ ] Phone/text/email links work on mobile
- [ ] GTM placeholder noted (remind client to provide real ID)

### Before DNS Cutover
- [ ] Netlify Forms email notification configured
- [ ] GTM real ID swapped in (if provided)
- [ ] Deploy preview tested by client
- [ ] Favicon appears in browser tab
- [ ] Social share preview works (paste URL in iMessage/Facebook/LinkedIn to verify OG tags)

### After Go-Live
- [ ] All 4 URL variants redirect correctly (http/https × www/non-www)
- [ ] SSL certificate issued (lock icon in address bar)
- [ ] Run Lighthouse audit: Accessibility 95+, SEO 100, Best Practices 100
- [ ] Test contact form on live custom domain
- [ ] Client updates Google Business Profile website URL
- [ ] Client tests on their own devices (desktop + phone)
- [ ] Monitor Netlify Forms dashboard for first real submission

## 14. Ongoing Maintenance

### Content Updates
- Copy changes: edit the relevant `.jsx` page file, commit, push to main
- New photos: drop into `public/images/`, update the gallery data array, commit, push
- Netlify auto-deploys on every push to main (~60 seconds)

### SSL Certificate
- Netlify auto-renews Let's Encrypt certificates every 90 days
- No action needed unless DNS changes

### Form Submissions
- All submissions stored in Netlify Forms dashboard (backup)
- Email notifications route to configured address
- If client changes email: Netlify dashboard → Forms → Notifications → Edit

### Domain Renewal
- Domain registered with client's registrar (Wix, GoDaddy, etc.)
- Client responsible for renewal
- If domain lapses, site goes down but data/code is safe in GitHub

---

*Document version: 1.0 — Created during the hearthstonemanor.com build, April 2026.*
