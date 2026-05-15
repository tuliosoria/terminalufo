import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="mx-auto max-w-5xl">
        {eyebrow && (
          <p className="mb-2 font-mono text-sm uppercase tracking-wider text-[var(--accent-green)]">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mb-8 font-[var(--font-heading)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
