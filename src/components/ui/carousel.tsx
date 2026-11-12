'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn, pick } from '@/lib/utils';
import { Icon } from './icon';

/*
 * all: a carousel at every width: 1 per view on phones (the next one peeking in), 2, then 3.
 * Phone-only (D-146, D-148): a swipe row below sm, a plain grid from sm, where the arrows go:
 * photos: 3 columns (the Equipment photos, 3 rows of 3);
 * cards: stacked on tablets, 3 columns from lg (the testimonials).
 */
const layouts = {
  all: 'sm:auto-cols-(--carousel-slide-2) lg:auto-cols-(--carousel-slide-3)',
  photos: 'sm:snap-none sm:grid-flow-row sm:grid-cols-3 sm:overflow-visible',
  cards: 'sm:snap-none sm:grid-flow-row sm:grid-cols-1 lg:grid-cols-3 sm:overflow-visible',
} as const satisfies Record<string, string>;

interface CarouselProps {
  /** Names the carousel for screen readers, e.g. "Photos from our work" */
  label: string;
  /** One element per slide */
  slides: { key: string; content: React.ReactNode }[];
  /** At every width, or a swipe row on phones only that becomes a grid from sm */
  layout?: keyof typeof layouts;
  /** Read out on the arrows: "Previous photos", "Next photos" */
  itemName?: string;
}

/**
 * A row of slides that scrolls sideways: 1 (with the next one peeking in), 2 or 3 per view.
 * Swipe or scroll on any device; the arrow buttons move one view at a time. Without
 * JavaScript it is still a working scroll row.
 */
export function Carousel({ label, slides, layout = 'all', itemName = 'photos' }: CarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // 1 px of slack: scroll positions can be fractional
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
  };

  const arrow =
    'inline-flex size-11 items-center justify-center rounded-full border border-brand text-brand ' +
    'duration-(--duration-fast) ease-standard transition-colors hover:bg-brand-tint ' +
    'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="flex flex-col gap-6"
    >
      <ul
        ref={track}
        onScroll={update}
        tabIndex={0}
        className={cn(
          'gap-grid grid snap-x snap-mandatory grid-flow-col overflow-x-auto overscroll-x-contain',
          'rounded-card [scrollbar-width:none] auto-cols-(--carousel-slide-1)',
          pick(layouts, layout)
        )}
      >
        {slides.map((slide, i) => (
          <li
            key={slide.key}
            className="snap-start"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {slide.content}
          </li>
        ))}
      </ul>
      <div className={cn('flex justify-center gap-3', layout !== 'all' && 'sm:hidden')}>
        <button type="button" className={arrow} onClick={() => move(-1)} disabled={atStart}>
          <Icon name="chevron-left" label={`Previous ${itemName}`} />
        </button>
        <button type="button" className={arrow} onClick={() => move(1)} disabled={atEnd}>
          <Icon name="chevron-right" label={`Next ${itemName}`} />
        </button>
      </div>
    </div>
  );
}
