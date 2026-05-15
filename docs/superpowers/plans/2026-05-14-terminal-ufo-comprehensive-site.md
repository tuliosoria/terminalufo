# Terminal UFO Comprehensive Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Hello World app with the full Terminal UFO promotional/editorial website and publish it at `https://www.terminalufo.com`.

**Architecture:** Keep the site as a static-export Next.js App Router app hosted on AWS Amplify. Build reusable terminal/document components, typed static content modules, source-backed Varginha editorial content, route-level metadata, and static sitemap/robots output.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v3, Radix UI primitives, Framer Motion, Lucide React, Fontsource monospace fonts, `@next/mdx`, `next-seo`, `next-sitemap`, AWS Amplify static hosting.

---

## File structure

- Modify `package.json`: add scripts and launch dependencies.
- Modify `next.config.mjs`: keep `output: "export"`, add MDX support and page extensions.
- Create `tailwind.config.mjs`, `postcss.config.mjs`: Tailwind v3 pipeline.
- Modify `app/globals.css`: Terminal Noir tokens, Tailwind layers, typography, motion fallbacks, scanline/noise/redaction utilities.
- Modify `app/layout.tsx`: global metadata, `SiteNav`, `StaticOverlay`, body shell.
- Modify `app/page.tsx`: home route.
- Create `app/game/page.tsx`, `app/varginha/page.tsx`, `app/files/page.tsx`, `app/games/page.tsx`, `app/press/page.tsx`.
- Create `app/robots.ts`, `app/sitemap.ts`: static metadata routes.
- Create `components/terminal/Terminal.tsx`.
- Create `components/ui/ClassifiedCard.tsx`, `components/ui/GlitchText.tsx`, `components/ui/RiskBar.tsx`, `components/ui/Redacted.tsx`, `components/ui/StaticOverlay.tsx`, `components/ui/Section.tsx`.
- Create `components/nav/SiteNav.tsx`.
- Create `lib/content/site.ts`, `lib/content/game.ts`, `lib/content/varginha.ts`, `lib/content/files.ts`, `lib/content/press.ts`, `lib/content/types.ts`.
- Create `lib/seo/metadata.ts`, `lib/seo/structured-data.ts`.
- Create `content/varginha/source-notes.json`, `content/varginha/main.mdx`.
- Create `public/og/default.svg`, `public/assets/game/terminal-placeholder.svg`, `public/assets/press/terminal-ufo-one-pager.txt`.
- Modify `tests/homepage.test.mjs` and create `tests/site-structure.test.mjs`, `tests/content-contract.test.mjs`, `tests/seo-static.test.mjs`.
- Keep `amplify.yml` unchanged unless build output changes; it already publishes `out/`.

## Task 1: Tooling, dependencies, and static export config

**Files:**
- Modify: `package.json`
- Modify: `next.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `postcss.config.mjs`
- Test: `tests/site-structure.test.mjs`

- [ ] **Step 1: Write the failing tooling test**

Create `tests/site-structure.test.mjs`:

```js
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const text = (path) => readFileSync(path, "utf8");
const json = (path) => JSON.parse(text(path));

