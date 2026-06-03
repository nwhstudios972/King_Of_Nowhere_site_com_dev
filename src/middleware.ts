import { defineMiddleware } from 'astro:middleware';
import { ADMIN_COOKIE, verifyAdminCookie } from './lib/auth';

const PUBLIC_EXACT = new Set<string>([
  '/',
  '/fr',
  '/fr/',
  '/en',
  '/en/',
  '/fr/admin/secure',
  '/fr/admin/secure/',
  '/en/admin/secure',
  '/en/admin/secure/',
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-index.xml',
]);

const PUBLIC_PREFIXES = [
  '/_astro/',
  '/_image',
  '/images/',
  '/api/admin/',
  '/api/signup',
];

function isPublic(pathname: string): boolean {
  if (PUBLIC_EXACT.has(pathname)) return true;
  for (const prefix of PUBLIC_PREFIXES) {
    if (pathname === prefix || pathname.startsWith(prefix)) return true;
  }
  return false;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const cookie = context.cookies.get(ADMIN_COOKIE)?.value;
  const isAdmin = verifyAdminCookie(cookie);
  context.locals.isAdmin = isAdmin;

  if (isAdmin) {
    return next();
  }

  const pathname = context.url.pathname;
  if (isPublic(pathname)) {
    return next();
  }

  // Non-admin trying to access a gated route → send them to the coming-soon home.
  return context.redirect('/fr/', 302);
});
