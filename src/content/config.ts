import { defineCollection, z } from 'astro:content';

const langField = z.enum(['fr', 'en']);

const devlog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    lang: langField,
    author: z.string().default('Nowhere Studios'),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const RACE_SLUGS = ['humain', 'elfe', 'ange', 'mort-vivant', 'demon', 'wolf'] as const;
export type RaceSlug = (typeof RACE_SLUGS)[number];

const races = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    alignment: z.enum(['good', 'neutral', 'evil']),
    origin: z.string(),
    traits: z.array(z.string()).default([]),
    strengths: z.array(z.string()).default([]),
    weaknesses: z.array(z.string()).default([]),
    cover: z.string().optional(),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const CHARACTER_TYPES = ['entite', 'elite', 'marchand', 'aubergiste', 'gardien', 'basique'] as const;
export type CharacterType = (typeof CHARACTER_TYPES)[number];

const characters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.enum(CHARACTER_TYPES),
    race: z.enum(RACE_SLUGS).optional(),
    faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
    role: z.string().optional(),
    location: z.string().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    portrait: z.string().optional(),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const RESOURCE_CATEGORIES = [
  'mineral',
  'plant',
  'wood',
  'fabric',
  'magic',
  'food',
  'relic',
  'misc',
] as const;
export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number];

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(RESOURCE_CATEGORIES),
    rarity: z.enum(['common', 'uncommon', 'rare', 'epic', 'legendary']).default('common'),
    uses: z.array(z.string()).default([]),
    whereFound: z.string().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { devlog, races, characters, resources };
