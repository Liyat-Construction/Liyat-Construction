import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { ProofStrip } from '@/components/sections/proof-strip';
import { Story } from '@/components/sections/story';
import { TeamGrid } from '@/components/sections/team-grid';
import { SectionGroup } from '@/components/ui/section-group';
import { ABOUT_PAGE } from '@/data/about';
import { ABOUT_FIGURES, COMPANY_FACTS, SAFETY_PRACTICES, TEAM } from '@/data/company';
import { PARTNERS } from '@/data/partners';

const { header, story, figures, missionVision, values, clients, team, safety } = ABOUT_PAGE;

export const metadata: Metadata = pageMetadata('/about', header.title, header.description);

// Design System §4 (About), with the owner's revised section order (D-101)
// and the facts shown both beside the story and as figures (D-51).
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
      <SectionGroup>
        <Story
          id="story"
          eyebrow={story.eyebrow}
          title={story.title}
          paragraphs={story.paragraphs}
          facts={{ title: story.factsTitle, rows: COMPANY_FACTS }}
        />
        <ProofStrip id="about-figures" {...figures} figures={ABOUT_FIGURES} />
        <FeatureGrid
          id="mission-vision"
          columns={2}
          itemIcons={['target', 'eye']}
          {...missionVision}
        />
        <FeatureGrid id="values" columns={3} {...values} />
        <ProofStrip id="about-clients" {...clients} figures={[]} clients={PARTNERS} />
        <TeamGrid {...team} members={TEAM} />
        <FeatureGrid id="safety" icon="check" {...safety} items={SAFETY_PRACTICES} />
      </SectionGroup>
    </>
  );
}
