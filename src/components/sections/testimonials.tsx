import type { SectionCopy, Testimonial } from '@/types/content';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface TestimonialsProps extends SectionCopy {
  testimonials: Testimonial[];
  /** Anchor for the navigation (`/#testimonials`) */
  id?: string;
}

/**
 * Client quotes in a grid. Renders nothing when there are none (C-12: only approved
 * quotes). The clients row lives under the projects (ClientList in FeaturedProjects).
 */
export function Testimonials({ id, eyebrow, title, intro, testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) return;
  return (
    <Section id={id} labelledBy="testimonials-title">
      <div className="flex flex-col gap-12">
        <SectionHeading
          id="testimonials-title"
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        <ul className="gap-grid grid lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.quote}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
