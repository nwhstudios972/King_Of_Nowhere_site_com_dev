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
    gallery: z.array(z.string()).default([]),
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
    gallery: z.array(z.string()).default([]),
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
  'currency',
  'quest',
  'upgrade',
  'crafting',
  'consumable',
  'other'
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
    gallery: z.array(z.string()).default([]),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const WEAPON_TYPES = [
  'sword',
  'axe',
  'bow',
  'staff',
  'dagger',
  'spear',
  'hammer',
  'shield',
] as const;
export type WeaponType = (typeof WEAPON_TYPES)[number];

const weapons = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.enum(WEAPON_TYPES),
    rarity: z.enum(['common', 'uncommon', 'rare', 'epic', 'legendary']).default('common'),
    faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
    materials: z.array(z.string()).default([]),
    howToObtain: z.string().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const SKILL_CATEGORIES = ['combat', 'magic', 'craft', 'social'] as const;
export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(SKILL_CATEGORIES),
    faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
    races: z.array(z.enum(RACE_SLUGS)).default([]),
    requiredLevel: z.number().int().min(0).default(0),
    progression: z.string().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const BIOME_CLIMATES = [
  'temperate',
  'cold',
  'arid',
  'tropical',
  'volcanic',
  'ethereal',
  'cursed',
] as const;
export type BiomeClimate = (typeof BIOME_CLIMATES)[number];

const biomes = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    climate: z.enum(BIOME_CLIMATES),
    dangerLevel: z.enum(['city', 'safe', 'low', 'moderate', 'high', 'deadly']).default('moderate'),
    fauna: z.array(z.string()).default([]),
    resources: z.array(z.string()).default([]),
    dangers: z.array(z.string()).default([]),
    namedEntities: z.array(z.string()).default([]),
    summary: z.string(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const CREATURE_TYPES = [
  'beast',
  'undead',
  'demon',
  'angel',
  'elemental',
  'aberration',
  'humanoid',
  'spirit',
] as const;
export type CreatureType = (typeof CREATURE_TYPES)[number];

export const THREAT_LEVELS = ['minor', 'standard', 'elite', 'boss', 'legendary'] as const;
export type ThreatLevel = (typeof THREAT_LEVELS)[number];

const creatures = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string().optional(),
    type: z.enum(CREATURE_TYPES),
    threatLevel: z.enum(THREAT_LEVELS).default('standard'),
    faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
    biomes: z.array(z.string()).default([]),
    behavior: z.string().optional(),
    weaknesses: z.array(z.string()).default([]),
    loots: z
      .array(
        z.object({
          name: z.string(),
          resource: z.string().optional(),
          rarity: z.enum(['common', 'uncommon', 'rare', 'epic', 'legendary']).default('common'),
          note: z.string().optional(),
        }),
      )
      .default([]),
    summary: z.string(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const BUILD_CATEGORIES = ['structure', 'functional', 'defense', 'decor'] as const;
export type BuildCategory = (typeof BUILD_CATEGORIES)[number];

export const DURABILITY_LEVELS = ['fragile', 'standard', 'reinforced', 'indestructible'] as const;
export type DurabilityLevel = (typeof DURABILITY_LEVELS)[number];

const buildables = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string().optional(),
    category: z.enum(BUILD_CATEGORIES),
    faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
    durability: z.enum(DURABILITY_LEVELS).default('standard'),
    requiredLevel: z.number().int().min(0).default(0),
    materials: z
      .array(
        z.object({
          name: z.string(),
          resource: z.string().optional(),
          quantity: z.number().int().positive().optional(),
        }),
      )
      .default([]),
    howToDestroy: z.string().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const SHOP_CURRENCIES = ['eur', 'usd', 'gold', 'gems'] as const;
export type ShopCurrency = (typeof SHOP_CURRENCIES)[number];

const shopBaseSchema = {
  name: z.string(),
  tagline: z.string().optional(),
  summary: z.string(),
  price: z.number().nonnegative().optional(),
  currency: z.enum(SHOP_CURRENCIES).default('eur'),
  rarity: z.enum(['common', 'uncommon', 'rare', 'epic', 'legendary']).default('common'),
  faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
  highlight: z.boolean().default(false),
  cover: z.string().optional(),
  gallery: z.array(z.string()).default([]),
  lang: langField,
  draft: z.boolean().default(false),
  order: z.number().default(100),
};

export const PET_TYPES = ['companion', 'familiar', 'guardian', 'spirit'] as const;
export type PetType = (typeof PET_TYPES)[number];

const pets = defineCollection({
  type: 'content',
  schema: z.object({
    ...shopBaseSchema,
    type: z.enum(PET_TYPES).default('companion'),
    perks: z.array(z.string()).default([]),
  }),
});

export const MOUNT_TYPES = ['land', 'aerial', 'aquatic', 'spectral'] as const;
export type MountType = (typeof MOUNT_TYPES)[number];

const mounts = defineCollection({
  type: 'content',
  schema: z.object({
    ...shopBaseSchema,
    type: z.enum(MOUNT_TYPES).default('land'),
    speed: z.number().int().min(0).max(10).optional(),
    perks: z.array(z.string()).default([]),
  }),
});

export const COSMETIC_TYPES = ['skin', 'armor', 'weapon', 'weapon_effect'] as const;
export type CosmeticType = (typeof COSMETIC_TYPES)[number];

const cosmetics = defineCollection({
  type: 'content',
  schema: z.object({
    ...shopBaseSchema,
    type: z.enum(COSMETIC_TYPES).default('skin'),
    slot: z.string().optional(),
    effect: z.string().optional(),
    perks: z.array(z.string()).default([]),
  }),
});

export const SHOP_PACK_CATEGORIES = ['mineral', 'wood', 'plant', 'fabric', 'magic', 'food', 'bundle'] as const;
export type ShopPackCategory = (typeof SHOP_PACK_CATEGORIES)[number];

const shopPacks = defineCollection({
  type: 'content',
  schema: z.object({
    ...shopBaseSchema,
    category: z.enum(SHOP_PACK_CATEGORIES).default('bundle'),
    contents: z
      .array(
        z.object({
          name: z.string(),
          quantity: z.number().int().positive().optional(),
        }),
      )
      .default([]),
  }),
});

export const EVENT_CATEGORIES = [
  'festival',
  'pvp',
  'coronation',
  'update',
  'community',
  'dungeon',
  'economy',
] as const;
export type EventCategory = (typeof EVENT_CATEGORIES)[number];

export const EVENT_RECURRENCES = ['once', 'weekly', 'monthly', 'yearly'] as const;
export type EventRecurrence = (typeof EVENT_RECURRENCES)[number];

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    category: z.enum(EVENT_CATEGORIES),
    faction: z.enum(['angel', 'demon', 'neutral']).default('neutral'),
    server: z.string().optional(),
    location: z.string().optional(),
    recurring: z.enum(EVENT_RECURRENCES).default('once'),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    lang: langField,
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = {
  devlog,
  races,
  characters,
  resources,
  weapons,
  skills,
  biomes,
  creatures,
  buildables,
  pets,
  mounts,
  shopPacks,
  cosmetics,
  events,
};
