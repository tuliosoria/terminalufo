import type { Metadata } from "next";
import { siteUrl } from "../content/site";
import {
  defaultLocale,
  locales,
  localizedPath,
  ogLocale,
  type Locale
} from "../i18n/config";

export function pageMetadata({
  title,
  description,
  path = "/",
  locale = defaultLocale
}: {
  title: string;
  description: string;
  /** Canonical (locale-agnostic) path, e.g. "/files/varginha-003". */
  path?: string;
  locale?: Locale;
}): Metadata {
  const localizedHere = localizedPath(locale, path);
  const url = new URL(localizedHere, siteUrl).toString();

  // hreflang alternates: one entry per locale + an x-default pointing at en.
  const languages: Record<string, string> = { "x-default": new URL(localizedPath(defaultLocale, path), siteUrl).toString() };
  for (const l of locales) {
    languages[l] = new URL(localizedPath(l, path), siteUrl).toString();
  }

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
      languages
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      siteName: "Terminal UFO",
      title,
      description,
      url,
      images: [{ url: "/og/default.svg", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/default.svg"]
    }
  };
}
