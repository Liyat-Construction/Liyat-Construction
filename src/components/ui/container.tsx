import { cn, pick } from '@/lib/utils';

const sizes = {
  content: 'max-w-content',
  prose: 'max-w-(--container-prose)',
} as const satisfies Record<string, string>;

export type ContainerSize = keyof typeof sizes;

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  /** Layout only (margin, grid placement) */
  className?: string;
}

/** Max width + side gutters. */
export function Container({ children, size = 'content', className }: ContainerProps) {
  return (
    <div className={cn('px-gutter mx-auto w-full', pick(sizes, size), className)}>{children}</div>
  );
}
