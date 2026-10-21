import { cn } from '@/lib/utils';

interface ScrimProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Flat Ink panel behind text on a photograph — the text area only, never the
 * whole photo (D-27). --color-scrim (62%) is the lightest opacity at which white
 * text reaches 4.5 : 1 over pure white (clouds, spray), so it holds on any photo.
 */
export function Scrim({ children, className }: ScrimProps) {
  return (
    <div data-on-dark className={cn('bg-scrim rounded-card p-6 text-white sm:p-8', className)}>
      {children}
    </div>
  );
}
