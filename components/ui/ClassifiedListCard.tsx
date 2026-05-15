import Link from "next/link";
import type { ClassifiedFile } from "@/lib/content/types";

interface ClassifiedListCardProps {
  file: ClassifiedFile;
  href: string;
}

function classificationColor(classification: ClassifiedFile["classification"]): string {
  switch (classification) {
    case "TOP SECRET":
    case "REDACTED":
      return "border-[var(--accent-red)] text-[var(--accent-red)]";
    case "EYES ONLY":
    case "LEAKED":
    case "INTERCEPTED":
      return "border-[var(--accent-amber)] text-[var(--accent-amber)]";
    case "ANONYMOUS SOURCE":
      return "border-[var(--text-secondary)] text-[var(--text-secondary)]";
    default:
      return "border-[var(--accent-green)] text-[var(--accent-green)]";
  }
}

export function ClassifiedListCard({ file, href }: ClassifiedListCardProps) {
  const displayTitle = file.redactedTitle || file.title;

  return (
    <Link
      href={href}
      className="group block h-full rounded border border-[var(--text-tertiary)] bg-[var(--bg-secondary)] p-5 transition hover:border-[var(--accent-green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)]"
    >
      <article className="flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
            {file.id}
          </p>
          <span
            className={`rounded border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${classificationColor(
              file.classification
            )}`}
          >
            {file.classification}
          </span>
        </div>

        <h3 className="mb-3 flex-1 font-[var(--font-heading)] text-base leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent-green)]">
          {displayTitle}
        </h3>

        <div className="flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
          <span>{file.type}{file.date ? ` · ${file.date}` : ""}</span>
          <span aria-hidden="true">→</span>
        </div>
      </article>
    </Link>
  );
}
