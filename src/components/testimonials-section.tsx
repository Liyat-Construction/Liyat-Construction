/**
 * Testimonials Section
 * Display client testimonials with elegant styling and animations
 */

import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types/content';

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({ title, subtitle, testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) {
    // eslint-disable-next-line unicorn/no-null -- React components should return null for no-render
    return null;
  }

  return (
    <section id="testimonials" className={cn('py-20 md:py-28 lg:py-32', 'bg-white')}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>

          <h2
            className={cn(
              'mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
              'text-brand-primary'
            )}
          >
            {title}
          </h2>

          <p className={cn('mx-auto mt-4 max-w-2xl text-base md:text-lg', 'text-text-muted')}>
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-8',
        'border border-gray-100 bg-white',
        'transition-all duration-500',
        'hover:border-brand-accent/20 hover:shadow-[0_12px_40px_rgba(15,42,68,0.06)]'
      )}
    >
      {/* Quote Icon */}
      <div className="text-brand-accent/20 mb-4 text-4xl">&ldquo;</div>

      {/* Content */}
      <p className={cn('mb-6 text-[15px] leading-relaxed break-words', 'text-text-secondary')}>
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="from-brand-primary to-brand-primary-light relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br">
          <div className="flex h-full w-full items-center justify-center font-semibold text-white">
            {(testimonial.clientName || 'A').charAt(0)}
          </div>
        </div>
        <div>
          <div className={cn('font-semibold', 'text-brand-primary')}>{testimonial.clientName}</div>
          <div className="text-text-muted text-sm">{testimonial.company}</div>
        </div>
      </div>

      {/* Subtle accent */}
      <div className="via-brand-accent/30 absolute top-0 right-8 left-8 h-[2px] bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
}
