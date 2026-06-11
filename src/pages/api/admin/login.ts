import type { APIRoute } from 'astro';
import { ADMIN_COOKIE, COOKIE_MAX_AGE, buildAdminCookie, verifyAdminCredentials } from '../../../lib/auth';

export const prerender = false;

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, { count: number; first: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now - entry.first > WINDOW_MS) {
    attempts.set(ip, { count: 1, first: now });
    return true;
  }
  if (entry.count >= MAX_ATTEMPTS) return false;
  entry.count += 1;
  return true;
}

function loginPath(locale: string): string {
  return locale === 'en' ? '/en/admin/secure' : '/fr/admin/secure';
}

const DASHBOARD_PATH = '/fr/admin/dashboard';

export const POST: APIRoute = async ({ request, cookies, clientAddress, redirect }) => {
  const ip = clientAddress || 'unknown';
  const form = await request.formData().catch(() => null);
  const locale = String(form?.get('locale') ?? 'fr') === 'en' ? 'en' : 'fr';

  if (!rateLimit(ip)) {
    return redirect(`${loginPath(locale)}?error=rate`, 303);
  }

  if (!form) {
    return redirect(`${loginPath(locale)}?error=invalid`, 303);
  }

  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');

  if (!email || !password) {
    return redirect(`${loginPath(locale)}?error=invalid`, 303);
  }

  const ok = await verifyAdminCredentials(email, password);
  if (!ok) {
    return redirect(`${loginPath(locale)}?error=denied`, 303);
  }

  const cookieValue = buildAdminCookie(email);
  if (!cookieValue) {
    return redirect(`${loginPath(locale)}?error=config`, 303);
  }

  cookies.set(ADMIN_COOKIE, cookieValue, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });

  return redirect(DASHBOARD_PATH, 303);
};
