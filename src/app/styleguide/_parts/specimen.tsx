/*
 * Style-guide chrome only (labels, swatches, specimen frames). This folder is
 * the one place outside ui/ and cards/ with visual classes: it documents the
 * tokens rather than using them for the site (D-29).
 */
import { cn } from '@/lib/utils';
import type { Token } from './tokens';

interface SpecimenProps {
  title: string;
  note?: string;
  children: React.ReactNode;
  className?: string;
}

/** A labelled example block. */
export function Specimen({ title, note, children, className }: SpecimenProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="border-line on-dark:border-white/30 flex flex-wrap items-baseline gap-x-3 border-b pb-2">
        <h3 className="text-h4">{title}</h3>
        {note && <p className="text-small text-ink-muted on-dark:text-white/80">{note}</p>}
      </div>
      {children}
    </div>
  );
}

/** Color swatch, value read from tokens.css. */
export function Swatch({ token, role }: { token: Token; role: string }) {
  return (
    <div className="border-line rounded-card flex flex-col overflow-hidden border">
      <div
        className="border-line h-20 border-b"
        style={{ background: `var(--color-${token.name})` }}
      />
      <div className="flex flex-col gap-0.5 p-3">
        <p className="text-small font-semibold">{token.name}</p>
        <p className="text-small text-ink-muted tabular-nums">{token.value}</p>
        <p className="text-small text-ink-muted">{role}</p>
      </div>
    </div>
  );
}

/** Small caption for token names under a specimen. */
export function Caption({ children }: { children: React.ReactNode }) {
  return <p className="text-small text-ink-muted on-dark:text-white/80 tabular-nums">{children}</p>;
}
