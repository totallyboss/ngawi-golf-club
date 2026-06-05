## ADDED Requirements

### Requirement: Google Sheets CSV data source
The site SHALL fetch event data from a publicly accessible Google Sheet (CSV export URL) at build time. No API key or authentication SHALL be required.

#### Scenario: Events fetched at build time
- **WHEN** `astro build` runs
- **THEN** event data SHALL be fetched from the configured Google Sheet CSV URL and used to render the events page

#### Scenario: Sheet columns are mapped to event fields
- **WHEN** the sheet is fetched
- **THEN** the following columns SHALL be mapped: Title, Date (YYYY-MM-DD), Location, Description

### Requirement: Automated rebuild on sheet edit
A Google Apps Script SHALL be attached to the Google Sheet that POSTs to a Cloudflare Pages deploy hook whenever the sheet is edited, triggering a site rebuild.

#### Scenario: Sheet edit triggers rebuild
- **WHEN** a non-engineer edits event data in the Google Sheet
- **THEN** a Cloudflare Pages rebuild SHALL be triggered automatically within 1 minute

#### Scenario: Site reflects changes after rebuild
- **WHEN** a rebuild completes
- **THEN** the live site events page SHALL reflect the updated sheet data
