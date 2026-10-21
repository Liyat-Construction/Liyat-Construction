import { cn, pick } from '@/lib/utils';
import { Eyebrow, type Align } from './eyebrow';
import { Rule } from './rule';

const aligns = {
  start: 'items-start text-left',
  center: 'items-center text-center',
} as const satisfies Record<Align, string>;

const titleSizes = {
  h1: 'text-h1',
  h2: 'text-h2',
} as const satisfies Record<string, string>;

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  intro?: string;
  align?: Align;
  as?: keyof typeof titleSizes;
  /** Pass the same id to Section `labelledBy` */
  id?: string;
  className?: string;
}

/** Rule + eyebrow + title + intro — the one way every section starts. */
export function SectionHeading({
  title,
  eyebrow,
  intro,
  align = 'start',
  as: Heading = 'h2',
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-3xl flex-col gap-4', pick(aligns, align), className)}>
      {eyebrow ? <Eyebrow align={align}>{eyebrow}</Eyebrow> : <Rule />}
      <Heading id={id} className={cn('text-balance', pick(titleSizes, Heading))}>
        {title}
      </Heading>
      {intro && (
        <p className="text-lead text-ink-muted on-dark:text-white/80 max-w-prose">{intro}</p>
      )}
    </div>
  );
}
