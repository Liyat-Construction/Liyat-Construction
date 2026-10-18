# Project Workflow and Handoff

This is the live source of truth for planning and resuming client website work. Keep it short, current, and factual. Update it at the end of every work session and whenever scope or a material decision changes. Replace stale status; use version control for history.

## 1. Project identity

| Field               | Current value                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Project             | Liyat Construction — Digital Presence website                                                                                        |
| Client              | Liyat Construction PLC                                                                                                               |
| Public-facing brand | Liyat Construction                                                                                                                   |
| Primary outcome     | Professional, credible multi-page website that supports presentations to institutional, governmental, and commercial decision-makers |
| Current phase       | Content implementation / Quality review                                                                                              |
| Deployment target   | To be decided: Next.js host or static export                                                                                         |
| Production URL      | Not assigned                                                                                                                         |
| Owner / approver    | Not assigned                                                                                                                         |

## 2. Definition of success

A client site is complete only when:

- approved business goals and primary conversion action are implemented;
- real client copy, branding, contact details, media, services, projects, and social links replace placeholders;
- required pages and integrations work at supported responsive sizes;
- accessibility, SEO, privacy, security, analytics, and legal requirements have been reviewed for that client and jurisdiction;
- forms and external links are tested with production configuration;
- `npm run validate`, `npm run check:placeholders`, and the selected production build pass;
- the deployed site is checked on its real domain and the client accepts it.

## 3. Client requirements brief

Complete this before implementation. Use `Not required` rather than leaving a decision ambiguous.

### Business

- Organization, industry, location, and service area: **Liyat Construction PLC**, Ethiopia. Groundwater development, water-well engineering, and water works.
- Target audiences: Government ministries and agencies; foreign embassies and diplomatic missions; international organizations and NGOs; institutional clients and development organizations; commercial businesses and property developers.
- Primary business goal: Establish a professional and credible online presence for institutional buyers.
- Primary conversion action: **Contact Us**.
- Secondary conversion actions: **Explore Our Projects**.
- Differentiators and proof: Technical capabilities, practical experience, equipment, and completed projects. All claims must be accurate and approved for publication.
- Required launch date or external constraint: Not provided.
- Approver and approval process: Not provided.

### Scope and content

- Required routes and homepage sections: **Home, About, Services, Projects, Equipment & Capabilities, Testimonials, Contact**, plus Privacy Policy and Terms of Service.
- Services and service detail requirements: Hydrogeological and geophysical investigations; deep and shallow well drilling; pumping tests; wellhead construction; well rehabilitation; pump installation; electromechanical works; turnkey water projects.
- Projects / case studies: Curated portfolio with supporting information and imagery. **Pending client-supplied details and approval.**
- Testimonials and permission to publish: Approved client testimonials or references. **Pending client approval.**
- Partners and permission to display logos: Not specified.
- Languages and locales: English.
- Client-supplied copy and missing copy: Service pages and general capabilities implemented. Real project images, approved testimonials, detailed equipment inventory, and company origin story pending.
- Logo, favicon, social image, photos, and usage rights: Logo assets exist in `public/`; project, equipment, and team photos are pending.
- Features explicitly out of scope: CMS dashboard, CRM, client portal, complex quotation system, online payments, and other unapproved integrations or features.

### Brand and experience

- Brand colors and contrast constraints: **Engineering Green `#176B45`**, **Technical Blue `#174A70`**, **White `#FFFFFF`**, **Charcoal `#252B30`**. White dominant background; green for primary brand elements and calls to action; blue for structural elements and section headings; charcoal for body text.
- Approved fonts and licensing: **Manrope** (headings — Bold, SemiBold), **Inter** (body — Regular, Medium, SemiBold), Arial fallback.
- Visual direction and reference sites: Clean engineering/corporate aesthetic adapted from the existing Digital Aksumite template.
- Light/dark theme requirement: Template supports both; maintain readability and brand consistency.
- Animation level: Template's existing Framer Motion animations; respect `prefers-reduced-motion`.
- Supported browsers and devices: Responsive desktop, tablet, and mobile.
- Accessibility target: Accessibility fundamentals and semantic HTML.

### Operations and compliance

- Domain, DNS owner, and hosting target: To be decided.
- Contact details and office hours: hello@liyatconstruction.com; +251 93 001 4711; 301 Mickey Leland St, Addis Ababa, Ethiopia; Mon–Sat, 8 AM – 11 PM.
- Form provider, destination, spam controls, and retention: **Pending** (Formspree or Web3Forms; key/destination to be supplied). Form currently hidden.
- Analytics and consent requirements: Optional Google Analytics; cookie/tracking consent requirement pending.
- Search Console / verification: Optional.
- Map and third-party embeds: Google Maps embed URL pending.
- Privacy jurisdiction and approved legal text: Ethiopia; Addis Ababa courts.
- Cookie or tracking consent requirement: Pending.
- Maintenance owner after launch: To be decided.

