import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import {
  Shield,
  Home,
  ChevronRight,
  FileText,
  Eye,
  Lock,
  UserCheck,
  Mail,
  Server,
  Clock,
  Globe,
  RefreshCw,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'We respect your privacy. Here is exactly what we collect, why we collect it, and what we do with it. No hidden language. No surprises.',
};

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Who we are': FileText,
  'What we collect': Eye,
  'What we do with it': Server,
  'How long we keep it': Clock,
  'How we protect it': Lock,
  'Where your data goes': Globe,
  'Your rights': UserCheck,
  Children: UserCheck,
  'Changes to this policy': RefreshCw,
  Questions: Mail,
};

export default function PrivacyPolicyPage() {
  const contactEmail = siteConfig.contact.email;

  const title = 'Privacy Policy';
  const description =
    'We respect your privacy. Here is exactly what we collect, why we collect it, and what we do with it. No hidden language. No surprises.';
  const lastUpdated = siteConfig.legal.lastUpdated;

  const defaultSections = [
    {
      id: 1,
      title: '1. Who we are',
      content: `<p>${siteConfig.name} is a company that provides services to businesses and individuals. When you use our website or contact us about our services, you share some information with us. This policy explains what that information is and how we handle it.</p>`,
    },
    {
      id: 2,
      title: '2. What we collect',
      content:
        '<p>We only collect information you give us directly. When you fill out our contact form, you provide your name, email address, phone number, and a description of what you need. That is it. We do not buy data. We do not scrape anything. We do not track you across other websites.</p><p>We also collect basic technical information automatically — things like which browser you are using and which pages you visited. This comes through standard analytics tools and helps us understand how people use our website so we can improve it.</p>',
    },
    {
      id: 3,
      title: '3. What we do with it',
      content:
        '<p>We use your information for one purpose: to respond to you and deliver our services. If you contacted us about a project, we use your details to follow up on that project. We do not sell your information to anyone. We do not use it for advertising. We do not share it with third parties except where necessary to deliver our services — for example, the email platform we use to send you a reply.</p>',
    },
    {
      id: 4,
      title: '4. How long we keep it',
      content:
        '<p>If you become a client, we keep your information for as long as our working relationship lasts and for a reasonable period after — typically three years — in case questions arise about past work. If you contacted us but did not become a client, we keep your information for up to twelve months. After that, we delete it.</p>',
    },
    {
      id: 5,
      title: '5. How we protect it',
      content:
        '<p>We use standard security measures to protect the information we hold — encrypted connections, secure servers, and limited internal access. We take this seriously. A company that builds trust for its clients needs to deserve that trust itself.</p>',
    },
    {
      id: 6,
      title: '6. Where your data goes',
      content:
        '<p>Some of the services we use to run our website and communicate with you — like our hosting provider and email platform — may store or process your data in various locations worldwide. By using our website, you understand that your information may be transferred to and stored on servers in other countries. We only work with services that meet reasonable security and privacy standards.</p>',
    },
    {
      id: 7,
      title: '7. Children',
      content:
        '<p>We do not knowingly collect personal data from anyone under the age of 18. If you are under 18, do not use our contact forms or provide any information about yourself. If we learn that we have collected personal data from a child under 18, we will delete that information as quickly as possible.</p>',
    },
    {
      id: 8,
      title: '8. Your rights',
      content: `You have the right to see what information we hold about you, correct it if it is wrong, or ask us to delete it. You can do all of this by emailing us at <a href="mailto:${contactEmail}" class="text-brand-accent hover:underline">${contactEmail}</a>. We will respond within five business days.`,
    },
    {
      id: 9,
      title: '9. Changes to this policy',
      content:
        'If we change this policy in a meaningful way, we will update the date at the top of this page. If the change affects you directly and you are an active client, we will let you know by email.',
    },
    {
      id: 10,
      title: '10. Questions',
      content: `If anything here is unclear or you have a question about your data, email us at <a href="mailto:${contactEmail}" class="text-brand-accent hover:underline">${contactEmail}</a>. We will give you a straight answer.`,
    },
  ];

  const sections = defaultSections;

  return (
    <div className={cn('min-h-screen', 'bg-surface-warm')}>
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
              Privacy Policy
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
              <Shield className="text-brand-accent h-5 w-5" />
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
                <Mail className="text-brand-accent mx-auto mb-4 h-12 w-12" />
                <h3 className={cn('mb-3 text-2xl font-bold', 'text-brand-primary')}>
                  Questions About Your Privacy?
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
                  <Link
                    href="/terms-of-service"
                    className="hover:text-brand-accent text-text-muted text-sm transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link href="/privacy-policy" className="text-brand-accent text-sm">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
