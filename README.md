# Yi Home — promo site

Promo site for the Yi Home iOS app (App Store ID 6825845993).
Design: Paper file "Yi Home v1 RF", page Promo (DNA: newcomer.framer.website).
Scaffold: the Hisense site (React 18 + TS + Vite 6 + Tailwind 4 + React Router 7).

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173/yihome-v1/
pnpm build
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to
GitHub Pages at https://norin-web.github.io/yihome-v1/. Pages → Source must be **GitHub Actions**.

**base / custom domain trap:** `vite.config.ts` has `base: "/yihome-v1/"`. When a custom
domain is attached, switch to `base: "/"` and add `public/CNAME` in the same commit, or the
site goes blank. If the domain is removed, switch back.

## Content

- Every fact (brand, email, App ID, features, FAQ, specs) — `src/app/content/site.ts`.
  `PLACEHOLDER` marks values still missing (operator, iOS version, category).
- Privacy / Terms — `src/app/content/legal.ts`, owner's text **verbatim**. Currently empty
  placeholders; the pages render a placeholder layout until the text is pasted in.
- Images — `public/images/` (WebP), always referenced through `img()` from `src/app/utils/img.ts`.

## Motion

CSS transitions driven by `useReveal` (`src/app/utils/useReveal.ts`). Fallbacks are gated on
element geometry so content never stays hidden and the page never animates all at once.
No smooth-scroll library; the header is sticky and never hides.
