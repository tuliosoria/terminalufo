import assert from "node:assert/strict";
import { test } from "node:test";
import { fictionFiles } from "../lib/content/files.ts";

const REAL_NAME_SUBSTRINGS = [
  "Liliane",
  "Valquíria",
  "Valquiria",
  "Kátia",
  "Katia",
  "Xavier",
  "Cherez",
  "Marco Eli",
  "Ubirajara",
  "Ademar",
  "Gevaerd"
];

test("fictionFiles contains 30 Varginha entries with required fields", () => {
  assert.ok(fictionFiles.length >= 30, `expected >=30 entries, got ${fictionFiles.length}`);

  for (const file of fictionFiles) {
    assert.equal(file.category, "fiction", `${file.id} must be category fiction`);
    assert.ok(file.fictionNotice, `${file.id} must declare a fictionNotice`);
    assert.ok(file.date, `${file.id} must have a date`);
    assert.match(file.date, /^\d{4}-\d{2}-\d{2}$/, `${file.id} date must be YYYY-MM-DD`);
    assert.ok(file.summary && file.summary.length >= 80, `${file.id} summary must be substantive`);
  }

  const ids = new Set(fictionFiles.map((f) => f.id));
  assert.equal(ids.size, fictionFiles.length, "fictionFile ids must be unique");
});

test("fictionFiles avoid real Varginha witness or investigator names", () => {
  for (const file of fictionFiles) {
    const haystack = `${file.title}\n${file.summary}\n${file.source}`;
    for (const name of REAL_NAME_SUBSTRINGS) {
      assert.equal(
        haystack.includes(name),
        false,
        `${file.id} must not reference real name "${name}"`
      );
    }
  }
});

test("fictionFiles meet distribution requirements", () => {
  const us = fictionFiles.filter((f) =>
    /foreign|Naval|Navy|embassy|federal|allied/i.test(
      `${f.title} ${f.summary} ${f.source}`
    )
  );
  assert.ok(us.length >= 5, `expected >=5 US/military entries, got ${us.length}`);

  const medical = fictionFiles.filter((f) =>
    /(autops|biops|biohazard|DNA|sequencing|forensic|odontolog|veterinar|nurse|pediatric|specimen|cranial|mandibular|biolog|infection|cardiac)/i.test(
      `${f.title} ${f.summary}`
    )
  );
  assert.ok(medical.length >= 3, `expected >=3 medical/biological entries, got ${medical.length}`);

  const ongoing = fictionFiles.filter((f) => {
    const year = Number((f.date || "0000").slice(0, 4));
    const ongoingPhrasing = /(remain|continues|continuing|ongoing|every|annually|still alive|still active|persistent|recurring)/i.test(
      f.summary
    );
    return year >= 2018 && ongoingPhrasing;
  });
  assert.ok(ongoing.length >= 2, `expected >=2 ongoing-phenomena entries, got ${ongoing.length}`);

  const types = new Set(fictionFiles.map((f) => f.type));
  for (const required of ["AUDIO", "VIDEO", "DOCUMENT", "PHOTOGRAPH", "TRANSCRIPT", "REPORT"]) {
    assert.ok(types.has(required), `expected at least one ${required}`);
  }

  const classifications = new Set(fictionFiles.map((f) => f.classification));
  for (const required of ["DECLASSIFIED", "LEAKED", "ANONYMOUS SOURCE", "INTERCEPTED", "REDACTED"]) {
    assert.ok(classifications.has(required), `expected at least one ${required}`);
  }
});