test("Terminal UFO uses the planned launch tooling", () => {
  const pkg = json("package.json");
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };

  for (const dependency of [
    "@next/mdx",
    "@radix-ui/react-accordion",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-navigation-menu",
    "@radix-ui/react-tooltip",
    "@fontsource/share-tech-mono",
    "@fontsource/courier-prime",
    "@fontsource/ibm-plex-mono",
    "@fontsource/jetbrains-mono",
    "@fontsource/special-elite",
    "framer-motion",
    "lucide-react",
    "next-seo",
    "next-sitemap",
    "tailwindcss",
    "autoprefixer"
  ]) {
    assert.ok(deps[dependency], `${dependency} must be installed`);
  }

  assert.equal(pkg.scripts.postbuild, "next-sitemap --config next-sitemap.config.cjs");
  assert.ok(existsSync("tailwind.config.mjs"));
  assert.ok(existsSync("postcss.config.mjs"));
  assert.match(text("next.config.mjs"), /output:\s*"export"/);
  assert.match(text("next.config.mjs"), /createMDX/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
npm test -- tests/site-structure.test.mjs
```

Expected: failure mentioning missing dependencies and config files.

- [ ] **Step 3: Install launch dependencies**

Run:

```bash
npm install @next/mdx @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-navigation-menu @radix-ui/react-tooltip @fontsource/share-tech-mono @fontsource/courier-prime @fontsource/ibm-plex-mono @fontsource/jetbrains-mono @fontsource/special-elite framer-motion lucide-react next-seo next-sitemap
npm install --save-dev tailwindcss@^3.4.17 autoprefixer
```

- [ ] **Step 4: Update `package.json` scripts**

Ensure `package.json` contains:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "next-sitemap --config next-sitemap.config.cjs",
    "test": "node --test tests/*.test.mjs"
  }
}
```

Do not remove the existing `overrides.postcss` entry.

- [ ] **Step 5: Configure Tailwind and MDX**

Create `tailwind.config.mjs`:

```js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          green: "var(--accent-green)",
          amber: "var(--accent-amber)",
          red: "var(--accent-red)",
          text: "var(--text-primary)",
          muted: "var(--text-secondary)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        heading: ["var(--font-heading)", "monospace"],
        body: ["var(--font-body)", "monospace"],
        ui: ["var(--font-ui)", "monospace"],
        stamp: ["var(--font-stamp)", "monospace"]
      },
      boxShadow: {
        terminal: "var(--glow-green)"
      }
    }
  },
  plugins: []
};

export default config;
```

Create `postcss.config.mjs`:

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

export default config;
```

Replace `next.config.mjs` with:

```js
import createMDX from "@next/mdx";

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
};

export default withMDX(nextConfig);
```

- [ ] **Step 6: Add sitemap config**

Create `next-sitemap.config.cjs`:

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.terminalufo.com",
  generateRobotsTxt: false,
  outDir: "out"
};
```

- [ ] **Step 7: Run the tooling test and commit**

Run:

```bash
npm test -- tests/site-structure.test.mjs
npm run build
```

Expected: test passes and static build still writes to `out/`.

Commit:

```bash
git add package.json package-lock.json next.config.mjs tailwind.config.mjs postcss.config.mjs next-sitemap.config.cjs tests/site-structure.test.mjs
git commit -m "chore: configure Terminal UFO launch tooling" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

## Task 2: Typed content model and source-note contracts

**Files:**
- Create: `lib/content/types.ts`
- Create: `lib/content/site.ts`
- Create: `lib/content/game.ts`
- Create: `lib/content/files.ts`
- Create: `lib/content/press.ts`
- Create: `lib/content/varginha.ts`
- Create: `content/varginha/source-notes.json`
- Test: `tests/content-contract.test.mjs`

- [ ] **Step 1: Write the failing content contract test**

Create `tests/content-contract.test.mjs`:

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const text = (path) => readFileSync(path, "utf8");
const json = (path) => JSON.parse(text(path));

test("content modules define required Terminal UFO launch routes", () => {
  assert.match(text("lib/content/site.ts"), /href:\s*"\/game"/);
  assert.match(text("lib/content/site.ts"), /href:\s*"\/varginha"/);
  assert.match(text("lib/content/site.ts"), /href:\s*"\/files"/);
  assert.match(text("lib/content/site.ts"), /href:\s*"\/games"/);
  assert.match(text("lib/content/site.ts"), /href:\s*"\/press"/);
});

test("real and fictional file records are explicitly separated", () => {
  const files = text("lib/content/files.ts");
  assert.match(files, /category:\s*"real"/);
  assert.match(files, /category:\s*"fiction"/);
  assert.match(files, /fictionNotice/);
});

test("Varginha source notes are attributable and non-empty", () => {
  const notes = json("content/varginha/source-notes.json");
  assert.ok(notes.length >= 6, "expected at least six source notes");
  for (const note of notes) {
    assert.ok(note.id);
    assert.ok(note.title);
    assert.ok(note.url);
    assert.ok(note.publisher);
    assert.ok(note.summary);
    assert.ok(note.use);
  }
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
npm test -- tests/content-contract.test.mjs
```

Expected: failure because content files do not exist.

- [ ] **Step 3: Create shared content types**

Create `lib/content/types.ts`:

```ts
export type NavItem = {
  label: string;
  href: string;
};

export type TerminalLine = {
  prefix?: string;
  text: string;
  tone?: "green" | "amber" | "red" | "muted";
};

export type FileCategory = "real" | "fiction";

export type ClassifiedFile = {
  id: string;
  category: FileCategory;
  title: string;
  redactedTitle?: string;
  classification: "PUBLIC RECORD" | "DECLASSIFIED" | "FOR OFFICIAL USE ONLY" | "EYES ONLY" | "TOP SECRET";
  type: "PDF" | "IMAGE" | "VIDEO" | "AUDIO" | "TEXT";
  source: string;
  href: string;
  summary: string;
  fictionNotice?: string;
};

export type SourceNote = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  summary: string;
  use: string;
};

export type TimelineEntry = {
  date: string;
  title: string;
  body: string;
  sourceIds: string[];
};
```

- [ ] **Step 4: Create site and game content**

Create `lib/content/site.ts`:

```ts
import type { NavItem } from "./types";

export const siteUrl = "https://www.terminalufo.com";

export const siteNav: NavItem[] = [
  { label: "GAME", href: "/game" },
  { label: "VARGINHA", href: "/varginha" },
  { label: "FILES", href: "/files" },
  { label: "GAMES", href: "/games" },
  { label: "PRESS", href: "/press" }
];

export const launchCta = {
  label: "REQUEST ACCESS",
  href: "/press#contact"
};
```

Create `lib/content/game.ts` with command data, UFO74 quotes, and mechanics:

```ts
import type { TerminalLine } from "./types";

export const gameTitle = "Terminal Varginha";

export const heroLogs: TerminalLine[] = [
  { prefix: "SYS", text: "connection accepted from unknown relay", tone: "green" },
  { prefix: "ARCHIVE", text: "case index: varginha / january 1996", tone: "amber" },
  { prefix: "UFO74", text: "do not trust the clean files", tone: "muted" }
];

export const ufo74Lines: TerminalLine[] = [
  { prefix: "UFO74", text: "found /internal/maintenance_notes.txt yet?", tone: "green" },
  { prefix: "UFO74", text: "interesting reading. something about an override protocol.", tone: "amber" },
  { prefix: "UFO74", text: "wonder what's behind it.", tone: "muted" }
];

export const mechanics = [
  {
    title: "The Terminal Interface",
    body: "You do not click through menus. You read. You query. You make mistakes where the system can see them."
  },
  {
    title: "The Risk System",
    body: "Every command leaves heat behind. Wait too long and the archive notices. Move too fast and you miss the leak."
  },
  {
    title: "The File Leak Mechanic",
    body: "Some files were never meant to be indexed. UFO74 knows where the cracks are."
  }
];

export const commands = [
  { command: "note", description: "Record what the archive reveals before it changes shape." },
  { command: "save", description: "Persist progress when the connection still trusts you." },
  { command: "wait", description: "Let time pass. Some systems only open when watched from a distance." },
  { command: "override", description: "Use privileged knowledge to force a locked protocol." }
];
```

- [ ] **Step 5: Create file and press content**

Create `lib/content/files.ts`:

```ts
import type { ClassifiedFile } from "./types";

export const realFiles: ClassifiedFile[] = [
  {
    id: "REAL-CIA-UFO-001",
    category: "real",
    title: "CIA Reading Room UFO Collection",
    classification: "PUBLIC RECORD",
    type: "PDF",
    source: "Central Intelligence Agency Reading Room",
    href: "https://www.cia.gov/readingroom/collection/ufo",
    summary: "Public CIA Reading Room collection for UFO-related records. Used as a source index, not as fictional evidence."
  },
  {
    id: "REAL-FBI-UFO-001",
    category: "real",
    title: "FBI Vault UFO Files",
    classification: "PUBLIC RECORD",
    type: "PDF",
    source: "Federal Bureau of Investigation Vault",
    href: "https://vault.fbi.gov/UFO",
    summary: "Public FBI Vault collection for UFO files and correspondence."
  }
];

export const fictionFiles: ClassifiedFile[] = [
  {
    id: "TV-LEAK-01996",
    category: "fiction",
    title: "Internal Maintenance Notes",
    redactedTitle: "override protocol handoff",
    classification: "EYES ONLY",
    type: "TEXT",
    source: "Terminal Varginha universe",
    href: "/game",
    summary: "A fictional in-game leak referenced by UFO74.",
    fictionNotice: "Fictional Terminal Varginha lore file."
  },
  {
    id: "TV-UFO74-0007",
    category: "fiction",
    title: "UFO74 Transmission Fragment",
    redactedTitle: "the archive answers back",
    classification: "TOP SECRET",
    type: "AUDIO",
    source: "Terminal Varginha universe",
    href: "/game",
    summary: "A fictional signal fragment from the game world.",
    fictionNotice: "Fictional Terminal Varginha lore file."
  }
];
```

Create `lib/content/press.ts`:

```ts
export const pressFacts = [
  ["Title", "Terminal Varginha"],
  ["Site", "Terminal UFO"],
  ["Genre", "Hacker terminal / classified file narrative"],
  ["Setting", "A fictional archive built around the 1996 Varginha UFO case"],
  ["Current CTA", "Press/contact request access"]
];

export const pressSummary =
  "Terminal Varginha is a hacker terminal game about classified files, unreliable systems, and the 1996 Varginha UFO incident. You are hackerkid. The archive is already watching.";

export const contactEmail = "press@terminalufo.com";
```

- [ ] **Step 6: Create initial source notes**

Create `content/varginha/source-notes.json` with public source indices to be expanded during research:

```json
[
  {
    "id": "cia-ufo-reading-room",
    "title": "UFOs: Fact or Fiction?",
    "publisher": "CIA Reading Room",
    "url": "https://www.cia.gov/readingroom/collection/ufo",
    "summary": "CIA public collection page for UFO-related records. Use as a public government record index.",
    "use": "Source index for declassified UFO document context."
  },
  {
    "id": "fbi-vault-ufo",
    "title": "UFO Files",
    "publisher": "FBI Vault",
    "url": "https://vault.fbi.gov/UFO",
    "summary": "FBI public vault collection for UFO-related files and correspondence.",
    "use": "Source index for government UFO record context."
  },
  {
    "id": "ufo-com-br",
    "title": "Revista UFO / Varginha coverage",
    "publisher": "Revista UFO",
    "url": "https://www.ufo.com.br",
    "summary": "Brazilian UFO publication associated with Ademar Gevaerd and Varginha reporting.",
    "use": "Primary Brazilian UFO journalism source to research and summarize without copying."
  },
  {
    "id": "nuforc",
    "title": "National UFO Reporting Center",
    "publisher": "NUFORC",
    "url": "https://nuforc.org",
    "summary": "Public UFO report database.",
    "use": "Cross-reference public UFO report patterns and terminology."
  },
  {
    "id": "nicap",
    "title": "NICAP UFO Case Directory",
    "publisher": "NICAP",
    "url": "https://www.nicap.org",
    "summary": "Historical UFO case archive and case directory.",
    "use": "Cross-reference case database mentions and historical framing."
  },
  {
    "id": "openminds-varginha",
    "title": "Open Minds Varginha references",
    "publisher": "Open Minds",
    "url": "https://www.openminds.tv",
    "summary": "Secondary UFO news coverage and case summaries.",
    "use": "Secondary corroboration only; do not rely on this over primary sources."
  }
]
```

- [ ] **Step 7: Create Varginha content module**

Create `lib/content/varginha.ts`:

```ts
import sourceNotes from "../../content/varginha/source-notes.json";
import type { SourceNote, TimelineEntry } from "./types";

export const varginhaSourceNotes = sourceNotes as SourceNote[];

export const varginhaSeoKeywords = [
  "Varginha UFO incident",
  "Varginha 1996",
  "Brazil UFO 1996",
  "Varginha aliens",
  "Brazilian government UFO files",
  "Varginha cover-up"
];

export const varginhaTimeline: TimelineEntry[] = [
  {
    date: "1996-01-20",
    title: "Witness reports begin in Varginha",
    body: "Residents in Varginha, Minas Gerais, reported encounters that later became central to Brazil's best-known UFO case.",
    sourceIds: ["ufo-com-br"]
  },
  {
    date: "1996 onward",
    title: "Military and government explanations harden",
    body: "The public record split between witness accounts, military denials, and later journalistic investigation.",
    sourceIds: ["ufo-com-br", "cia-ufo-reading-room", "fbi-vault-ufo"]
  }
];
```

- [ ] **Step 8: Run the content test and commit**

Run:

```bash
npm test -- tests/content-contract.test.mjs
```

Expected: pass.

Commit:

```bash
git add lib/content content/varginha tests/content-contract.test.mjs
git commit -m "feat: add Terminal UFO content model" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

## Task 3: Terminal Noir global design system and UI primitives

**Files:**
- Modify: `app/globals.css`
- Create: `components/terminal/Terminal.tsx`
- Create: `components/ui/ClassifiedCard.tsx`
- Create: `components/ui/GlitchText.tsx`
- Create: `components/ui/RiskBar.tsx`
- Create: `components/ui/Redacted.tsx`
- Create: `components/ui/StaticOverlay.tsx`
- Create: `components/ui/Section.tsx`
- Create: `components/nav/SiteNav.tsx`
- Test: `tests/site-structure.test.mjs`

- [ ] **Step 1: Extend the structure test for required primitives**

Append to `tests/site-structure.test.mjs`:

```js
test("Terminal UFO visual primitives exist and include accessibility contracts", () => {
  for (const path of [
    "components/terminal/Terminal.tsx",
    "components/ui/ClassifiedCard.tsx",
    "components/ui/GlitchText.tsx",
    "components/ui/RiskBar.tsx",
    "components/ui/Redacted.tsx",
    "components/ui/StaticOverlay.tsx",
    "components/ui/Section.tsx",
    "components/nav/SiteNav.tsx"
  ]) {
    assert.ok(existsSync(path), `${path} must exist`);
  }

  const css = text("app/globals.css");
  assert.match(css, /--accent-green:\s*#00ff41/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /font-family:\s*var\(--font-body\)/);

  const redacted = text("components/ui/Redacted.tsx");
  assert.match(redacted, /tabIndex=\{0\}/);
  assert.match(redacted, /aria-label/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
npm test -- tests/site-structure.test.mjs
```

Expected: failure because visual primitives do not exist.

- [ ] **Step 3: Replace global CSS with Terminal Noir tokens**

Replace `app/globals.css` with:

```css
@import "@fontsource/share-tech-mono/400.css";
@import "@fontsource/courier-prime/400.css";
@import "@fontsource/courier-prime/700.css";
@import "@fontsource/ibm-plex-mono/400.css";
@import "@fontsource/ibm-plex-mono/500.css";
@import "@fontsource/jetbrains-mono/400.css";
@import "@fontsource/jetbrains-mono/700.css";
@import "@fontsource/special-elite/400.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #0f0f0f;
  --bg-surface: #141414;
  --accent-green: #00ff41;
  --accent-amber: #f5a623;
  --accent-red: #ff3b30;
  --text-primary: #e8e6e1;
  --text-secondary: #8a8680;
  --text-tertiary: #4a4845;
  --border: rgba(255, 255, 255, 0.06);
  --glow-green: 0 0 12px rgba(0, 255, 65, 0.3);
  --font-display: "Share Tech Mono";
  --font-heading: "Courier Prime";
  --font-body: "IBM Plex Mono";
  --font-ui: "JetBrains Mono";
  --font-stamp: "Special Elite";
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--bg-primary);
}

body {
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(0, 255, 65, 0.09), transparent 34rem),
    radial-gradient(circle at bottom right, rgba(245, 166, 35, 0.08), transparent 30rem),
    var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body), monospace;
}

a {
  color: inherit;
}

::selection {
  background: rgba(0, 255, 65, 0.2);
  color: var(--text-primary);
}

.scanlines {
  position: relative;
}

.scanlines::after {
  pointer-events: none;
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px,
    transparent 3px
  );
}

