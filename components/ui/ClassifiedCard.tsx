import type { ClassifiedFile } from "@/lib/content/types";

interface ClassifiedCardProps {
  file: ClassifiedFile;
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

export function ClassifiedCard({ file }: ClassifiedCardProps) {
  const isFiction = file.category === "fiction";
  const displayTitle = file.redactedTitle || file.title;

  const body = (
    <article
      className={`flex h-full flex-col rounded border ${
        isFiction
          ? "border-[var(--text-tertiary)] bg-[var(--bg-secondary)]"
          : "border-[rgba(255,255,255,0.1)] bg-[var(--bg-surface)]"
      } p-6 transition hover:border-[rgba(255,255,255,0.2)]`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
            {file.id}
          </p>
          <div
            className={`mb-2 inline-block rounded border px-2 py-0.5 font-mono text-xs font-bold uppercase ${classificationColor(
              file.classification
            )}`}
          >
            {file.classification}
          </div>
        </div>
      </div>

      <h3 className="mb-3 font-[var(--font-heading)] text-lg font-bold leading-snug text-[var(--text-primary)]">
        {displayTitle}
      </h3>

      <dl className="mb-4 grid grid-cols-1 gap-1 font-mono text-xs text-[var(--text-secondary)] sm:grid-cols-2">
        <div>
          <dt className="inline text-[var(--text-tertiary)]">Type: </dt>
          <dd className="inline">{file.type}</dd>
        </div>
        {file.date && (
          <div>
            <dt className="inline text-[var(--text-tertiary)]">Date: </dt>
            <dd className="inline">{file.date}</dd>
          </div>
        )}
        <div className="sm:col-span-2">
          <dt className="inline text-[var(--text-tertiary)]">Source: </dt>
          <dd className="inline">{file.source}</dd>
        </div>
      </dl>

      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        {file.summary}
      </p>

      {isFiction && file.fictionNotice && (
        <div className="mt-4 border-t border-[var(--text-tertiary)] pt-3">
          <p className="font-mono text-xs italic text-[var(--text-tertiary)]">
            {file.fictionNotice}
          </p>
        </div>
      )}
    </article>
  );

  if (file.href) {
    const external = file.href.startsWith("http");
    return (
      <a
        href={file.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)]"
      >
        {body}
      </a>
    );
  }

  return body;
}
