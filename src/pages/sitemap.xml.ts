import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const prerender = false;

const SITE = 'https://kingofnowhere-nws.com';

type Lang = 'fr' | 'en';

type Entry = {
  loc: string;
  alternates?: Record<Lang | 'x-default', string>;
  lastmod?: string;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority?: number;
};

const slugFor = (id: string) =>
  id.replace(/^[^/]+\//, '').replace(/\.(md|mdx)$/, '');

const url = (path: string) => `${SITE}${path}`;

const pair = (frPath: string, enPath: string) => ({
  fr: url(frPath),
  en: url(enPath),
  'x-default': url(frPath),
});

const staticEntries: Entry[] = [
  {
    loc: url('/fr/'),
    alternates: pair('/fr/', '/en/'),
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: url('/en/'),
    alternates: pair('/fr/', '/en/'),
    changefreq: 'weekly',
    priority: 1.0,
  },
  // Devlog index
  {
    loc: url('/fr/devlog/'),
    alternates: pair('/fr/devlog/', '/en/devlog/'),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    loc: url('/en/devlog/'),
    alternates: pair('/fr/devlog/', '/en/devlog/'),
    changefreq: 'weekly',
    priority: 0.9,
  },
  // Univers index
  {
    loc: url('/fr/univers/'),
    alternates: pair('/fr/univers/', '/en/univers/'),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    loc: url('/en/univers/'),
    alternates: pair('/fr/univers/', '/en/univers/'),
    changefreq: 'weekly',
    priority: 0.9,
  },
  // Événements / Events index
  {
    loc: url('/fr/evenements/'),
    alternates: pair('/fr/evenements/', '/en/events/'),
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    loc: url('/en/events/'),
    alternates: pair('/fr/evenements/', '/en/events/'),
    changefreq: 'weekly',
    priority: 0.8,
  },
  // Boutique / Shop index
  {
    loc: url('/fr/boutique/'),
    alternates: pair('/fr/boutique/', '/en/shop/'),
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: url('/en/shop/'),
    alternates: pair('/fr/boutique/', '/en/shop/'),
    changefreq: 'weekly',
    priority: 0.7,
  },
];

const universSections: Array<{ fr: string; en: string }> = [
  { fr: 'personnages', en: 'personnages' },
  { fr: 'races', en: 'races' },
  { fr: 'environnement', en: 'environnement' },
  { fr: 'creatures', en: 'creatures' },
  { fr: 'armes', en: 'armes' },
  { fr: 'competences', en: 'competences' },
  { fr: 'construire', en: 'construire' },
  { fr: 'ressources', en: 'ressources' },
  { fr: 'camps', en: 'camps' },
  { fr: 'regles', en: 'regles' },
];

for (const s of universSections) {
  staticEntries.push(
    {
      loc: url(`/fr/univers/${s.fr}/`),
      alternates: pair(`/fr/univers/${s.fr}/`, `/en/univers/${s.en}/`),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: url(`/en/univers/${s.en}/`),
      alternates: pair(`/fr/univers/${s.fr}/`, `/en/univers/${s.en}/`),
      changefreq: 'monthly',
      priority: 0.8,
    },
  );
}

const boutiqueSections: Array<{ fr: string; en: string }> = [
  { fr: 'cosmetiques', en: 'cosmetics' },
  { fr: 'mascottes', en: 'pets' },
  { fr: 'montures', en: 'mounts' },
  { fr: 'ressources', en: 'resources' },
];

for (const s of boutiqueSections) {
  staticEntries.push(
    {
      loc: url(`/fr/boutique/${s.fr}/`),
      alternates: pair(`/fr/boutique/${s.fr}/`, `/en/shop/${s.en}/`),
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: url(`/en/shop/${s.en}/`),
      alternates: pair(`/fr/boutique/${s.fr}/`, `/en/shop/${s.en}/`),
      changefreq: 'monthly',
      priority: 0.6,
    },
  );
}

type ContentEntry = CollectionEntry<
  | 'characters'
  | 'races'
  | 'biomes'
  | 'creatures'
  | 'weapons'
  | 'skills'
  | 'buildables'
  | 'resources'
  | 'devlog'
  | 'events'
  | 'cosmetics'
  | 'pets'
  | 'mounts'
  | 'shopPacks'
>;

const isPublished = (e: { data: { draft?: boolean } }) => !e.data.draft;

async function loadCollection<T extends ContentEntry['collection']>(name: T) {
  const items = (await getCollection(name as any, isPublished as any)) as Array<{
    id: string;
    data: { lang: Lang; date?: Date; draft?: boolean };
  }>;
  const byLang: Record<Lang, Map<string, { lastmod?: string }>> = {
    fr: new Map(),
    en: new Map(),
  };
  for (const item of items) {
    const slug = slugFor(item.id);
    const lastmod = item.data.date
      ? new Date(item.data.date).toISOString().split('T')[0]
      : undefined;
    byLang[item.data.lang].set(slug, { lastmod });
  }
  return byLang;
}

function emitContent(
  entries: Entry[],
  byLang: Record<Lang, Map<string, { lastmod?: string }>>,
  frBase: string,
  enBase: string,
  priority: number,
  changefreq: Entry['changefreq'] = 'monthly',
) {
  const slugs = new Set<string>([...byLang.fr.keys(), ...byLang.en.keys()]);
  for (const slug of slugs) {
    const inFr = byLang.fr.has(slug);
    const inEn = byLang.en.has(slug);
    const frPath = `${frBase}${slug}/`;
    const enPath = `${enBase}${slug}/`;
    if (inFr && inEn) {
      const alternates = pair(frPath, enPath);
      entries.push({
        loc: url(frPath),
        alternates,
        lastmod: byLang.fr.get(slug)?.lastmod,
        changefreq,
        priority,
      });
      entries.push({
        loc: url(enPath),
        alternates,
        lastmod: byLang.en.get(slug)?.lastmod,
        changefreq,
        priority,
      });
    } else if (inFr) {
      entries.push({
        loc: url(frPath),
        lastmod: byLang.fr.get(slug)?.lastmod,
        changefreq,
        priority,
      });
    } else if (inEn) {
      entries.push({
        loc: url(enPath),
        lastmod: byLang.en.get(slug)?.lastmod,
        changefreq,
        priority,
      });
    }
  }
}

function xmlEscape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderUrl(entry: Entry) {
  const parts: string[] = [];
  parts.push('  <url>');
  parts.push(`    <loc>${xmlEscape(entry.loc)}</loc>`);
  if (entry.lastmod) {
    parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  }
  if (entry.changefreq) {
    parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  }
  if (entry.priority !== undefined) {
    parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
  }
  if (entry.alternates) {
    for (const [hreflang, href] of Object.entries(entry.alternates)) {
      parts.push(
        `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${xmlEscape(href)}"/>`,
      );
    }
  }
  parts.push('  </url>');
  return parts.join('\n');
}

export const GET: APIRoute = async () => {
  const entries: Entry[] = [...staticEntries];

  const [
    characters,
    races,
    biomes,
    creatures,
    weapons,
    skills,
    buildables,
    universResources,
    devlog,
    events,
    cosmetics,
    pets,
    mounts,
    shopPacks,
  ] = await Promise.all([
    loadCollection('characters'),
    loadCollection('races'),
    loadCollection('biomes'),
    loadCollection('creatures'),
    loadCollection('weapons'),
    loadCollection('skills'),
    loadCollection('buildables'),
    loadCollection('resources'),
    loadCollection('devlog'),
    loadCollection('events'),
    loadCollection('cosmetics'),
    loadCollection('pets'),
    loadCollection('mounts'),
    loadCollection('shopPacks'),
  ]);

  emitContent(entries, characters, '/fr/univers/personnages/', '/en/univers/personnages/', 0.7);
  emitContent(entries, races, '/fr/univers/races/', '/en/univers/races/', 0.7);
  emitContent(entries, biomes, '/fr/univers/environnement/', '/en/univers/environnement/', 0.7);
  emitContent(entries, creatures, '/fr/univers/creatures/', '/en/univers/creatures/', 0.7);
  emitContent(entries, weapons, '/fr/univers/armes/', '/en/univers/armes/', 0.7);
  emitContent(entries, skills, '/fr/univers/competences/', '/en/univers/competences/', 0.7);
  emitContent(entries, buildables, '/fr/univers/construire/', '/en/univers/construire/', 0.7);
  emitContent(entries, universResources, '/fr/univers/ressources/', '/en/univers/ressources/', 0.7);

  emitContent(entries, devlog, '/fr/devlog/', '/en/devlog/', 0.7, 'weekly');
  emitContent(entries, events, '/fr/evenements/', '/en/events/', 0.6);

  emitContent(entries, cosmetics, '/fr/boutique/cosmetiques/', '/en/shop/cosmetics/', 0.5);
  emitContent(entries, pets, '/fr/boutique/mascottes/', '/en/shop/pets/', 0.5);
  emitContent(entries, mounts, '/fr/boutique/montures/', '/en/shop/mounts/', 0.5);
  emitContent(entries, shopPacks, '/fr/boutique/ressources/', '/en/shop/resources/', 0.5);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderUrl).join('\n')}
</urlset>
`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
