# AGENTS.md — Ilayda Turkmen Photography

Living notes for AI agents working on this repository. **Keep this file updated** as the project evolves.

## Project overview

Photography portfolio for **Ilayda Turkmen**. Design direction: **minimal, distraction-free** — full-bleed B&W hero, **Perandory** display type, lowercase brand top-left. Inspired by [Moonlike Photography](https://www.moonlikephotography.com) and a Figma reference (hero with motion-blur couple, centered uppercase headline).

**Status:** Home page is production-ready. Inner pages (about, portfolio, pricing, contact) are functional scaffolds — refine later to match home quality. `npm run check` and `npm run build` both pass.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | SvelteKit 2 (Svelte 5 runes) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Adapter | `@sveltejs/adapter-static` (fully prerendered) |
| Language | TypeScript |

Adapter is configured inline in `vite.config.ts` (no `svelte.config.js`). Prerender is enabled in `src/routes/+layout.ts`.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production static build → build/
npm run preview  # Preview production build
npm run check    # TypeScript + Svelte checks
```

## Home page (`/`)

Vertical flow — **no footer overlay on hero**:

1. **`HeroLanding`** — Full-viewport (`h-svh`), grayscale hero image with slow drift animation, Perandory headline centered, `id="hero"` for header scroll detection
2. **`HomeAbout`** — Portrait left (`site.about.portrait`): large circle (~192–288px), vertically centered beside greeting + intro. No "About me" eyebrow, no "Read more" link
3. **`HomeAlbum`** — Masonry column grid of all `galleryImages`. Edge padding slightly wider than grid gap: `px-6` / `sm:px-8`; gaps `gap-4` / `sm:gap-5`. "View portfolio" button at bottom
4. **`Footer`** (in layout) — friendly note + subtle `© ilayda turkmen` left, nav links center, Instagram + email icon links right (`site.footer.note`)

### Header behavior

- Fixed top; **brand** `ilayda turkmen` (lowercase, `text-2xl` / `lg:text-3xl`) links home
- Nav: About · Portfolio · Pricing · Contact
- On hero: white text, transparent background
- Scrolled past hero (`IntersectionObserver` on `#hero`): cream background, dark text
- Mobile hamburger on all pages; menu open forces dark overlay styling on home

## Inner pages

| Route | Components | Notes |
|-------|------------|-------|
| `/about` | `SectionHeading`, portrait, bio from `site.about` | Extra paragraphs + philosophy quote live in `site.ts` |
| `/portfolio` | `SectionHeading`, filter tabs, `GalleryGrid` | Filters via `galleryCategories` |
| `/pricing` | `SectionHeading`, `PricingCard` × 3 | Data from `pricing.ts` |
| `/contact` | `SectionHeading`, form UI (no backend), `site.contact.image` | Thank-you state on submit only |

All inner pages use `page-section` + `container-wide` / `container-narrow`. Per-page `<title>` overrides the layout default.

## Project structure

```
.
├── AGENTS.md
├── README.md
├── package.json
├── vite.config.ts
└── src/
    ├── app.css / app.html / app.d.ts
    ├── lib/
    │   ├── assets/favicon.svg
    │   ├── data/
    │   │   ├── site.ts              # brand, hero, about, contact, footer — EDIT FIRST
    │   │   ├── gallery.ts           # galleryImages + categories
    │   │   └── pricing.ts
    │   └── components/
    │       ├── layout/
    │       │   ├── Header.svelte
    │       │   └── Footer.svelte
    │       ├── ui/SectionHeading.svelte
    │       ├── HeroLanding.svelte
    │       ├── HomeAbout.svelte
    │       ├── HomeAlbum.svelte
    │       ├── GalleryGrid.svelte   # /portfolio (hover category labels)
    │       └── PricingCard.svelte
    └── routes/
        ├── +layout.svelte / +layout.ts
        ├── +page.svelte             # HeroLanding → HomeAbout → HomeAlbum
        ├── about/+page.svelte
        ├── portfolio/+page.svelte
        ├── pricing/+page.svelte
        └── contact/+page.svelte
```

## Design system

| Token | Value |
|-------|-------|
| Fonts | Perandory (hero headline, CDNFonts), Cormorant Garamond (site-wide) |
| `cream` | #f7f3ee |
| `cream-dark` | #ebe4da |
| `ink` | #1c1917 |
| `ink-muted` | #57534e |
| `accent` | #8b7355 |
| `--radius` | `0.125rem` in `:root` — buttons, photo grid, inputs, cards |

Shared component classes live in `src/app.css` (`@layer components`). Use these instead of one-off Tailwind strings:

| Class | Use |
|-------|-----|
| `eyebrow` | Section labels (accent, uppercase) |
| `heading-hero` / `heading-page` / `heading-section` / `heading-card` / `heading-quote` | Hero, page, block, card, and quote titles |
| `text-lead` / `text-body` / `text-body-muted` | Intro, body, secondary copy |
| `text-caption` / `text-contact` / `text-price` / `text-overlay` | Labels, contact links, pricing, image overlays |
| `text-nav` / `text-nav-mobile` | Header navigation |
| `nav-link` / `nav-link-mobile` | Header link hit areas |
| `btn-primary` / `btn-outline` / `btn-text` / `btn-block` | CTAs |
| `link` / `link-accent` | Inline and accent links |
| `label` / `input` | Form fields |
| `filter-tab-active` / `filter-tab-inactive` | Portfolio filters |
| `photo-frame` / `rounded-site` | Images and elements using `--radius` |
| `page-section` / `section-padding` / `section-surface` | Page and section spacing |
| `container-narrow` / `container-wide` | Content width constraints |

- Brand always lowercase in header/footer: `ilayda turkmen`
- Hero headline uppercase via Perandory (`heading-hero`)
- Internal links use `resolve()` from `$app/paths`

## Content customization

| File | What to edit |
|------|--------------|
| `site.ts` | `brandName`, `heroHeadline`, `hero.image`, `about.*`, `contact.*`, `footer.note`, `tagline` (meta description) |
| `gallery.ts` | Album/portfolio image URLs — **verify Unsplash URLs** (curl HEAD before adding) |
| `pricing.ts` | Session packages |

Current placeholders: `hello@ilaydaturkmen.com`, `@ilaydaturkmen`

## Planned / not yet implemented

- [ ] Hero image carousel / slider
- [ ] Real photography assets (user will provide)
- [ ] Remote fetching for image collections
- [ ] Refine inner pages (about, portfolio, pricing, contact)
- [ ] Contact form backend
- [ ] Lightbox on portfolio/home album
- [ ] Per-page meta/OG images
- [ ] SEO: sitemap, structured data

## Svelte conventions

- Svelte 5 **runes mode** in `vite.config.ts`
- Use `$state`, `$derived`, `$props()`, `$effect()` — no legacy `export let`, `$:`, `on:click`
- Validate with `npx @sveltejs/mcp svelte-autofixer <path>`

## Deployment

Static site — deploy `build/` to Netlify, Vercel, Cloudflare Pages, etc. All routes prerendered via `+layout.ts`.

## References

- https://www.moonlikephotography.com
- https://svelte.dev/docs/kit
