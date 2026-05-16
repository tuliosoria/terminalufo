import { Section } from "@/components/ui/Section";
import { Redacted } from "@/components/ui/Redacted";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";

export function GamesView({ locale }: { locale: Locale }) {
  return (
    <main>
      <Section eyebrow={t(locale, "games.eyebrow")} title={t(locale, "games.title")}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded border border-terminal-green bg-terminal-surface p-6">
            <div className="mb-3 inline-block rounded bg-terminal-green px-2 py-1 font-mono text-xs font-bold uppercase text-terminal-bg">
              {t(locale, "games.activeBadge")}
            </div>
            <h3 className="mb-3 font-heading text-xl text-terminal-text">
              {t(locale, "games.varginhaTitle")}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-terminal-muted">
              {t(locale, "games.varginhaBody")}
            </p>
            <a
              href={localizedPath(locale, "/game")}
              className="font-mono text-sm text-terminal-green hover:underline"
            >
              {t(locale, "games.viewDetails")}
            </a>
          </article>

          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="rounded border border-terminal-muted/20 bg-terminal-surface p-6 opacity-50"
            >
              <div className="mb-3 inline-block rounded border border-terminal-muted/20 px-2 py-1 font-mono text-xs font-bold uppercase text-terminal-muted">
                {t(locale, "games.redactedBadge")}
              </div>
              <div className="mb-3 inline-block rounded border border-terminal-amber/40 px-2 py-1 font-mono text-xs font-bold uppercase tracking-wider text-terminal-amber motion-safe:animate-pulse">
                {t(locale, "games.comingSoon")}
              </div>
              <h3 className="mb-3 font-heading text-xl">
                <Redacted>████████████</Redacted>
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-terminal-muted">
                <Redacted>████████████████████████████████████████████████</Redacted>
              </p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
