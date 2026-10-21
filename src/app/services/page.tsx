import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { CtaBand } from '@/components/sections/cta-band';
import { CTA_BAND } from '@/data/cta';
import { siteConfig } from '@/config/site';
import { ServicesSection } from '@/components/services-section';
import { SERVICES } from '@/data/services';
import { ChevronRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Groundwater investigation, water-well drilling, pumping tests, pump installation, electromechanical works, and turnkey water supply projects by Liyat Construction PLC in Ethiopia.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <span className="border-brand-accent/20 bg-brand-accent/10 text-brand-accent rounded-full border px-3 py-1.5 text-sm font-semibold">
              Our Services
            </span>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                What we offer
              </span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Water-Well Engineering & Groundwater Services
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              From investigation and drilling to pumping tests, pump installation, and turnkey
              delivery, Liyat provides the full groundwater development capability institutional and
              commercial clients need in Ethiopia.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <ServicesSection
        title="What We Do"
        subtitle="Comprehensive groundwater and water-well services for projects across Ethiopia."
        services={SERVICES}
      />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </div>
  );
}
