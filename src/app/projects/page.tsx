import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHeader } from '@/components/sections/page-header';
import { ProjectGrid } from '@/components/sections/project-grid';
import { siteConfig } from '@/config/site';
import { CTA_BAND } from '@/data/cta';
import { PROJECTS_NEWEST_FIRST, PROJECTS_PAGE } from '@/data/projects';
import { getServiceTitles } from '@/data/services';

const { header } = PROJECTS_PAGE;

export const metadata: Metadata = pageMetadata('/projects', header.title, header.description);

// Design System §4 (Projects index)
export default function ProjectsPage() {
  const projects = PROJECTS_NEWEST_FIRST.map((project) => ({
    project,
    serviceNames: getServiceTitles(project.services),
  }));

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
      />
      <ProjectGrid projects={projects} />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
