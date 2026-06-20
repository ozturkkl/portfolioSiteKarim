# Ilayda Turkmen — Photography

SvelteKit portfolio. Live at [ilaydaturkmen.com](https://ilaydaturkmen.com).

<img width="1621" height="1273" alt="image" src="https://github.com/user-attachments/assets/316ed5f2-99b7-4bcc-be72-4c679b60b8fc" />


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
| `npm run sync` | Pull from Nextcloud → `static/images/` + `media.json` |

## Customize

- `src/lib/data/site.ts` — copy, nav, contact (`headline` drives hero + default meta description)
- `src/lib/data/pricing.ts` — packages
- Nextcloud folders — see `AGENTS.md`; run `sync` after changes

## Deploy

GitHub Pages via `.github/workflows/deploy-pages.yml` on push to `main`. Custom domain: `static/CNAME`.

Photo sync CI (`.github/workflows/sync-photos.yml`) needs repository secrets `NEXTCLOUD_HOST` and `NEXTCLOUD_SHARE_TOKEN` — same values as `.env`. Set them under **Settings → Secrets and variables → Actions**, then run the workflow manually to verify.

After changing `scripts/photos.config.mjs` (e.g. contact asset path), run `npm run sync` locally or trigger the sync workflow.

See [AGENTS.md](./AGENTS.md) for agent context.

## TODO

- [x] **Contact form** — Web3Forms (`PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env`, comma-separated for multiple inboxes; GitHub Actions secret for deploy)
- [ ] **About copy** — refresh home vs about page copy to reduce overlap
- [x] **Lightbox** — shared page-level lightbox, keyboard nav, carousel a11y
- [ ] **SEO** — per-page meta descriptions, Open Graph / Twitter Card tags
- [x] **media.json validation** — validate manifest shape at sync or build time
- [ ] **Sitemap** — generate `sitemap.xml` at build for static routes
- [ ] **Perandory font** — self-host with `font-display: swap` to reduce FOUT (fallback stack: Cormorant Garamond)
