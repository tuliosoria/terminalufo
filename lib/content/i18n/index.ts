/**
 * Locale-aware content accessor.
 *
 * `getContent(locale)` returns a fully populated content bundle by merging
 * the locale's overrides over the English baseline. Arrays of objects
 * keyed by `id` (files, file details) are merged per-id so partial
 * translations work — entries that the locale hasn't translated yet keep
 * their English text.
 *
 * Add a new locale:
 *   1. Create `lib/content/i18n/<locale>/index.ts` with the same export
 *      surface as `lib/content/i18n/en/index.ts` (any subset).
 *   2. Add the locale to `lib/i18n/config.ts`'s `locales` tuple.
 *   3. Translate UI strings in `lib/i18n/messages.ts`.
 */

import type { Locale } from "../../i18n/config";
import { defaultLocale } from "../../i18n/config";

import * as en from "./en";
import * as ptBR from "./pt-BR";
import * as es from "./es";

import type { ClassifiedFile, FileDetail } from "../types";

// All locale modules conform structurally to the English module's surface,
// but every export is optional from a TypeScript perspective so a translator
// can ship partial coverage without compile errors.
type ContentModule = {
  siteUrl?: typeof en.siteUrl;
  siteNav?: typeof en.siteNav;
  launchCta?: typeof en.launchCta;
  gameTitle?: typeof en.gameTitle;
  heroLogs?: typeof en.heroLogs;
  ufo74Lines?: typeof en.ufo74Lines;
  mechanics?: typeof en.mechanics;
  commands?: typeof en.commands;
  pressFacts?: typeof en.pressFacts;
  pressSummary?: typeof en.pressSummary;
  contactEmail?: typeof en.contactEmail;
  realFiles?: typeof en.realFiles;
  fictionFiles?: typeof en.fictionFiles;
  fileDetails?: typeof en.fileDetails;
  varginhaSourceNotes?: typeof en.varginhaSourceNotes;
  varginhaSeoKeywords?: typeof en.varginhaSeoKeywords;
  varginhaTimeline?: typeof en.varginhaTimeline;
  varginhaArticlePath?: typeof en.varginhaArticlePath;
  pageMeta?: typeof en.pageMeta;
  filesIntroNotice?: typeof en.filesIntroNotice;
};

const modules: Record<Locale, ContentModule> = {
  en,
  "pt-BR": ptBR as unknown as ContentModule,
  es: es as unknown as ContentModule
};

function mergeFilesById(
  base: ClassifiedFile[],
  overrides: ClassifiedFile[] | undefined
): ClassifiedFile[] {
  if (!overrides || overrides.length === 0) return base;
  const overrideMap = new Map(overrides.map((f) => [f.id, f]));
  return base.map((f) => overrideMap.get(f.id) ?? f);
}

function mergeFileDetailsById(
  base: Record<string, FileDetail>,
  overrides: Record<string, FileDetail> | undefined
): Record<string, FileDetail> {
  if (!overrides) return base;
  return { ...base, ...overrides };
}

function pickPageMeta(
  base: typeof en.pageMeta,
  overrides: ContentModule["pageMeta"]
): typeof en.pageMeta {
  if (!overrides) return base;
  const out = { ...base } as Record<string, { title: string; description: string }>;
  for (const key of Object.keys(base) as (keyof typeof en.pageMeta)[]) {
    out[key] = (overrides as typeof base)[key] ?? base[key];
  }
  return out as typeof en.pageMeta;
}

export type Content = {
  siteUrl: string;
  siteNav: typeof en.siteNav;
  launchCta: typeof en.launchCta;
  gameTitle: string;
  heroLogs: typeof en.heroLogs;
  ufo74Lines: typeof en.ufo74Lines;
  mechanics: typeof en.mechanics;
  commands: typeof en.commands;
  pressFacts: typeof en.pressFacts;
  pressSummary: string;
  contactEmail: string;
  realFiles: ClassifiedFile[];
  fictionFiles: ClassifiedFile[];
  fileDetails: Record<string, FileDetail>;
  varginhaSourceNotes: typeof en.varginhaSourceNotes;
  varginhaSeoKeywords: typeof en.varginhaSeoKeywords;
  varginhaTimeline: typeof en.varginhaTimeline;
  varginhaArticlePath: string;
  pageMeta: typeof en.pageMeta;
  filesIntroNotice: string;
};

const cache = new Map<Locale, Content>();

export function getContent(locale: Locale): Content {
  const cached = cache.get(locale);
  if (cached) return cached;

  const overrides = modules[locale] ?? modules[defaultLocale];

  const merged: Content = {
    siteUrl: overrides.siteUrl ?? en.siteUrl,
    siteNav: overrides.siteNav ?? en.siteNav,
    launchCta: overrides.launchCta ?? en.launchCta,
    gameTitle: overrides.gameTitle ?? en.gameTitle,
    heroLogs: overrides.heroLogs ?? en.heroLogs,
    ufo74Lines: overrides.ufo74Lines ?? en.ufo74Lines,
    mechanics: overrides.mechanics ?? en.mechanics,
    commands: overrides.commands ?? en.commands,
    pressFacts: overrides.pressFacts ?? en.pressFacts,
    pressSummary: overrides.pressSummary ?? en.pressSummary,
    contactEmail: overrides.contactEmail ?? en.contactEmail,
    realFiles: mergeFilesById(en.realFiles, overrides.realFiles),
    fictionFiles: mergeFilesById(en.fictionFiles, overrides.fictionFiles),
    fileDetails: mergeFileDetailsById(en.fileDetails, overrides.fileDetails),
    varginhaSourceNotes: overrides.varginhaSourceNotes ?? en.varginhaSourceNotes,
    varginhaSeoKeywords: overrides.varginhaSeoKeywords ?? en.varginhaSeoKeywords,
    varginhaTimeline: overrides.varginhaTimeline ?? en.varginhaTimeline,
    varginhaArticlePath: overrides.varginhaArticlePath ?? en.varginhaArticlePath,
    pageMeta: pickPageMeta(en.pageMeta, overrides.pageMeta),
    filesIntroNotice: overrides.filesIntroNotice ?? en.filesIntroNotice
  };

  cache.set(locale, merged);
  return merged;
}
