import { notFound } from "next/navigation";
import { FileDetailView } from "@/components/views/FilesView";
import { getContent } from "@/lib/content/i18n";
import { isLocale, nonDefaultLocales, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";
import { t } from "@/lib/i18n/messages";

export function generateStaticParams() {
  const params: { locale: string; id: string }[] = [];
  for (const locale of nonDefaultLocales) {
    const c = getContent(locale);
    for (const file of c.fictionFiles) {
      params.push({ locale, id: file.id });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, id } = await params;
  if (!isLocale(locale)) return {};
  const typed = locale as Locale;
  const c = getContent(typed);
  const file = c.fictionFiles.find((f) => f.id === id);
  if (!file) {
    return pageMetadata({
      title: t(typed, "fileNotFound.title"),
      description: t(typed, "fileNotFound.body"),
      path: `/files/${id}`,
      locale: typed
    });
  }
  const title = file.redactedTitle || file.title;
  return pageMetadata({
    title: `${title} — Terminal UFO`,
    description: file.summary.slice(0, 160),
    path: `/files/${id}`,
    locale: typed
  });
}

export default async function LocaleFileDetail({ params }: PageProps) {
  const { locale, id } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const c = getContent(typed);
  const file = c.fictionFiles.find((f) => f.id === id);
  if (!file) notFound();

  return (
    <FileDetailView
      locale={typed}
      file={file}
      detail={c.fileDetails[file.id]}
      allFiles={c.fictionFiles}
    />
  );
}
