# Ilayda Turkmen — Photography Portfolio

A minimal photography portfolio built with **SvelteKit**, **Svelte 5**, and **Tailwind CSS v4**.

Inspired by fine-art photography sites — full-bleed imagery, elegant typography, and a focus on storytelling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — B&W hero, about intro, masonry album preview |
| `/portfolio` | Full gallery with category filters |
| `/about` | About the photographer |
| `/pricing` | Session packages & investment |
| `/contact` | Contact form (UI only for now) |

The home page is the primary focus; inner pages are functional scaffolds to refine later.

## Customization

Edit the data files in `src/lib/data/`:

- `site.ts` — brand, hero, about copy, contact details, footer note
- `gallery.ts` — portfolio images
- `pricing.ts` — packages and pricing

Placeholder images are from [Unsplash](https://unsplash.com). Replace with your own photos when ready.

## Build & deploy

```bash
npm run build
npm run preview
```

The site is fully static and can be deployed to Netlify, Vercel, Cloudflare Pages, or any static host.

## For AI agents

See [AGENTS.md](./AGENTS.md) for project context and conventions.
