import Link from "next/link";
import { notFound } from "next/navigation";
import { ClassifiedCard } from "@/components/ui/ClassifiedCard";
import { Section } from "@/components/ui/Section";
import { fictionFiles } from "@/lib/content/files";
import { pageMetadata } from "@/lib/seo/metadata";

interface FileDetailParams {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return fictionFiles.map((file) => ({ id: file.id }));
}

export async function generateMetadata({ params }: FileDetailParams) {
  const { id } = await params;
  const file = fictionFiles.find((f) => f.id === id);
  if (!file) return pageMetadata({ title: "File not found — Terminal UFO", description: "This Terminal UFO file does not exist.", path: `/files/${id}` });
  const title = file.redactedTitle || file.title;
  return pageMetadata({
    title: `${title} — Terminal UFO`,
    description: file.summary.slice(0, 160),
    path: `/files/${id}`
  });
}

export default async function FileDetailPage({ params }: FileDetailParams) {
  const { id } = await params;
  const file = fictionFiles.find((f) => f.id === id);
  if (!file) notFound();

  return (
    <main>
      <Section eyebrow={`Case file ${file.id.toUpperCase()}`} title={file.redactedTitle || file.title}>
        <div className="mb-8">
          <Link
            href="/files"
            className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
          >
            ← Back to all files
          </Link>
        </div>

        <div className="max-w-2xl">
          <ClassifiedCard file={file} />
        </div>
      </Section>
    </main>
  );
}