.terminal-cursor::after {
  content: "▊";
  color: var(--accent-green);
  animation: cursor-blink 1s steps(2, start) infinite;
}

@keyframes cursor-blink {
  50% {
    opacity: 0;
  }
}

@keyframes glitch-shift {
  0%, 100% {
    text-shadow: none;
  }
  35% {
    text-shadow: 2px 0 var(--accent-red), -2px 0 var(--accent-green);
  }
  65% {
    text-shadow: -1px 0 var(--accent-amber), 1px 0 var(--accent-green);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Create the UI primitives**

Create `components/ui/Section.tsx`:

```tsx
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 md:px-8 ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-ui text-xs uppercase tracking-[0.35em] text-terminal-green">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mb-8 font-heading text-3xl text-terminal-text md:text-5xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
```

Create the remaining components with these contracts:

```tsx
// Terminal.tsx exports function Terminal({ title, lines, typingSpeed = 24, showCursor = true })
// ClassifiedCard.tsx exports function ClassifiedCard({ file })
// GlitchText.tsx exports function GlitchText({ text, as = "span" })
// RiskBar.tsx exports function RiskBar({ value, label })
// Redacted.tsx exports function Redacted({ children })
// StaticOverlay.tsx exports function StaticOverlay()
// SiteNav.tsx exports function SiteNav()
```

`Redacted` must render:

```tsx
<span tabIndex={0} aria-label={typeof children === "string" ? children : "redacted content"} className="group relative inline-block">
  <span className="opacity-0 transition group-hover:opacity-100 group-focus:opacity-100">{children}</span>
  <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-[0.9em] -translate-y-1/2 bg-black group-hover:hidden group-focus:hidden" />
</span>
```

`StaticOverlay` must include `pointer-events-none fixed inset-0` and low-opacity noise/scanline layers.

- [ ] **Step 5: Run tests and commit**

Run:

```bash
npm test -- tests/site-structure.test.mjs
npm run build
```

Commit:

```bash
git add app/globals.css components tests/site-structure.test.mjs
git commit -m "feat: add Terminal Noir design primitives" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

## Task 4: Root layout, metadata, sitemap, robots, and OG asset

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Create: `lib/seo/metadata.ts`
- Create: `lib/seo/structured-data.ts`
- Create: `public/og/default.svg`
- Test: `tests/seo-static.test.mjs`

- [ ] **Step 1: Write the failing SEO test**

Create `tests/seo-static.test.mjs`:

```js
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const text = (path) => readFileSync(path, "utf8");

test("static SEO assets and metadata helpers exist", () => {
  assert.ok(existsSync("app/robots.ts"));
  assert.ok(existsSync("app/sitemap.ts"));
  assert.ok(existsSync("lib/seo/metadata.ts"));
  assert.ok(existsSync("lib/seo/structured-data.ts"));
  assert.ok(existsSync("public/og/default.svg"));
  assert.match(text("app/layout.tsx"), /Terminal UFO/);
  assert.match(text("app/layout.tsx"), /StaticOverlay/);
  assert.match(text("lib/seo/structured-data.ts"), /VideoGame/);
  assert.match(text("lib/seo/structured-data.ts"), /Article/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
npm test -- tests/seo-static.test.mjs
```

Expected: failure because SEO files do not exist.

- [ ] **Step 3: Create SEO helpers**

Create `lib/seo/metadata.ts`:

```ts
import type { Metadata } from "next";
import { siteUrl } from "../content/site";

export function pageMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Terminal UFO",
      title,
      description,
      url,
      images: [{ url: "/og/default.svg", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/default.svg"]
    }
  };
}
```

Create `lib/seo/structured-data.ts`:

```ts
import { siteUrl } from "../content/site";

export function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Terminal Varginha",
    url: `${siteUrl}/game`,
    applicationCategory: "Game",
    genre: ["Hacker terminal", "Narrative", "Mystery"],
    description:
      "A hacker terminal game about classified files, unreliable systems, and the 1996 Varginha UFO incident."
  };
}

export function articleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Varginha UFO Incident",
    url: `${siteUrl}/varginha`,
    author: { "@type": "Organization", name: "Terminal UFO" },
    publisher: { "@type": "Organization", name: "Terminal UFO" }
  };
}
```

- [ ] **Step 4: Create metadata routes**

Create `app/robots.ts`:

```ts
import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
```

Create `app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/content/site";

