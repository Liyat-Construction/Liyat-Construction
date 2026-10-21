import type { Testimonial } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Rule } from '@/components/ui/rule';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/** A client quote with the name, role and organization of the person who gave it. */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
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
