## ADDED Requirements

### Requirement: Contact form submission
The site SHALL provide a general enquiry form that delivers submissions to the club's email address.

#### Scenario: User submits contact form
- **WHEN** a user fills in name, email, and message and submits the contact form
- **THEN** the submission SHALL be delivered to the club's configured email address

#### Scenario: User sees confirmation after submission
- **WHEN** a form submission is successful
- **THEN** the user SHALL see a confirmation message on the page

#### Scenario: Required fields are validated
- **WHEN** a user submits the form with missing required fields
- **THEN** the form SHALL display validation errors and SHALL NOT submit

### Requirement: Sponsorship enquiry form
The sponsorship page SHALL include a contact form specific to sponsorship enquiries.

#### Scenario: Sponsorship form submission
- **WHEN** a user submits the sponsorship enquiry form
- **THEN** the submission SHALL be delivered to the club's email with a subject indicating it is a sponsorship enquiry
