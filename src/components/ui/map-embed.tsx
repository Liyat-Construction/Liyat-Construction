import { Button } from './button';
import { Card } from './card';

interface MapEmbedProps {
  /** Embeddable map address (an iframe src) */
  embedUrl: string;
  /** Link that opens the full map with directions from the visitor's location */
  directionsUrl: string;
  /** Names the map for screen readers */
  title: string;
  /** Label of the directions button */
  directionsLabel: string;
  className?: string;
}

/**
 * A map the visitor can see at once, with a button that opens it in Maps with directions.
 * The map loads only when it is near the screen (lazy), so it does not slow the first load.
 */
export function MapEmbed({
  embedUrl,
  directionsUrl,
  title,
  directionsLabel,
  className,
}: MapEmbedProps) {
  return (
    <Card padding="none" className={className}>
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        className="aspect-4/3 w-full border-0"
      />
      <div className="border-line border-t p-4">
        <Button href={directionsUrl} variant="secondary" icon="arrow" className="w-full">
          {directionsLabel}
        </Button>
      </div>
    </Card>
  );
}
