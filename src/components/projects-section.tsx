/**
 * Projects Section
 * Display featured projects with premium card interactions
 */

'use client';

import { Container } from '@/components/container';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { PremiumButton } from '@/components/premium-button';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { Project } from '@/types/content';

interface ProjectsSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
}

export function ProjectsSection({ title, subtitle, projects }: ProjectsSectionProps) {
  if (projects.length === 0) {
    // eslint-disable-next-line unicorn/no-null -- React components should return null for no-render
    return null;
  }

  const displayProjects = projects;

  return (
    <section
      id="projects"
      className={cn('py-20 md:py-28 lg:py-32', 'bg-white', 'dark:bg-surface-page')}
    >
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
                Portfolio
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className={cn(
                  'mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
                  'text-brand-primary',
                  'dark:text-white'
                )}
              >
                {title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className={cn(
                  'mx-auto mt-4 max-w-2xl text-base md:text-lg',
                  'text-text-secondary',
                  'dark:text-text-muted'
                )}
              >
                {subtitle}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex w-full justify-end">
              <PremiumButton href="/projects" variant="primary">
                See All Projects
              </PremiumButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
          {displayProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <motion.article
        className={cn(
          'relative h-full overflow-hidden rounded-2xl',
          'border border-gray-100 bg-white shadow-sm',
          'dark:bg-surface-card dark:border-transparent',
          'transition-all duration-500',
          'hover:shadow-[0_20px_40px_color-mix(in_srgb,var(--brand-primary)_12%,transparent)]',
          'dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
        )}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="bg-surface-card relative aspect-[16/10] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image.url}
              alt={project.image.alt || project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              <span className="text-lg font-semibold">{project.title}</span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="from-brand-primary via-brand-primary/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className={cn(
              'mb-2 text-xl font-bold',
              'text-brand-primary',
              'dark:text-white',
              'transition-colors duration-300',
              'group-hover:text-brand-accent'
            )}
          >
            {project.title}
          </h3>
          <p
            className={cn(
              'text-[15px] leading-relaxed break-words whitespace-pre-line',
              'text-text-secondary',
              'dark:text-text-muted'
            )}
          >
            {project.summary}
          </p>
          <span className="text-brand-accent mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
            View Project
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        {/* Bottom accent line */}
        <div className="from-brand-accent via-brand-accent to-brand-accent absolute right-0 bottom-0 left-0 h-1 scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100" />
      </motion.article>
    </Link>
  );
}
