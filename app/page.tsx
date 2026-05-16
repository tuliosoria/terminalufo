import { HomeView } from "@/components/views/HomeView";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";

const locale = defaultLocale;
const meta = getContent(locale).pageMeta.home;

export const metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/",
  locale
});

export default function Home() {
  return <HomeView locale={locale} />;
}
