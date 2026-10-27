import type { Action, ImageAsset, SectionCopy, Spec } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
import { Button } from '@/components/ui/button';
import { FactsTable } from '@/components/ui/facts-table';
import { Photo } from '@/components/ui/photo';
import { Prose } from '@/components/ui/prose';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

interface StoryProps extends SectionCopy {
  /** Anchor of the section (e.g. `/#about`); its heading gets `${id}-title` */
  id: string;
  paragraphs: string[];
  /** Key facts beside the text, e.g. "Company at a glance"; hidden when there are no rows */
  facts?: { title: string; rows: Spec[] };
  /** A landscape photo beside the text (home About, D-61) */
  image?: ImageAsset;
  action?: Action;
  spacing?: 'default' | 'compact';
}

/** Running text beside an optional photo or facts card, with an optional button. */
export function Story({
  id,
  eyebrow,
  title,
  intro,
  paragraphs,
  facts,
  image,
  action,
  spacing = 'default',
}: StoryProps) {
  const showFacts = facts !== undefined && facts.rows.length > 0;
  return (
    <Section id={id} labelledBy={`${id}-title`} spacing={spacing}>
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
        {!image && showFacts && (
          <FeatureCard feature={{ title: facts.title }} className="lg:col-span-4 lg:col-start-9">
            <FactsTable rows={facts.rows} />
          </FeatureCard>
        )}
      </div>
    </Section>
  );
}
