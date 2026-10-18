/**
 * Floating "Chat on Telegram" button, shown on every page.
 * Hidden when siteConfig.social.telegram is empty.
 */

import { TelegramIcon, telegramUrl } from '@/components/social-links';

export function TelegramChatButton() {
  if (!telegramUrl) return;

  return (
    <div className="fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6">
      {/* Gentle attention pulse ring — expands outward from the button */}
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#0088cc]/50 motion-reduce:hidden"
        style={{ animationDuration: '2.5s', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }}
      />
      <span
        className="absolute -inset-1 animate-pulse rounded-full bg-[#0088cc]/25 motion-reduce:hidden"
        style={{ animationDuration: '3s' }}
      />

      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2.5 rounded-full bg-[#0088cc] px-5 py-3.5 text-sm font-bold text-white shadow-2xl shadow-[#0088cc]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#0077b3] hover:shadow-[0_8px_30px_rgba(0,136,204,0.45)] active:scale-95"
        aria-label="Chat on Telegram"
      >
        {/* Online indicator dot */}
        <span className="absolute -top-0.5 -left-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]" />

        <TelegramIcon className="h-[22px] w-[22px] shrink-0" />

        <span>Chat on Telegram</span>
      </a>
    </div>
  );
}
