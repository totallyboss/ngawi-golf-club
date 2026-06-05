## Why

The golf club currently has no web presence — green fees and membership payments are handled via cash or manual bank transfer, and club information is communicated informally. A public-facing website will centralise club information and enable online payments, reducing administrative overhead.

## What Changes

- New public website for the golf club, built from scratch
- Online payment for one-off green fees (fixed price, non-members only)
- Online payment for annual membership (fixed price, one-off per year)
- Public pages for course information, fees, upcoming events, and sponsorship opportunities
- Contact form for general enquiries and sponsorship interest

## Capabilities

### New Capabilities

- `site-shell`: Astro + TypeScript project scaffold, Tailwind CSS, shadcn/ui component library, Cloudflare Pages deployment pipeline
- `public-pages`: Home, course info, fees, events, sponsorship, and contact pages
- `green-fee-payment`: Stripe Checkout flow for one-off green fee payment (non-members only, honor system)
- `membership-payment`: Stripe Checkout flow for annual membership payment (one-off, fixed price)
- `contact-form`: Sponsorship and general enquiry form via Cloudflare Pages Functions + email delivery

### Modified Capabilities

## Impact

- New repository: `~/Dev/golf-club-site`
- New dependencies: Astro, Tailwind CSS v4, shadcn/ui, Stripe SDK, Cloudflare Pages Functions
- Requires Stripe account connected to club bank account
- Requires Cloudflare Pages project linked to GitHub repo
- GoDaddy DNS CNAME pointed at Cloudflare Pages deployment URL
