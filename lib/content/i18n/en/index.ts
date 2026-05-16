/**
 * English content. Source of truth for every other locale's fallback.
 *
 * Every other locale module should export the SAME named exports with the
 * same shapes. Missing fields automatically fall back to these values via
 * `getContent(locale)`.
 */

export {
  siteUrl,
  siteNav,
  launchCta
} from "../../site";

export { gameTitle, heroLogs, ufo74Lines, mechanics, commands } from "../../game";

export { pressFacts, pressSummary, contactEmail } from "../../press";

export { realFiles, fictionFiles } from "../../files";

export { fileDetails } from "../../file-details";

export {
  varginhaSourceNotes,
  varginhaSeoKeywords,
  varginhaTimeline
} from "../../varginha";

/**
 * Path (relative to the `content/varginha/` directory) of the MDX article
 * for this locale. Pages import the MDX directly via this constant so that
 * each locale can ship its own narrative without changing the route code.
 */
export const varginhaArticlePath = "main.mdx" as const;

/**
 * Per-locale page-meta strings (long-form titles + descriptions used by
 * `pageMetadata`). UI chrome strings live in `lib/i18n/messages.ts`; this
 * is page-level SEO copy specifically.
 */
export const pageMeta = {
  home: {
    title: "Terminal UFO — Classified. Leaked. Real.",
    description:
      "Enter the official archive for Terminal Varginha, the 1996 Varginha UFO incident, and the files that separate public records from fiction."
  },
  game: {
    title: "Terminal Varginha — Terminal UFO",
    description:
      "Play the hacker terminal game built around classified files, detection risk, UFO74, and the public history of the Varginha UFO case."
  },
  games: {
    title: "Terminal Games — Terminal UFO",
    description:
      "The Terminal Games universe begins with Terminal Varginha. Future files remain redacted."
  },
  press: {
    title: "Press Kit — Terminal UFO",
    description:
      "Press summary, facts, contact details, and downloadable one-pager for Terminal UFO and Terminal Varginha."
  },
  files: {
    title: "The Files — Terminal UFO",
    description:
      "Case file VRGH-1996. Thirty fictional Terminal Varginha documents. Each card opens a dedicated file detail page."
  },
  varginha: {
    title: "The Varginha UFO Incident — Terminal UFO",
    description:
      "A sourced long-form account of the 1996 Varginha UFO incident, its witnesses, official denials, public records, and connection to Terminal Varginha."
  }
} as const;

export const filesIntroNotice =
  "Every file in this archive is fictional narrative material created for Terminal Varginha. Each entry carries an individual notice on its detail page. No item below is a real government record.";
