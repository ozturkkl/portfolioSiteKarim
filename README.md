# Ilayda Turkmen — Photography

SvelteKit portfolio. Live at [ilaydaturkmen.com](https://ilaydaturkmen.com).

```bash
npm install
cp .env.example .env   # NEXTCLOUD_HOST + NEXTCLOUD_SHARE_TOKEN
npm run dev
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Static build → `build/` |
| `npm run check` | Typecheck |
| `npm run sync:photos` | Pull from Nextcloud → `static/images/` + `media.json` |

## Customize

- `src/lib/data/site.ts` — copy, nav, contact (`headline` drives hero + default meta description)
- `src/lib/data/pricing.ts` — packages
- Nextcloud folders — see `AGENTS.md`; run `sync:photos` after changes

## Deploy

GitHub Pages via `.github/workflows/deploy-pages.yml` on push to `main`. Custom domain: `static/CNAME`.

Photo sync CI needs secrets `NEXTCLOUD_HOST` and `NEXTCLOUD_SHARE_TOKEN`.

After changing `scripts/photos.config.mjs` (e.g. contact asset path), run `npm run sync:photos` locally or trigger the sync workflow.

See [AGENTS.md](./AGENTS.md) for agent context.

## TODO

- [ ] **Contact form** — wire submit to a service (Formspree, Netlify Forms, etc.) or `mailto:` fallback
- [ ] **About copy** — refresh home vs about page copy to reduce overlap
- [ ] **Lightbox** — shared page-level lightbox, keyboard nav, carousel a11y
- [ ] **SEO** — per-page meta descriptions, Open Graph / Twitter Card tags
- [ ] **media.json validation** — validate manifest shape at sync or build time
- [ ] **Sitemap** — generate `sitemap.xml` at build for static routes
- [ ] **Perandory font** — self-host with `font-display: swap` to reduce FOUT (fallback stack: Cormorant Garamond)
