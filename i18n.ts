import { getRequestConfig } from 'next-intl/server';

// Define supported locales
export const locales = ['en', 'uk', 'de'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale configuration
export default getRequestConfig(async ({ requestLocale }) => {
  // This will get the locale from either:
  // 1. URL parameter (for static pages)
  // 2. Middleware (for dynamic pages)
  let locale = await requestLocale;

  // Ensure we have a valid locale
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