const routes = ["/", "/game", "/varginha", "/files", "/games", "/press"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-05-14"),
    changeFrequency: route === "/varginha" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
```

- [ ] **Step 5: Update root layout and OG image**

Update `app/layout.tsx` to import `SiteNav` and `StaticOverlay`, use `pageMetadata`, and render the shell:

```tsx
import type { Metadata } from "next";
import { SiteNav } from "../components/nav/SiteNav";
import { StaticOverlay } from "../components/ui/StaticOverlay";
import { pageMetadata } from "../lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = pageMetadata({
  title: "Terminal UFO — Classified. Leaked. Real.",
  description:
    "The official home of Terminal Varginha. Play the game. Read the real files. The 1996 Varginha UFO incident was covered up. We found the documents."
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StaticOverlay />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
```

Create `public/og/default.svg` with a 1200x630 dark terminal graphic containing `ACCESS GRANTED — TERMINAL UFO`.

- [ ] **Step 6: Run tests and commit**

Run:

```bash
npm test -- tests/seo-static.test.mjs
npm run build
```

Commit:

```bash
git add app/layout.tsx app/robots.ts app/sitemap.ts lib/seo public/og/default.svg tests/seo-static.test.mjs
git commit -m "feat: add Terminal UFO SEO shell" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

## Task 5: Research-backed Varginha source expansion

**Files:**
- Modify: `content/varginha/source-notes.json`
- Create: `content/varginha/main.mdx`
- Modify: `lib/content/varginha.ts`
- Test: `tests/content-contract.test.mjs`

- [ ] **Step 1: Extend the content test for editorial launch quality**

Append to `tests/content-contract.test.mjs`:

```js
test("Varginha editorial is long-form and attributed", () => {
  const editorial = text("content/varginha/main.mdx");
  const words = editorial.split(/\s+/).filter(Boolean);
  assert.ok(words.length >= 2000, `expected at least 2000 words, found ${words.length}`);
  for (const heading of [
    "The night of January 20, 1996",
    "The creatures",
    "The military response",
    "The witnesses",
    "The cover-up",
    "Declassified documents",
    "What scientists say",
    "The connection to Terminal Varginha"
  ]) {
    assert.match(editorial, new RegExp(`## ${heading}`));
  }
  assert.match(editorial, /Source notes/);
  assert.match(editorial, /\[cia-ufo-reading-room\]/);
  assert.match(editorial, /\[ufo-com-br\]/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run:

```bash
npm test -- tests/content-contract.test.mjs
```

Expected: failure because `content/varginha/main.mdx` does not exist or is under 2000 words.

- [ ] **Step 3: Research source notes without copying source prose**

Use the research agent or direct `curl`/browser-safe fetches to gather notes from:

```text
https://www.ufo.com.br
https://www.cia.gov/readingroom/collection/ufo
https://vault.fbi.gov/UFO
https://www.nicap.org
https://nuforc.org
https://www.openminds.tv
```

For every usable source, record:

```json
{
  "id": "short-kebab-id",
  "title": "Source title",
  "publisher": "Publisher",
  "url": "https://source.example/path",
  "summary": "Original one-to-three sentence summary written by us.",
  "use": "How this source supports the article."
}
```

Do not paste third-party article paragraphs into the repository. Government public-domain excerpts may be quoted sparingly, but summaries are preferred.

- [ ] **Step 4: Write original `content/varginha/main.mdx`**

Create an MDX document with this exact outline and finished original prose. The prose must be written after Step 3 research, must exceed 2000 words, and must cite source-note IDs in square brackets. Use restrained journalistic language: reported claims stay framed as reports, allegations stay framed as allegations, and the game connection is explicitly described as fiction inspired by public history.

```mdx
# The Varginha UFO Incident

## The night of January 20, 1996

Open with the setting, date, and the first public reports. Attribute the case framing to source notes such as [ufo-com-br].

## The creatures

Describe witness reports as testimony, not established biological fact. Include source IDs beside factual claims.

## The military response

Separate reported military activity from official denials. Attribute both.

## The witnesses

Cover Katia, Liliane, Valquiria, and Marco Cherez only as far as the researched source notes support.

## The cover-up

Explain the allegation pattern and the government-denial pattern without overstating either.

## Declassified documents

Explain what public CIA/FBI UFO archives establish about government UFO records and what they do not prove about Varginha.

## What scientists say

Discuss scientific and forensic claims cautiously. Do not present unsupported claims as scientific consensus.

## The connection to Terminal Varginha

State that Terminal Varginha is a fictional game built around the public history and unresolved questions of the case.

## Source notes

- [ufo-com-br] Summarize the researched Revista UFO source note in one original sentence.
- [cia-ufo-reading-room] Summarize the researched CIA Reading Room source note in one original sentence.
```

Keep the headings and source-note format. Do not commit copied paragraphs from third-party articles.

- [ ] **Step 5: Update Varginha content module**

Expand `lib/content/varginha.ts` with researched timeline entries, each pointing to `sourceIds` that exist in `source-notes.json`.

- [ ] **Step 6: Run the test and commit**

Run:

```bash
npm test -- tests/content-contract.test.mjs
```

Expected: pass with at least 2000 words and required headings.

Commit:

```bash
git add content/varginha lib/content/varginha.ts tests/content-contract.test.mjs
git commit -m "feat: add sourced Varginha editorial content" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

## Task 6: Launch routes

**Files:**
- Modify: `app/page.tsx`
- Create: `app/game/page.tsx`
- Create: `app/varginha/page.tsx`
- Create: `app/files/page.tsx`
- Create: `app/games/page.tsx`
- Create: `app/press/page.tsx`
- Modify: `tests/homepage.test.mjs`
- Test: `tests/site-structure.test.mjs`

- [ ] **Step 1: Replace the homepage test with route launch assertions**

Update `tests/homepage.test.mjs`:

```js
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const text = (path) => readFileSync(path, "utf8");

test("Terminal UFO launch pages exist with core copy", () => {
  const pages = [
    ["app/page.tsx", "Terminal UFO"],
    ["app/game/page.tsx", "Terminal Varginha"],
    ["app/varginha/page.tsx", "The Varginha UFO Incident"],
    ["app/files/page.tsx", "REAL"],
    ["app/games/page.tsx", "Terminal Games"],
    ["app/press/page.tsx", "Press Kit"]
  ];

  for (const [path, phrase] of pages) {
    assert.ok(existsSync(path), `${path} must exist`);
    assert.match(text(path), new RegExp(phrase));
  }

  assert.match(text("app/page.tsx"), /Read the Files/);
  assert.match(text("app/game/page.tsx"), /override/);
  assert.match(text("app/files/page.tsx"), /fictionNotice/);
});
```

- [ ] **Step 2: Run the route test and verify it fails**

Run:

```bash
npm test -- tests/homepage.test.mjs
```

Expected: failure because launch pages do not exist.

- [ ] **Step 3: Implement `/` and `/game`**

Use `Terminal`, `GlitchText`, `Section`, `RiskBar`, game content, and `launchCta`. The home page must include:

```tsx
<GlitchText text="Terminal UFO" />
<a href={launchCta.href}>Play the Game</a>
<a href="/varginha">Read the Files</a>
```

The game page must include `videoGameSchema()` JSON-LD and an accordion powered by Radix Accordion for the command reference.

- [ ] **Step 4: Implement `/varginha`**

Render:

```tsx
import Article from "../../content/varginha/main.mdx";
import { articleSchema } from "../../lib/seo/structured-data";

export default function VarginhaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema()) }}
      />
      <Article />
    </main>
  );
}
```

Wrap the article in Terminal Noir editorial classes and include source-note navigation from `varginhaSourceNotes`.

- [ ] **Step 5: Implement `/files`, `/games`, and `/press`**

`/files` must render two visibly separate sections:

```tsx
<Section title="REAL">
  {realFiles.map((file) => <ClassifiedCard key={file.id} file={file} />)}
