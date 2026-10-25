import { LegalDocument } from '@/components/ui/legal-document';
import { Section } from '@/components/ui/section';
import type { LegalPage } from '@/types/content';

export function LegalContent({ copy, email }: { copy: LegalPage; email: string }) {
  return (
    <Section>
      <LegalDocument copy={copy} email={email} />
    </Section>
  );
}
