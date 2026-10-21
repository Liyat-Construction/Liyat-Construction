import { cn, pick } from '@/lib/utils';
import { Container, type ContainerSize } from './container';

const tones = {
  paper: 'bg-paper text-ink',
  stone: 'bg-stone text-ink',
  tint: 'bg-brand-tint text-ink',
  ink: 'bg-ink text-white',
  brand: 'bg-brand text-white',
} as const satisfies Record<string, string>;

const spacings = {
  default: 'py-section',
  compact: 'py-section-sm',
} as const satisfies Record<string, string>;

export type SectionTone = keyof typeof tones;

interface SectionProps {
  children: React.ReactNode;
  tone?: SectionTone;
  spacing?: keyof typeof spacings;
  container?: ContainerSize;
  id?: string;
  /** id of the section's heading, so the region is announced by name */
  labelledBy?: string;
  className?: string;
}

/** Background, vertical rhythm and text color. Dark tones switch descendants to `on-dark:`. */
export function Section({
  children,
  tone = 'paper',
  spacing = 'default',
  container = 'content',
  id,
  labelledBy,
  className,
}: SectionProps) {
  const dark = tone === 'ink' || tone === 'brand';
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-on-dark={dark || undefined}
      className={cn(pick(tones, tone), pick(spacings, spacing), className)}
    >
      <Container size={container}>{children}</Container>
    </section>
  );
}
