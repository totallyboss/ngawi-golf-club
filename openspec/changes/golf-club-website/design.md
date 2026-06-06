## Context

The golf club has no existing website or digital infrastructure. This is a greenfield build. The primary users are prospective visitors (paying green fees), existing members (checking events/info), and potential sponsors. The club treasurer manually reconciles cash and bank transfer payments today.

## Goals / Non-Goals

**Goals:**
- Public brochure site with course info, fees, events, and sponsorship pages
- Online payment for green fees (non-members) and annual membership via Stripe
- Deployable via git push to Cloudflare Pages
- Maintainable by a developer comfortable with TypeScript

**Non-Goals:**
- Member authentication or accounts
- Tee time booking / slot management
- Recurring/automatic membership renewals
- Admin CMS — content is updated by editing source files

## Decisions

### 1. Astro over Next.js or Hugo

Astro outputs static HTML by default, has first-class TypeScript support, and supports Cloudflare Pages Functions for the server-side Stripe session creation. Next.js is overkill for a brochure site. Hugo lacks TypeScript.

### 2. Cloudflare Pages over GoDaddy hosting

Cloudflare Pages provides git-push deploys, a global CDN, and Pages Functions (edge runtime) in the free tier. GoDaddy shared hosting would require manual FTP uploads and has no edge function support. GoDaddy retains the domain; DNS CNAME points at Cloudflare.

### 3. Stripe Checkout over embedded Stripe Elements

Stripe Checkout is a Stripe-hosted payment page. It handles PCI compliance, card validation, and receipts without custom UI. A Cloudflare Pages Function creates the Checkout Session server-side (keeping the secret key off the client), then redirects the user to Stripe's hosted page.

Alternative considered: Stripe Elements (embedded in-page). Rejected — more implementation complexity and PCI scope for no meaningful UX benefit on a low-traffic club site.

### 4. Honor system for member green fee exemption

Members identify themselves by selecting "I am a member" — no code or login required. This is appropriate for a small club where members are known. The risk of abuse is low and the cost of a full auth system is disproportionate.

### 5. shadcn/ui over a full component library

shadcn/ui (Radix primitives + Tailwind CSS) gives accessible, unstyled components that are easy to theme. It avoids shipping a large JS bundle. Components are copied into the repo rather than installed as a dependency, giving full control.

## Costs

| Item | Cost |
|---|---|
| Cloudflare Workers (hosting) | $0/mo — free tier covers ~3M requests/month, well above club-site usage |
| Cloudflare Workers Paid (if needed) | $5/mo — only required above 100k requests/day |
| Resend (contact forms) | $0/mo — free tier (3,000 emails/month) |
| Domain renewal (GoDaddy .co.nz) | ~$2.50 NZD/mo amortised |
| Stripe — green fee ($10) | ~47¢ NZD per transaction (1.7% + 30¢ NZD domestic rate) |
| Stripe — membership ($120) | ~$2.34 NZD per transaction |

**Effective ongoing cost: ~$2.50 NZD/mo + Stripe fees per transaction.**

## Risks / Trade-offs

- **Stripe fees (1.7% + 30¢ NZD)** → Club receives $9.53 per green fee, $117.66 per membership; communicate to treasurer
- **No payment verification for members** → Accepted; honor system appropriate for club scale
- **Static content updates require code changes** → Accepted; developer maintains the site
- **GoDaddy → Cloudflare DNS propagation delay on launch** → Allow 24-48hrs; test with temporary Cloudflare URL first
- **Stripe account setup required before payments work** → Document as a pre-launch prerequisite

## Resolved

- **Club name**: Ngawi Golf Club
- **Green fee**: $10 (NZD)
- **Annual membership**: $120 (NZD)
- **Stripe products**: "Ngawi Golf Club – Green Fee" ($10), "Ngawi Golf Club – Annual Membership" ($120)
- **Cancel URL**: `/fees` (return to fees page on Stripe cancel)
- **Success URL**: `/payment-success`

## Open Questions

_None outstanding._
