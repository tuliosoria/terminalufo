export const locales = ["en", "pt-BR", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português (BR)",
  es: "Español"
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  "pt-BR": "pt-BR",
  es: "es"
};

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  "pt-BR": "pt_BR",
  es: "es_ES"
};

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Build a localized URL path. The default locale renders at the site root
 * with no prefix; non-default locales are prefixed with `/<locale>`.
 */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/** Strip the locale prefix from a path, if present. Returns [locale, restPath]. */
export function splitLocaleFromPath(pathname: string): { locale: Locale; rest: string } {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0])) {
    const locale = parts[0] as Locale;
    const rest = "/" + parts.slice(1).join("/");
    return { locale, rest: rest === "/" ? "/" : rest };
  }
  return { locale: defaultLocale, rest: pathname || "/" };
}

/** Locales that are not the default (used for `[locale]` route generation). */
export const nonDefaultLocales = locales.filter((l) => l !== defaultLocale);
