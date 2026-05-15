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
  assert.match(text("lib/content/site.ts"), /launchCta[\s\S]*href:\s*"\/game"/);
});
