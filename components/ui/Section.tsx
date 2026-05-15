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
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 md:px-8 ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-ui text-xs uppercase tracking-[0.35em] text-terminal-green">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="mb-8 font-heading text-3xl text-terminal-text md:text-5xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
