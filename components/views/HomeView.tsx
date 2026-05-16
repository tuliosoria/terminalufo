import { GlitchText } from "@/components/ui/GlitchText";
import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";
import { RiskBar } from "@/components/ui/RiskBar";
import { getContent } from "@/lib/content/i18n";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";

export function HomeView({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <main className="min-h-screen">
      <Section className="text-center">
        <h1 className="mb-6 font-heading text-5xl text-terminal-text md:text-7xl">
          <GlitchText text="Terminal UFO" />
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-terminal-muted">
          {t(locale, "home.heroLead")}
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={localizedPath(locale, c.launchCta.href)}
            className="rounded bg-terminal-green px-6 py-3 font-ui text-sm font-bold uppercase tracking-wider text-terminal-bg transition hover:bg-opacity-90"
          >
            {c.launchCta.label}
          </a>
          <a
            href={localizedPath(locale, "/varginha")}
            className="rounded border border-terminal-green px-6 py-3 font-ui text-sm font-bold uppercase tracking-wider text-terminal-green transition hover:bg-terminal-green hover:bg-opacity-10"
          >
            {t(locale, "cta.readFiles")}
          </a>
        </div>

        <div className="mx-auto max-w-3xl">
          <Terminal lines={c.heroLogs} title="ufo-74-archive.terminal" />
        </div>
      </Section>

      <Section eyebrow={t(locale, "home.statusEyebrow")} title={t(locale, "home.statusTitle")}>
        <div className="mx-auto max-w-2xl space-y-4">
          <RiskBar value={15} label={t(locale, "home.exposureLevel")} />
          <RiskBar value={42} label={t(locale, "home.systemTrace")} />
          <RiskBar value={78} label={t(locale, "home.alertThreshold")} />
        </div>
      </Section>
    </main>
  );
}
