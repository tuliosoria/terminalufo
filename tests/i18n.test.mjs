import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const text = (p) => readFileSync(p, "utf8");

test("i18n: locale config exposes en, pt-BR, es", () => {
  const config = text("lib/i18n/config.ts");
  assert.match(config, /"en"/);
  assert.match(config, /"pt-BR"/);
  assert.match(config, /"es"/);
  assert.match(config, /defaultLocale[^=]*=\s*"en"/);
});

test("i18n: getContent merges locale over English defaults", () => {
  const merger = text("lib/content/i18n/index.ts");
  assert.match(merger, /getContent/);
  assert.match(merger, /fictionFiles/);
});

test("i18n: per-locale content modules exist for all 3 locales", () => {
  for (const loc of ["en", "pt-BR", "es"]) {
    assert.ok(existsSync(`lib/content/i18n/${loc}/index.ts`), `${loc} missing`);
  }
});

test("i18n: messages dictionary contains all 3 locales", () => {
  const m = text("lib/i18n/messages.ts");
  assert.match(m, /\ben:\s*\{/);
  assert.match(m, /"pt-BR":\s*\{/);
  assert.match(m, /\bes:\s*\{/);
});

test("i18n: app/[locale] route tree exists for all key routes", () => {
  for (const route of ["page.tsx", "layout.tsx", "game/page.tsx", "games/page.tsx", "press/page.tsx", "files/page.tsx", "files/[id]/page.tsx", "varginha/page.tsx"]) {
    assert.ok(existsSync(`app/[locale]/${route}`), `app/[locale]/${route} missing`);
  }
});

test("i18n: SiteNav includes a LanguageSwitcher", () => {
  const nav = text("components/nav/SiteNav.tsx");
  assert.match(nav, /LanguageSwitcher/);
  assert.match(nav, /usePathname/);
});

test("i18n: pageMetadata emits hreflang alternates", () => {
  const meta = text("lib/seo/metadata.ts");
  assert.match(meta, /alternates/);
  assert.match(meta, /languages/);
  assert.match(meta, /x-default/);
});

test("i18n: sitemap iterates all locales", () => {
  const s = text("app/sitemap.ts");
  assert.match(s, /locales/);
  assert.match(s, /localizedPath/);
  assert.match(s, /alternates/);
});
