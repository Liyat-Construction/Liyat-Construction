import { cn } from '@/lib/utils';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

/** Typography for long-form text: legal pages, project stories. Max 68 characters a line. */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        'text-body text-ink max-w-prose',
        '[&_h2]:text-h3 [&_h3]:text-h4 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:mt-8 [&_h3]:mb-3',
        '[&_p]:mt-4 [&_strong]:font-semibold [&>:first-child]:mt-0',
        '[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:ps-6 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:ps-6',
        '[&_li]:marker:text-brand [&_li]:mt-2 [&_li]:ps-1',
        '[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:decoration-2',
        className
      )}
    >
      {children}
    </div>
  );
}
