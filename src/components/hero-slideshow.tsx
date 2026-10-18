/**
 * Hero Slideshow
 * Full-bleed background photos that cross-fade every 5 seconds with a slow zoom.
 * A brand overlay keeps hero text readable. Reduced motion shows the first slide only.
 */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ImageAsset } from '@/types/content';

const INTERVAL_MS = 5000;

export function HeroSlideshow({ slides }: { slides: ImageAsset[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || slides.length < 2) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [shouldReduceMotion, slides.length, active]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.url}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === active ? 1 : 0,
            scale: index === active && !shouldReduceMotion ? 1 : 1.08,
          }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale: { duration: index === active ? 6 : 1.2, ease: 'easeOut' },
          }}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      <div className="from-brand-primary-dark/95 via-brand-primary-dark/70 absolute inset-0 bg-gradient-to-r to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.url}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}: ${slide.alt}`}
              aria-current={index === active}
              className={cn(
                'h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none',
                index === active ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