## 4. Ordered delivery plan

Do not skip ahead when a later stage depends on an unresolved earlier decision.

| Stage                       | Exit condition                                                                   | Status           |
| --------------------------- | -------------------------------------------------------------------------------- | ---------------- |
| 1. Discovery                | Requirements brief and explicit out-of-scope list approved                       | Complete         |
| 2. Content inventory        | Every required text and asset is received, approved, or tracked as missing       | Complete         |
| 3. Information architecture | Routes, section order, navigation, and conversion paths approved                 | Complete         |
| 4. Technical plan           | Hosting, forms, analytics, consent, SEO, and integrations decided                | Ready for review |
| 5. Brand configuration      | `site.ts`, fonts, logos, icons, and design tokens reflect the client             | Complete         |
| 6. Content implementation   | `src/data/` and media contain approved real content                              | Complete         |
| 7. Feature implementation   | Only approved gaps beyond template behavior are built                            | Complete         |
| 8. Quality review           | Responsive, accessibility, SEO, security, forms, links, and content reviewed     | In progress      |
| 9. Verification             | Validation, placeholder scan, and selected build pass                            | In progress      |
| 10. Deployment              | Production environment, domain, headers, forms, analytics, and metadata verified | Not started      |
| 11. Acceptance              | Client approval recorded and maintenance handoff complete                        | Not started      |

Allowed status values: `Not started`, `In progress`, `Blocked`, `Ready for review`, `Complete`, `Removed`.

## 5. Requirement tracker

Add only concrete deliverables. One row must have one verifiable outcome.

| ID          | Requirement                   | Acceptance criterion                                                                                                                 | Priority | Status      | Owner      | Notes / dependency                                       |
| ----------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- | ---------- | -------------------------------------------------------- |
| TEMPLATE-01 | Keep template reusable        | Client identity remains isolated to config, data, and public assets unless a documented feature requires architecture changes        | Must     | In progress | Unassigned | Ongoing template goal                                    |
| TEMPLATE-02 | Establish durable AI workflow | Project skill and this handoff document exist and are used for future work                                                           | Must     | Complete    | AI         | Added in current session                                 |
| LIYAT-01    | Brand configuration           | `site.ts`, fonts, and design tokens reflect Liyat colors, name, and legal name                                                       | Must     | Complete    | AI         | Form provider still pending                              |
| LIYAT-02    | Home page                     | Hero, About summary, Services preview, Projects preview, Testimonials preview, Contact CTA, and primary conversion paths implemented | Must     | Complete    | AI         |                                                          |
| LIYAT-03    | About page                    | Company background, expertise, and credibility content implemented                                                                   | Must     | Complete    | AI         | Origin story placeholder remains                         |
| LIYAT-04    | Services pages                | Services list and individual service detail pages for verified services                                                              | Must     | Complete    | AI         |                                                          |
| LIYAT-05    | Projects portfolio            | Projects list and project detail pages with approved project evidence                                                                | Must     | In progress | AI         | Placeholder project images                               |
| LIYAT-06    | Equipment & Capabilities page | Equipment, technical resources, and operational capabilities presented                                                               | Must     | Complete    | AI         | Detailed inventory pending                               |
| LIYAT-07    | Testimonials page             | Approved testimonials or references page                                                                                             | Must     | In progress | AI         | Placeholder testimonials                                 |
| LIYAT-08    | Contact page                  | Direct contact links and functional inquiry form                                                                                     | Must     | Complete    | AI         | Form hidden until provider is configured                 |
| LIYAT-09    | Legal pages                   | Privacy Policy and Terms of Service adapted to Liyat and jurisdiction                                                                | Must     | Complete    | AI         | Generic text; verify with qualified party                |
| LIYAT-10    | Quality verification          | `npm run validate` and `npm run check:placeholders` pass                                                                             | Must     | In progress | AI         | `validate` passes; placeholder scan flags project images |

## 6. Decisions

Record only decisions that constrain future work.

