import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix in the URL (e.g., /en/about, /uk/about)
  localePrefix: 'always',

  // Detect locale from Accept-Language header
  localeDetection: true,
});

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, fonts, etc.)
  matcher: [
    // Match all pathnames except for those starting with:
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
