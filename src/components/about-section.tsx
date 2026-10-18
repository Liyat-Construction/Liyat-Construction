/**
 * About Section
 * Philosophy/About with scroll reveal, refined typography, and system visualization
 * Architectural, calm presentation
 */

'use client';

import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { PremiumButton } from '@/components/premium-button';
import { cn } from '@/lib/utils';
import type { AboutSummary } from '@/types/content';

interface AboutSectionProps {
  about: AboutSummary;
}

export function AboutSection({ about }: AboutSectionProps) {
  const { title, summary: shortText, buttonText } = about;

  return (
    <section
      id="about"
      className={cn(
        'relative overflow-hidden py-20 md:py-28 lg:py-32',
        'bg-white',
        'dark:bg-surface-page'
      )}
    >
      {/* Background glow effect matching hero visualization style */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-full w-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle at 70% 50%, color-mix(in srgb, var(--brand-accent) 5%, transparent), transparent 60%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <ScrollReveal>
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                About Us
              </span>
            </ScrollReveal>

            {/* Title */}
            <ScrollReveal delay={0.1}>
              <h2
                className={cn(
                  'mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl',
                  'text-brand-primary',
                  'dark:text-white'
                )}
              >
                {title}
              </h2>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.2}>
              <p
                className={cn(
                  'mt-6 max-w-xl text-base leading-relaxed md:mt-8 md:text-lg lg:text-xl',
                  'text-text-secondary',
                  'dark:text-text-muted'
                )}
              >
                {shortText}
              </p>
            </ScrollReveal>

            {/* CTA Button */}
            <ScrollReveal delay={0.3}>
              <div className="mt-8 md:mt-12">
                <PremiumButton href="/about" variant="primary">
                  {buttonText}
                </PremiumButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
