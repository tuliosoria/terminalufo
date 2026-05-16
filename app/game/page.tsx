import { GameView } from "@/components/views/GameView";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo/metadata";

const locale = defaultLocale;
const meta = getContent(locale).pageMeta.game;

export const metadata = pageMetadata({
  title: meta.title,
  description: meta.description,
  path: "/game",
  locale
});

export default function GamePage() {
  return <GameView locale={locale} />;
}
