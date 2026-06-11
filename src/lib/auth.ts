import bcrypt from 'bcryptjs';
import { createHmac, timingSafeEqual } from 'node:crypto';

export const ADMIN_COOKIE = 'kon_admin';
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getEnv(name: string): string | undefined {
  return import.meta.env[name] ?? process.env[name];
}

export function getAdminEmail(): string | null {
  const email = getEnv('ADMIN_EMAIL');
  return email ? email.toLowerCase() : null;
}

function getAdminPasswordHash(): string | null {
  return getEnv('ADMIN_PASSWORD_HASH') ?? null;
}

function getAuthSecret(): string | null {
  return getEnv('AUTH_SECRET') ?? null;
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  const expectedEmail = getAdminEmail();
  const expectedHash = getAdminPasswordHash();
  const secret = getAuthSecret();

  // ── DIAG ──────────────────────────────────────────────────────────────
  // Temporary login diagnostic. Prints flags only, never the values.
  // Remove once we know why the prod login is failing.
  const hashLooksValid =
    !!expectedHash &&
    /^\$2[aby]\$\d{2}\$/.test(expectedHash) &&
    expectedHash.length === 60;

  const hashPrefix = expectedHash ? expectedHash.slice(0, 4) : '(none)';
  const submittedEmail = email.trim().toLowerCase();

  console.log('[login-diag]', {
    env_ADMIN_EMAIL_present: !!expectedEmail,
    env_ADMIN_EMAIL_length: expectedEmail?.length ?? 0,
    env_ADMIN_PASSWORD_HASH_present: !!expectedHash,
    env_ADMIN_PASSWORD_HASH_length: expectedHash?.length ?? 0,
    env_ADMIN_PASSWORD_HASH_prefix: hashPrefix,
    hash_format_valid: hashLooksValid,
    env_AUTH_SECRET_present: !!secret,
    env_AUTH_SECRET_length: secret?.length ?? 0,
    submitted_email_length: submittedEmail.length,
    submitted_password_length: password.length,
    email_matches: !!expectedEmail && submittedEmail === expectedEmail,
  });

  if (!expectedEmail || !expectedHash) {
    console.log('[login-diag] FAIL → missing env var');
    return false;
  }
  // ──────────────────────────────────────────────────────────────────────

  // Use bcrypt.compare regardless of email match to keep timing roughly constant.
  let passwordOk = false;
  try {
    passwordOk = await bcrypt.compare(password, expectedHash);
  } catch (err) {
    console.log('[login-diag] FAIL → bcrypt.compare threw', (err as Error)?.message);
    return false;
  }

  const emailOk = submittedEmail === expectedEmail;
  console.log('[login-diag] result', { emailOk, passwordOk });

  return emailOk && passwordOk;
}

function b64urlEncode(input: string): string {
  return Buffer.from(input, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function b64urlDecode(input: string): string {
  const pad = input.length % 4 === 0 ? '' : '='.repeat(4 - (input.length % 4));
  return Buffer.from(input.replace(/-/g, '+').replace(/_/g, '/') + pad, 'base64').toString('utf8');
}

function sign(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

export function buildAdminCookie(email: string): string | null {
  const secret = getAuthSecret();
  if (!secret) return null;
  const emailEnc = b64urlEncode(email.toLowerCase());
  const ts = Math.floor(Date.now() / 1000).toString();
  const payload = `${emailEnc}.${ts}`;
  return `${payload}.${sign(payload, secret)}`;
}

export function verifyAdminCookie(value: string | undefined | null): boolean {
  if (!value) return false;
  const secret = getAuthSecret();
  const expectedEmail = getAdminEmail();
  if (!secret || !expectedEmail) return false;

  const parts = value.split('.');
  if (parts.length !== 3) return false;
  const [emailEnc, ts, sig] = parts;
  const payload = `${emailEnc}.${ts}`;

  const expected = sign(payload, secret);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  if (!timingSafeEqual(a, b)) return false;

  const issuedAt = Number(ts);
  if (!Number.isFinite(issuedAt)) return false;
  const ageSec = Math.floor(Date.now() / 1000) - issuedAt;
  if (ageSec < 0 || ageSec > COOKIE_MAX_AGE) return false;

  let email: string;
  try {
    email = b64urlDecode(emailEnc);
  } catch {
    return false;
  }
  return email.toLowerCase() === expectedEmail;
}
