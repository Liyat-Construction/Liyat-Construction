'use client';

import { SystemMessage } from '@/components/ui/system-message';
import { siteConfig } from '@/config/site';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { system } = siteConfig;
  return (
    <SystemMessage
      copy={system.error}
      home={system.home}
      contact={system.contact}
      retry={{ label: system.retry, onClick: reset }}
    />
  );
}
