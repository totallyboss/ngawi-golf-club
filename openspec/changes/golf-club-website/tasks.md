## 1. Project Scaffold

- [x] 1.1 Initialise Astro project in repo root with TypeScript strict mode (`npm create astro@latest`)
- [x] 1.2 Install and configure Tailwind CSS v4 for Astro
- [x] 1.3 Install and configure shadcn/ui (init, add base components: Button, Card, Input, Textarea)
- [x] 1.4 Create base layout component with site header, navigation, and footer
- [x] 1.5 Implement responsive navigation (desktop nav + mobile hamburger menu)
- [x] 1.6 Configure Cloudflare Pages adapter for Astro (`@astrojs/cloudflare`)
- [x] 1.7 Add `wrangler.toml` and Cloudflare Pages project config

## 2. Public Pages

- [x] 2.1 Build home page (`/`) with hero section, club intro, and nav links
- [x] 2.2 Build course information page (`/course`) with course details, facilities
- [x] 2.3 Build fees page (`/fees`) with green fee and membership fee tables and payment CTAs
- [x] 2.4 Build events page (`/events`) with upcoming events list (static data)
- [x] 2.5 Build sponsorship page (`/sponsorship`) with packages description and enquiry form
- [x] 2.6 Build contact page (`/contact`) with general enquiry form
- [x] 2.7 Build payment confirmation page (`/payment-success`) shown after successful Stripe checkout

## 3. Stripe Integration

- [ ] 3.1 Create Stripe account, add club bank account, create Green Fee and Membership products
- [x] 3.2 Install Stripe SDK (`stripe` npm package)
- [ ] 3.3 Add Stripe secret key as Cloudflare Pages environment variable (`STRIPE_SECRET_KEY`)
- [x] 3.4 Create Pages Function `functions/api/create-checkout.ts` that accepts `product` param and returns Stripe Checkout session URL
- [x] 3.5 Wire "Pay Green Fee" button on fees page to call the Pages Function and redirect to Stripe
- [x] 3.6 Wire "Pay Annual Membership" button to call the Pages Function and redirect to Stripe
- [x] 3.7 Implement member honor-system UI on fees page (toggle/checkbox that hides green fee CTA)
- [ ] 3.8 Test full payment flow end-to-end using Stripe test mode

## 4. Contact Forms

- [x] 4.1 Choose form submission service (Cloudflare Pages Functions + Resend API)
- [x] 4.2 Implement contact form submission handler (Pages Function — `functions/api/contact.ts`)
- [x] 4.3 Wire general contact form on `/contact` to submission handler
- [x] 4.4 Wire sponsorship enquiry form on `/sponsorship` to submission handler with sponsorship subject
- [x] 4.5 Add client-side required field validation to both forms
- [ ] 4.6 Test form submission delivers email to club address

## 5. Events — Google Sheets Integration

- [ ] 5.1 Create a Google Sheet with columns: Title, Date (YYYY-MM-DD), Location, Description — share as "Anyone with link can view"
- [ ] 5.2 Add `EVENTS_SHEET_CSV_URL` env var to `.dev.vars` with the sheet's CSV export URL
- [ ] 5.3 Update the events page to fetch the CSV at build time, parse rows, filter past events, sort by date ascending
- [ ] 5.4 Add `EVENTS_SHEET_CSV_URL` to Cloudflare Pages environment variables
- [ ] 5.5 Create a Cloudflare Pages deploy hook (Pages → Settings → Deploy Hooks)
- [ ] 5.6 Attach a Google Apps Script to the sheet: on edit, POST to the Cloudflare deploy hook URL
- [ ] 5.7 Test: edit the sheet, verify site rebuilds and events page updates

## 6. Deployment

- [ ] 6.1 Push repo to GitHub
- [ ] 6.2 Connect GitHub repo to Cloudflare Pages, configure build command (`astro build`) and output dir (`dist`)
- [ ] 6.3 Add Stripe and Resend environment variables in Cloudflare Pages dashboard
- [ ] 6.4 Verify deployment works on the auto-generated Cloudflare Pages URL
- [ ] 6.5 Add custom domain in Cloudflare Pages settings
- [ ] 6.6 Update GoDaddy DNS: add CNAME record pointing domain to Cloudflare Pages URL
- [ ] 6.7 Verify site loads on custom domain with HTTPS
- [ ] 6.8 Switch Stripe from test mode to live mode, re-test payment flow on production
