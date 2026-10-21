import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { CtaBand } from '@/components/sections/cta-band';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { ProofStrip } from '@/components/sections/proof-strip';
import { Story } from '@/components/sections/story';
import { TeamGrid } from '@/components/sections/team-grid';
import { siteConfig } from '@/config/site';
import { ABOUT_PAGE } from '@/data/about';
import { ABOUT_FIGURES, COMPANY_FACTS, CREDENTIALS, SAFETY_PRACTICES, TEAM } from '@/data/company';
import { CTA_BAND } from '@/data/cta';

const { header, story, figures, offer, audience, purpose, principles, team, credentials, safety } =
  ABOUT_PAGE;

export const metadata: Metadata = pageMetadata('/about', header.title, header.description);

const credentialItems = CREDENTIALS.map((credential) => ({
  title: credential.name,
  text: [credential.issuer, credential.detail].filter(Boolean).join(' · '),
}));

// Design System §4 (About), with the template's offer, audience and purpose sections kept (D-50)
// and the facts shown both beside the story and as figures (D-51). Tones alternate paper ↔ stone.
export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
        image={header.image}
      />
      <Story
        id="story"
        eyebrow={story.eyebrow}
        title={story.title}
        paragraphs={story.paragraphs}
        facts={{ title: story.factsTitle, rows: COMPANY_FACTS }}
      />
      <ProofStrip tone="stone" {...figures} figures={ABOUT_FIGURES} />
      <FeatureGrid id="offer" {...offer} />
      <Story id="audience" tone="stone" {...audience} />
      <Story id="purpose" {...purpose} />
      <FeatureGrid id="principles" tone="stone" {...principles} />
      <TeamGrid {...team} members={TEAM} />
      <FeatureGrid
        id="credentials"
        tone="stone"
        icon="document"
        columns={2}
        {...credentials}
        items={credentialItems}
      />
      <FeatureGrid id="safety" {...safety} items={SAFETY_PRACTICES} />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
