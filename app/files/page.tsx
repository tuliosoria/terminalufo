import { Section } from "@/components/ui/Section";
import { ClassifiedCard } from "@/components/ui/ClassifiedCard";
import { realFiles, fictionFiles } from "@/lib/content/files";
import { pageMetadata } from "@/lib/seo/metadata";

const fictionNotice = "Some files in this section are fictional narrative elements created for Terminal Varginha. All fictional files are clearly marked with individual notices explaining their status.";

export const metadata = pageMetadata({
  title: "The Files — Terminal UFO",
  description:
    "Browse Terminal UFO file cards separating public UFO document sources from clearly marked Terminal Varginha fiction.",
  path: "/files"
});

export default function FilesPage() {
  return (
    <main>
      <Section eyebrow="Declassified Archives" title="The Files">
        <p className="mb-12 max-w-3xl text-terminal-muted">
          {fictionNotice}
        </p>
      </Section>

      <Section title="REAL">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realFiles.map((file) => (
            <ClassifiedCard key={file.id} file={file} />
          ))}
        </div>
      </Section>

      <Section title="IN-GAME">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fictionFiles.map((file) => (
            <ClassifiedCard key={file.id} file={file} />
          ))}
        </div>
      </Section>
    </main>
  );
}
