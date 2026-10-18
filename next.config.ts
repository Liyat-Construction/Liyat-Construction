import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// `npm run build:static` sets STATIC_EXPORT=true and outputs plain HTML files to /out
// for any static host (cPanel, shared hosting, Netlify, GitHub Pages, ...).
// The default `npm run build` targets Vercel / Node hosting.
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https:",
  "font-src 'self'",
  "connect-src 'self' https:",
  // Google Maps embed in the contact section
  'frame-src https://www.google.com https://maps.google.com',
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    // Static hosts have no image optimizer, so images are served as-is there
    unoptimized: isDev || isStaticExport,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Security headers (Vercel / Node hosting). Static hosts ignore this —
  // configure headers in the host's panel or .htaccess instead.
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [{ source: '/:path*', headers: securityHeaders }];
        },
      }),

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Static export writes /about/index.html etc. so clean URLs work on any host
  ...(isStaticExport ? { output: 'export' as const, trailingSlash: true } : {}),

  poweredByHeader: false,
};

export default nextConfig;
