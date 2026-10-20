import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { CTASection } from '@/components/cta-section';
import { PROJECTS, getProjectBySlug } from '@/data/projects';
import { HOME_PAGE } from '@/data/home';
import { siteUrl } from '@/config/env';
import { siteConfig } from '@/config/site';
import { ArrowLeft, Calendar, Home, ChevronRight, MapPin, Tag } from 'lucide-react';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function toAbsoluteUrl(url: string) {
  return url.startsWith('http') ? url : `${siteUrl}${url}`;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const projectUrl = `${siteUrl}/projects/${slug}`;
  const imageUrl = toAbsoluteUrl(project.image?.url ?? siteConfig.seo.ogImage);
  const description = project.summary || `Explore our work at ${siteConfig.name}.`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: project.title,
      description,
      type: 'article',
      url: projectUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.image?.alt || project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const gallery = project.gallery ?? [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-primary relative overflow-hidden py-20 md:py-28">
        <div className="from-brand-primary to-brand-primary-dark absolute inset-0 bg-gradient-to-b" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-brand-accent absolute top-0 left-0 h-64 w-64 rounded-full opacity-10 blur-3xl" />
          <div className="bg-brand-accent absolute right-0 bottom-0 h-96 w-96 rounded-full opacity-10 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="group hover:border-brand-accent/30 hover:bg-brand-accent/20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-300"
            >
              <Home className="text-brand-accent h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="group-hover:text-brand-accent text-sm font-medium text-white/90 transition-colors">
                Home
              </span>
            </Link>
            <ChevronRight className="text-brand-accent/50 h-4 w-4" />
            <Link
              href="/projects"
              className="group hover:border-brand-accent/30 hover:bg-brand-accent/20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-300"
            >
              <span className="group-hover:text-brand-accent text-sm font-medium text-white/90 transition-colors">
                Projects
              </span>
            </Link>
            <ChevronRight className="text-brand-accent/50 h-4 w-4" />
            <span className="border-brand-accent/20 bg-brand-accent/10 text-brand-accent max-w-[200px] truncate rounded-full border px-3 py-1.5 text-sm font-semibold sm:max-w-[300px]">
              {project.title}
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
              {project.title}
            </h1>

            {project.client && (
              <p className="mt-4 text-lg text-white/70">
                Client: <span className="text-brand-accent">{project.client}</span>
              </p>
            )}

            <div className="text-text-inverse/80 mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {project.location && (
                <span className="flex items-center gap-2 text-sm">
                  <MapPin className="text-brand-accent h-4 w-4" />
                  {project.location}
                </span>
              )}
              {project.completedDate && (
                <span className="flex items-center gap-2">
                  <Calendar className="text-brand-accent h-4 w-4" />
                  <time dateTime={project.completedDate} className="text-sm">
                    {new Date(project.completedDate).toLocaleDateString(siteConfig.language, {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </time>
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className={cn('pt-12 pb-16 md:pt-16', 'bg-white')}>
        <Container>
          <div className="mx-auto max-w-3xl">
            {project.image && (
              <figure
                className={cn(
                  'relative mb-10 overflow-hidden rounded-2xl shadow-lg',
                  'aspect-[16/9]',
                  'ring-1 ring-gray-100'
                )}
              >
                <Image
                  src={project.image.url}
                  alt={project.image.alt || project.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="h-full w-full object-cover"
                />
              </figure>
            )}

            {/* Description */}
            <div className="mb-10">
              <p
                className={cn(
                  'text-lg leading-relaxed whitespace-pre-line md:text-xl',
                  'text-text-secondary'
                )}
              >
                {project.description}
              </p>
            </div>

            {/* Tags */}
            {project.tags.length > 0 && (
              <div className="mb-10">
                <h2
                  className={cn(
                    'mb-4 flex items-center gap-2 text-lg font-semibold',
                    'text-brand-primary'
                  )}
                >
                  <Tag className="text-brand-accent h-5 w-5" />
                  Highlights
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-brand-accent/20 bg-brand-accent/10 text-brand-accent rounded-full border px-4 py-1.5 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* External link */}
            {project.url && (
              <div className="mb-10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--brand-primary)_40%,transparent)]"
                >
                  Visit Project
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Gallery */}
          {gallery.length > 0 && (
            <div className="mx-auto mt-4 max-w-5xl">
              <h2 className={cn('mb-6 text-2xl font-bold md:text-3xl', 'text-brand-primary')}>
                Gallery
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((image) => (
                  <figure
                    key={image.url}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-gray-100"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt || project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="group text-brand-accent hover:text-brand-accent-dark inline-flex items-center gap-2 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              View all projects
            </Link>
          </div>
        </Container>
      </section>

      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
