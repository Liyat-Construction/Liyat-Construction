import type { Action, SectionCopy, Spec } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
import { Button } from '@/components/ui/button';
import { FactsTable } from '@/components/ui/facts-table';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Statement } from '@/components/ui/statement';

interface StoryProps extends SectionCopy {
  id: string;
  paragraphs: string[];
  /** Key facts beside the text, e.g. "Company at a glance"; hidden when there are no rows */
  facts?: { title: string; rows: Spec[] };
  /** A short company statement beside the text */
  statement?: string;
  action?: Action;
}

/** Running text beside an optional facts card or statement, with an optional button. */
export function Story({
  id,
  eyebrow,
  title,
  intro,
  paragraphs,
  facts,
  statement,
  action,
}: StoryProps) {
  const showFacts = facts !== undefined && facts.rows.length > 0;
  return (
    <Section labelledBy={`${id}-title`}>
      <div className="gap-grid grid items-start max-lg:gap-y-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
          <Prose>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
          {action && (
            <Button href={action.href} icon="arrow" className="mt-2 self-start">
              {action.label}
            </Button>
          )}
        </div>
        {(showFacts || statement) && (
          <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
            {showFacts && (
              <FeatureCard feature={{ title: facts.title }}>
                <FactsTable rows={facts.rows} />
              </FeatureCard>
            )}
            {statement && <Statement>{statement}</Statement>}
          </div>
        )}
      </div>
    </Section>
  );
}
