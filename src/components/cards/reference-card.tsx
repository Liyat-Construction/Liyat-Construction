import type { Reference } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Photo } from '@/components/ui/photo';

// ISO dates are calendar dates: format in UTC so the month never shifts
const monthYear = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

interface ReferenceCardProps {
  reference: Reference;
  className?: string;
}

/** A reference or completion letter: thumbnail, organization, date; links to the full scan. */
export function ReferenceCard({ reference, className }: ReferenceCardProps) {
  return (
    <Card as="article" href={reference.file} padding="none" className={className}>
      {reference.thumbnail ? (
        <Photo image={reference.thumbnail} ratio="portrait" width="third" />
      ) : (
        <div className="aspect-portrait bg-stone text-ink-muted flex items-center justify-center">
          <Icon name="document" size="lg" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-1 p-6">
        <h3 className="text-h4">{reference.organization}</h3>
        <p className="text-small text-ink-muted">
          <time dateTime={reference.date}>{monthYear.format(new Date(reference.date))}</time>
        </p>
      </div>
    </Card>
  );
}
