import type { Action, ImageAsset } from '@/types/content';
import { Backdrop } from '@/components/ui/backdrop';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface HeroProps {
  title: string;
  lead: string;
  image: ImageAsset;
  /** Where and what the photo shows, in the corner */
  caption: string;
  primary: Action;
  secondary: Action;
}

/**
 * The home hero (D-81, was option A): one site photograph fills the whole first
 * screen, under the see-through header (`data-header-overlay`, pulled up by the
 * header's height). From md (tablets and up) the headline is centred high over
 * the calm part of the frame (the mountains) with the fleet below it; on phones
 * it is centred vertically, so it stays in view on every screen height (D-98).
 * The crop is anchored upper-left so the rig stays in view. Text is full white
 * (`data-on-photo`): the lead at white/80 fell to 4.35 : 1 over the sand from lg (P15).
 */
export function Hero({ title, lead, image, caption, primary, secondary }: HeroProps) {
  return (
    <div data-header-overlay data-on-photo className="-mt-(--header-total)">
      <Section
        tone="ink"
        spacing="none"
        container="none"
        labelledBy="hero-title"
        className="relative flex min-h-svh max-md:items-center"
      >
        <Backdrop image={image} caption={caption} />
        <Container className="relative flex flex-col items-center gap-8 pt-(--header-total) pb-16 lg:pb-24">
          <div className="flex flex-col items-center gap-8 md:pt-16">
            <SectionHeading
              as="h1"
              size="display"
              align="center"
              id="hero-title"
              title={title}
              intro={lead}
            />
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              <Button href={secondary.href} size="lg" variant="secondary">
                {secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
