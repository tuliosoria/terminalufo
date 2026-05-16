import type { ReactNode } from "react";
import { articleSchema } from "@/lib/seo/structured-data";
import { getContent } from "@/lib/content/i18n";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/messages";

interface VarginhaViewProps {
  locale: Locale;
  /** The MDX article body, imported by the route component. */
  article: ReactNode;
  /**
   * Whether the article body is in the requested locale. If false, a small
   * notice is shown above the article explaining that the long-form
   * narrative has not yet been translated.
   */
  articleIsInLocale: boolean;
}

const translationPending: Partial<Record<Locale, string>> = {
  "pt-BR":
    "Esta longa reportagem ainda está em tradução. Veja abaixo a versão original em inglês — a linha do tempo e as notas de fontes acima já estão em português.",
  es:
    "Este artículo extenso aún está siendo traducido. Lea a continuación la versión original en inglés — la línea de tiempo y las notas de fuentes anteriores ya están en español."
};

export function VarginhaView({ locale, article, articleIsInLocale }: VarginhaViewProps) {
  const c = getContent(locale);

  return (
    <main className="prose-terminal mx-auto max-w-4xl px-5 py-20 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema()) }}
      />

      {/* Localized timeline */}
      {locale !== defaultLocale && c.varginhaTimeline && (
        <section className="mb-16">
          <ol className="space-y-6 border-l-2 border-terminal-muted/30 pl-6">
            {c.varginhaTimeline.map((entry) => (
              <li key={`${entry.date}-${entry.title}`} className="relative">
                <span className="absolute -left-[calc(1.5rem+5px)] top-2 inline-block h-2 w-2 rounded-full bg-terminal-green" />
                <p className="font-mono text-xs uppercase tracking-wider text-terminal-green">
                  {entry.date}
                </p>
                <h3 className="mb-1 font-heading text-lg text-terminal-text">{entry.title}</h3>
                <p className="text-sm leading-relaxed text-terminal-muted">{entry.body}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {!articleIsInLocale && translationPending[locale] && (
        <aside className="mb-10 rounded border border-terminal-amber/40 bg-terminal-surface p-4 font-mono text-sm text-terminal-amber">
          {translationPending[locale]}
        </aside>
      )}

      {article}

      <section className="mt-16 border-t border-terminal-muted/20 pt-8">
        <h2 className="mb-6 font-heading text-2xl text-terminal-text">{t(locale, "varginha.sourceNotes")}</h2>
        <nav className="space-y-4">
          {c.varginhaSourceNotes.map((note) => (
            <article
              key={note.id}
              className="rounded border border-terminal-muted/20 bg-terminal-surface p-4"
            >
              <h3 className="mb-2 font-mono text-sm font-bold text-terminal-green">
                [{note.id}] {note.title}
              </h3>
              <p className="mb-2 text-sm text-terminal-muted">{note.publisher}</p>
              <p className="mb-2 text-sm text-terminal-muted">{note.summary}</p>
              <p className="mb-2 text-xs italic text-terminal-muted/70">
                {t(locale, "varginha.use")}: {note.use}
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
