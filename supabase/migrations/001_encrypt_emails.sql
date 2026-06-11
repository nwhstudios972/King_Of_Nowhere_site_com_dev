-- Migration 001 — Encrypt beta_signups.email
--
-- Run only if you already deployed the old schema (with plaintext `email`).
-- For brand new projects, supabase/schema.sql is already up to date.
--
-- Procedure:
--   1. Add the new columns (nullable, so existing rows survive).
--   2. From the app side, run scripts/migrate-encrypt-emails.mjs to backfill
--      email_ciphertext / email_iv / email_hash from the existing email column.
--   3. After backfill, run the second block of this file to enforce NOT NULL
--      + UNIQUE and drop the legacy email column.

-- ── Step 1 : add new columns ────────────────────────────────────────────────
alter table public.beta_signups
  add column if not exists email_ciphertext text,
  add column if not exists email_iv text,
  add column if not exists email_hash text;

create unique index if not exists beta_signups_email_hash_key
  on public.beta_signups (email_hash);

-- ── Step 2 : (run after backfill) enforce constraints + drop plaintext ──────
-- alter table public.beta_signups
--   alter column email_ciphertext set not null,
--   alter column email_iv set not null,
--   alter column email_hash set not null;
--
-- alter table public.beta_signups drop column if exists email;
