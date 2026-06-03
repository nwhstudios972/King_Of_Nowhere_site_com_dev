import type { APIRoute } from 'astro';
import { getServerSupabase } from '../../lib/supabase';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SIDES = new Set(['angel', 'demon', 'undecided']);
const LOCALES = new Set(['fr', 'en']);

function json(body: unknown, status = 200) {
    return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: { email?: unknown; side?: unknown; locale?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'invalid' }, 400);
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  const side = typeof payload.side === 'string' && SIDES.has(payload.side) ? payload.side : 'undecided';
  const locale = typeof payload.locale === 'string' && LOCALES.has(payload.locale) ? payload.locale : 'fr';

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ error: 'invalid' }, 400);
  }

  const supabase = getServerSupabase();
  if (!supabase) {
    console.error('[signup] Supabase env vars missing');
    return json({ error: 'server' }, 500);
  }

  const userAgent = request.headers.get('user-agent')?.slice(0, 500) ?? null;

  const { error } = await supabase.from('beta_signups').insert({
    email,
    preferred_side: side,
    locale,
    user_agent: userAgent,
  });

  if (error) {
    if (error.code === '23505') {
      return json({ error: 'duplicate' }, 409);
    }
    console.error('[signup] supabase error', error);
    return json({ error: 'server' }, 500);
  }

  return json({ ok: true }, 201);
};
