"use client";

import { useEffect } from "react";
import { htmlLang, type Locale } from "@/lib/i18n/config";

/** Updates <html lang> to match the current locale. Static export safe. */
export function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = htmlLang[locale];
    }
  }, [locale]);
  return null;
}
