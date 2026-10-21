import type { Feature } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Icon, type IconName } from '@/components/ui/icon';

interface FeatureCardProps {
  feature: Feature;
  /** Optional line icon above the title, e.g. `document` for a deliverable */
  icon?: IconName;
  as?: 'div' | 'li';
  /** Extra content under the text, e.g. a CheckList */
  children?: React.ReactNode;
  className?: string;
}

/** A titled point with an optional sentence: a deliverable, a principle, a capability. */
export function FeatureCard({ feature, icon, as = 'div', children, className }: FeatureCardProps) {
  return (
    <Card as={as} padding="lg" className={className}>
      {icon && <Icon name={icon} size="lg" className="text-brand mb-5" />}
      <h3 className="text-h4">{feature.title}</h3>
      {feature.text && <p className="text-ink-muted mt-2">{feature.text}</p>}
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}
