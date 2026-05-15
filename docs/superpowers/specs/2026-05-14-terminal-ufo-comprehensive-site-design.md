# Terminal UFO Comprehensive Site Design

## Goal
Build Terminal UFO into a static, immersive, SEO-focused promotional and editorial site for Terminal Varginha and the broader Terminal Games universe, published through the existing AWS Amplify deployment at `www.terminalufo.com`.

## Approved direction
- Keep the current Next.js static-export app and AWS Amplify deployment.
- Build the full launch scope in one implementation plan: `/`, `/game`, `/varginha`, `/files`, `/games`, and `/press`.
- Use atmospheric placeholder game/press assets until real screenshots, logos, and downloadable press files are provided.
- Use temporary press/contact CTAs for “Play the Game” and buy/download actions until a store or build download URL exists.
- Write the Varginha content as original attributed editorial prose. Do not copy source text verbatim.

## Current project state
The repository is a minimal Next.js app with one homepage and inline styles. It already builds as a static export and is connected to Amplify:

- App ID: `dv7guelina4o2`
- Domain: `https://www.terminalufo.com`
- Current dependency baseline: Next.js, React, React DOM, TypeScript
- Existing scripts: `npm test`, `npm run build`

The design should replace the Hello World with a complete site while preserving static-export compatibility.

## Architecture
Use a static editorial architecture:

- App Router pages define route-level composition, metadata, and structured data.
- Reusable visual primitives live in `components/`.
- Typed content modules live in `lib/content/` for page copy, document cards, commands, quotes, timeline entries, source notes, and press metadata.
- Long-form Varginha material lives under `content/varginha/` and can be migrated to full MDX articles when the MDX pipeline is added.
- Global visual system, scanlines, redactions, motion fallbacks, and CSS variables live in `app/globals.css`.
- Static public assets live under `public/assets/` and `public/og/`.

This keeps the launch site fast, reviewable, and compatible with Amplify static hosting.

## Route design

### `/` — Home
The homepage should open like an intercepted terminal session, not a marketing page.

Sections:
- Full-viewport terminal hero with animated log lines, headline, subline, and two CTAs.
- “What is this” two-column section with game description and placeholder terminal/screenshot panel.
- Varginha incident teaser linking to `/varginha`.
- UFO74 quote strip styled as terminal output.
- Press/recognition bar with placeholders only if no real press exists.

Primary CTA temporarily points to the press/contact section. Secondary CTA points to `/varginha`.

### `/game` — The Game
The game page sells Terminal Varginha through mechanics and atmosphere.

Sections:
- Hero with title, one-line pitch, and temporary CTA.
- Elevator pitch written from the player’s perspective.
- Three mechanic cards: Terminal Interface, Risk System, File Leak Mechanic.
- Placeholder screenshot gallery using atmospheric terminal panels.
- UFO74 character feature as a terminal conversation.
- Commands accordion for `note`, `save`, `wait`, and `override`.
- Bottom CTA.

### `/varginha` — The Varginha Incident
The Varginha page is the SEO authority page and must be long-form, attributed, and careful.

Sections:
- The night of January 20, 1996
- The creatures
- The military response
- The witnesses
- The cover-up
- Declassified documents
- What scientists say
- The connection to Terminal Varginha

The page should target at least 2000 words of original prose in the implementation plan. Claims must be attributed to source notes or public records. The tone is journalistic and restrained.

### `/files` — The Files
The file archive separates real documents from fiction.

Sections:
- REAL archive: government/public records and source-linked document cards.
- IN-GAME archive: fictional lore files clearly labeled as fiction.

Real files must not use misleading fake classification stamps. Fictional files may use TOP SECRET, EYES ONLY, or similar labels as part of the game world.

### `/games` — Terminal Games
The universe page shows Terminal Varginha as the active game and future projects as redacted placeholders with “COMING SOON” labels.

### `/press` — Press Kit
The press page gives creators a fast summary:
- One-paragraph game summary
- Key facts
- Placeholder logo/screenshot download cards
- Contact CTA
- Notes explaining that final assets will replace placeholders

