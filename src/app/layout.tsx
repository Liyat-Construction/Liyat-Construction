import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { OrganizationSchema } from '@/components/organization-schema';
import { TelegramChatButton } from '@/components/telegram-chat-button';
import { env, siteUrl } from '@/config/env';
import { siteConfig } from '@/config/site';
import 'react-phone-number-input/style.css';
import './globals.css';

const brandColors = siteConfig.brand.colors;

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seo.titleDefault,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.metaDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon-96x96.png',
  },
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteUrl,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    images: [siteConfig.seo.ogImage],
    creator: siteConfig.social.xHandle || undefined,
  },
  verification: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: siteConfig.seo.category,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('app-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored === 'dark' || (!stored && prefersDark);
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })()
            `,
          }}
        />
        <style>{`
          :root {
            --brand-primary: ${brandColors.primary};
            --brand-primary-dark: ${brandColors.primaryDark};
            --brand-primary-light: ${brandColors.primaryLight};
            --brand-accent: ${brandColors.accent};
            --brand-accent-dark: ${brandColors.accentDark};
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        {env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <OrganizationSchema siteUrl={siteUrl} />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <TelegramChatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