| Date       | Decision                                                                                                 | Reason                                                                   | Consequence                                                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 2026-10-17 | Use `PROJECT_WORKFLOW.md` as the live cross-session state                                                | A single current source prevents lost context and conflicting notes      | Every session must read and update this file                                                                |
| 2026-10-17 | Keep detailed engineering behavior in a project Devin skill                                              | The workflow remains product-focused while execution rules stay reusable | Invoke `senior-website-engineer` for implementation work                                                    |
| 2026-10-18 | Use the Digital Aksumite static Next.js template as the starting point                                   | Reusable foundation agreed with client                                   | All Liyat-specific changes stay in `site.ts`, `src/data/`, and `public/` where possible                     |
| 2026-10-18 | No CMS dashboard; content managed in code                                                                | Digital Presence package scope                                           | Future updates follow an agreed process                                                                     |
| 2026-10-18 | Public brand name is "Liyat Construction"; legal name is "Liyat Construction PLC"                        | Client blueprint                                                         | Used in footer, legal pages, and schema                                                                     |
| 2026-10-18 | Seven required pages: Home, About, Services, Projects, Equipment & Capabilities, Testimonials, Contact   | Client blueprint                                                         | Navigation and sitemap must include all seven; legal pages are additional                                   |
| 2026-10-18 | Brand colors: Engineering Green `#176B45`, Technical Blue `#174A70`, White `#FFFFFF`, Charcoal `#252B30` | Approved Brand Identity Blueprint                                        | Template color tokens must be remapped: green for primary brand surfaces and CTAs, blue for headings/labels |
| 2026-10-18 | Created `.devin/new-chat-prompt.md` for new chat tabs                                                    | Cross-session continuity when the AI has no memory of previous tabs      | Every new session starts by reading the workflow and the prompt                                             |

## 7. Risks and blockers

| ID   | Risk or blocker                                             | Impact                                                                                                          | Mitigation / needed decision                                                                                                    | Owner       | Status |
| ---- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------ |
| R-01 | No client brief exists                                      | Client implementation cannot be scoped correctly                                                                | Complete sections 1–3 with the client                                                                                           | Unassigned  | Closed |
| R-02 | Template has no automated component or end-to-end tests     | Interaction regressions depend on manual review                                                                 | Decide a proportionate test baseline before scaling repeated client delivery                                                    | Unassigned  | Open   |
| R-03 | Legal page text is generic and partly hard-coded            | It may be inaccurate for a client or jurisdiction                                                               | Obtain qualified approval and make client-specific legal content explicit                                                       | Unassigned  | Open   |
| R-04 | Documentation contained inaccurate form and security claims | Future maintainers could trust behavior the source does not implement                                           | Corrected the identified claims in `PROJECT_DOCUMENTATION.md`                                                                   | AI          | Closed |
| R-05 | Missing real content and assets                             | Project, equipment, testimonial, and contact pages cannot be finalized with real evidence                       | Client to supply or approve content; use clearly marked placeholders only where unavailable                                     | Client / AI | Open   |
| R-06 | Brand color mapping requires minor template refactoring     | Current template uses one accent color for both CTAs and headings; blueprint wants green CTAs and blue headings | Remap `brand-primary` to green, `brand-accent` to blue, and update button components to use `brand-primary` for CTA backgrounds | AI          | Closed |
| R-07 | No domain, hosting, form provider, or analytics decision    | Deployment and integration cannot be finalized                                                                  | Client to confirm domain/host, form service/key, and optional analytics                                                         | Client      | Open   |
| R-08 | Placeholder project images remain                           | `check:placeholders` flags `/placeholders/project.svg` and the site cannot ship with generic artwork            | Replace project images with real, approved photos once supplied by the client                                                   | Client / AI | Open   |

## 8. Current handoff

### Current status

- Liyat Construction website structure and content implemented across all seven required pages plus legal pages.
- Brand colors, fonts, navigation, and design tokens remapped to Liyat identity.
- All data files populated with business-specific copy; placeholder testimonials and project images remain.
- Contact form hidden until a provider and key are configured.
- Validation and static export builds pass.

### Completed this session

- Configured `site.ts` with Liyat brand, contact info, SEO, schema, and legal jurisdiction.
- Replaced Space Grotesk with Manrope for headings; updated design tokens for Liyat colors.
- Refactored CTA buttons to use Engineering Green per the brand blueprint.
- Wrote Liyat-specific copy for Home, About, Services, Projects, Testimonials, Partners, and Contact.
- Created `/equipment-capabilities`, `/testimonials`, and `/contact` pages.
- Updated navigation, footer, and sitemap to include all new routes.
- Ran `npm run validate` (type-check, lint, format check) — passed.
- Ran `npm run build:static` — generated static `out/` successfully.
- Ran `npm run check:placeholders` — flags only the placeholder project image; all template text replaced.

### Verification evidence

- `npm run validate`: pass.
- `npm run build:static`: pass; 27 static routes generated.
- `npm run check:placeholders`: 1 hit (`/placeholders/project.svg`) pending real project images.
- Visual/browser testing: not performed.

### Next action

Obtain from the client: real project photos, approved testimonials, detailed equipment inventory, contact form provider/key, Google Maps embed URL, and domain/hosting decision. Then replace placeholders and re-run verification.
