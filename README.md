# Shel's Art — Website Project

Personal fine art website and shop for showcasing and selling original oil/canvas works and prints.
Built from scratch for full ownership and customization — no Wix, no Squarespace.

---

## Project Goals

- A visually distinctive portfolio site that reflects the work itself
- Sell **original paintings** directly via Stripe
- Sell **prints** via print-on-demand (Printful) — no inventory management
- Artist bio, statement, and commission inquiry form
- Optional: studio blog / process shots to build audience

---

## Agreed Tech Stack

| Layer | Tool | Cost |
|-------|------|------|
| Framework | Astro | Free |
| Styling | Custom CSS | Free |
| Payments | Stripe | 2.9% + $0.30 per transaction only |
| Prints | Printful API (print-on-demand) | Free to integrate |
| Image hosting | Cloudinary | Free tier |
| Code hosting | GitHub | Free |
| Site hosting | Vercel | Free tier |
| Domain registrar | Cloudflare Registrar | ~$10-15/yr |
| DNS | Cloudflare | Free |

**Estimated ongoing cost: ~$15/year (domain only)**

---

## Domain

- Considering `shelsart.com` (dropping the `26` — avoids dating the site)
- Register at **Cloudflare Registrar** (at-cost pricing, no upsells, free WHOIS privacy)
- Status: **not yet purchased**

---

## How the Pieces Connect

```
Local machine  →  git push  →  GitHub (code)
                                    ↓ auto-deploys
Cloudinary (artwork photos)    Vercel (live site)
                                    ↑
                        Domain (DNS via Cloudflare)
```

- **GitHub** — stores all code, never store large images here
- **Cloudinary** — stores all artwork photography, served by URL
- **Vercel** — hosts and runs the live site, connects directly to GitHub

---

## Next Steps (in order)

### Phase 1 — Accounts & Hello World ✅ Done
- [x] Purchase domain (`shelsart.com`) — live
- [x] GitHub repo (`cidiel/shel-art`)
- [x] Vercel connected, auto-deploying from GitHub
- [x] Astro site built and deployed end-to-end

### Phase 2 — Gallery & Portfolio ✅ Done
- [x] Gallery pages by category (Still Lifes / Landscapes / Religious), 20 paintings
- [x] Painting detail pages with lightbox, meta (year/dimensions/availability)
- [x] Artist bio / About page
- [ ] ~~Cloudinary~~ — **deviated from original plan.** Images live directly in `public/images/` and are committed to the repo, not hosted on Cloudinary. Works fine at this image count; revisit only if repo size or load time becomes a problem.

### Phase 3 — Shop (Originals) — 🚧 In progress, blocked on Stripe account activation

**Design decision (changed from original plan):** no separate `/shop` page. Every painting shows its own buy links right on its detail page (`src/pages/gallery/[slug].astro`). Flat pricing across all paintings — **$1,500/original, $100/print** — using **two shared Stripe Payment Links** (not one per painting), each click tagged with `?client_reference_id=<slug>` so Shel can tell which painting an order was for. Old `shop.astro` moved to `archive/shop.astro`, not deleted, in case we revert.

- [x] `src/data/paintings.js` — flat pricing applied to all 20 paintings
- [x] `src/data/checkout.js` — added, holds the two Payment Link URLs + `checkoutUrl()` helper; buttons fall back to the old mailto inquiry until both links are set, so nothing breaks mid-setup
- [x] `gallery/[slug].astro` — buy buttons wired to use `checkout.js`, labels updated to "Original Available · $1500" / "Print Available · $100"
- [x] Stripe account created, connected live (not test mode) — **"Shel's Art"**, `acct_1UBlegBjc1mBhai3`
- [x] Products + Prices created: Original Painting ($1500, `price_1UBlp5Bjc1mBhai3PugEAaqD`), Fine Art Print ($100, `price_1UBlpIBjc1mBhai3cDucAJrx`)
- [x] Payment Links created (shipping address collection on, required "Which painting?" text field as a backup to `client_reference_id`):
  - Original: `https://buy.stripe.com/3cI3cubm2bSPd0j4evdMI00`
  - Print: `https://buy.stripe.com/14AcN43TA3mje4naCTdMI01`
- [ ] **Blocked:** Stripe account not fully activated — `charges_enabled: false`. Two outstanding requirements as of last check:
  - `individual.id_number` — SSN last-4 failed identity verification; needs full SSN (or ID document upload if that fails too) at https://dashboard.stripe.com/settings/account
  - `external_account` — no bank account on file yet, needed for payouts, at https://dashboard.stripe.com/settings/payouts
- [ ] Once `charges_enabled: true`: paste the two URLs above into `STRIPE_ORIGINAL_LINK` / `STRIPE_PRINT_LINK` in `src/data/checkout.js`, rebuild, commit, push
- [ ] Do one real end-to-end test purchase (small/refundable) to confirm the full flow
- [ ] Decide the "mark sold" flow — likely: null out that painting's `originalPrice` in `paintings.js` once an original sells, so its buy button disappears (the two Payment Links are shared across all paintings, so nothing to deactivate per-painting on the Stripe side)
- [ ] Commit the currently-uncommitted local changes (shop archive, pricing, checkout.js, gallery page) once links are live

### Phase 4 — Shop (Prints)
- [ ] Create Printful account
- [ ] Connect Printful API
- [ ] Upload print-ready files
- [ ] Add prints section to shop

### Phase 5 — Polish
- [ ] Contact / commissions inquiry form
- [ ] Mobile responsiveness
- [ ] SEO basics (title tags, descriptions, image alt text)
- [ ] Analytics (Fathom or Plausible — privacy-friendly)
- [ ] Optional: studio blog

---

## What Makes Fine Art Sites Work

- **Photography quality** is the #1 factor — natural light or a proper shoot setup
- **Detail shots** — texture, brushwork, scale reference
- **Scarcity signaling** — "1 of 1 original", "edition of 25"
- **Consistent visual identity** — typography and palette should match the mood of the work
- **Story** — collectors buy the artist as much as the art

---

## Starting a New Session

When picking this back up, tell Claude:
> "Let's continue building the Shel's Art website — check the README for where we left off."

Claude has memory saved for this project and will have full context.
