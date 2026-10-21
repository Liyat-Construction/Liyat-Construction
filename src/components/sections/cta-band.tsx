import type { CtaBandContent } from '@/types/content';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';

interface CtaBandProps extends CtaBandContent {
  /** Shown as a second action; omitted when empty */
  phone?: string;
}

/** Green band that ends every page except Contact: heading, one sentence, the primary action and the phone. */
export function CtaBand({ title, text, action, phone }: CtaBandProps) {
  return (
    <Section tone="brand" spacing="compact" labelledBy="cta-band-title">
      <div className="gap-grid grid items-end lg:grid-cols-12">
        <SectionHeading id="cta-band-title" title={title} intro={text} className="lg:col-span-8" />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:col-span-4 lg:justify-end">
          <Button href={action.href} size="lg">
            {action.label}
          </Button>
          {phone && (
            <Button href={`tel:${phone.replaceAll(' ', '')}`} variant="text" icon="phone">
              {phone}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
