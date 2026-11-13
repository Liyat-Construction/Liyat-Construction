import type { SectionCopy, Testimonial } from '@/types/content';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { Carousel } from '@/components/ui/carousel';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface TestimonialsProps extends SectionCopy {
  testimonials: Testimonial[];
  /** Anchor for the navigation (`/#testimonials`) */
  id?: string;
}

/**
 * Client quotes: one large quote at a time at every width, with a strip of names from sm and a
 * counter (T10). Manual only, no autoplay; every quote is in the HTML, in full (no word limit;
 * the row is as tall as the longest quote). Renders nothing when there are none (C-12: only approved quotes).
 * The clients row lives under the projects (ClientList in FeaturedProjects).
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
        <Carousel
          label={title}
          layout="single"
          itemName="quotes"
          tabs={testimonials.map((testimonial) => ({
            title: testimonial.name,
            caption: testimonial.organization,
          }))}
          slides={testimonials.map((testimonial) => ({
            key: testimonial.quote,
            content: <TestimonialCard testimonial={testimonial} variant="feature" />,
          }))}
        />
      </div>
    </Section>
  );
}
