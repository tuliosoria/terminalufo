import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";
import { getContent } from "@/lib/content/i18n";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import { videoGameSchema } from "@/lib/seo/structured-data";

export function GameView({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema()) }}
      />

      <Section eyebrow={t(locale, "game.eyebrow")} title={c.gameTitle} className="text-center">
        <div className="mx-auto max-w-3xl">
          <Terminal lines={c.ufo74Lines} title="access-terminal.sh" />
        </div>
      </Section>

      <Section eyebrow={t(locale, "game.howEyebrow")} title={t(locale, "game.howTitle")}>
        <div className="grid gap-8 md:grid-cols-3">
          {c.mechanics.map((mechanic) => (
            <article
              key={mechanic.title}
              className="rounded border border-terminal-muted/20 bg-terminal-surface p-6"
            >
              <h3 className="mb-3 font-heading text-xl text-terminal-text">{mechanic.title}</h3>
              <p className="text-sm leading-relaxed text-terminal-muted">{mechanic.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
