interface FooterSurfaceProps {
  children: React.ReactNode;
}

export function FooterSurface({ children }: FooterSurfaceProps) {
  return (
    <footer
      data-on-dark
      className="bg-ink text-small [&_[data-footer-heading]]:text-eyebrow [&_[data-footer-heading]]:text-brand-light border-t border-white/15 text-white [&_[data-footer-agency]]:font-semibold [&_[data-footer-credit]]:font-normal [&_[data-footer-heading]]:uppercase"
    >
      {children}
    </footer>
  );
}
