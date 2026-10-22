import type { Service, ServiceSlug } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Icon, type IconName } from '@/components/ui/icon';
import { pick } from '@/lib/utils';

const icons = {
  'hydrogeological-survey': 'survey',
  'borehole-drilling': 'drilling',
  'pumping-tests': 'pumping-test',
  'borehole-rehabilitation': 'rehabilitation',
  'pump-supply-installation': 'pump',
  'turnkey-projects': 'turnkey',
} as const satisfies Record<ServiceSlug, IconName>;

interface ServiceCardProps {
  service: Service;
  /** Position in the lifecycle, 1–6; shown as 01–06 */
  number: number;
  className?: string;
}

/** Linked service summary: number, icon, official name, one line. */
export function ServiceCard({ service, number, className }: ServiceCardProps) {
  return (
    <Card as="article" href={`/services/${service.slug}`} padding="lg" className={className}>
      <div className="flex items-start justify-between gap-4">
        <span className="font-heading text-h4 text-ink-muted tabular-nums">
          {String(number).padStart(2, '0')}
        </span>
        <Icon name={pick(icons, service.slug)} size="lg" className="text-brand" />
      </div>
      <h3 className="text-h3 mt-6">{service.title}</h3>
      <p className="text-ink-muted mt-3">{service.summary}</p>
      <span className="text-brand mt-auto self-end pt-6">
        <Icon
          name="arrow-right"
          className="ease-standard block transition-transform duration-(--duration-fast) group-hover/card:translate-x-1"
        />
      </span>
    </Card>
  );
}
