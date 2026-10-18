import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { CTASection } from '@/components/cta-section';
import { PremiumButton } from '@/components/premium-button';
import { HOME_PAGE } from '@/data/home';
import { ABOUT_PAGE_SECTIONS } from '@/data/about';
import { ChevronRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Liyat Construction PLC — an Ethiopian groundwater development and water-well engineering contractor serving institutional and commercial clients.',
};

const SECTION_BG = 'bg-white dark:bg-surface-page';
const CARD =
  'relative overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-brand-accent/10 dark:bg-surface-card';
const CARD_ACCENT =
  'absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-accent to-brand-accent/50';
const H2 = 'text-3xl font-bold md:text-4xl text-brand-primary dark:text-white';
const BODY = 'text-lg leading-relaxed text-text-secondary dark:text-text-muted';
const LABEL = 'text-sm font-semibold tracking-widest text-brand-accent uppercase';

export default function AboutPage() {
  const { whoWeAre, whatWeBuild, theRealPurpose, whatWeBelieve, whoBuildFor } = ABOUT_PAGE_SECTIONS;

  return (
    <main className="dark:bg-surface-page min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-brand-primary relative overflow-hidden py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-brand-accent absolute top-0 left-0 h-56 w-56 rounded-full opacity-10 blur-3xl" />
          <div className="bg-brand-accent absolute right-0 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl" />
        </div>
        <Container className="relative z-10">
          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="group hover:border-brand-accent/30 hover:bg-brand-accent/20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-300"
            >
              <Home className="text-brand-accent h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="group-hover:text-brand-accent text-sm font-medium text-white/90 transition-colors">
                Home
              </span>
            </Link>
            <ChevronRight className="text-brand-accent/50 h-4 w-4" />
            <span className="border-brand-accent/20 bg-brand-accent/10 text-brand-accent rounded-full border px-3 py-1.5 text-sm font-semibold">
              About
            </span>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>{whoWeAre.sectionLabel}</span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              {whoWeAre.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {whoWeAre.body}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Origin Story ─────────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className={cn(CARD, 'p-8 md:p-10')}>
              <div className={CARD_ACCENT} />
              <p className={cn(BODY, 'pl-2')}>{whoWeAre.origin}</p>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* ── What We Build ─────────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>{whatWeBuild.sectionLabel}</span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h2 className={H2}>{whatWeBuild.headline}</h2>
            <p className={cn('mx-auto mt-4 max-w-2xl', BODY)}>{whatWeBuild.intro}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whatWeBuild.dimensions.map((dim) => (
              <div
                key={dim.roman}
                className={cn(
                  CARD,
                  'p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                )}
              >
                <div className={CARD_ACCENT} />
                <p className="text-brand-accent mb-2 pl-2 font-mono text-xs font-semibold tracking-widest uppercase">
                  {dim.roman}
                </p>
                <h3 className="text-brand-primary mb-3 pl-2 text-xl font-bold dark:text-white">
                  {dim.title}
                </h3>
                <p className="text-text-secondary dark:text-text-muted pl-2 leading-relaxed">
                  {dim.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* ── The Real Purpose ──────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <div className="mb-5 inline-flex items-center gap-2">
                <div className="bg-brand-accent h-px w-8" />
                <span className={LABEL}>{theRealPurpose.sectionLabel}</span>
                <div className="bg-brand-accent h-px w-8" />
              </div>
              <h2 className={cn(H2, 'leading-tight')}>{theRealPurpose.headline}</h2>
            </div>
            <p className={cn('mt-5', BODY)}>{theRealPurpose.body}</p>
            <blockquote className={cn(CARD, 'my-8 p-8 md:p-10')}>
              <div className={CARD_ACCENT} />
              <p className="text-brand-primary pl-2 text-xl leading-relaxed font-medium italic md:text-2xl dark:text-white">
                &ldquo;{theRealPurpose.pullQuote}&rdquo;
              </p>
            </blockquote>
            <p className={BODY}>{theRealPurpose.bodyAfterQuote}</p>
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* ── What We Believe ───────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>{whatWeBelieve.sectionLabel}</span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h2 className={H2}>{whatWeBelieve.headline}</h2>
            <p className={cn('mx-auto mt-4 max-w-2xl', BODY)}>{whatWeBelieve.intro}</p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {whatWeBelieve.beliefs.map((belief, index) => (
              <div
                key={index}
                className={cn(
                  CARD,
                  'p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg'
                )}
              >
                <div className={CARD_ACCENT} />
                <p className="text-brand-primary pl-2 text-lg font-bold dark:text-white">
                  {belief.lead}
                </p>
                <p className="text-text-secondary dark:text-text-muted mt-2 pl-2 leading-relaxed">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* ── Who We Build For ──────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <div className="mb-5 inline-flex items-center gap-2">
                <div className="bg-brand-accent h-px w-8" />
                <span className={LABEL}>{whoBuildFor.sectionLabel}</span>
                <div className="bg-brand-accent h-px w-8" />
              </div>
              <h2 className={H2}>{whoBuildFor.headline}</h2>
            </div>
            <p className={cn('mt-5', BODY)}>{whoBuildFor.body}</p>
            <p className="text-brand-primary mt-4 text-lg font-medium dark:text-white">
              {whoBuildFor.closing}
            </p>
            <div className="mt-10">
              <PremiumButton href="/#contact" variant="primary">
                Contact Us
              </PremiumButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
