import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';
import { CtaBand } from '@/components/sections/cta-band';
import { CTA_BAND } from '@/data/cta';
import { PROJECTS as projects } from '@/data/projects';
import { HOME_PAGE } from '@/data/home';
import { siteConfig } from '@/config/site';
import type { Project } from '@/types/content';
import { Home, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore our portfolio of work at ${siteConfig.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-primary relative overflow-hidden py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-brand-accent absolute top-0 left-0 h-56 w-56 rounded-full opacity-10 blur-3xl" />
          <div className="bg-brand-accent absolute right-0 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl" />
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
            <span className="border-brand-accent/20 bg-brand-accent/10 text-brand-accent rounded-full border px-3 py-1.5 text-sm font-semibold">
              Projects
            </span>
          </nav>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="bg-brand-accent h-px w-8" />
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                Portfolio
              </span>
              <div className="bg-brand-accent h-px w-8" />
            </div>
            <h1 className="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Our Work
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {HOME_PAGE.projectsSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <Container>
          {projects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-text-secondary text-lg">No projects published yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article
        className={cn(
          'relative h-full overflow-hidden rounded-2xl',
          'border border-gray-100 bg-white shadow-sm',
          'transition-all duration-500',
          'hover:shadow-[0_20px_40px_color-mix(in_srgb,var(--brand-primary)_12%,transparent)]'
        )}
      >
        <div className="bg-surface-card relative aspect-[16/10] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image.url}
              alt={project.image.alt || project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              <span className="text-lg font-semibold">{project.title}</span>
            </div>
          )}
          <div className="from-brand-primary via-brand-primary/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <h2
            className={cn(
              'mb-2 text-xl font-bold',
              'text-brand-primary',
              'transition-colors duration-300',
              'group-hover:text-brand-accent'
            )}
          >
            {project.title}
          </h2>
          <p
            className={cn(
              'text-[15px] leading-relaxed break-words whitespace-pre-line',
              'text-text-secondary'
            )}
          >
            {project.summary}
          </p>
        </div>

        <div className="from-brand-accent via-brand-accent to-brand-accent absolute right-0 bottom-0 left-0 h-1 scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100" />
      </article>
    </Link>
  );
}
