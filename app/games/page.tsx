import { GamesView } from "@/components/views/GamesView";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";

const locale = defaultLocale;
const meta = getContent(locale).pageMeta.games;

export const metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/games",
  locale
});

export default function GamesPage() {
  return <GamesView locale={locale} />;
}
