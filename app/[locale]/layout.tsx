import { notFound } from "next/navigation";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { isLocale, nonDefaultLocales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return nonDefaultLocales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;

  return (
    <>
      <HtmlLangSync locale={typed} />
      {children}
    </>
  );
}
