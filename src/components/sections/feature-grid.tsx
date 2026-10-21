import type { Feature, SectionCopy } from '@/types/content';
import { FeatureCard } from '@/components/cards/feature-card';
import type { IconName } from '@/components/ui/icon';
import { Section, type SectionTone } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn, pick } from '@/lib/utils';

const columns = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const satisfies Record<number, string>;

interface FeatureGridProps extends SectionCopy {
  items: Feature[];
  /** The same icon on every card, e.g. `document` for deliverables */
  icon?: IconName;
  columns?: keyof typeof columns;
  tone?: SectionTone;
  id: string;
}

/** A heading and a grid of FeatureCards. Renders nothing when empty. */
export function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  icon,
  columns: count = 3,
  tone = 'paper',
  id,
}: FeatureGridProps) {
  if (items.length === 0) return;
  return (
    <Section tone={tone} labelledBy={`${id}-title`}>
      <div className="flex flex-col gap-12">
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} intro={intro} />
        <ul className={cn('gap-grid grid', pick(columns, count))}>
          {items.map((item) => (
            <FeatureCard key={item.title} as="li" feature={item} icon={icon} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
