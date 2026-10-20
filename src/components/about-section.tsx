/**
 * About Section
 * Philosophy/About with scroll reveal, refined typography, and system visualization
 * Architectural, calm presentation
 */

import { Container } from '@/components/container';
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
      className={cn('relative overflow-hidden py-20 md:py-28 lg:py-32', 'bg-white')}
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>

            {/* Title */}
            <h2
              className={cn(
                'mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl',
                'text-brand-primary'
              )}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className={cn(
                'mt-6 max-w-xl text-base leading-relaxed md:mt-8 md:text-lg lg:text-xl',
                'text-text-secondary'
              )}
            >
              {shortText}
            </p>

            {/* CTA Button */}
            <div className="mt-8 md:mt-12">
              <PremiumButton href="/about" variant="primary">
                {buttonText}
              </PremiumButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
