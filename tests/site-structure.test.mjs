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
