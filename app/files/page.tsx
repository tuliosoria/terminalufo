import { FilesIndexView } from "@/components/views/FilesView";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";

const locale = defaultLocale;
const meta = getContent(locale).pageMeta.files;

export const metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/files",
  locale
});

export default function FilesPage() {
  return <FilesIndexView locale={locale} />;
}