</Section>
<Section title="IN-GAME">
  {fictionFiles.map((file) => <ClassifiedCard key={file.id} file={file} />)}
</Section>
```

`/games` must show Terminal Varginha active and three redacted future cards.

`/press` must use `pressSummary`, `pressFacts`, `contactEmail`, and download cards for `/assets/press/terminal-ufo-one-pager.txt`.

- [ ] **Step 6: Add static assets**

Create `public/assets/game/terminal-placeholder.svg` with a dark terminal mock screenshot and `public/assets/press/terminal-ufo-one-pager.txt` with the press summary and key facts.

- [ ] **Step 7: Run tests and commit**

Run:

```bash
npm test -- tests/homepage.test.mjs tests/site-structure.test.mjs
npm run build
```

Commit:

```bash
git add app components lib content public tests/homepage.test.mjs
git commit -m "feat: build Terminal UFO launch pages" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

## Task 7: Compliance, performance, and launch validation

**Files:**
- Modify: tests as needed only if route/content filenames changed during implementation.
- No product code changes unless validation reveals a bug directly caused by earlier tasks.

- [ ] **Step 1: Run the full test suite**

Run:

```bash
npm test
```

Expected: all Node tests pass with zero failures.

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: Next static export succeeds and writes `out/`.

- [ ] **Step 3: Run dependency audit**

