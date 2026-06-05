## ADDED Requirements

### Requirement: Astro TypeScript project scaffold
The project SHALL be an Astro application configured with TypeScript strict mode, Tailwind CSS v4, and shadcn/ui components.

#### Scenario: Build produces static output
- **WHEN** `astro build` is run
- **THEN** a `dist/` directory is produced containing static HTML, CSS, and JS files

#### Scenario: TypeScript errors fail the build
- **WHEN** a TypeScript type error exists in source files
- **THEN** the build SHALL fail with a descriptive error

### Requirement: Cloudflare Pages deployment
The project SHALL deploy automatically to Cloudflare Pages on push to the main branch.

#### Scenario: Push triggers deployment
- **WHEN** a commit is pushed to the main branch
- **THEN** Cloudflare Pages SHALL build and deploy the site within 5 minutes

#### Scenario: Pages Functions are deployed alongside static assets
- **WHEN** the site is deployed
- **THEN** files under `functions/` SHALL be available as edge functions at their corresponding URL paths

### Requirement: Responsive layout
All pages SHALL be usable on mobile (320px+), tablet (768px+), and desktop (1280px+) viewports.

#### Scenario: Mobile navigation
- **WHEN** a user views the site on a screen narrower than 768px
- **THEN** navigation SHALL be accessible via a hamburger menu or equivalent collapsed pattern
