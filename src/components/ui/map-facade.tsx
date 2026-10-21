'use client';

import { useId, useState } from 'react';
import type { ContactPage } from '@/types/content';

interface MapFacadeProps {
  url: string;
  copy: ContactPage['map'];
  icon: React.ReactNode;
}

export function MapFacade({ url, copy, icon }: MapFacadeProps) {
  const [loaded, setLoaded] = useState(false);
  const id = useId();
  if (!url) return;
  return (
    <div className="border-line rounded-card overflow-hidden border bg-white">
      <div id={id} className="bg-stone aspect-square">
        {loaded ? (
          <iframe
            src={url}
            title={copy.title}
            className="h-full w-full border-0"
            referrerPolicy="no-referrer"
            allowFullScreen
          />
        ) : (
          <div className="text-ink-muted flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
            {icon}
            <p className="text-small max-w-prose">{copy.notice}</p>
          </div>
        )}
      </div>
      <button
        type="button"
        aria-expanded={loaded}
        aria-controls={id}
        onClick={() => setLoaded(!loaded)}
        className="text-brand text-small hover:bg-brand-tint min-h-11 w-full px-4 py-3 font-semibold underline underline-offset-4"
      >
        {loaded ? copy.hide : copy.load}
      </button>
    </div>
  );
}
