import { notFound } from "next/navigation";
import { PressView } from "@/components/views/PressView";
import { getContent } from "@/lib/content/i18n";
import { isLocale, nonDefaultLocales, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return nonDefaultLocales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const typed = locale as Locale;
  const meta = getContent(typed).pageMeta.press;
  return pageMetadata({ title: meta.title, description: meta.description, path: "/press", locale: typed });
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PressView locale={locale as Locale} />;
}
