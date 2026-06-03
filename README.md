# King Of Nowhere — Site community

Site officiel de **King Of Nowhere**, MMORPG par **Nowhere Studios**.
One-pager bilingue (FR/EN) + devlog markdown + capture beta via Supabase.

## Stack

- [Astro 4](https://astro.build) (output `hybrid`)
- [Tailwind CSS](https://tailwindcss.com) + `@tailwindcss/typography`
- [Supabase](https://supabase.com) — table `beta_signups`
- Adapter `@astrojs/node` pour les routes API

## Démarrer en local

```bash
npm install
cp .env.example .env   # puis remplir les variables Supabase
npm run dev            # http://localhost:4321
```

La racine `/` redirige vers `/fr/`. Routes disponibles :

- `/fr/`, `/en/` — one-pager hype
- `/fr/devlog/`, `/en/devlog/` — liste des articles
- `/fr/devlog/[slug]/`, `/en/devlog/[slug]/` — article
- `/api/signup` — POST `{email, side, locale}` → insert Supabase

## Configurer Supabase

1. Crée un projet sur [supabase.com](https://supabase.com).
2. Dans l'éditeur SQL, exécute `supabase/schema.sql` (crée la table + RLS).
3. Récupère **Project URL** et **service_role key** (Settings → API).
4. Renseigne `.env` :

```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

> ⚠️ La clé `service_role` ne doit **jamais** apparaître côté client.
> Elle n'est utilisée que dans `src/pages/api/signup.ts` (server-side).

## Ajouter un article au devlog

Ajoute un fichier `.md` ou `.mdx` dans :

- `src/content/devlog/fr/mon-article.md` (version FR)
- `src/content/devlog/en/my-article.md` (version EN)

Frontmatter requis :

```yaml
---
title: "Mon titre"
excerpt: "Résumé court qui s'affiche dans la liste."
date: 2026-06-15
lang: fr     # ou 'en'
author: Nowhere Studios
draft: false
---
```

## Modifier les textes du site

**Tous les textes** (hero, sections, CTAs, formulaire, footer) sont
centralisés dans `src/i18n/ui.ts`. Édite-les là, jamais dans les composants.

## Build & deploy

```bash
npm run build     # génère dist/
npm run preview   # tester la version production locale
```

Pour le déploiement (hybrid = SSR + statique), n'importe quel hébergeur Node
fonctionne :

- **Vercel** (recommandé pour Astro) : connecte le repo, ajoute les env
  vars `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
- **Netlify**, **Cloudflare Pages**, **Render** : équivalents.

## Structure

```
src/
├── components/       # Hero, WorldPitch, WarIntro, Factions, DevlogPreview, BetaSignup, Header, Footer
├── content/devlog/   # articles FR + EN
├── i18n/ui.ts        # dictionnaire (single source of truth des textes)
├── layouts/          # BaseLayout, DevlogLayout
├── lib/supabase.ts   # client Supabase server-side
├── pages/
│   ├── fr/ en/       # routes localisées
│   └── api/signup.ts # endpoint capture email
└── styles/global.css
```

## Hors scope V1 (idées V2)

- Choix de camp interactif (skin global Ange/Démon du site)
- Intégration Discord
- Trailer vidéo + galerie concept art
- Compte à rebours / roadmap publique
- Dashboard membre

—

© Nowhere Studios