## Component design

### `Terminal`
Reusable terminal window with title, typed or static lines, optional cursor, and reduced-motion fallback. Used for hero logs, UFO74 dialogue, quote strips, and placeholder screenshots.

### `ClassifiedCard`
Document card with file ID, classification/status label, source category, metadata, redacted title option, and a clear real-versus-fiction visual treatment.

### `GlitchText`
Heading wrapper for subtle hover or mount glitch effects. It must respect `prefers-reduced-motion`.

### `RiskBar`
Atmospheric horizontal meter with amber-to-red gradient and scanline texture. It is decorative unless used with accessible text.

### `Redacted`
Inline redaction component. Hidden text reveals on hover/focus. It must remain readable for keyboard users and screen readers.

### `StaticOverlay`
Global fixed noise/scanline layer at low opacity. It must not intercept pointer events.

### `SiteNav`
Minimal terminal-style navigation shared by all pages, with mobile-friendly layout and visible focus states.

## Visual system
The site uses Terminal Noir:

- Backgrounds: near-black layers and dark document surfaces.
- Text: warm off-white, muted grays, and sparing green/amber/red accents.
- Typography: all monospace/typewriter fonts. No sans-serif family should be used.
- Effects: scanlines, noise, redaction bars, CRT glow, cursor blink, and restrained glitching.
- Motion: Framer Motion page/section reveals where it adds atmosphere, disabled or simplified under `prefers-reduced-motion`.

The result should feel like a breached archive with a game hidden inside it.

## Content and research rules
The implementation must create a source note dataset before writing the final `/varginha` page. The plan should research and summarize, not copy:

- UFO Magazine Brazil / Ademar Gevaerd material when accessible
- CIA Reading Room UFO collection, especially Brazil-related records
- FBI Vault UFO material
- NICAP and NUFORC references when relevant
- Secondary sources only as corroboration

Every factual paragraph about Varginha should be traceable to a source note. If a claim cannot be supported, it should be written as an allegation, witness report, or omitted.

## SEO design
Use the Next.js metadata API as the primary SEO layer. Avoid unnecessary runtime SEO packages if static metadata and route-level structured data cover the need.

Required launch SEO:
- Title templates and descriptions for every route
- Open Graph and Twitter metadata
- JSON-LD `VideoGame` schema on `/game`
- JSON-LD `Article` or `WebPage` schema on `/varginha`
- Static `robots.txt`
- Static or generated `sitemap.xml`
- OG placeholder image path under `public/og/default.svg` or `public/og/default.png`

## Accessibility and performance
- All interactive effects must be reachable by keyboard.
- Redacted text must reveal on focus as well as hover.
- Motion must respect `prefers-reduced-motion`.
- Images and placeholders must have explicit dimensions or stable aspect ratios.
- The build must remain static-export compatible.
- The implementation should target Lighthouse 90+ through small assets, no heavy client-only code by default, and no layout shift from fonts.

## Testing and verification
The implementation plan should include tests that prove:

- Required routes and core content exist.
- Metadata and sitemap/robots files exist.
- Real and fictional file categories are clearly separated.
- The Varginha page meets the launch content threshold and contains source attribution.
- Reduced-motion CSS paths exist for glitch/scanline/animation features.
- `npm test`, `npm run build`, and `npm audit --omit=dev` pass before deployment.

The final deployment verification must request `https://www.terminalufo.com` and confirm the deployed page content.

## Deployment
Keep the current Amplify workflow and custom domain:

- Build command: `npm run build`
- Static output: `out/`
- Domain: `www.terminalufo.com`
- Hosting: AWS Amplify app `dv7guelina4o2`

The implementation plan should include either Amplify build-trigger instructions or manual deployment through the AWS CLI, depending on what is available in the current repository.

## Non-goals for this launch
- No CMS or authenticated admin interface.
- No online store integration until a real store/download URL exists.
- No misleading presentation of real government documents as fictional props.
- No copying or embedding copyrighted third-party article text.
- No heavy ARG puzzle system in the first launch.
