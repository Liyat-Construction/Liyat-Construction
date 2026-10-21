interface DraftLabelProps {
  children: React.ReactNode;
}

/**
 * Fixed corner label on review-only pages ("Design option A · draft for
 * review"), so a preview is never mistaken for the finished site.
 */
export function DraftLabel({ children }: DraftLabelProps) {
  return (
    <p className="rounded-control bg-ink text-small shadow-raise fixed bottom-4 left-1/2 z-50 -translate-x-1/2 px-3 py-2 font-semibold whitespace-nowrap text-white">
      {children}
    </p>
  );
}
