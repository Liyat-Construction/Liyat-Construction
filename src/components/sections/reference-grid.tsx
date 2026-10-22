import type { Reference, SectionCopy } from '@/types/content';
import { ReferenceCard } from '@/components/cards/reference-card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface ReferenceGridProps extends SectionCopy {
  id: string;
  references: Reference[];
}

/** Reference and completion letters as cards. Renders nothing while there are none (C-13). */
export function ReferenceGrid({ id, eyebrow, title, intro, references }: ReferenceGridProps) {
  if (references.length === 0) return;
  return (
    <Section labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <SectionHeading
          id={`${id}-title`}
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        <ul className="gap-grid grid sm:grid-cols-2 lg:grid-cols-4">
          {references.map((reference) => (
            <li key={reference.organization} className="flex flex-col">
              <ReferenceCard reference={reference} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
