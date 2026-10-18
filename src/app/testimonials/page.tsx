import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { CTASection } from '@/components/cta-section';
import { PremiumButton } from '@/components/premium-button';
import { TESTIMONIALS } from '@/data/testimonials';
import { HOME_PAGE } from '@/data/home';
import { ChevronRight, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Client feedback and references for Liyat Construction PLC groundwater development and water-well engineering projects in Ethiopia.',
};

const CARD =
  'relative overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-brand-accent/10 dark:bg-surface-card';

export default function TestimonialsPage() {
  return (
    <main className="dark:bg-surface-page min-h-screen bg-white">
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
              Testimonials
            </span>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                Client Feedback
              </span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              What Clients Say
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Feedback from institutional and commercial clients who have worked with Liyat
              Construction on groundwater and water-works projects.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20">
        <Container>
          {TESTIMONIALS.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-text-secondary dark:text-text-muted text-lg">
                No testimonials published yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    CARD,
                    'p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
                  )}
                >
                  <div className="text-brand-accent/20 mb-4 text-4xl">&ldquo;</div>
                  <p className="text-text-secondary dark:text-text-inverse/90 mb-6 text-[15px] leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="from-brand-primary to-brand-primary-light flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br">
                      <span className="font-semibold text-white">
                        {(testimonial.clientName || 'A').charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-brand-primary font-semibold dark:text-white">
                        {testimonial.clientName}
                      </div>
                      <div className="text-text-muted text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-surface-cool dark:border-brand-accent/10 dark:bg-surface-card mx-auto mt-16 max-w-2xl rounded-2xl border border-gray-100 p-8 text-center md:p-12">
            <h2 className="text-brand-primary mb-3 text-2xl font-bold dark:text-white">
              References Available Upon Request
            </h2>
            <p className="text-text-secondary dark:text-text-muted mb-6">
              For additional client references or project-specific case studies, please contact us
              directly. We will be happy to provide verified references for projects similar to
              yours.
            </p>
            <PremiumButton href="/contact" variant="primary">
              Request References
            </PremiumButton>
          </div>
        </Container>
      </section>

      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
