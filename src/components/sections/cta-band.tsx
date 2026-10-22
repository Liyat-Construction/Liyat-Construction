import type { CtaBandContent } from '@/types/content';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface CtaBandProps extends CtaBandContent {
  /** Dialled by the second button ("Call us now"); omitted when empty */
  phone?: string;
}

/**
 * The closing section on every page (D-69), rendered once by the layout above the
 * footer: Ink with the drawing grid, the green rule on its top edge, a centred
 * question and line, then two buttons: contact, and "Call us now", which dials
 * the number (shown in the footer right below). With the footer it forms
 * one dark ending.
 */
export function CtaBand({ title, text, action, call, phone }: CtaBandProps) {
  return (
    <Section tone="ink" pattern="grid" rule labelledBy="cta-band-title">
      <div className="flex flex-col items-center gap-10">
        <SectionHeading id="cta-band-title" align="center" title={title} intro={text} />
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={action.href} size="lg" icon="arrow">
            {action.label}
          </Button>
          {phone && (
            <Button
              href={`tel:${phone.replaceAll(' ', '')}`}
              size="lg"
              variant="secondary"
              icon="phone"
            >
              {call}
              <span className="sr-only">, {phone}</span>
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
