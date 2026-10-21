import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections/cta-band';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { PageHeader } from '@/components/sections/page-header';
import { PhotoGallery } from '@/components/sections/photo-gallery';
import { ProjectDetail } from '@/components/sections/project-detail';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/config/site';
import { CTA_BAND } from '@/data/cta';
import { getProjectBySlug, getRelatedProjects, PROJECTS, PROJECTS_PAGE } from '@/data/projects';
import { getServiceTitles, SERVICES } from '@/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Open Graph and canonical use P14's shared metadata helper
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};

  return pageMetadata(`/projects/${project.slug}`, project.title, project.summary, project.image);
}

// Design System §4 (Project detail)
export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  const { detail } = PROJECTS_PAGE;
  const services = SERVICES.filter((service) => project.services.includes(service.slug)).map(
    (service) => ({ label: service.title, href: `/services/${service.slug}` })
  );
  const related = getRelatedProjects(project).map((other) => ({
    project: other,
    serviceNames: getServiceTitles(other.services),
  }));

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
        eyebrow={project.client}
        title={project.title}
        intro={project.summary}
        image={project.image}
      />
      <ProjectDetail project={project} labels={detail} services={services} />
      <PhotoGallery id="gallery" {...detail.gallery} images={project.gallery} />
      <FeaturedProjects
        id="related-projects"
        title={detail.related}
        projects={related}
        link={detail.allProjects}
      />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
