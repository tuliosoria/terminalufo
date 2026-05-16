import { notFound } from "next/navigation";
import EnArticle from "@/content/varginha/main.mdx";
import { VarginhaView } from "@/components/views/VarginhaView";
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
  const meta = getContent(typed).pageMeta.varginha;
  return pageMetadata({ title: meta.title, description: meta.description, path: "/varginha", locale: typed });
}

export default async function LocaleVarginhaPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // Long-form MDX article not yet translated; fall back to English with notice.
  return (
    <VarginhaView
      locale={locale as Locale}
      article={<EnArticle />}
      articleIsInLocale={false}
    />
  );
}
