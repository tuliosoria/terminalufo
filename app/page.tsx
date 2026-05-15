import { GlitchText } from "@/components/ui/GlitchText";
import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";
import { RiskBar } from "@/components/ui/RiskBar";
import { heroLogs } from "@/lib/content/game";
import { launchCta } from "@/lib/content/site";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section className="text-center">
        <h1 className="mb-6 font-heading text-5xl text-terminal-text md:text-7xl">
          <GlitchText text="Terminal UFO" />
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-terminal-muted">
          A command-line investigation into classified UFO files, government secrecy, and the fragile line between documentation and truth.
        </p>
        
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a 
            href={launchCta.href}
            className="rounded bg-terminal-green px-6 py-3 font-ui text-sm font-bold uppercase tracking-wider text-terminal-bg transition hover:bg-opacity-90"
          >
            Play the Game
          </a>
          <a 
            href="/varginha"
            className="rounded border border-terminal-green px-6 py-3 font-ui text-sm font-bold uppercase tracking-wider text-terminal-green transition hover:bg-terminal-green hover:bg-opacity-10"
          >
            Read the Files
          </a>
        </div>

        <div className="mx-auto max-w-3xl">
          <Terminal lines={heroLogs} title="ufo-74-archive.terminal" />
        </div>
      </Section>

      <Section eyebrow="System Status" title="Detection Risk">
        <div className="mx-auto max-w-2xl space-y-4">
          <RiskBar value={15} label="EXPOSURE_LEVEL" />
          <RiskBar value={42} label="SYSTEM_TRACE" />
          <RiskBar value={78} label="ALERT_THRESHOLD" />
        </div>
      </Section>
    </main>
  );
}
