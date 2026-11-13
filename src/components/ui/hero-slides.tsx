'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

interface HeroSlidesProps {
  /** Names the slider for screen readers */
  label: string;
  /** Full-bleed layers (Backdrop) in order, each with a unique key; the first is the page's LCP image */
  slides: { key: string; content: React.ReactNode }[];
  /** Rendered by the server Hero and passed in, so the icon code stays out of the client bundle */
  pauseIcon: React.ReactNode;
  playIcon: React.ReactNode;
}

/** How long each photo stays; --animate-progress in tokens.css matches it */
const SLIDE_MS = 7000;
/** After the page has loaded, wait this long before fetching the second photo */
const LOAD_DELAY_MS = 500;
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

/**
 * The home hero's photos, one after another (D-145). Only the first is in the page's HTML;
 * each later photo is fetched one slide ahead, after the page has loaded, and the slider
 * never fades to a photo that hasn't arrived. Photos cross-fade slowly while the one on
 * screen zooms in very slightly (opacity and transform only). Centred indicators show the
 * time left and jump to a photo; the pause button freezes everything (WCAG 2.2.2). With
 * reduced motion nothing moves until the visitor presses play, and then without fade or zoom.
 */
export function HeroSlides({ label, slides, pauseIcon, playIcon }: HeroSlidesProps) {
  const region = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  /** The photo fading out: it keeps its zoom until it is gone */
  const [previous, setPrevious] = useState<number | undefined>();
  /** The highest slide mounted so far, one ahead of the photo on screen */
  const [reach, setReach] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [choice, setChoice] = useState<'auto' | 'play' | 'pause'>('auto');
  const reduced = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );
  const playing = loaded && (choice === 'play' || (choice === 'auto' && !reduced));
  const count = slides.length;

  const go = (index: number) => {
    setPrevious(active);
    setActive(index);
    setReach((current) => Math.max(current, Math.min(index + 1, count - 1)));
  };

  useEffect(() => {
    let timer: number | undefined;
    const start = () => {
      timer = window.setTimeout(() => {
        setLoaded(true);
        setReach((current) => Math.max(current, 1));
      }, LOAD_DELAY_MS);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      window.clearTimeout(timer);
    };
  }, []);

  // A new timer for every photo, so a jump with the indicators gets its full time
  useEffect(() => {
    if (!playing) return;
    const next = (active + 1) % count;
    let image: HTMLImageElement | null | undefined;
    const advance = () => {
      setPrevious(active);
      setActive(next);
      setReach((current) => Math.max(current, Math.min(next + 1, count - 1)));
    };
    const timer = window.setTimeout(() => {
      image = region.current
        ?.querySelectorAll('[aria-roledescription="slide"]')
        .item(next)
        ?.querySelector('img');
      // Wait for a photo that is still on its way instead of fading to an empty frame
      if (image && !image.complete) image.addEventListener('load', advance, { once: true });
      else advance();
    }, SLIDE_MS);
    return () => {
      window.clearTimeout(timer);
      image?.removeEventListener('load', advance);
    };
  }, [playing, active, count]);

  // Frozen while paused, and before the page has loaded
  const motion = playing ? '' : '[animation-play-state:paused]';

  return (
    <div
      ref={region}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="absolute inset-0 overflow-hidden"
    >
      {slides.map((slide, index) => {
        const current = index === active;
        if (index > reach && !current) return;
        return (
          <div
            key={slide.key}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
            aria-hidden={!current}
            className={`absolute inset-0 transition-opacity duration-(--duration-slide) ease-in-out ${current ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* The zoom restarts each time the photo comes back; it ends unseen, after the fade */}
            <div
              className={`absolute inset-0 ${current || index === previous ? `animate-zoom ${motion}` : ''}`}
            >
              {slide.content}
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="bg-ink/45 flex items-center rounded-full px-3 backdrop-blur-sm">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Show photo ${index + 1} of ${count}`}
              aria-current={index === active}
              className="group inline-flex h-11 items-center px-1.5"
              onClick={() => {
                setLoaded(true);
                if (index !== active) go(index);
              }}
            >
              <span
                className={`ease-standard relative h-1 overflow-hidden rounded-full transition-all duration-(--duration-base) ${index === active ? 'w-12 bg-white/35' : 'w-4 bg-white/60 group-hover:bg-white'}`}
              >
                {index === active && (
                  <span
                    // A new element for each photo, so the fill starts again from empty
                    key={active}
                    className={`animate-progress bg-brand-light absolute inset-0 origin-left rounded-full ${motion}`}
                  />
                )}
              </span>
            </button>
          ))}
          <button
            type="button"
            className="group ml-1 inline-flex size-11 items-center justify-center border-l border-white/25 text-white"
            onClick={() => setChoice(playing ? 'pause' : 'play')}
          >
            <span className="ease-standard inline-flex size-7 items-center justify-center rounded-full transition-colors duration-(--duration-fast) group-hover:bg-white/20">
              {playing ? pauseIcon : playIcon}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
