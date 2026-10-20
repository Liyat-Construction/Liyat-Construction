import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import {
  Scale,
  Home,
  ChevronRight,
  FileText,
  CheckCircle,
  Briefcase,
  User,
  Lightbulb,
  CreditCard,
  AlertTriangle,
  Ban,
  Globe,
  RefreshCw,
  Mail,
  Lock,
  Zap,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'These are the terms that govern how we work together. Read them once. They are written to be understood, not to confuse.',
};

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Who these terms apply to': CheckCircle,
  'What we do': Briefcase,
  'How we work together': User,
  Payment: CreditCard,
  'Scope changes': RefreshCw,
  'Ownership of work': Lightbulb,
  'What we expect from you': User,
  Confidentiality: Lock,
  'Warranty disclaimer': Shield,
  'Limitation of liability': AlertTriangle,
  'Force majeure': Zap,
  Termination: Ban,
  'Governing law': Globe,
  Questions: Mail,
};

export default function TermsOfServicePage() {
  const contactEmail = siteConfig.contact.email;

  const title = 'Terms of Service';
  const description =
    'These are the terms that govern how we work together. Read them once. They are written to be understood, not to confuse.';
  const lastUpdated = siteConfig.legal.lastUpdated;

  const defaultSections = [
    {
      id: 1,
      title: '1. Who these terms apply to',
      content: `<p>These terms apply to anyone who uses the ${siteConfig.name} website or engages our services — whether you are a business, an individual, or someone exploring what we offer. By using our website or signing a service agreement with us, you are agreeing to these terms.</p>`,
    },
    {
      id: 2,
      title: '2. What we do',
      content: `<p>${siteConfig.name} provides services to businesses and individuals. The specific services offered, their scope, deliverables, and timeline are defined in a written service agreement before work begins.</p>`,
    },
    {
      id: 3,
      title: '3. How we work together',
      content:
        '<p>Every engagement begins with an initial consultation to define scope and expectations. After that, we send a written proposal outlining what we will deliver, what it costs, and how long it will take. Work does not begin until both sides have agreed in writing and the deposit has been received. We hold ourselves to that process and we expect clients to respect it too.</p>',
    },
    {
      id: 4,
      title: '4. Payment',
      content:
        '<p>We require a 50% deposit before any work begins and the remaining 50% upon completion, before files or credentials are handed over. This is not negotiable. It protects both sides. If a project is cancelled after work has begun, the deposit is non-refundable. Specific payment terms for retainer arrangements are outlined in individual service agreements.</p>',
    },
    {
      id: 5,
      title: '5. Scope changes',
      content:
        '<p>If you ask for something that was not in the original agreement, the price changes. We will always tell you the cost before we do any additional work. We do not absorb scope changes silently and bill you later. We also do not do additional work for free. Scope changes are normal — the process for handling them is straightforward.</p>',
    },
    {
      id: 6,
      title: '6. Ownership of work',
      content: `<p>Once full payment has been received, you own the work we built for you. Before full payment is received, all work remains the intellectual property of ${siteConfig.name}. We retain the right to display completed work in our portfolio unless you request otherwise in writing before signing.</p>`,
    },
    {
      id: 7,
      title: '7. What we expect from you',
      content:
        '<p>We expect you to provide accurate information, respond to our questions within agreed timeframes, and provide the content — text, images, and other materials — that your project requires, unless content creation is explicitly included in your agreement. Delays caused by late content or slow responses on your side may affect the timeline. We will always communicate clearly if that happens.</p>',
    },
    {
      id: 8,
      title: '8. Confidentiality',
      content: `<p>We treat your business information, data, and any materials you share with us as confidential. We do not disclose your proprietary information to third parties without your permission, except where required by law. We expect the same in return — any proprietary tools, methods, or internal processes we share with you during our engagement remain the property of ${siteConfig.name}.</p>`,
    },
    {
      id: 9,
      title: '9. Warranty disclaimer',
      content:
        '<p>We work carefully and we stand behind our work. But we provide our services and deliverables "as is" and make no warranties — express or implied — about specific business outcomes, revenue increases, or uninterrupted operation of any deliverable we provide. We do what we say we will do in the written agreement, and we expect you to evaluate whether our services meet your needs before you engage us.</p>',
    },
    {
      id: 10,
      title: '10. Limitation of liability',
      content:
        '<p>We work carefully and we stand behind our work. But we cannot be held responsible for business losses, lost revenue, or indirect damages that result from using or not being able to use our services. Our total liability in any situation is limited to the amount you paid us for the project in question.</p>',
    },
    {
      id: 11,
      title: '11. Force majeure',
      content:
        "<p>Sometimes things happen that are outside anyone's control — internet outages, civil unrest, infrastructure failures, pandemics, or government actions. If an event like this prevents us from delivering our services, we are not liable for delays or failure to perform, and we will resume work as soon as reasonably possible.</p>",
    },
    {
      id: 12,
      title: '12. Termination',
      content:
        "<p>Either party may terminate a service agreement by giving the other party fourteen (14) days' written notice. If you terminate after work has begun, you remain responsible for payment for all work completed up to the termination date. If we terminate because of non-payment or a material breach of these terms, the same applies. We reserve the right to suspend or withhold delivery of work in the event of non-payment.</p>",
    },
    {
      id: 13,
      title: '13. Governing law',
      content: `<p>These terms are governed by the laws of ${siteConfig.legal.jurisdiction}. Any disputes will be resolved in the courts of ${siteConfig.legal.courtLocation}.</p>`,
    },
    {
      id: 14,
      title: '14. Questions',
      content: `If anything here is unclear, email us at <a href="mailto:${contactEmail}" class="text-brand-accent hover:underline">${contactEmail}</a> before you sign anything. We would rather answer a question upfront than have a disagreement later.`,
    },
  ];

  const sections = defaultSections;

  return (
    <main className={cn('min-h-screen', 'bg-surface-warm')}>
      {/* Hero Section */}
      <section className="bg-brand-primary relative overflow-hidden py-20 md:py-24">
        {/* Breadcrumb */}
        <Container className="relative z-10">
          <nav className="flex items-center gap-3 py-4">
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
              Terms of Service
            </span>
          </nav>
        </Container>

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="bg-brand-accent absolute top-0 left-0 h-64 w-64 rounded-full blur-3xl" />
          <div className="bg-brand-accent absolute right-0 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                Legal
              </span>
              <div className="bg-brand-accent h-px w-8" />
            </div>

            <h1
              className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{
                textShadow: '0 0 40px rgba(201, 162, 39, 0.3), 0 0 80px rgba(201, 162, 39, 0.1)',
                background:
                  'linear-gradient(135deg, white 0%, var(--color-brand-accent) 50%, white 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {description}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Scale className="text-brand-accent h-5 w-5" />
              <span className="text-sm text-white/60">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="relative py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Quick Navigation */}
            <div className="mb-16">
              <div
                className={cn(
                  'rounded-2xl border p-6 md:p-8',
                  'border-gray-100 bg-white shadow-sm'
                )}
              >
                <h2 className="text-brand-accent mb-4 flex items-center gap-2 text-lg font-semibold">
                  <FileText className="h-5 w-5" />
                  Quick Navigation
                </h2>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {sections.map((section) => {
                    const sectionTitle = section.title.replace(/^\d+\.\s*/, '');
                    // eslint-disable-next-line security/detect-object-injection
                    const IconComponent = sectionIcons[sectionTitle] ?? FileText;
                    return (
                      <a
                        key={section.id}
                        href={`#section-${section.id}`}
                        className={cn(
                          'group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300',
                          'hover:bg-brand-accent/5'
                        )}
                      >
                        <IconComponent className="text-brand-accent/60 group-hover:text-brand-accent h-4 w-4 transition-colors" />
                        <span
                          className={cn(
                            'text-sm transition-colors',
                            'group-hover:text-brand-primary text-text-secondary'
                          )}
                        >
                          {section.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {sections.map((section, index) => {
                const sectionTitle = section.title.replace(/^\d+\.\s*/, '');
                // eslint-disable-next-line security/detect-object-injection
                const IconComponent = sectionIcons[sectionTitle] ?? FileText;

                return (
                  <div
                    key={section.id}
                    id={`section-${section.id}`}
                    className={cn(
                      'group relative overflow-hidden rounded-2xl border transition-all duration-300',
                      'border-gray-100 bg-white hover:-translate-y-1 hover:shadow-lg'
                    )}
                  >
                    {/* Left accent line */}
                    <div className="from-brand-accent via-brand-accent/50 absolute top-0 left-0 h-full w-1 bg-gradient-to-b to-transparent" />

                    <div className="p-8 md:p-10">
                      {/* Section Header */}
                      <div className="mb-6 flex items-start gap-4">
                        <div className="border-brand-accent/20 bg-brand-accent/10 inline-flex flex-shrink-0 rounded-xl border p-3">
                          <IconComponent className="text-brand-accent h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-brand-accent/70 text-xs font-semibold tracking-wider uppercase">
                            Section {index + 1}
                          </span>
                          <h2
                            className={cn(
                              'mt-1 text-xl font-bold md:text-2xl',
                              'text-brand-primary'
                            )}
                          >
                            {sectionTitle}
                          </h2>
                        </div>
                      </div>

                      {/* Section Content */}
                      <div
                        className={cn(
                          'text-text-secondary',
                          'prose prose-lg max-w-none',
                          'prose-p:text-text-secondary prose-p:leading-relaxed',
                          'prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline',
                          'prose-strong:text-brand-primary',
                          'prose-ul:text-text-secondary prose-li:marker:text-brand-accent',
                          'prose-ol:text-text-secondary prose-li:marker:text-brand-accent'
                        )}
                        dangerouslySetInnerHTML={{
                          __html: section.content
                            ? section.content
                                .replace(/<p>/g, '<p class="mb-4">')
                                .replace(/<ul>/g, '<ul class="space-y-2 my-4">')
                                .replace(
                                  /<li>/g,
                                  '<li class="flex items-start gap-2"><span class="text-brand-accent mt-1.5">•</span><span>'
                                )
                                .replace(/<\/li>/g, '</span></li>')
                            : '',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <div
                className={cn('rounded-2xl border p-8 md:p-12', 'bg-surface-cool border-gray-100')}
              >
                <Scale className="text-brand-accent mx-auto mb-4 h-12 w-12" />
                <h3 className={cn('mb-3 text-2xl font-bold', 'text-brand-primary')}>
                  Questions About Our Terms?
                </h3>
                <p className={cn('mx-auto mb-8 max-w-xl', 'text-text-secondary')}>
                  If anything here is unclear, email us before you sign anything. We would rather
                  answer a question upfront than have a disagreement later.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href={`mailto:${contactEmail}`}
                    className="bg-brand-primary hover:bg-brand-primary-dark inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </Link>
                  <Link
                    href="/#contact"
                    className="border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 inline-flex items-center gap-2 rounded-full border px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-text-muted text-sm">
                  © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <Link href="/terms-of-service" className="text-brand-accent text-sm">
                    Terms of Service
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-brand-accent text-text-muted text-sm transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
