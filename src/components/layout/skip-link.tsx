/** First focusable element: jumps past the header to the layout's <main id="main"> (D-40). */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="rounded-control text-brand shadow-raise sr-only z-50 bg-white font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-4 focus:py-3"
    >
      Skip to content
    </a>
  );
}
