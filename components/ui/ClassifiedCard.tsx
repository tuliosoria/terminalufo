interface ClassifiedFile {
  id: string;
  classification: "UNCLASSIFIED" | "CONFIDENTIAL" | "SECRET" | "TOP SECRET";
  type: string;
  source: string;
  title: string;
  redactedTitle?: string;
  summary: string;
  category?: "real" | "fiction";
  fictionNotice?: string;
}

interface ClassifiedCardProps {
  file: ClassifiedFile;
}

export function ClassifiedCard({ file }: ClassifiedCardProps) {
  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "TOP SECRET":
        return "border-[var(--accent-red)] text-[var(--accent-red)]";
      case "SECRET":
        return "border-[var(--accent-amber)] text-[var(--accent-amber)]";
      case "CONFIDENTIAL":
        return "border-[var(--accent-amber)] text-[var(--accent-amber)]";
      default:
        return "border-[var(--accent-green)] text-[var(--accent-green)]";
    }
  };

  const isFiction = file.category === "fiction";
  const displayTitle = file.redactedTitle || file.title;

  return (
    <article className={`rounded border ${isFiction ? 'border-[var(--text-tertiary)] bg-[var(--bg-secondary)]' : 'border-[rgba(255,255,255,0.1)] bg-[var(--bg-surface)]'} p-6 transition hover:border-[rgba(255,255,255,0.2)]`}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
            {file.id}
          </p>
          <div className={`mb-2 inline-block rounded border px-2 py-0.5 font-mono text-xs font-bold uppercase ${getClassificationColor(file.classification)}`}>
            {file.classification}
          </div>
        </div>
      </div>

      <h3 className="mb-2 font-[var(--font-heading)] text-xl font-bold text-[var(--text-primary)]">
        {displayTitle}
      </h3>

      <div className="mb-3 flex gap-4 font-mono text-xs text-[var(--text-secondary)]">
        <span>Type: {file.type}</span>
        <span>Source: {file.source}</span>
      </div>

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
}
