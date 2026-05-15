import { Section } from "@/components/ui/Section";
import { pressSummary, pressFacts, contactEmail } from "@/lib/content/press";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Press Kit — Terminal UFO",
  description:
    "Press summary, facts, contact details, and downloadable one-pager for Terminal UFO and Terminal Varginha.",
  path: "/press"
});

export default function PressPage() {
  return (
    <main>
      <Section eyebrow="Media" title="Press Kit">
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 leading-relaxed text-terminal-muted">
            {pressSummary}
          </p>

          <div className="mb-12 rounded border border-terminal-muted/20 bg-terminal-surface p-8">
            <h2 className="mb-6 font-heading text-2xl text-terminal-text">Key Facts</h2>
            <dl className="space-y-4">
              {pressFacts.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 md:flex-row md:gap-4">
                  <dt className="min-w-[140px] font-mono text-sm font-bold uppercase tracking-wider text-terminal-green">
                    {label}
                  </dt>
                  <dd className="text-sm text-terminal-muted">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 font-heading text-2xl text-terminal-text">Downloads</h2>
            <div className="space-y-4">
              <a 
                href="/assets/press/terminal-ufo-one-pager.txt"
                download
                className="flex items-center justify-between rounded border border-terminal-green bg-terminal-surface p-4 font-mono text-sm text-terminal-green transition hover:bg-terminal-green hover:bg-opacity-10"
              >
                <span>terminal-ufo-one-pager.txt</span>
                <span>↓ Download</span>
              </a>
            </div>
          </div>

          <div id="contact" className="rounded border border-terminal-muted/20 bg-terminal-surface p-8">
            <h2 className="mb-4 font-heading text-2xl text-terminal-text">Contact</h2>
            <p className="mb-4 text-sm text-terminal-muted">
              For press inquiries, interviews, or access requests:
            </p>
            <a 
              href={`mailto:${contactEmail}`}
              className="font-mono text-terminal-green hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
