import { cn, pick } from '@/lib/utils';

/*
 * An Ink fade over the edge of a photograph, so the photo melts into an Ink
 * surface instead of meeting it at a hard line, and white text or links over
 * that edge stay readable (owner decision; a functional exception to "no
 * decorative gradients", Brand §7). The curve is eased (tokens `--fade-*`) so
 * no line shows where it starts or ends. Left and bottom start 1 px outside the
 * photo: its edge can fall on a fractional pixel and show as a seam.
 */
const edges = {
  /** Under the see-through header: about 0.8 Ink at the link row, enough for white links over white cloud */
  top: 'inset-x-0 top-0 h-64 bg-(image:--fade-to-bottom) opacity-90',
  /** Where the photo meets an Ink panel on its left (split hero, from lg) */
  left: 'inset-y-0 -left-px w-1/2 bg-(image:--fade-to-right)',
  /** Where the photo meets the Ink text block below it (stacked layouts) */
  bottom: 'inset-x-0 -bottom-px h-1/2 bg-(image:--fade-to-top)',
} as const satisfies Record<string, string>;

// The fade's color matches the surface it melts into (tokens use currentColor)
const tones = {
  ink: 'text-ink',
  brand: 'text-brand',
} as const satisfies Record<string, string>;

interface FadeProps {
  edge: keyof typeof edges;
  tone?: keyof typeof tones;
  /** Layout only, e.g. hiding a fade at some widths */
  className?: string;
}

/** Place inside the positioned box that holds the photo. Decorative. */
export function Fade({ edge, tone = 'ink', className }: FadeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute',
        pick(edges, edge),
        pick(tones, tone),
        className
      )}
    />
  );
}
