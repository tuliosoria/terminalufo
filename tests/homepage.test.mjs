import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const text = (path) => readFileSync(path, "utf8");

test("Terminal UFO launch pages exist with core copy", () => {
  // Page shims now delegate to view components; copy lives in views + content.
  const pages = [
    ["app/page.tsx", "HomeView"],
    ["app/game/page.tsx", "GameView"],
    ["app/varginha/page.tsx", "VarginhaView"],
    ["app/files/page.tsx", "FilesIndexView"],
    ["app/games/page.tsx", "GamesView"],
    ["app/press/page.tsx", "PressView"]
  ];

  for (const [path, phrase] of pages) {
    assert.ok(existsSync(path), `${path} must exist`);
    assert.match(text(path), new RegExp(phrase));
  }

  assert.match(text("components/views/HomeView.tsx"), /Terminal UFO/);
  assert.match(text("components/views/HomeView.tsx"), /readFiles|nav\.files/);
  assert.match(text("components/views/HomeView.tsx"), /launchCta\.label/);
  assert.match(text("components/views/GameView.tsx"), /game\.howTitle|mechanics/);
  assert.match(text("components/views/GamesView.tsx"), /COMING SOON|comingSoon/);
  assert.match(text("components/views/FilesView.tsx"), /fictionNotice|filesIntroNotice/);
  assert.match(text("lib/content/site.ts"), /launchCta[\s\S]*label:\s*"Play the Game"/);
  assert.match(text("lib/content/site.ts"), /launchCta[\s\S]*href:\s*"\/game"/);
});
