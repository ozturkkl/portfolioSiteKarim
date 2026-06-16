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

- `src/lib/data/site.ts` — copy, nav, contact
- `src/lib/data/pricing.ts` — packages
- Nextcloud folders — see `AGENTS.md`; run `sync:photos` after changes

## Deploy

GitHub Pages via `.github/workflows/deploy-pages.yml` on push to `main`. Custom domain: `static/CNAME`.

Photo sync CI needs secrets `NEXTCLOUD_HOST` and `NEXTCLOUD_SHARE_TOKEN`.

See [AGENTS.md](./AGENTS.md) for agent context.
