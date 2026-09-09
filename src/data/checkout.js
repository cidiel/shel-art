// Checkout links for the shop.
//
// Every painting shares two flat-price Stripe Payment Links — one for an
// original, one for a print — rather than one link per painting. Each
// button appends `?client_reference_id=<slug>` so the Stripe dashboard
// (and the email notification) shows which painting an order was for.
//
// To go live:
//   1. In Stripe, create two Products: "Original Painting" ($1500) and
//      "Fine Art Print" ($100).
//   2. Create a Payment Link for each (turn on shipping address collection —
//      both ship physical items).
//   3. Paste the two URLs below.
//
// Until both are set, the buy buttons on each painting's page fall back to
// the existing mailto inquiry, so the site never ships a dead "Buy" button.
export const STRIPE_ORIGINAL_LINK = null; // e.g. 'https://buy.stripe.com/xxxxxxxx'
export const STRIPE_PRINT_LINK = null; // e.g. 'https://buy.stripe.com/yyyyyyyy'

export function checkoutUrl(baseLink, slug) {
  if (!baseLink) return null;
  return `${baseLink}?client_reference_id=${slug}`;
}
