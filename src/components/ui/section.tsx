import { cn, pick } from '@/lib/utils';
import { Container, type ContainerSize } from './container';

const tones = {
  paper: 'bg-paper text-ink',
  ink: 'bg-ink text-white',
} as const satisfies Record<string, string>;

const spacings = {
  default: 'py-section',
  /** Between compact and default — the inner-page header band (D-115) */
  medium: 'py-section-md',
  compact: 'py-section-sm',
  /** Full-bleed layouts (the hero) that set their own padding */
  none: '',
} as const satisfies Record<string, string>;

export type SectionTone = keyof typeof tones;

interface SectionProps {
  children: React.ReactNode;
  tone?: SectionTone;
  spacing?: keyof typeof spacings;
  /** `grid`: the drawing grid on plain Ink (D-71). Never over a photo */
  pattern?: 'none' | 'grid';
  /** The green signature rule along the top edge, where a dark block starts */
  rule?: boolean;
  /** `none` renders the children edge to edge, without a Container */
  container?: ContainerSize | 'none';
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
  pattern = 'none',
  rule = false,
  container = 'content',
  id,
  labelledBy,
  className,
}: SectionProps) {
  const dark = tone === 'ink';
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-on-dark={dark || undefined}
      className={cn(
        pick(tones, tone),
        pick(spacings, spacing),
        pattern === 'grid' && 'relative isolate',
        rule && 'border-brand border-t-(length:--rule-width)',
        className
      )}
    >
      {pattern === 'grid' && (
        <div
          aria-hidden="true"
          className="pattern-grid pointer-events-none absolute inset-0 -z-10"
        />
      )}
      {container === 'none' ? children : <Container size={container}>{children}</Container>}
    </section>
  );
}
