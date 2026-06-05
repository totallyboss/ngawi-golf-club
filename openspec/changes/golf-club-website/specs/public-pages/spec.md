## ADDED Requirements

### Requirement: Home page
The site SHALL have a home page at `/` with a hero section, brief club description, and navigation to all main sections.

#### Scenario: Home page loads
- **WHEN** a user navigates to `/`
- **THEN** the page SHALL display the club name, a hero image or section, and links to Course, Fees, Events, Sponsorship, and Contact pages

### Requirement: Course information page
The site SHALL have a course information page at `/course` describing the course layout, facilities, and any relevant visitor information.

#### Scenario: Course page loads
- **WHEN** a user navigates to `/course`
- **THEN** the page SHALL display course details including hole count, par, yardage, and facilities

### Requirement: Fees page
The site SHALL have a fees page at `/fees` displaying green fee prices, membership prices, and payment options.

#### Scenario: Fees are clearly displayed
- **WHEN** a user navigates to `/fees`
- **THEN** green fee and annual membership amounts SHALL be visible without scrolling on desktop

#### Scenario: Payment CTAs are present
- **WHEN** a user views the fees page
- **THEN** a "Pay Green Fee" button and a "Pay Annual Membership" button SHALL be visible

## MODIFIED Requirements

### Requirement: Events page
The site SHALL have an events page at `/events` that fetches event data from a public Google Sheet at build time, displays only upcoming events sorted by date ascending, and hides past events.

#### Scenario: Events list loads
- **WHEN** a user navigates to `/events`
- **THEN** only events with a date on or after today SHALL be displayed, sorted by date ascending, each showing name, date, location, and description

#### Scenario: Past events are hidden
- **WHEN** an event's date has passed
- **THEN** it SHALL NOT appear on the events page

#### Scenario: Events are sorted by date
- **WHEN** multiple upcoming events exist
- **THEN** they SHALL be displayed in ascending date order (soonest first)

#### Scenario: Google Sheet is the source of truth
- **WHEN** the Google Sheet is edited and a site rebuild is triggered
- **THEN** the updated events SHALL appear on the live site within 5 minutes

### Requirement: Sponsorship page
The site SHALL have a sponsorship page at `/sponsorship` outlining available sponsorship packages and a contact form.

#### Scenario: Sponsorship page loads
- **WHEN** a user navigates to `/sponsorship`
- **THEN** sponsorship opportunities SHALL be described and a contact form SHALL be present

### Requirement: Contact page
The site SHALL have a contact page at `/contact` with a general enquiry form.

#### Scenario: Contact form is present
- **WHEN** a user navigates to `/contact`
- **THEN** a form with name, email, and message fields SHALL be visible and submittable
