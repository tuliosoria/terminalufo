import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/content/i18n";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";

export function PressView({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <main>
      <Section eyebrow={t(locale, "press.eyebrow")} title={t(locale, "press.title")}>
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 leading-relaxed text-terminal-muted">{c.pressSummary}</p>

          <div className="mb-12 rounded border border-terminal-muted/20 bg-terminal-surface p-8">
            <h2 className="mb-6 font-heading text-2xl text-terminal-text">{t(locale, "press.keyFacts")}</h2>
            <dl className="space-y-4">
              {c.pressFacts.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 md:flex-row md:gap-4">
                  <dt className="min-w-[140px] font-mono text-sm font-bold uppercase tracking-wider text-terminal-green">
                    {label}
                  </dt>
                  <dd className="text-sm text-terminal-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 font-heading text-2xl text-terminal-text">{t(locale, "press.downloads")}</h2>
            <div className="space-y-4">
              <a
                href="/assets/press/terminal-ufo-one-pager.txt"
                download
                className="flex items-center justify-between rounded border border-terminal-green bg-terminal-surface p-4 font-mono text-sm text-terminal-green transition hover:bg-terminal-green hover:bg-opacity-10"
              >
                <span>terminal-ufo-one-pager.txt</span>
                <span>{t(locale, "press.download")}</span>
              </a>
            </div>
          </div>

          <div id="contact" className="rounded border border-terminal-muted/20 bg-terminal-surface p-8">
            <h2 className="mb-4 font-heading text-2xl text-terminal-text">{t(locale, "press.contact")}</h2>
            <p className="mb-4 text-sm text-terminal-muted">{t(locale, "press.contactBody")}</p>
            <a href={`mailto:${c.contactEmail}`} className="font-mono text-terminal-green hover:underline">
              {c.contactEmail}
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
