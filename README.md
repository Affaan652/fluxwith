# FluxWith

Prompt-to-website generator SaaS. React + TypeScript + Vite + Tailwind v4, Supabase for auth, Lemon Squeezy for billing, deployable on Netlify as a static build.

## Fix applied: black screen on `npm run dev`

Root cause: with no `.env` file, `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` were empty strings, and the Supabase client throws synchronously on an invalid URL. That crashed the whole app before React could render anything, which shows as a blank black screen since the page background is near-black. `src/lib/supabase.ts` now falls back to a placeholder URL instead of throwing, and `src/components/ConfigWarning.tsx` shows an amber banner telling you `.env` is missing, instead of failing silently.

An `ErrorBoundary` (`src/components/ErrorBoundary.tsx`) now also wraps the whole app, so if anything else throws at runtime you get a readable error card with the message instead of a black screen. If you still see a black screen after adding a real Supabase URL:

- Restart `npm run dev` after creating or editing `.env` — Vite only reads env files at server start, so an already-running dev server will not pick up a newly added `.env`.
- Confirm the file is named exactly `.env` (not `.env.txt`) and sits in the project root, next to `package.json`.
- Confirm both variable names are exact: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Vite only exposes env vars prefixed with `VITE_`.
- Open the browser console (F12) — with the error boundary in place, any real crash now prints a full stack trace there and shows the error message on screen instead of a blank page.

## What is built in this pass

- Landing page: 3D tilted hero visual (mouse-parallax browser card stack, real CSS 3D transforms), features, how-it-works, pricing, testimonials, final CTA, footer.
- Signup and Login pages on a desktop split-screen layout: form on the left, an animated panel on the right (`src/components/auth/AuthSidePanel.tsx`), wired to Supabase Auth.
- Pricing section wired to Lemon Squeezy checkout (overlay modal via `lemon.js`), plus a full Free vs Premium feature comparison table.
- Terms of Service (`/terms`) and Privacy Policy (`/privacy`) pages, linked from the footer.
- Auth context (`src/context/AuthContext.tsx`) exposing session state app-wide.
- Protected route wrapper and a placeholder Dashboard page.
- `netlify.toml` with SPA redirect rules, ready to deploy.

## Wiring up Lemon Squeezy

1. Create a Store in Lemon Squeezy, add a "Pro" product with a monthly variant.
2. Product > Share > copy the checkout URL.
3. Paste it into `LEMON_SQUEEZY_PRO_CHECKOUT_URL` in `src/components/landing/Pricing.tsx`.
4. `index.html` already loads `lemon.js`, so any link with class `lemonsqueezy-button` opens checkout as an overlay instead of a redirect.
5. For granting Pro access after payment, add a Lemon Squeezy webhook (order_created / subscription events) as a Netlify serverless function that updates a `plan` column on the user's Supabase `profiles` row.

## Adding Higgsfield-generated visuals

The design has three slots ready for real generated art instead of the current CSS-only fallbacks:

1. **Hero visual** — generate a wide (16:9) abstract 3D scene, save as `src/assets/generated/hero-visual.png`, then swap it in behind `ForgeStack` in `src/components/landing/Hero.tsx`.
2. **Auth side panel loop** — generate a short abstract video loop (molten flow / particles), save as `src/assets/generated/auth-loop.mp4`, then uncomment the `<video>` block in `src/components/auth/AuthSidePanel.tsx`.
3. **Brand mark** — generate a square (1:1) logo mark, save as `src/assets/logo.png`, then replace the `F` monogram used in `NavBar.tsx`, `Footer.tsx`, and `AuthLayout.tsx`.

Until real assets are dropped in, all three fall back to CSS-driven 3D animation so the pages are never empty.

## Setup

1. Create a Supabase project at supabase.com.
2. In the Supabase dashboard: Authentication > Providers, confirm Email is enabled. Under Authentication > URL Configuration, set your site URL (and the Netlify preview URL once deployed) for email confirmation redirects.
3. Copy `.env.example` to `.env` and fill in your project URL and anon key from Supabase > Project Settings > API.

```
cp .env.example .env
```

4. Install and run:

```
npm install
npm run dev
```

## Deploying to Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Add the two env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) in Netlify > Site configuration > Environment variables.
- `netlify.toml` already handles the SPA redirect so client-side routes like `/dashboard` do not 404 on refresh.

## Target free-tier architecture (for the next build phases)

| Layer | Hosted / managed by | Free quota |
|---|---|---|
| Frontend & SaaS app | Netlify (this Vite/React app) | Unlimited bandwidth for the app itself |
| Backend & API routes | Netlify Functions | 125,000 requests/month |
| Database & auth | Supabase | 50,000 MAU + 500MB DB |
| AI generation | Google Gemini 2.0 Flash API | 1,500 requests/day |
| User sites hosting | Netlify Sites API | 100GB bandwidth/month |

This is the intended shape once the generator ships: the FluxWith app itself stays a normal Netlify static site, a Netlify Function holds the Gemini API key server-side and proxies generation requests (never call Gemini from the browser), Supabase keeps users/sites/usage rows, and each generated site a user publishes becomes its own site provisioned through the Netlify Sites API rather than a route inside this app, which is what makes free subdomains and later custom-domain mapping possible.

## Roadmap (not yet built)

1. **Generator workspace** — prompt input inside the dashboard, calling Gemini 2.0 Flash from a Netlify Function (`netlify/functions/generate-site.ts`), returning a structured JSON site representation (sections/blocks/styles), not raw HTML, so the editor can operate on it.
2. **Section editor** — inline text edit, image replace, color scheme change against that JSON representation.
3. **Live preview** — render the JSON into an iframe.
4. **Publish flow** — provision a Netlify site per user site via the Netlify Sites API for free subdomains; custom domain mapping and clean HTML/CSS export for paid users.
5. **SEO and analytics settings** — meta title, description, Open Graph image, Google Analytics ID, stored per site and injected at publish/build time.
6. **Usage metering** — track Gemini requests per user per day against the 1,500/day pool so no single user can exhaust the shared quota; store counts in Supabase and enforce the cap inside the Netlify Function before calling Gemini.
7. **Admin dashboard** — role-gated (`role` column on `profiles`, enforced with Supabase Row Level Security, not just a client check): user management and ban/unban, Gemini usage per user, MRR and Lemon Squeezy transaction logs, editable system prompts, and a list of all generated sites with takedown actions.

Each of these is a substantial feature on its own.
