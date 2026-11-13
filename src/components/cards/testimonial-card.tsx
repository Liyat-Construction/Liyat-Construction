import type { Testimonial } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Rule } from '@/components/ui/rule';

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** card: a small card in a grid; feature: one large quote with the speaker beside it (T10) */
  variant?: 'card' | 'feature';
  className?: string;
}

/** The first letters of the first two words of a name, e.g. "Name Surname" → "NS". */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

/** A client quote with the name, role and organization of the person who gave it. */
export function TestimonialCard({
  testimonial,
  variant = 'card',
  className,
}: TestimonialCardProps) {
  if (variant === 'feature') {
    return (
      <Card as="figure" padding="xl" className={className}>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-12">
          <figcaption className="border-line flex flex-col items-start gap-3 md:border-r md:pr-12">
            <span
              aria-hidden="true"
              className="bg-brand-tint text-brand font-heading text-h4 flex size-16 items-center justify-center rounded-full"
            >
              {initials(testimonial.name)}
            </span>
            <span className="text-h4 font-heading text-brand">{testimonial.name}</span>
            <span className="text-small text-ink-muted">
              {testimonial.role}, {testimonial.organization}
            </span>
          </figcaption>
          <div className="flex flex-col justify-center md:col-span-2">
            <Rule />
            <blockquote className="text-h3 md:text-h2 font-heading my-6">
              <p>“{testimonial.quote}”</p>
            </blockquote>
          </div>
        </div>
      </Card>
    );
  }
  return (
    <Card as="figure" padding="lg" className={className}>
      <Rule />
      <blockquote className="text-lead my-6">
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="border-line mt-auto flex flex-col gap-0.5 border-t pt-5">
        <span className="font-semibold">{testimonial.name}</span>
        <span className="text-small text-ink-muted">
          {testimonial.role}, {testimonial.organization}
        </span>
      </figcaption>
    </Card>
  );
}
