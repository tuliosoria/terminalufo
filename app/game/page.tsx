import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";
import { CommandAccordion } from "@/components/game/CommandAccordion";
import { ufo74Lines, mechanics, commands } from "@/lib/content/game";
import { videoGameSchema } from "@/lib/seo/structured-data";

export default function GamePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema()) }}
      />
      
      <Section eyebrow="Play" title="Terminal Varginha" className="text-center">
        <div className="mx-auto max-w-3xl">
          <Terminal lines={ufo74Lines} title="access-terminal.sh" />
        </div>
      </Section>

      <Section eyebrow="How it Works" title="Game Mechanics">
        <div className="grid gap-8 md:grid-cols-3">
          {mechanics.map((mechanic) => (
            <article key={mechanic.title} className="rounded border border-terminal-muted/20 bg-terminal-surface p-6">
              <h3 className="mb-3 font-heading text-xl text-terminal-text">
                {mechanic.title}
              </h3>
              <p className="text-sm leading-relaxed text-terminal-muted">
                {mechanic.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reference" title="Command Reference">
        <div className="mx-auto max-w-3xl">
          <CommandAccordion commands={commands} />
        </div>
      </Section>
    </main>
  );
}
