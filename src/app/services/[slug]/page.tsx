import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { CTASection } from '@/components/cta-section';
import { PremiumButton } from '@/components/premium-button';
import { SERVICES } from '@/data/services';
import { HOME_PAGE } from '@/data/home';
import { ChevronRight, Home, Check, ArrowLeft } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Not Found' };
  }
  return {
    title: service.title,
    description: service.fullDescription,
  };
}

const tagHeroColors: Record<string, string> = {
  Investigation: 'border-brand-accent/40 bg-brand-accent/15 text-brand-accent',
  Drilling: 'border-emerald-400/40 bg-emerald-400/15 text-emerald-300',
  Testing: 'border-blue-400/40 bg-blue-400/15 text-blue-300',
  Rehabilitation: 'border-amber-400/40 bg-amber-400/15 text-amber-300',
  Electromechanical: 'border-slate-400/40 bg-slate-400/15 text-slate-300',
  Turnkey: 'border-cyan-400/40 bg-cyan-400/15 text-cyan-300',
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const heroTagColor = tagHeroColors[service.tag] ?? tagHeroColors['Primary'];

  const SECTION_BG = 'bg-white';
  const CARD = 'relative overflow-hidden rounded-2xl border border-gray-200 bg-white';
  const CARD_ACCENT =
    'absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-accent to-brand-accent/50';
  const LABEL = 'text-sm font-semibold tracking-widest text-brand-accent uppercase';
  const BODY = 'text-lg leading-relaxed text-text-secondary';

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ──────────────────────────────────────────────── */}
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
            <span className="border-brand-accent/20 bg-brand-accent/10 text-brand-accent max-w-[200px] truncate rounded-full border px-3 py-1.5 text-sm font-semibold">
              {service.title}
            </span>
          </nav>
          <div className="mt-10 max-w-3xl">
            <span
              className={cn(
                'mb-4 inline-block rounded-full border px-3.5 py-1 text-sm font-semibold',
                heroTagColor
              )}
            >
              {service.tag}
            </span>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-3 text-sm font-medium text-white/60 italic">For: {service.forWho}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {service.heroText || service.description}
            </p>
            <div className="mt-8">
              <PremiumButton href="/#contact" variant="primary">
                {service.ctaText}
              </PremiumButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Full Description ──────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>What this service is</span>
            </div>
            <div className={cn(CARD, 'p-8 md:p-10')}>
              <div className={CARD_ACCENT} />
              <p className={cn(BODY, 'pl-2')}>{service.fullDescription}</p>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* ── What's Included ───────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>What&apos;s included</span>
            </div>
            <h2 className="text-brand-primary text-2xl font-bold md:text-3xl">What is included.</h2>
            <div className="mt-8 space-y-4">
              {service.includes.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    CARD,
                    'flex items-start gap-4 px-6 py-5',
                    'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md'
                  )}
                >
                  <div className={CARD_ACCENT} />
                  <div className="bg-brand-accent/10 mt-0.5 flex-shrink-0 rounded-full p-1">
                    <Check className="text-brand-accent h-4 w-4" />
                  </div>
                  <p className="text-text-secondary pl-1 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* ── How to Start ──────────────────────────────────────── */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>How to start</span>
            </div>
            <h2 className="text-brand-primary text-2xl font-bold md:text-3xl">How we work.</h2>
            <p className={cn('mt-4', BODY)}>
              {service.howToStart ||
                'We begin every engagement with a discovery session to understand your requirements, constraints, and goals. From there we scope, architect, and deliver in clearly defined phases.'}
            </p>
            <p className="text-text-muted mt-3 text-base leading-relaxed">
              {service.howToStartTagline || 'Clear scope. Clean build. Confident launch.'}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PremiumButton href="/#contact" variant="primary">
                {service.ctaText}
              </PremiumButton>
              <Link
                href="/#services"
                className="group text-brand-accent hover:text-brand-accent-dark inline-flex items-center gap-2 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                View all services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
