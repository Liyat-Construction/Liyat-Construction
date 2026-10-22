import type { Action, ImageAsset, SectionCopy, Spec, Stat as StatData } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
import { Button } from '@/components/ui/button';
import { FactsTable } from '@/components/ui/facts-table';
import { Photo } from '@/components/ui/photo';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stat } from '@/components/ui/stat';
import { Statement } from '@/components/ui/statement';
import { cn } from '@/lib/utils';

interface StoryProps extends SectionCopy {
  /** Anchor of the section (e.g. `/#about`); its heading gets `${id}-title` */
  id: string;
  paragraphs: string[];
  /** Key facts beside the text, e.g. "Company at a glance"; hidden when there are no rows */
  facts?: { title: string; rows: Spec[] };
  /** A short company statement beside the text */
  statement?: string;
  /** A landscape photo beside the text (home About, D-61) */
  image?: ImageAsset;
  /** Key figures under the text; hidden when empty */
  figures?: StatData[];
  action?: Action;
}

/** Running text beside an optional photo, facts card or statement, with optional figures and a button. */
export function Story({
  id,
  eyebrow,
  title,
  intro,
  paragraphs,
  facts,
  statement,
  image,
  figures = [],
  action,
}: StoryProps) {
  const showFacts = facts !== undefined && facts.rows.length > 0;
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div
        className={cn(
          'gap-grid grid max-lg:gap-y-12 lg:grid-cols-12',
          image ? 'items-center' : 'items-start'
        )}
      >
        <div className="flex flex-col gap-6 lg:col-span-7">
          <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
          <Prose>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
          {figures.length > 0 && (
            <dl className="gap-grid mt-2 grid grid-cols-2 sm:grid-cols-3">
              {figures.map((figure) => (
                <Stat
                  key={figure.label}
                  value={figure.value}
                  unit={figure.unit}
                  label={figure.label}
                  tone={figure.water ? 'water' : 'ink'}
                />
              ))}
            </dl>
          )}
          {action && (
            <Button href={action.href} icon="arrow" className="mt-2 self-start">
              {action.label}
            </Button>
          )}
        </div>
        {image && (
          <Photo
            image={image}
            ratio="card"
            width="half"
            rounded
            className="lg:col-span-5 lg:col-start-8"
          />
        )}
        {!image && (showFacts || statement) && (
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
