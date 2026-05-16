import { notFound } from "next/navigation";
import { FileDetailView } from "@/components/views/FilesView";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";
import { t } from "@/lib/i18n/messages";

const locale = defaultLocale;

interface FileDetailParams {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const c = getContent(locale);
  return c.fictionFiles.map((file) => ({ id: file.id }));
}

export async function generateMetadata({ params }: FileDetailParams) {
  const { id } = await params;
  const c = getContent(locale);
  const file = c.fictionFiles.find((f) => f.id === id);
  if (!file) {
    return pageMetadata({
      title: t(locale, "fileNotFound.title"),
      description: t(locale, "fileNotFound.body"),
      path: `/files/${id}`,
      locale
    });
  }
  const title = file.redactedTitle || file.title;
  return pageMetadata({
    title: `${title} — Terminal UFO`,
    description: file.summary.slice(0, 160),
    path: `/files/${id}`,
    locale
  });
}

export default async function FileDetailPage({ params }: FileDetailParams) {
  const { id } = await params;
  const c = getContent(locale);
  const file = c.fictionFiles.find((f) => f.id === id);
  if (!file) notFound();

  return (
    <FileDetailView
      locale={locale}
      file={file}
      detail={c.fileDetails[file.id]}
      allFiles={c.fictionFiles}
    />
  );
}