Run:

```bash
npm audit --omit=dev
```

Expected: `found 0 vulnerabilities`. If new advisories appear, update direct dependencies or overrides without downgrading Next/React.

- [ ] **Step 4: Run launch content checks**

Run:

```bash
grep -R "Dive into\\|thrilling\\|!" app lib content || true
grep -R "TB[D]\\|TO[D]O\\|implement later\\|fill in details" app lib content tests && exit 1 || true
grep -R "CLASSIFIED" lib/content/files.ts app/files && true
```

Expected: no corporate/overhyped copy, no unfinished markers, and any classification labels on real files are visibly public-record labels rather than fake fiction labels.

- [ ] **Step 5: Commit any validation fixes**

If validation forced changes, commit them:

```bash
git add app components lib content public tests package.json package-lock.json
git commit -m "fix: resolve Terminal UFO launch validation issues" -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

Skip this commit if there are no changes.

## Task 8: Amplify deployment and custom-domain verification

**Files:**
- No source files expected.

- [ ] **Step 1: Push `main`**

Run:

```bash
git status --short
git push origin main
```

Expected: clean working tree before push, branch pushed to GitHub.

- [ ] **Step 2: Deploy through existing Amplify app**

If Amplify is Git-connected, start a job:

```bash
aws amplify start-job --app-id dv7guelina4o2 --branch-name main --job-type RELEASE
```

If the app is not Git-connected, use the manual static upload flow:

```bash
cd /Users/jessicarosa/terminalufo
rm -f terminalufo-amplify.zip
zip -qr terminalufo-amplify.zip out
aws amplify create-deployment --app-id dv7guelina4o2 --branch-name main
# Upload the zip to the returned zipUploadUrl with curl.
# Then call start-deployment with the returned jobId.
rm -f terminalufo-amplify.zip
```

- [ ] **Step 3: Poll Amplify job**

Run:

```bash
aws amplify list-jobs --app-id dv7guelina4o2 --branch-name main --max-results 5
aws amplify get-domain-association --app-id dv7guelina4o2 --domain-name terminalufo.com --query 'domainAssociation.{status:domainStatus,subDomains:subDomains[*].{prefix:subDomainSetting.prefix,branch:subDomainSetting.branchName,verified:verified,dnsRecord:dnsRecord}}' --output json
```

Expected: latest job succeeds and domain status remains `AVAILABLE`.

- [ ] **Step 4: Verify public HTTPS content**

Run:

```bash
curl --fail --silent --show-error --location https://www.terminalufo.com | tee /tmp/terminalufo-launch.html >/dev/null
grep -q "Terminal UFO" /tmp/terminalufo-launch.html
grep -q "The Varginha UFO Incident" /tmp/terminalufo-launch.html
grep -q "Terminal Varginha" /tmp/terminalufo-launch.html
```

Expected: all grep checks pass.

- [ ] **Step 5: Final completion check**

Run:

```bash
git status --short
git rev-parse HEAD origin/main
```

Expected: clean working tree and local `HEAD` matches `origin/main`.
