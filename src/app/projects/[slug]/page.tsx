import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections/cta-band';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { PageHeader } from '@/components/sections/page-header';
import { PhotoGallery } from '@/components/sections/photo-gallery';
import { ProjectDetail } from '@/components/sections/project-detail';
import { siteUrl } from '@/config/env';
import { siteConfig } from '@/config/site';
import { CTA_BAND } from '@/data/cta';
import { getProjectBySlug, getRelatedProjects, PROJECTS, PROJECTS_PAGE } from '@/data/projects';
import { getServiceTitles, SERVICES } from '@/data/services';
import { preparedImageUrl } from '@/lib/image-loader';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Open Graph and canonical stay as the template had them until P14's metadata helper
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};

  const url = `${siteUrl}/projects/${project.slug}`;
  const image = { url: `${siteUrl}${preparedImageUrl(project.image.url)}`, alt: project.image.alt };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [image.url],
    },
  };
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
      <PhotoGallery id="gallery" tone="stone" {...detail.gallery} images={project.gallery} />
      <FeaturedProjects
        id="related-projects"
        // Tones alternate: stone after the gallery, else after the paper body
        tone={project.gallery.length > 0 ? 'paper' : 'stone'}
        title={detail.related}
        projects={related}
        link={detail.allProjects}
      />
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </>
  );
}
