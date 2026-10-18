import { Container } from '@/components/container';

function SkeletonCard() {
  return (
    <div className="dark:bg-surface-card relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-transparent">
      <div className="aspect-[16/10] animate-pulse bg-gray-200 dark:bg-gray-700" />
      <div className="p-6">
        <div className="mb-3 h-6 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
        <div className="mb-2 h-4 w-full animate-pulse rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="mb-2 h-4 w-5/6 animate-pulse rounded-md bg-gray-100 dark:bg-gray-800" />
        <div className="mt-4 h-4 w-32 animate-pulse rounded-md bg-gray-100 dark:bg-gray-800" />
      </div>
    </div>
  );
}

export default function ProjectsLoading() {
  return (
    <main className="dark:bg-surface-page min-h-screen bg-white">
      {/* Hero skeleton */}
      <section className="bg-brand-primary relative overflow-hidden py-20 md:py-24">
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 h-5 w-32 animate-pulse rounded-md bg-white/20" />
            <div className="mx-auto h-10 w-48 animate-pulse rounded-md bg-white/20 md:h-12" />
            <div className="mx-auto mt-5 h-5 w-64 animate-pulse rounded-md bg-white/10" />
          </div>
        </Container>
      </section>

      {/* Grid skeleton */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </Container>
      </section>
    </main>
  );
}
