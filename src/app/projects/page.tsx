import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/page-header';
import { PhotoGallery } from '@/components/sections/photo-gallery';
import { ProjectGrid } from '@/components/sections/project-grid';
import { ProofStrip } from '@/components/sections/proof-strip';
import { PARTNERS } from '@/data/partners';
import { PROJECTS_NEWEST_FIRST, PROJECTS_PAGE } from '@/data/projects';
import { getServiceTitles } from '@/data/services';

const { header, clients, gallery } = PROJECTS_PAGE;

export const metadata: Metadata = pageMetadata('/projects', header.title, header.description);

// Design System §4 (Projects): the header, every project, then the clients
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
        image={header.image}
      />
      <ProjectGrid projects={projects} />
      {/* Site photos stay with their project now that project pages are gone (O-12) */}
      {projects
        .filter(({ project }) => project.gallery.length > 0)
        .map(({ project }) => (
          <PhotoGallery
            key={project.slug}
            id={`gallery-${project.slug}`}
            eyebrow={gallery.eyebrow}
            title={project.title}
            images={project.gallery}
          />
        ))}
      {/* The clients behind the projects; the section heading names them, so no sub-heading */}
      <ProofStrip {...clients} figures={[]} clients={PARTNERS} />
    </>
  );
}
