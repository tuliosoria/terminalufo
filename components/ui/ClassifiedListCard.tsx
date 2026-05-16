import Link from "next/link";
import type { ClassifiedFile } from "@/lib/content/types";

interface ClassifiedListCardProps {
  file: ClassifiedFile;
  href: string;
  /** Custom CTA text (defaults to English). Pass a localized string. */
  openLabel?: string;
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

export function ClassifiedListCard({ file, href, openLabel = "Open full file →" }: ClassifiedListCardProps) {
  const displayTitle = file.redactedTitle || file.title;
  const tone = stampTone(file.classification);

  return (
    <Link
      href={href}
      className="group block h-full focus:outline-none"
      aria-label={`Open file ${file.id}: ${displayTitle}`}
    >
      <article className="paper-card flex h-full flex-col gap-5 p-7 sm:p-8 transition group-hover:-translate-y-0.5 group-hover:shadow-2xl">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--paper-ink-muted)]">
              File no.
            </p>
            <p className="font-mono text-base font-bold uppercase tracking-wider text-[var(--paper-ink)]">
              {file.id}
            </p>
          </div>
          <span className="paper-stamp text-xs sm:text-sm" data-tone={tone}>
            {file.classification}
          </span>
        </header>

        <h3 className="font-[var(--font-heading)] text-2xl leading-snug text-[var(--paper-ink)] sm:text-[1.65rem]">
          {displayTitle}
        </h3>

        <dl className="grid grid-cols-1 gap-2 font-mono text-sm text-[var(--paper-ink-muted)] sm:grid-cols-2">
          <div>
            <dt className="inline font-bold uppercase tracking-wider">Type: </dt>
            <dd className="inline">{file.type}</dd>
          </div>
          {file.date && (
            <div>
              <dt className="inline font-bold uppercase tracking-wider">Date: </dt>
              <dd className="inline">{file.date}</dd>
            </div>
          )}
          <div className="sm:col-span-2">
            <dt className="inline font-bold uppercase tracking-wider">Source: </dt>
            <dd className="inline">{file.source}</dd>
          </div>
        </dl>

        <p className="paper-rule pt-4 text-[1.05rem] leading-relaxed text-[var(--paper-ink)]">
          {file.summary}
        </p>

        {file.fictionNotice && (
          <p className="paper-rule pt-3 font-mono text-xs italic text-[var(--paper-ink-muted)]">
            {file.fictionNotice}
          </p>
        )}

        <p className="mt-auto pt-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--paper-ink-muted)] transition group-hover:text-[var(--paper-ink)]">
          {openLabel}
        </p>
      </article>
    </Link>
  );
}
