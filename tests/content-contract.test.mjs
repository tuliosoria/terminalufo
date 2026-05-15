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
