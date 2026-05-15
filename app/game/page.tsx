import { Section } from "@/components/ui/Section";
import { Terminal } from "@/components/terminal/Terminal";
import { ufo74Lines, mechanics } from "@/lib/content/game";
import { pageMetadata } from "@/lib/seo/metadata";
import { videoGameSchema } from "@/lib/seo/structured-data";

export const metadata = pageMetadata({
  title: "Terminal Varginha — Terminal UFO",
  description:
    "Play the hacker terminal game built around classified files, detection risk, UFO74, and the public history of the Varginha UFO case.",
  path: "/game"
});

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
    </main>
  );
}
