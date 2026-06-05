## ADDED Requirements

### Requirement: Annual membership Stripe Checkout
The site SHALL allow anyone to pay the annual membership fee online via Stripe Checkout as a one-off payment (not recurring).

#### Scenario: User initiates membership payment
- **WHEN** a user clicks "Pay Annual Membership" on the fees page
- **THEN** they SHALL be redirected to a Stripe-hosted Checkout page for the fixed annual membership amount

#### Scenario: Payment is one-off, not recurring
- **WHEN** the Stripe Checkout session is created
- **THEN** it SHALL be configured as a one-time payment with no subscription or recurring billing

#### Scenario: Successful payment redirects to confirmation
- **WHEN** a user completes membership payment
- **THEN** they SHALL be redirected to a confirmation page on the site

#### Scenario: Checkout session is created server-side
- **WHEN** a user initiates membership payment
- **THEN** the Stripe secret key SHALL NOT be exposed in client-side JavaScript; the session SHALL be created by a Cloudflare Pages Function
