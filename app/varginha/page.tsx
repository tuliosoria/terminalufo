import Article from "@/content/varginha/main.mdx";
import { articleSchema } from "@/lib/seo/structured-data";
import { varginhaSourceNotes } from "@/lib/content/varginha";
import { pageMetadata } from "@/lib/seo/metadata";

// The Varginha UFO Incident

export const metadata = pageMetadata({
  title: "The Varginha UFO Incident — Terminal UFO",
  description:
    "A sourced long-form account of the 1996 Varginha UFO incident, its witnesses, official denials, public records, and connection to Terminal Varginha.",
  path: "/varginha"
});

export default function VarginhaPage() {
  return (
    <main className="prose-terminal mx-auto max-w-4xl px-5 py-20 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema()) }}
      />
      <Article />
      
      <section className="mt-16 border-t border-terminal-muted/20 pt-8">
        <h2 className="mb-6 font-heading text-2xl text-terminal-text">Source Notes</h2>
        <nav className="space-y-4">
          {varginhaSourceNotes.map((note) => (
            <article key={note.id} className="rounded border border-terminal-muted/20 bg-terminal-surface p-4">
              <h3 className="mb-2 font-mono text-sm font-bold text-terminal-green">
                [{note.id}] {note.title}
              </h3>
              <p className="mb-2 text-sm text-terminal-muted">
                {note.publisher}
              </p>
              <p className="mb-2 text-sm text-terminal-muted">
                {note.summary}
              </p>
              <p className="mb-2 text-xs italic text-terminal-muted/70">
                Use: {note.use}
              </p>
              <a 
                href={note.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-xs text-terminal-green hover:underline"
              >
                {note.url}
              </a>
            </article>
          ))}
        </nav>
      </section>
    </main>
  );
}
