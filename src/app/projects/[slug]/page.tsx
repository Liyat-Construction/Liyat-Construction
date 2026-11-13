import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { PageHeader } from '@/components/sections/page-header';
import { ProjectDetail } from '@/components/sections/project-detail';
import { ProjectFigures } from '@/components/sections/project-figures';
import { SectionGroup } from '@/components/ui/section-group';
import { getProjectBySlug, PROJECT_PAGES, PROJECTS_PAGE } from '@/data/projects';
import { getServiceBySlug, getServiceTitles } from '@/data/services';

// Only the projects with a story have a page (D-184)
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECT_PAGES.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project?.story) return {};
  return pageMetadata(
    `/projects/${project.slug}`,
    project.story.metaTitle,
    project.story.metaDescription,
    // The share picture made by scripts/prepare-og.mjs (cover photo and project name, 1200 × 630)
    { url: `/images/projects/${project.slug}/og.jpg`, alt: project.image.alt }
  );
}

// PROJECT.md §7 (Project page)
export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project?.story) notFound();

  const { detail } = PROJECTS_PAGE;
  const services = project.services.flatMap((slug) => {
    const service = getServiceBySlug(slug);
    return service
      ? [{ title: service.title, href: `/services/${service.slug}`, summary: service.summary }]
      : [];
  });
  // The other project pages (D-184)
  const others = PROJECT_PAGES.filter((other) => other.slug !== project.slug).map((other) => ({
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
        eyebrow={`${detail.eyebrow} · ${project.client}`}
        title={project.title}
        intro={project.summary}
        image={project.image}
        actions={<ProjectFigures project={project} completedLabel={detail.completed} />}
      />
      <SectionGroup>
        <ProjectDetail project={project} services={services} labels={detail} />
        <FeaturedProjects
          id="more-projects"
          title={detail.related}
          projects={others}
          link={detail.allProjects}
        />
      </SectionGroup>
    </>
  );
}
