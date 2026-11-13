import type { Action, HeroSlide } from '@/types/content';
import { Backdrop } from '@/components/ui/backdrop';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Fade } from '@/components/ui/fade';
import { HeroSlides } from '@/components/ui/hero-slides';
import { Icon } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface HeroProps {
  title: string;
  lead: string;
  /** One photo, or several shown one after another (D-145) */
  slides: HeroSlide[];
  primary: Action;
  secondary: Action;
}

/**
 * The home hero (D-81, was option A): a site photograph fills the whole first
 * screen, under the see-through header (`data-header-overlay`, pulled up by the
 * header's height). From md (tablets and up) the headline is centred high over
 * the calm part of the frame (the mountains) with the fleet below it; on phones
 * it is centred vertically, so it stays in view on every screen height (D-98).
 * Text is full white (`data-on-photo`): the lead at white/80 fell to 4.35 : 1 over
 * the sand from lg (P15). With several photos, HeroSlides fades from one to the next;
 * only the first is preloaded, and one top fade covers them all. No corner caption (owner,
 * 2026-11-09).
 */
export function Hero({ title, lead, slides, primary, secondary }: HeroProps) {
  const [first] = slides;
  const backdrop = (slide: HeroSlide, index: number) => (
    <Backdrop
      image={slide.image}
      variant={slide.scrim === 'bright' ? 'hero-bright' : 'hero'}
      priority={index === 0}
      drift={slides.length === 1}
      fade={slides.length === 1}
    />
  );
  return (
    <div data-header-overlay data-on-photo className="-mt-(--header-total)">
      <Section
        tone="ink"
        spacing="none"
        container="none"
        labelledBy="hero-title"
        className="relative flex min-h-svh max-md:items-center"
      >
        {slides.length > 1 ? (
          <>
            <HeroSlides
              label="Photos from our sites"
              slides={slides.map((slide, index) => ({
                key: slide.image.url,
                content: backdrop(slide, index),
              }))}
              pauseIcon={<Icon name="pause" size="sm" label="Pause the photos" />}
              playIcon={<Icon name="play" size="sm" label="Play the photos" />}
            />
            <Fade />
          </>
        ) : (
          first && backdrop(first, 0)
        )}
        <Container className="relative flex flex-col items-center gap-8 pt-(--header-total) pb-16 lg:pb-24">
          <div className="flex flex-col items-center gap-8 md:pt-24 lg:pt-28">
            <SectionHeading
              as="h1"
              size="display"
              introSize="fit"
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
