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
   assert.ok(existsSync("next-sitemap.config.cjs"));
  assert.ok(existsSync("tailwind.config.mjs"));
  assert.ok(existsSync("postcss.config.mjs"));
  assert.match(text("next.config.mjs"), /output:\s*"export"/);
  assert.match(text("next.config.mjs"), /createMDX/);
});

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
