# King Of Nowhere — Site community

Site officiel de **King Of Nowhere**, MMORPG par **Nowhere Studios**.
One-pager bilingue (FR/EN) + devlog markdown + capture beta via Supabase.

## Stack

- [Astro 4](https://astro.build) (output `server`, SSR)
- [Tailwind CSS](https://tailwindcss.com) + `@tailwindcss/typography`
- [Supabase](https://supabase.com) — table `beta_signups`
- Adapter `@astrojs/vercel` (serverless) pour le déploiement

## Démarrer en local

```bash
npm install
cp .env.example .env   # puis remplir les variables Supabase
npm run dev            # http://localhost:4321
```

La racine `/` redirige vers `/fr/`. Routes disponibles :

- `/fr/`, `/en/` — page "Coming Soon" pour le public, one-pager complet pour les admins connectés
- `/fr/admin/secure`, `/en/admin/secure` — formulaire de login admin (non lié publiquement)
- `/fr/devlog/`, `/en/devlog/` — liste des articles (admin uniquement)
- `/fr/devlog/[slug]/`, `/en/devlog/[slug]/` — article (admin uniquement)
- `/fr/univers/*`, `/en/univers/*` — codex (admin uniquement)
- `/api/signup` — POST `{email, side, locale}` → insert Supabase (public, depuis la page coming soon)
- `/api/admin/login`, `/api/admin/logout` — endpoints d'auth admin

## Accès admin (gate "Coming Soon")

Pendant la phase de développement, le site complet est verrouillé : le public ne voit que la page "Coming Soon". Seul l'admin connecté voit le vrai contenu (devlog, univers, one-pager).

**Configurer l'accès :**

```bash
# 1. Générer le hash bcrypt du mot de passe admin
node scripts/hash-password.mjs
# (entrer le mot de passe quand demandé — il imprime le hash)

# 2. Générer le secret HMAC pour signer les cookies
openssl rand -hex 32
```

Renseigne ensuite dans `.env` :

```
ADMIN_EMAIL=ton.email@exemple.com
ADMIN_PASSWORD_HASH=\$2b\$12\$...   # hash généré ci-dessus, $ ÉCHAPPÉS avec \$
AUTH_SECRET=...                      # 64 caractères hex
```

> ⚠️ **Important** : Vite interpole les `$` dans `.env` (les traite comme
> variables). Le bcrypt hash en contient plusieurs. Échappe chaque `$` avec
> `\$` sinon la valeur est silencieusement vidée. Le script
> `hash-password.mjs` imprime déjà la version échappée prête à coller.

**Se connecter :** va sur `/fr/admin/secure` (ou `/en/admin/secure`), entre tes identifiants. Un cookie signé HMAC (`kon_admin`, HttpOnly, 7 jours) est posé. Le middleware (`src/middleware.ts`) le vérifie sur chaque requête. Le bouton ✕ dans le header déconnecte.

**Rate limit :** 5 tentatives par IP / 15 min (in-memory, best-effort).

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
npm run build     # génère .vercel/output/ (build serverless)
npm run preview   # tester la version production locale
```

### Déploiement sur Vercel

Le projet utilise l'adapter `@astrojs/vercel/serverless` : chaque route SSR
devient une fonction serverless Vercel.

1. Connecte le repo sur [vercel.com](https://vercel.com) (framework détecté : Astro).
2. Dans **Project Settings → Environment Variables**, ajoute :
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH` ⚠️ **ne pas échapper les `$`** dans l'UI Vercel
     (l'échappement `\$` est uniquement requis pour le fichier `.env` local à
     cause de l'interpolation Vite — le dashboard Vercel prend la valeur brute).
   - `AUTH_SECRET`
3. Déploie. La racine `/` redirige vers `/fr/` ; toutes les routes API
   (`/api/signup`, `/api/admin/*`) tournent en serverless.

> Pour un autre hébergeur (Netlify, Cloudflare Pages, etc.), remplace l'adapter
> dans `astro.config.mjs` par celui correspondant.

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
