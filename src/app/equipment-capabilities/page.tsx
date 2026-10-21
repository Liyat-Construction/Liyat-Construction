import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { CtaBand } from '@/components/sections/cta-band';
import { CTA_BAND } from '@/data/cta';
import { siteConfig } from '@/config/site';
import { PremiumButton } from '@/components/premium-button';
import { CAPABILITIES } from '@/data/equipment';
import { ChevronRight, Home, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Equipment & Capabilities',
  description:
    'Liyat Construction PLC drilling, testing, and water-works capabilities for groundwater development projects across Ethiopia.',
};

const SECTION_BG = 'bg-white';
const CARD = 'relative overflow-hidden rounded-2xl border border-gray-200 bg-white';
const CARD_ACCENT =
  'absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-accent to-brand-accent/50';
const LABEL = 'text-sm font-semibold tracking-widest text-brand-accent uppercase';
const BODY = 'text-lg leading-relaxed text-text-secondary';

export default function EquipmentCapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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
              Equipment & Capabilities
            </span>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>What we can deliver</span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Equipment & Capabilities
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              The drilling, testing, and electromechanical capability behind Liyat&apos;s
              groundwater and water-well projects across Ethiopia.
            </p>
          </div>
        </Container>
      </section>

      {/* Equipment Note */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className={cn(CARD, 'p-8 md:p-10')}>
              <div className={CARD_ACCENT} />
              <div className="pl-2">
                <p className={cn(BODY, 'mb-4')}>
                  Liyat Construction PLC maintains a range of drilling rigs, pumping-test equipment,
                  pump-installation tooling, and support vehicles suited to groundwater development
                  projects across Ethiopia.
                </p>
                <p className="text-text-muted text-base leading-relaxed">
                  A detailed equipment inventory with makes, models, and quantities will be added
                  once confirmed by the company.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-brand-accent/30 border-t" />

      {/* Capabilities Grid */}
      <section className={cn(SECTION_BG, 'py-16 md:py-20')}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className={LABEL}>Operational strengths</span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h2 className="text-brand-primary text-3xl font-bold md:text-4xl">
              Capabilities by discipline
            </h2>
            <p className={cn('mx-auto mt-4 max-w-2xl', BODY)}>
              Our teams are organized around the full groundwater-development cycle, from first
              investigation through commissioning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((card) => (
              <div
                key={card.title}
                className={cn(
                  CARD,
                  'p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                )}
              >
                <div className={CARD_ACCENT} />
                <h3 className="text-brand-primary pl-2 text-xl font-bold">{card.title}</h3>
                <p className="text-text-secondary mt-3 pl-2 leading-relaxed">{card.body}</p>
                <ul className="mt-5 space-y-2 pl-2">
                  {card.items.map((item) => (
                    <li key={item} className="text-text-secondary flex items-start gap-3 text-sm">
                      <div className="bg-brand-accent/10 mt-0.5 rounded-full p-0.5">
                        <Check className="text-brand-accent h-3.5 w-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className={cn(BODY, 'mb-8')}>
              Need a specific capability or equipment detail for a tender or proposal? Contact us
              and we will provide the information directly.
            </p>
            <PremiumButton href="/contact" variant="primary">
              Request Equipment Details
            </PremiumButton>
          </div>
        </Container>
      </section>

      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </div>
  );
}
