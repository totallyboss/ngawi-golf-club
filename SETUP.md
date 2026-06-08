# Ngawi Golf Club — Manual Setup Checklist

## 0. Accounts to Create First

Before anything else, create accounts on these three services:

- [ ] [stripe.com](https://stripe.com) — payments
- [ ] [resend.com](https://resend.com) — contact form emails
- [ ] [cloudflare.com](https://cloudflare.com) — hosting (free, no credit card required)
- [ ] [github.com](https://github.com) — repo (if you don't already have one)

---

## 1. Stripe

- [ ] Sign up at [stripe.com](https://stripe.com) and create an account for the club
- [ ] In Stripe dashboard → Settings → Bank accounts, connect the club's NZD bank account
- [ ] Copy your test secret key (`sk_test_...`) from Stripe dashboard → Developers → API keys
- [ ] Paste it into `.dev.vars` as `STRIPE_SECRET_KEY=sk_test_...`
- [ ] Test the payment flow locally (`npm run dev`) using Stripe test card:
  - Card number: `4242 4242 4242 4242`
  - Expiry: any future date, CVC: any 3 digits
  - Verify green fee ($10 NZD) and membership ($120 NZD) both complete and redirect to `/payment-success`
  - Verify cancelling returns to `/fees`

## 2. Resend (Contact Forms)

- [ ] Sign up at [resend.com](https://resend.com) — free tier covers this use case
- [ ] Create an API key and copy it
- [ ] Paste into `.dev.vars` as `RESEND_API_KEY=re_...`
- [ ] Set `CONTACT_EMAIL=your@email.com` in `.dev.vars` (the club's email address)
- [ ] Test both contact forms locally — check the club inbox receives the email
- [ ] Verify the sponsorship form email subject reads "Sponsorship Enquiry from ..."

> **Note:** Resend requires a verified sending domain in production. Either verify
> `ngawigolfclub.co.nz` in Resend dashboard → Domains, or use a personal domain
> and update the `from` address in `functions/api/contact.ts`.

## 3. GitHub

- [ ] Create a new repo at [github.com/new](https://github.com/new) (e.g. `ngawi-golf-club`)
- [ ] Run:
  ```bash
  cd ~/Dev/golf-club-site
  git remote add origin https://github.com/<your-username>/ngawi-golf-club.git
  git add .
  git commit -m "Initial build"
  git push -u origin main
  ```

## 4. Cloudflare Pages

- [ ] Sign up or log in at [pages.cloudflare.com](https://pages.cloudflare.com)
- [ ] Create a new Pages project → Connect to Git → select your GitHub repo
- [ ] Set build configuration:
  - **Build command:** `npm run build`
  - **Build output directory:** `dist`
  - **Node.js version:** `22` (set in Environment variables as `NODE_VERSION=22`)
- [ ] Add environment variables in Pages → Settings → Environment variables:
  - `STRIPE_SECRET_KEY` = your Stripe **test** secret key (for now)
  - `RESEND_API_KEY` = your Resend API key
  - `CONTACT_EMAIL` = the club's email address
  - `COMING_SOON` = `true` to show the coming soon page to all visitors (omit or set to anything else to show the full site)
- [ ] Trigger a deployment and verify the site loads on the auto-generated `*.pages.dev` URL
- [ ] Test payments and forms on the live Pages URL

## 5. Custom Domain (GoDaddy → Cloudflare)

- [ ] In Cloudflare Pages → your project → Custom domains → Add domain
- [ ] Enter your domain (e.g. `ngawigolfclub.co.nz`) — Cloudflare will give you a CNAME target
- [ ] Log in to GoDaddy → DNS Management for your domain
- [ ] Add a CNAME record:
  - **Name:** `@` (or `www` if pointing a subdomain)
  - **Value:** the Cloudflare Pages CNAME target
  - **TTL:** 1 hour
- [ ] Wait for DNS propagation (up to 48 hrs, usually under 2)
- [ ] Verify the site loads on your custom domain with HTTPS

## 6. Go Live with Stripe

- [ ] Once the site is live and tested on the custom domain:
- [ ] In Stripe dashboard → switch from **Test mode** to **Live mode**
- [ ] Copy your live secret key (`sk_live_...`)
- [ ] Update `STRIPE_SECRET_KEY` in Cloudflare Pages environment variables to the live key
- [ ] Trigger a redeployment
- [ ] Do one final real payment test with a real card to confirm end-to-end
