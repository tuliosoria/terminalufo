import { Section } from "@/components/ui/Section";
import { Redacted } from "@/components/ui/Redacted";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Terminal Games — Terminal UFO",
  description:
    "The Terminal Games universe begins with Terminal Varginha. Future files remain redacted.",
  path: "/games"
});

export default function GamesPage() {
  return (
    <main>
      <Section eyebrow="Series" title="Terminal Games">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded border border-terminal-green bg-terminal-surface p-6">
            <div className="mb-3 inline-block rounded bg-terminal-green px-2 py-1 font-mono text-xs font-bold uppercase text-terminal-bg">
              Active
            </div>
            <h3 className="mb-3 font-heading text-xl text-terminal-text">
              Terminal Varginha
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-terminal-muted">
              Investigate the 1996 Varginha UFO incident through classified terminal access.
            </p>
            <a 
              href="/game" 
              className="font-mono text-sm text-terminal-green hover:underline"
            >
              View Details →
            </a>
          </article>

          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded border border-terminal-muted/20 bg-terminal-surface p-6 opacity-50">
              <div className="mb-3 inline-block rounded border border-terminal-muted/20 px-2 py-1 font-mono text-xs font-bold uppercase text-terminal-muted">
                Redacted
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
