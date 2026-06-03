-- King Of Nowhere — Beta signups table
-- Run this in Supabase SQL Editor once after creating your project.

create extension if not exists "pgcrypto";

create table if not exists public.beta_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
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
-- Inserts happen ONLY from the Astro API endpoint using the service_role key,
-- which bypasses RLS. No anon or authenticated client can read or write.
alter table public.beta_signups enable row level security;

-- Optional: no policies = nothing readable/writable to non-service roles.
