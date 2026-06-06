# Ngawi Golf Club — Domain Glossary

## Club

The **Ngawi Golf Club** is a small, community-run golf club located in Ngawi, at the end of State Highway 53 on the Palliser Bay coast, Wairarapa, New Zealand. It is remote, affordable, and deeply tied to the local community. Tone is warm and local — not prestige, not resort.

## Course

A **9-hole links course** (par 36) with coastal views. Green fee: $10 NZD. The course is the club's primary product and point of difference: described as unlike any other in New Zealand due to its remote coastal setting.

## Member

A person who has paid the **annual membership** ($120 NZD/year). Members play without paying a green fee and can enter club competitions. Membership is NZ Golf accredited.

## Green Fee

A per-round payment ($10 NZD) made by non-members (or members who choose not to use their membership). Paid online via Stripe.

## Sponsor

A business or organisation that financially supports the club in exchange for brand exposure. Three tiers exist: **Hole Sponsor** ($200/year), **Club Sponsor** ($500/year), **Event Sponsor** (custom). Sponsors are displayed as a logo grid on both the homepage and the sponsorship page.

## Sponsorship Page

The page (`/sponsorship`) that lists sponsorship tiers and contains the enquiry form. Also displays the **Current Sponsors** grid.

## Visual Strip

A full-viewport-width decorative image band placed directly above the footer on every page. Height matches the site header (~`h-16`). Each page uses a different golf/coastal Unsplash image.

## Typography

**Heading font:** Playfair Display Variable (serif) — used for all `<h1>`–`<h3>` via `--font-heading`. Conveys heritage and place without being stuffy. **Body font:** Geist Variable (sans-serif) — clean, modern, used for all other text.

## Nav Icon

A minimalist inline SVG golf flag (~20×20px) placed to the left of the "Ngawi Golf Club" wordmark in the navigation. White fill on the dark green header. Decorative only (`aria-hidden`).

## Carousel Gallery

A horizontal scroll-snap image gallery used on the Course page in the History & Community section. 10 images, `h-48` height, scroll-wheel on desktop, swipe on mobile. No arrow buttons. Implemented with CSS scroll-snap (no JS library).
