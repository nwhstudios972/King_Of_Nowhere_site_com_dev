-- King Of Nowhere — Beta signups table
-- Run this in Supabase SQL Editor once after creating your project.
--
-- Encryption model:
--   - email_ciphertext : AES-256-GCM ciphertext + auth tag (base64). Produced
--     by the Astro API using EMAIL_ENCRYPTION_KEY. Not readable from Supabase
--     alone.
--   - email_iv         : 96-bit IV for GCM (base64), unique per row.
--   - email_hash       : SHA-256 hex of the lowercased/trimmed email. Used for
--     dedup + lookup. Not reversible.

create extension if not exists "pgcrypto";

create table if not exists public.beta_signups (
  id uuid primary key default gen_random_uuid(),
  email_ciphertext text not null,
  email_iv text not null,
  email_hash text not null unique,
  preferred_side text not null default 'undecided'
    check (preferred_side in ('angel', 'demon', 'undecided')),
  locale text not null default 'fr'
    check (locale in ('fr', 'en')),
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists beta_signups_created_at_idx
  on public.beta_signups (created_at desc);

-- Row Level Security: lock everything down.
-- Inserts and reads happen ONLY from the Astro API endpoints using the
-- service_role key, which bypasses RLS. No anon or authenticated client can
-- read or write.
alter table public.beta_signups enable row level security;
