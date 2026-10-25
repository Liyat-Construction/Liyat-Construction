import type { LegalPage } from '@/types/content';
import { Button } from './button';
import { Card } from './card';
import { Eyebrow } from './eyebrow';
import { Prose } from './prose';
import { SectionHeading } from './section-heading';

interface LegalDocumentProps {
  copy: LegalPage;
  email: string;
}

export function LegalDocument({ copy, email }: LegalDocumentProps) {
  return (
    <div className="lg:gap-grid grid items-start gap-12 lg:grid-cols-12">
      <nav
        aria-label={copy.contentsLabel}
        className="lg:sticky lg:top-(--legal-nav-top) lg:col-span-3 lg:max-h-(--legal-nav-height) lg:overflow-y-auto"
      >
        <div className="flex flex-col gap-5">
          <Eyebrow>{copy.contentsLabel}</Eyebrow>
          <ol className="border-line border-l">
            {copy.sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-small text-ink-muted hover:border-brand hover:text-brand focus-visible:border-brand focus-visible:text-brand ease-standard -ml-px flex min-h-11 items-center gap-3 border-l-2 border-transparent px-4 py-2 transition-colors duration-(--duration-fast)"
                >
                  <span aria-hidden="true" className="text-brand shrink-0 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{section.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
      <div className="min-w-0 lg:col-span-8 lg:col-start-5">
        <div className="divide-line/60 divide-y">
          {copy.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="py-10 first:pt-0 last:pb-0 md:py-12"
            >
              <div className="mb-5 flex flex-col gap-3">
                <Eyebrow>{`${copy.sectionLabel} ${String(index + 1).padStart(2, '0')}`}</Eyebrow>
                <h2 id={`${section.id}-title`} className="text-h3 text-ink text-balance">
                  {section.title}
                </h2>
              </div>
              <Prose>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && section.items.length > 0 && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Prose>
            </section>
          ))}
        </div>
        <aside className="mt-12">
          <Card>
            <div className="flex flex-col gap-6">
              <SectionHeading as="h2" size="h3" {...copy.questions} />
              <div className="flex flex-wrap gap-3">
                <Button href={`mailto:${email}`} icon="mail">
                  {copy.questions.emailLabel}
                </Button>
                <Button href={copy.contact.href} variant="secondary">
                  {copy.contact.label}
                </Button>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
