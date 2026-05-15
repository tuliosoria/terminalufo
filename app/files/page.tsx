import { Section } from "@/components/ui/Section";
import { ClassifiedListCard } from "@/components/ui/ClassifiedListCard";
import { fictionFiles } from "@/lib/content/files";
import { pageMetadata } from "@/lib/seo/metadata";

const fictionNotice =
  "Every file in this archive is fictional narrative material created for Terminal Varginha. Each entry carries an individual notice on its detail page. No item below is a real government record.";

export const metadata = pageMetadata({
  title: "The Files — Terminal UFO",
  description:
    "Case file VRGH-1996. Thirty fictional Terminal Varginha documents. Each card opens a dedicated file detail page.",
  path: "/files"
});

export default function FilesPage() {
  return (
    <main>
      <Section eyebrow="Case file VRGH-1996" title="The Files">
        <p className="mb-12 max-w-3xl text-terminal-muted">{fictionNotice}</p>
      </Section>

      <Section title="IN-GAME">
        <p className="mb-8 max-w-3xl font-mono text-sm text-[var(--text-secondary)]">
          Thirty fictional documents compiled for Terminal Varginha. Click a card to open the full file.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fictionFiles.map((file) => (
            <ClassifiedListCard key={file.id} file={file} href={`/files/${file.id}`} />
          ))}
        </div>
      </Section>
    </main>
  );
}
