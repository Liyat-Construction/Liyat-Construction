/**
 * Environment Configuration
 * Centralized environment variable management with validation
 */

import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // Analytics (optional)
  NEXT_PUBLIC_GA_ID: z.string().optional(),

  // SEO / Verification (optional)
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Environment validation failed:', parsedEnv.error.format());
  throw new Error('Invalid environment configuration');
}

export const env = parsedEnv.data;

export const isProduction = env.NODE_ENV === 'production';

// Site URL with trailing slash handling
export const siteUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
