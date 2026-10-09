# EVCodelabs website implementation plan

## Direction
A premium, light-first EVCodelabs experience using royal blue, restrained sage accents, charcoal, and alabaster. Use Manrope at the specified weights, a temporary text wordmark, generous spacing, and a charcoal Our Approach section. Preserve your exact supplied headline and section copy.

## Phase 1 — Foundation
- Establish shared color, typography, spacing, focus, and reduced-motion styles.
- Prepare reusable buttons, section headings, service items, case-study cards, and accessible FAQ and mobile navigation controls.
- Keep all business content separate from presentation for straightforward updates.

## Phase 2 — Homepage
Build these eight sections in your exact order:
1. **Navigation:** text wordmark, section links, Discuss a Project, accessible mobile menu.
2. **Hero:** supplied eyebrow, headline, supporting copy, and both CTAs. Restrained visual support without invented business evidence.
3. **Services:** BUILD, GROW, AUTOMATE, SCALE with all supplied services and consultation CTA.
4. **Our Approach:** charcoal band, supplied copy, and three steps.
5. **Case Studies:** supplied introduction and an explicitly labelled empty state until approved work is available. Prepare a reusable card for future verified projects; no fictional projects or dead detail links.
6. **How We Work:** four supplied stages in an easy-to-scan layout.
7. **FAQs:** all six supplied questions and answers, keyboard-accessible expansion controls.
8. **Contact and Footer:** supplied copy, email inquiry links, identity, useful section links, and dynamic copyright year.

Navigation stays on this single scrolling homepage, as explicitly requested. No extra pages, forms, accounts, payments, or backend.

## Phase 3 — Lead generation and search appearance
- Send project CTAs to **evcodelabs01@gmail.com**, with a prepared subject and inquiry body; Explore Our Services scrolls to Services.
- WhatsApp is not yet configured: no number was supplied. Show its unavailable state honestly, with no fake conversation link. Activate it when you provide the number and country code.
- Apply your proposed homepage title and description, matching social metadata, semantic headings, descriptive links, and accurate structured data only.
- Use a self-referencing relative canonical while no production domain exists. Keep crawling allowed. Final-domain sitemap and Google Search Console verification remain deployment steps, not fabricated setup.

## Phase 4 — Test and refine
- Run available relevant tests and review automatic build/error signals.
- Inspect desktop and mobile layouts, overflow, readable contrast, focus states, menu keyboard behavior, FAQs, section scrolling, and missing assets.
- Verify email destinations and prepared messages. Actual email delivery depends on the visitor's email application; WhatsApp cannot be tested until its number is supplied.
- Inspect rendered page metadata and indexing controls. Report any remaining blockers accurately.

## Technical structure
Retain the existing React, TypeScript, TanStack Start, and Tailwind stack, with no unnecessary dependencies.
- `src/styles.css`: design tokens and shared visual rules.
- `src/components/`: shared identity, navigation, controls, and homepage sections.
- `src/lib/`: structured site content and contact-link helpers.
- `src/routes/index.tsx`: homepage composition and page-specific metadata.
- `src/routes/__root.tsx`: shared document setup, font loading, and single main landmark.
- `AGENTS.md`: maintainable project structure rules; `roadmap.md`: phase checklist.

## Inputs still outstanding
- **WhatsApp number with country code:** needed to enable and verify WhatsApp conversations.
- **Official logo and approved case studies:** use the permitted text identity and honest empty state meanwhile.
- **Production domain:** needed for final sitemap and Search Console setup after publication.