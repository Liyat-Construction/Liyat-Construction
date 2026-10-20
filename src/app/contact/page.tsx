import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { ContactSection } from '@/components/contact-section';
import { CONTACT_PAGE } from '@/data/contact';
import { HOME_PAGE } from '@/data/home';
import { CTASection } from '@/components/cta-section';
import { ChevronRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Liyat Construction PLC for groundwater investigation, water-well drilling, pumping tests, pump installation, and turnkey water projects in Ethiopia.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
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
              Contact
            </span>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                Get in Touch
              </span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Contact Liyat Construction
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Tell us about your groundwater or water-works project. We will review your
              requirements and respond with a clear, practical plan.
            </p>
          </div>
        </Container>
      </section>

      <ContactSection contactPage={CONTACT_PAGE} />

      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
