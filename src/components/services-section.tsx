/**
 * Services Section
 * Display featured services with premium hover effects and stagger animations
 */

import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/types/content';

// Icon mapping from service slugs to React components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'hydrogeological-investigations': SearchIcon,
  'well-drilling': DrillIcon,
  'pumping-tests': GaugeIcon,
  'wellhead-rehabilitation': WrenchIcon,
  'pump-installation-electromechanical': CogIcon,
  'turnkey-water-projects': DropletIcon,
};

type ServiceCardData = Pick<
  Service,
  'title' | 'description' | 'slug' | 'tag' | 'isHighlighted' | 'forWho' | 'ctaText'
>;

const tagColors: Record<string, string> = {
  Investigation: 'bg-brand-accent/15 text-brand-accent',
  Drilling: 'bg-emerald-100 text-emerald-800',
  Testing: 'bg-blue-100 text-blue-700',
  Rehabilitation: 'bg-amber-100 text-amber-800',
  Electromechanical: 'bg-slate-100 text-slate-700',
  Turnkey: 'bg-cyan-100 text-cyan-800',
};

interface ServicesSectionProps {
  title: string;
  subtitle: string;
  services: ServiceCardData[];
}

export function ServicesSection({ title, subtitle, services }: ServicesSectionProps) {
  if (services.length === 0) {
    // eslint-disable-next-line unicorn/no-null -- React components should return null for no-render
    return null;
  }

  return (
    <section id="services" className={cn('py-20 md:py-28 lg:py-32', 'bg-white')}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>

          <h2
            className={cn(
              'mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
              'text-brand-primary'
            )}
          >
            {title}
          </h2>

          <p className={cn('mx-auto mt-4 max-w-2xl text-base md:text-lg', 'text-text-muted')}>
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.slug] || DefaultIcon;

            return (
              <div key={service.slug}>
                <ServiceCard service={service} IconComponent={IconComponent} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  IconComponent,
}: {
  service: ServiceCardData;
  IconComponent: React.ComponentType<{ className?: string }>;
}) {
  const tagColor = tagColors[service.tag ?? ''] ?? tagColors['Primary'];

  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <div
        className={cn(
          'group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border p-8',
          service.isHighlighted
            ? 'border-brand-accent/50 ring-brand-accent/20 bg-white shadow-lg ring-1'
            : 'border-gray-100 bg-white shadow-sm',
          'transition-all duration-500',
          'hover:border-brand-accent/30 hover:shadow-[0_8px_30px_rgba(15,42,68,0.08)]',
          'hover:-translate-y-1'
        )}
      >
        {/* Gradient overlay on hover */}
        <div className="from-brand-accent/[0.03] absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Icon row + Tag badge */}
        <div className="relative mb-5 flex items-start justify-between gap-2">
          <div
            className={cn(
              'inline-flex flex-shrink-0 rounded-xl p-3.5',
              'bg-brand-primary',
              'transition-all duration-300',
              'group-hover:shadow-brand-accent/10 group-hover:scale-110 group-hover:shadow-lg'
            )}
          >
            <IconComponent className="text-brand-accent h-6 w-6" />
          </div>
          {service.tag && (
            <span className={cn('rounded-full px-2.5 py-1 text-xs font-semibold', tagColor)}>
              {service.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            'relative mb-1 text-xl font-bold',
            'text-brand-primary',
            'transition-colors duration-300',
            'group-hover:text-brand-accent'
          )}
        >
          {service.title}
        </h3>

        {/* For who */}
        {service.forWho && (
          <p className="text-brand-accent/70 relative mb-3 text-xs font-medium italic">
            For: {service.forWho}
          </p>
        )}

        {/* Description */}
        <p
          className={cn(
            'relative flex-1 text-[15px] leading-relaxed break-words',
            'text-text-secondary'
          )}
        >
          {service.description}
        </p>

        {/* CTA */}
        <div className="text-brand-accent relative mt-6 flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group-hover:gap-2.5">
          <span>{service.ctaText ?? 'Learn more'}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Bottom accent */}
        <div className="via-brand-accent absolute right-8 bottom-0 left-8 h-[2px] scale-x-0 bg-gradient-to-r from-transparent to-transparent transition-all duration-500 group-hover:scale-x-100" />
      </div>
    </Link>
  );
}

// Default icon when no match found
function DefaultIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

// Icon Components
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function DrillIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  );
}

function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function DropletIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}
