import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { fictionFiles } from "@/lib/content/files";
import { fileDetails } from "@/lib/content/file-details";
import type { ClassifiedFile } from "@/lib/content/types";
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
  if (!file) {
    return pageMetadata({
      title: "File not found — Terminal UFO",
      description: "This Terminal UFO file does not exist.",
      path: `/files/${id}`
    });
  }
  const title = file.redactedTitle || file.title;
  return pageMetadata({
    title: `${title} — Terminal UFO`,
    description: file.summary.slice(0, 160),
    path: `/files/${id}`
  });
}

function stampTone(classification: ClassifiedFile["classification"]): "red" | "amber" | "muted" | "green" {
  switch (classification) {
    case "TOP SECRET":
    case "REDACTED":
      return "red";
    case "EYES ONLY":
    case "LEAKED":
    case "INTERCEPTED":
      return "amber";
    case "ANONYMOUS SOURCE":
      return "muted";
    default:
      return "green";
  }
}

export default async function FileDetailPage({ params }: FileDetailParams) {
  const { id } = await params;
  const file = fictionFiles.find((f) => f.id === id);
  if (!file) notFound();

  const detail = fileDetails[file.id];
  const displayTitle = file.redactedTitle || file.title;
  const tone = stampTone(file.classification);

  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Link
              href="/files"
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
            >
              ← Back to all files
            </Link>
          </div>

          <article className="paper-card p-8 md:p-12">
            {/* Header band */}
            <header className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-[var(--paper-rule)] pb-6">
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  Case File
                </p>
                <p className="font-[var(--font-stamp)] text-2xl tracking-[0.18em] text-[var(--paper-ink)]">
                  {file.id.toUpperCase()}
                </p>
              </div>
              <div className="paper-stamp text-sm" data-tone={tone}>
                {file.classification}
              </div>
            </header>

            {/* Title */}
            <h1 className="mb-6 font-[var(--font-heading)] text-3xl font-bold leading-tight text-[var(--paper-ink)] md:text-4xl">
              {displayTitle}
            </h1>

            {/* Excerpt / pull quote */}
            {detail?.excerpt && (
              <blockquote className="mb-8 border-l-4 border-[var(--paper-ink-muted)] pl-5 font-[var(--font-heading)] text-lg italic leading-relaxed text-[var(--paper-ink)] md:text-xl">
                {detail.excerpt}
              </blockquote>
            )}

            {/* Metadata grid */}
            <dl className="mb-8 grid grid-cols-1 gap-3 border-y border-[var(--paper-rule)] py-5 font-mono text-sm text-[var(--paper-ink)] sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--paper-ink-muted)]">
                  Type
                </dt>
                <dd>{file.type}</dd>
              </div>
              {file.date && (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--paper-ink-muted)]">
                    Date of Record
                  </dt>
                  <dd>{file.date}</dd>
                </div>
              )}
              <div className="sm:col-span-2">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--paper-ink-muted)]">
                  Source
                </dt>
                <dd>{file.source}</dd>
              </div>
            </dl>

            {/* Summary */}
            <section className="mb-8">
              <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                Abstract
              </h2>
              <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--paper-ink)]">
                {file.summary}
              </p>
            </section>

            {/* Artifacts table */}
            {detail?.artifacts && detail.artifacts.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  Artifact Inventory
                </h2>
                <dl className="divide-y divide-[var(--paper-rule)] border border-[var(--paper-rule)] bg-[rgba(255,250,225,0.35)]">
                  {detail.artifacts.map((a) => (
                    <div key={a.label} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6">
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--paper-ink-muted)] sm:w-48 sm:flex-shrink-0">
                        {a.label}
                      </dt>
                      <dd className="font-[var(--font-body)] text-sm text-[var(--paper-ink)]">
                        {a.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Sections */}
            {detail?.sections.map((s) => (
              <section key={s.heading} className="mb-10">
                <h2 className="mb-4 font-[var(--font-heading)] text-xl font-bold uppercase tracking-wide text-[var(--paper-ink)]">
                  {s.heading}
                </h2>
                <div className="space-y-4 font-[var(--font-body)] text-base leading-relaxed text-[var(--paper-ink)]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* Handler note */}
            {detail?.handlerNote && (
              <aside className="mb-10 border-2 border-dashed border-[var(--paper-ink-muted)] bg-[rgba(255,245,210,0.45)] p-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  Handler Note
                </p>
                <p className="font-[var(--font-heading)] text-base italic leading-relaxed text-[var(--paper-ink)]">
                  {detail.handlerNote}
                </p>
              </aside>
            )}

            {/* Related files */}
            {detail?.related && detail.related.length > 0 && (
              <section className="mb-8">
                <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  Cross-Referenced Files
                </h2>
                <ul className="space-y-2 font-mono text-sm">
                  {detail.related.map((rid) => {
                    const r = fictionFiles.find((f) => f.id === rid);
                    if (!r) return null;
                    return (
                      <li key={rid}>
                        <Link
                          href={`/files/${rid}`}
                          className="text-[var(--paper-ink)] underline decoration-[var(--paper-ink-muted)] underline-offset-4 hover:decoration-[var(--paper-ink)]"
                        >
                          <span className="font-[var(--font-stamp)] tracking-[0.15em]">
                            {rid.toUpperCase()}
                          </span>
                          <span className="text-[var(--paper-ink-muted)]"> — </span>
                          <span>{r.redactedTitle || r.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {/* Fiction notice */}
            {file.fictionNotice && (
              <footer className="mt-10 border-t border-[var(--paper-rule)] pt-5">
                <p className="font-mono text-xs italic text-[var(--paper-ink-muted)]">
                  {file.fictionNotice}
                </p>
              </footer>
            )}
          </article>

          <div className="mt-8 text-center">
            <Link
              href="/files"
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
            >
              ← Back to all files
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
