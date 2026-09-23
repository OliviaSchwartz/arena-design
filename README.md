# Arena website — developer handoff

Complete editable snapshot of the current marketing site, including all 19 pages, images, logos, embedded fonts, CSS, JavaScript, and interactive map markup.

Current review site: https://arena-member-homepage.arena-3566.chatgpt.site/

## Run locally

Install Node.js 20 or newer, then run:

```sh
npm run dev
```

Open http://localhost:3000. No npm dependencies, installation step, environment file, or credentials are required. The preview supports both `/about` and `/about.html` routes. Stop with Ctrl+C. Set `PORT` to choose another port.

```sh
npm run check
npm run build
```

Build copies the site to `dist/` for static hosting. Configure your host to resolve extensionless paths to their `.html` files. There is no application server, React, TypeScript, or bundler in this implementation.

## Structure and editing

- `public/`: authoritative, directly editable website source and assets. This is the exact published HTML/CSS/JS implementation, not a minified framework build.
- `public/index.html`: homepage, card interactions, member spotlights, inline map and homepage animation logic.
- `public/*.html`: About, Events, Partner, News, Newsletter, Careers, FAQ, Criteria, Expense, Guidelines, Terms of Use, Privacy Policy, Contact, and five internal press releases.
- `public/styles.css`: base layout/styles; `brand.css`: shared brand styles, responsive navigation, card states, popup and motion; `pages.css`: interior page refinements.
- `public/fonts-embedded.css`: bundled font data; no remote font request is needed.
- `public/pages.js`: interior page interactions, filters, scroll reveals and form handling.
- `public/mobile-navigation.js`: hamburger disclosure across all pages.
- `public/newsletter-popup.js`: newsletter popup triggers and session frequency controls.
- `public/page-assets/`, `partner-logos/`, `press-logos/`, and root image/SVG files: locally bundled media and logos.
- `scripts/`: dependency-free local preview, static build, and integrity checks.

Shared navigation, footer, popup markup and CTA markup are repeated in the static HTML files. Update all pages when changing shared content, or migrate them into reusable templates/components. CSS includes accumulated overrides; later rules intentionally win. Earlier one-off migration/design scripts and publishing archives are not required to develop or serve this snapshot and are not included. No source maps, proprietary runtime, or hidden component sources are needed.

## Built experience

Responsive branded pages; mobile menu; repeatable scroll reveals; upward-exiting brand splash; automatically scrolling logo tickers; mobile-visible card descriptions with desktop hover interactions; interactive city pins; five member spotlights with looping arrows and mobile swipe; filterable editorial news; internal press releases; newsletter landing page and Mailchimp signup popup. Reduced-motion preferences are respected.

## Integrations and remaining work

- Membership CTAs link to `https://apply.arenatalent.com/signup`; Login links to the external `/login` app. That application is not part of this repository.
- Newsletter forms use the supplied public Mailchimp embedded form endpoint and hidden tag ID `6504285`. These public form identifiers are not API credentials. Verify in Mailchimp that this ID corresponds to **Newsletter**, and test subscription/confirmation behavior with an authorized test address. No actual subscriber was submitted during implementation.
- Contact and partnership forms call the existing external `arenatalent.com/api/contact` and `/api/partner` services. Their server implementations are not available in this project. Confirm CORS for the eventual domain, validation, spam protection, delivery and recipient routing to `contact@arenatalent.com` and `partnerships@arenatalent.com`. Recipient delivery has **not** been verified.
- The application deadline (Oct 2), cohort language, price, stats, stories and event listings are static content and need editorial maintenance.
- Newsletter popup application-flow exclusion recognizes application clicks within this site's browser session; it cannot detect application progress on another domain or device.
- Before launch on a new domain, review legal copy, content accuracy, asset/font licensing, accessibility, browser/mobile behavior, SEO metadata, redirects, email integrations and analytics needs. This snapshot contains no analytics service configuration or CMS.

## Hosting and security

The existing review site is hosted on Sites. This repository is portable static source; hosting credentials and the existing project binding are intentionally excluded. Deploy `dist/` to your chosen host. This handoff does not change the existing review site's deployment.

No passwords, API keys, tokens, `.env` files, Git history from the source host, or local caches are included. Never put private mail or application API credentials into browser JavaScript. Keep any future backend secrets in the hosting provider's secret store.

## Search and sharing metadata
Titles, descriptions, Open Graph and Twitter tags were copied from the matching live arenatalent.com pages on September 18, 2026 (18 exact matches). The new newsletter landing page has no existing counterpart, so its own title/description were retained with the shared Arena image. The current source OG URLs and image URLs remain on arenatalent.com; review URLs when moving domains or changing press-release routes. A local copy of the shared image is bundled as public/og-image.png.

