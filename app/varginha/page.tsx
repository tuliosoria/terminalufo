import Article from "@/content/varginha/main.mdx";
import { VarginhaView } from "@/components/views/VarginhaView";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";

const locale = defaultLocale;
const meta = getContent(locale).pageMeta.varginha;

export const metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/varginha",
  locale
});

export default function VarginhaPage() {
  return <VarginhaView locale={locale} article={<Article />} articleIsInLocale={true} />;
}
