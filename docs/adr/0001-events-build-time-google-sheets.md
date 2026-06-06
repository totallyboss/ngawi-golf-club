# ADR 0001: Events sourced from Google Sheets at build time

**Status:** Accepted  
**Date:** 2026-06-06

## Context

The Events page needs to be maintainable by non-technical club administrators without a CMS. Events should be editable in a familiar tool, and draft events should not appear on the live site while someone is still composing them.

## Decision

Events are stored in a Google Sheet (the **Event Sheet**). At build time, Astro fetches the sheet as a published CSV and filters rows to those where `Published = TRUE`. The resulting list is rendered as static HTML.

A **Deploy Hook** (Cloudflare Pages webhook) is triggered manually by an administrator after marking one or more events as Published. This decouples typing/editing from publishing — a row only goes live when explicitly approved.

## Alternatives considered

**Runtime fetch on every page load** — simpler initial setup, no deploy required to update events. Rejected because it adds latency, exposes API credentials to the client or requires a server function, and creates a hard dependency on Google Sheets uptime.

**CMS (e.g. Contentful, Sanity)** — more powerful and purpose-built. Rejected as over-engineered for a small community club with infrequent updates and non-technical maintainers who already know spreadsheets.

## Consequences

- A deploy is required for any event change to appear on the site (~1 minute on Cloudflare Pages).
- The Event Sheet must be published as CSV (Google Sheets → File → Share → Publish to web).
- The `Published` column must be a checkbox (boolean) so it can be reliably parsed.
- Admins need access to the Deploy Hook URL (or a simple wrapper button) to trigger rebuilds.
