import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "../components/nav/SiteNav";
import { StaticOverlay } from "../components/ui/StaticOverlay";
import { getContent } from "../lib/content/i18n";
import { defaultLocale, htmlLang } from "../lib/i18n/config";
import { pageMetadata } from "../lib/seo/metadata";

const locale = defaultLocale;
const meta = getContent(locale).pageMeta.home;

export const metadata: Metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/",
  locale
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang[locale]}>
      <body>
        <StaticOverlay />
        {/* The English root layout shows nav with locale-agnostic root path "/".
            Inner pages don't currently track their own path here; SiteNav uses
            "/" as a safe fallback for the language switcher when on the home
            route. Per-page layouts in [locale] override this. */}
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
