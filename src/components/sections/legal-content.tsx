import { Button } from '@/components/ui/button';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import type { LegalPage } from '@/types/content';

export function LegalContent({ copy }: { copy: LegalPage }) {
  return (
    <Section container="prose">
      <div className="flex flex-col gap-8">
        <Prose>
          <p>
            <strong>{copy.notice}</strong>
          </p>
          <p>{copy.updated}</p>
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </Prose>
        <div>
          <Button href={copy.contact.href}>{copy.contact.label}</Button>
        </div>
      </div>
    </Section>
  );
}
