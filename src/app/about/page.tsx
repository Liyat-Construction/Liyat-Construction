import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { PageHeader } from '@/components/sections/page-header';
import { ProofStrip } from '@/components/sections/proof-strip';
import { Story } from '@/components/sections/story';
import { TeamFacts } from '@/components/sections/team-facts';
import { SectionGroup } from '@/components/ui/section-group';
import { ABOUT_PAGE } from '@/data/about';
import {
  ABOUT_FIGURES,
  COMPANY_FACTS,
  COMPANY_REGISTRATION,
  SAFETY_PRACTICES,
} from '@/data/company';
import { PARTNERS } from '@/data/partners';
import {
  SITE_TEAMS,
  TEAM_FIGURES,
  TEAM_FOOTNOTE,
  TEAM_GROUPS,
  TEAM_SECTION,
  TEAM_TOTAL,
} from '@/data/team';

const { header, story, figures, missionVision, values, clients, safety } = ABOUT_PAGE;

export const metadata: Metadata = pageMetadata(
  '/about',
  header.metaTitle ?? header.title,
  header.description
);

// PROJECT.md §7 (About), with the owner's revised section order (D-101)
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
          moreFacts={{ title: story.registrationTitle, rows: COMPANY_REGISTRATION }}
        />
        <ProofStrip id="about-figures" {...figures} figures={ABOUT_FIGURES} />
        <FeatureGrid
          id="mission-vision"
          columns={2}
          itemIcons={['eye', 'target']}
          {...missionVision}
        />
        <FeatureGrid id="values" columns={3} {...values} />
        <TeamFacts
          id="team"
          {...TEAM_SECTION}
          figures={TEAM_FIGURES}
          siteTeams={SITE_TEAMS}
          groups={TEAM_GROUPS}
          total={TEAM_TOTAL}
          footnote={TEAM_FOOTNOTE}
        />
        <ProofStrip id="about-clients" {...clients} figures={[]} clients={PARTNERS} />
        <FeatureGrid id="safety" icon="check" {...safety} items={SAFETY_PRACTICES} />
      </SectionGroup>
    </>
  );
}
