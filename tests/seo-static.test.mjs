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
