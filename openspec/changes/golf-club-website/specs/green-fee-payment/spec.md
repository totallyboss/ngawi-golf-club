## ADDED Requirements

### Requirement: Green fee Stripe Checkout
The site SHALL allow non-members to pay a fixed green fee online via Stripe Checkout.

#### Scenario: Non-member initiates payment
- **WHEN** a user clicks "Pay Green Fee" on the fees page
- **THEN** they SHALL be redirected to a Stripe-hosted Checkout page for the fixed green fee amount

#### Scenario: Successful payment redirects to confirmation
- **WHEN** a user completes payment on Stripe Checkout
- **THEN** they SHALL be redirected to a confirmation page on the site

#### Scenario: Cancelled payment returns to fees page
- **WHEN** a user cancels or closes Stripe Checkout
- **THEN** they SHALL be returned to `/fees`

#### Scenario: Checkout session is created server-side
- **WHEN** a user initiates green fee payment
- **THEN** the Stripe secret key SHALL NOT be exposed in client-side JavaScript; the session SHALL be created by a Cloudflare Pages Function

### Requirement: Member exemption from green fees
Members SHALL be able to indicate they are a member and bypass the green fee payment.

#### Scenario: Member selects exemption
- **WHEN** a user indicates they are a member (honor system)
- **THEN** no payment is initiated and no Stripe Checkout is triggered
