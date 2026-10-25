import { cn, pick } from '@/lib/utils';
import { Eyebrow, type Align, type EyebrowTone } from './eyebrow';

const aligns = {
  start: 'items-start text-left',
  center: 'mx-auto items-center text-center',
} as const satisfies Record<Align, string>;

const titleSizes = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
} as const satisfies Record<string, string>;

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  eyebrowTone?: EyebrowTone;
  intro?: string;
  align?: Align;
  as?: 'h1' | 'h2' | 'h3';
  /** Defaults to the size of the `as` level; `display` is the home hero only */
  size?: keyof typeof titleSizes;
  /** Pass the same id to Section `labelledBy` */
  id?: string;
  className?: string;
}

/** Rule + eyebrow + title + intro — the one way every section starts. */
export function SectionHeading({
  title,
  eyebrow,
  eyebrowTone = 'default',
  intro,
  align = 'start',
  as: Heading = 'h2',
  size = Heading,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-3xl flex-col gap-4', pick(aligns, align), className)}>
      {eyebrow && (
        <Eyebrow align={align} tone={eyebrowTone}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading id={id} className={cn('text-balance', pick(titleSizes, size))}>
        {title}
      </Heading>
      {intro && (
        <p className="text-lead text-ink-muted on-dark:text-white/80 on-photo:text-white max-w-prose">
          {intro}
        </p>
      )}
    </div>
  );
}
