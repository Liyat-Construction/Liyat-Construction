import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// `npm run build:static` sets STATIC_EXPORT=true and outputs plain HTML files to /out
// for any static host (cPanel, shared hosting, Netlify, GitHub Pages, ...).
// The default `npm run build` targets Vercel / Node hosting.
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https:",
  "font-src 'self'",
  "connect-src 'self' https:",
  "frame-src 'none'",
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
    // Images are prepared ahead of time by `npm run images` (PROJECT.md §9, D-35);
    // the loader picks a prepared width, on every host and in dev.
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    // The widths srcset asks for; the loader maps each to the nearest prepared one
    deviceSizes: [400, 640, 800, 1024, 1600, 1920],
    imageSizes: [],
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
