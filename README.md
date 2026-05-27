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

### Phase 1 — Accounts & Hello World
- [ ] Purchase domain on Cloudflare Registrar
- [ ] Create GitHub account and first repository (`shel-art` or similar)
- [ ] Create Vercel account, connect to GitHub
- [ ] Build minimal Astro "hello world" — name, one image, clean layout
- [ ] Deploy live end-to-end so the full pipeline is working

### Phase 2 — Gallery & Portfolio
- [ ] Create Cloudinary account, upload first batch of artwork photos
- [ ] Build gallery page with high-res image display
- [ ] Organize by series / medium / style
- [ ] Add detail shots and scale references
- [ ] Artist bio and statement page

### Phase 3 — Shop (Originals)
- [ ] Create Stripe account
- [ ] Build shop page for original works
- [ ] Stripe checkout integration
- [ ] Order confirmation flow
- [ ] "Sold" status for originals

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
