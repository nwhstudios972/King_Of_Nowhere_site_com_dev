import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto';

const ALGO = 'aes-256-gcm';
const IV_LENGTH = 12;
const KEY_LENGTH = 32;

function getEnv(name: string): string | undefined {
  return import.meta.env[name] ?? process.env[name];
}

function getKey(): Buffer | null {
  const raw = getEnv('EMAIL_ENCRYPTION_KEY');
  if (!raw) return null;
  const key = Buffer.from(raw.trim(), 'hex');
  if (key.length !== KEY_LENGTH) return null;
  return key;
}

export type EncryptedField = {
  ciphertext: string;
  iv: string;
};

export function encryptEmail(plain: string): EncryptedField | null {
  const key = getKey();
  if (!key) return null;

  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGO, key, iv);
  const enc = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();

  return {
    ciphertext: Buffer.concat([enc, tag]).toString('base64'),
    iv: iv.toString('base64'),
  };
}

export function decryptEmail(ciphertext: string, iv: string): string | null {
  const key = getKey();
  if (!key) return null;

  try {
    const data = Buffer.from(ciphertext, 'base64');
    const ivBuf = Buffer.from(iv, 'base64');
    if (ivBuf.length !== IV_LENGTH || data.length < 17) return null;

    const tag = data.subarray(data.length - 16);
    const enc = data.subarray(0, data.length - 16);

    const decipher = createDecipheriv(ALGO, key, ivBuf);
    decipher.setAuthTag(tag);
    const dec = Buffer.concat([decipher.update(enc), decipher.final()]);
    return dec.toString('utf8');
  } catch {
    return null;
  }
}

export function hashEmail(plain: string): string {
  return createHash('sha256').update(plain.trim().toLowerCase(), 'utf8').digest('hex');
}

export function hasEncryptionKey(): boolean {
  return getKey() !== null;
}
