 ---
  Fine Art Website — Full Build Plan
  
  Goal: A personal site to showcase and sell original oil paintings and prints. Full ownership, no platform fees, no Wix/Squarespace limitations.

  Stack recap: Astro + Custom CSS → Vercel (hosting) + GitHub (code) + Cloudflare (domain/DNS) + Cloudinary (images) + Stripe (originals) + Printful (prints)

  ---
  Phase 1 — Accounts & Infrastructure

  One-time setup, no code yet.

  1. Buy the domain on Cloudflare Registrar (~$10/yr). Decision pending: shelsart.com vs shelsart26.com — leaning toward dropping the 26.
  2. Create a GitHub account + new repo (shel-art)
  3. Create a Vercel account (free), connect it to GitHub — auto-deploys on every push
  4. Create a Cloudinary account (free tier: 25GB storage, enough for hundreds of hi-res paintings)
  5. Install Node.js (needed to run Astro) — one command on Linux

  ---
  Phase 2 — Hello World (Astro skeleton live on the internet)
  
  Goal: a real URL with your name on it.

  1. Scaffold an Astro project locally (npm create astro@latest)
  2. Basic 4-page structure: Home, Gallery, Shop, About
  3. Custom CSS: color palette, typography, layout — designed around artwork, not UI chrome
  4. Deploy to Vercel → point Cloudflare DNS at it
  5. Deliverable: shelsart.com is live, looks intentional, mobile-responsive

  ---
  Phase 3 — Gallery

  Goal: showcase work beautifully.

  1. Upload paintings to Cloudinary; get optimized URLs back
  2. Gallery grid page — masonry or uniform grid, your choice
  3. Individual artwork pages: title, medium, dimensions, year, price, availability status (Available / Sold / Reserved)
  4. Lightbox / full-size image view
  5. Filter by medium or series (optional — depends on how many pieces)

  ---
  Phase 4 — Shop: Originals (Stripe)

  Goal: sell original oil paintings.

  1. Stripe account (free to create; 2.9% + $0.30 per transaction)
  2. "Buy" button on each available original → Stripe Checkout (hosted payment page, handles cards/Apple Pay/Google Pay)
  3. On successful payment: mark painting as Sold, send you a notification email
  4. No cart needed — originals are one-of-one, single-item checkout

  ---
  Phase 5 — Shop: Prints (Printful)

  Goal: sell unlimited open-edition prints with zero inventory.

  1. Printful account (free; they print + ship on demand, you keep the margin)
  2. Upload artwork files → configure print products (canvas prints, fine art paper, sizes)
  3. Printful API integration in Astro: display products, sizes, prices
  4. Checkout: Printful handles fulfillment entirely; Stripe still handles payment
  5. Deliverable: someone orders a 16×20 print → Printful prints and ships it → you never touch it

  ---
  Phase 6 — Polish & Launch

  1. SEO basics: page titles, image alt text, Open Graph tags (so links share nicely on social)
  2. Contact form (simple email via Resend or Formspree — both free tier)
  3. Instagram / social links
  4. Analytics (Vercel has basic built-in, or Plausible for privacy-respecting stats)
  5. Announce

  ---
  Skill ramp

  Given your R/Python background and some HTML, here's where Astro fits: it's essentially HTML + a little JavaScript glue. You write .astro files that look like HTML with a front
   matter block at the top (like R Markdown). The framework handles the build. You won't need to learn React or any heavy JS framework.

  The only new concepts to pick up:
  - npm basics (install packages, run dev server) — 3 commands total
  - Astro component syntax — close enough to HTML that it's quick
  - Stripe Checkout — mostly copying their code snippet and adding your price ID
  - Printful API — REST calls, same pattern as any API you'd hit in R with httr

