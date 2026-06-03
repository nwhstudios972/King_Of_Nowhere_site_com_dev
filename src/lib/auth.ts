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
  if (!expectedEmail || !expectedHash) return false;

  const submittedEmail = email.trim().toLowerCase();
  // Use bcrypt.compare regardless of email match to keep timing roughly constant.
  const passwordOk = await bcrypt.compare(password, expectedHash);
  return submittedEmail === expectedEmail && passwordOk;
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
