import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

test("terminalufo has a deployable Next.js Hello World homepage", () => {
  assert.ok(existsSync("package.json"), "package.json should exist");
  assert.ok(existsSync("app/page.tsx"), "app/page.tsx should exist");
  assert.ok(existsSync("app/layout.tsx"), "app/layout.tsx should exist");
  assert.ok(existsSync("next.config.mjs"), "next.config.mjs should exist");

  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  assert.equal(pkg.scripts?.build, "next build");
  assert.equal(pkg.scripts?.test, "node --test tests/*.test.mjs");
  assert.ok(pkg.dependencies?.next, "Next.js dependency should be declared");

  const config = readFileSync("next.config.mjs", "utf8");
  assert.match(config, /output:\s*["']export["']/);

  const page = readFileSync("app/page.tsx", "utf8");
  assert.match(page, /Hello from Terminal UFO/);
  assert.match(page, /Next\.js/);
});
