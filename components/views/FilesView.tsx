import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ClassifiedListCard } from "@/components/ui/ClassifiedListCard";
import { getContent } from "@/lib/content/i18n";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";
import type { ClassifiedFile, FileDetail } from "@/lib/content/types";

export function FilesIndexView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <main>
      <Section eyebrow={t(locale, "files.eyebrow")} title={t(locale, "files.title")}>
        <p className="mb-12 max-w-3xl text-terminal-muted">{c.filesIntroNotice}</p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {c.fictionFiles.map((file) => (
            <ClassifiedListCard
              key={file.id}
              file={file}
              href={localizedPath(locale, `/files/${file.id}`)}
              openLabel={t(locale, "files.openFull")}
            />
          ))}
        </div>
      </Section>
    </main>
  );
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

interface FileDetailViewProps {
  locale: Locale;
  file: ClassifiedFile;
  detail: FileDetail | undefined;
  /** All fiction files (used to render related cross-references). */
  allFiles: ClassifiedFile[];
}

export function FileDetailView({ locale, file, detail, allFiles }: FileDetailViewProps) {
  const displayTitle = file.redactedTitle || file.title;
  const tone = stampTone(file.classification);
  const filesIndexHref = localizedPath(locale, "/files");

  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Link
              href={filesIndexHref}
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
            >
              {t(locale, "fileDetail.back")}
            </Link>
          </div>

          <article className="paper-card p-8 md:p-12">
            <header className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-[var(--paper-rule)] pb-6">
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  {t(locale, "fileDetail.caseFile")}
                </p>
                <p className="font-[var(--font-stamp)] text-2xl tracking-[0.18em] text-[var(--paper-ink)]">
                  {file.id.toUpperCase()}
                </p>
              </div>
              <div className="paper-stamp text-sm" data-tone={tone}>
                {file.classification}
              </div>
            </header>

            <h1 className="mb-6 font-[var(--font-heading)] text-3xl font-bold leading-tight text-[var(--paper-ink)] md:text-4xl">
              {displayTitle}
            </h1>

            {detail?.excerpt && (
              <blockquote className="mb-8 border-l-4 border-[var(--paper-ink-muted)] pl-5 font-[var(--font-heading)] text-lg italic leading-relaxed text-[var(--paper-ink)] md:text-xl">
                {detail.excerpt}
              </blockquote>
            )}

            <dl className="mb-8 grid grid-cols-1 gap-3 border-y border-[var(--paper-rule)] py-5 font-mono text-sm text-[var(--paper-ink)] sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--paper-ink-muted)]">
                  {t(locale, "fileDetail.type")}
                </dt>
                <dd>{file.type}</dd>
              </div>
              {file.date && (
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--paper-ink-muted)]">
                    {t(locale, "fileDetail.dateOfRecord")}
                  </dt>
                  <dd>{file.date}</dd>
                </div>
              )}
              <div className="sm:col-span-2">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--paper-ink-muted)]">
                  {t(locale, "fileDetail.source")}
                </dt>
                <dd>{file.source}</dd>
              </div>
            </dl>

            <section className="mb-8">
              <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                {t(locale, "fileDetail.abstract")}
              </h2>
              <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--paper-ink)]">
                {file.summary}
              </p>
            </section>

            {detail?.artifacts && detail.artifacts.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  {t(locale, "fileDetail.artifacts")}
                </h2>
                <dl className="divide-y divide-[var(--paper-rule)] border border-[var(--paper-rule)] bg-[rgba(255,250,225,0.35)]">
                  {detail.artifacts.map((a) => (
                    <div
                      key={a.label}
                      className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-[var(--paper-ink-muted)] sm:w-48 sm:flex-shrink-0">
                        {a.label}
                      </dt>
                      <dd className="font-[var(--font-body)] text-sm text-[var(--paper-ink)]">{a.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

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

            {detail?.handlerNote && (
              <aside className="mb-10 border-2 border-dashed border-[var(--paper-ink-muted)] bg-[rgba(255,245,210,0.45)] p-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  {t(locale, "fileDetail.handlerNote")}
                </p>
                <p className="font-[var(--font-heading)] text-base italic leading-relaxed text-[var(--paper-ink)]">
                  {detail.handlerNote}
                </p>
              </aside>
            )}

            {detail?.related && detail.related.length > 0 && (
              <section className="mb-8">
                <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
                  {t(locale, "fileDetail.related")}
                </h2>
                <ul className="space-y-2 font-mono text-sm">
                  {detail.related.map((rid) => {
                    const r = allFiles.find((f) => f.id === rid);
                    if (!r) return null;
                    return (
                      <li key={rid}>
                        <Link
                          href={localizedPath(locale, `/files/${rid}`)}
                          className="text-[var(--paper-ink)] underline decoration-[var(--paper-ink-muted)] underline-offset-4 hover:decoration-[var(--paper-ink)]"
                        >
                          <span className="font-[var(--font-stamp)] tracking-[0.15em]">{rid.toUpperCase()}</span>
                          <span className="text-[var(--paper-ink-muted)]"> — </span>
                          <span>{r.redactedTitle || r.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {file.fictionNotice && (
              <footer className="mt-10 border-t border-[var(--paper-rule)] pt-5">
                <p className="font-mono text-xs italic text-[var(--paper-ink-muted)]">{file.fictionNotice}</p>
              </footer>
            )}
          </article>

          <div className="mt-8 text-center">
            <Link
              href={filesIndexHref}
              className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent-green)]"
            >
              {t(locale, "fileDetail.back")}
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
