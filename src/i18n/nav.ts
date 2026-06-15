import { useTranslations, getLocalizedPath, type Lang, type UIKey } from './ui';

export type NavLeaf = {
  labelKey: UIKey;
  href: string;
};

export type NavCategory = {
  labelKey: UIKey;
  href: string;
  children?: NavLeaf[];
};

export type NavTab = {
  labelKey: UIKey;
  href: string;
  accent: 'white' | 'gold';
  categories?: NavCategory[];
};

const universePath = (lang: Lang, sub: string, hash?: string) =>
  `${getLocalizedPath(lang, `/univers/${sub}/`)}${hash ? `#${hash}` : ''}`;

const shopPath = (lang: Lang, sub: string, hash?: string) => {
  const base = lang === 'fr' ? '/boutique/' : '/shop/';
  return `${getLocalizedPath(lang, `${base}${sub}${sub ? '/' : ''}`)}${hash ? `#${hash}` : ''}`;
};

const eventsPath = (lang: Lang, hash?: string) => {
  const base = lang === 'fr' ? '/evenements/' : '/events/';
  return `${getLocalizedPath(lang, base)}${hash ? `#${hash}` : ''}`;
};

export function buildNav(lang: Lang): NavTab[] {
  return [
    {
      labelKey: 'nav.universe',
      href: getLocalizedPath(lang, '/univers/'),
      accent: 'white',
      categories: [
        {
          labelKey: 'universe.characters_title',
          href: universePath(lang, 'personnages'),
          children: [
            { labelKey: 'characters.filter_entite', href: universePath(lang, 'personnages', 'entite') },
            { labelKey: 'characters.filter_elite', href: universePath(lang, 'personnages', 'elite') },
            { labelKey: 'characters.filter_gardien', href: universePath(lang, 'personnages', 'gardien') },
            { labelKey: 'characters.filter_marchand', href: universePath(lang, 'personnages', 'marchand') },
            { labelKey: 'characters.filter_aubergiste', href: universePath(lang, 'personnages', 'aubergiste') },
            { labelKey: 'characters.filter_basique', href: universePath(lang, 'personnages', 'basique') },
          ],
        },
        {
          labelKey: 'universe.races_title',
          href: universePath(lang, 'races'),
          children: [
            { labelKey: 'alignment.good', href: universePath(lang, 'races', 'good') },
            { labelKey: 'alignment.neutral', href: universePath(lang, 'races', 'neutral') },
            { labelKey: 'alignment.evil', href: universePath(lang, 'races', 'evil') },
          ],
        },
        {
          labelKey: 'universe.creatures_title',
          href: universePath(lang, 'creatures'),
          children: [
            { labelKey: 'creature.beast', href: universePath(lang, 'creatures', 'beast') },
            { labelKey: 'creature.undead', href: universePath(lang, 'creatures', 'undead') },
            { labelKey: 'creature.demon', href: universePath(lang, 'creatures', 'demon') },
            { labelKey: 'creature.angel', href: universePath(lang, 'creatures', 'angel') },
            { labelKey: 'creature.elemental', href: universePath(lang, 'creatures', 'elemental') },
            { labelKey: 'creature.aberration', href: universePath(lang, 'creatures', 'aberration') },
            { labelKey: 'creature.humanoid', href: universePath(lang, 'creatures', 'humanoid') },
            { labelKey: 'creature.spirit', href: universePath(lang, 'creatures', 'spirit') },
          ],
        },
        {
          labelKey: 'universe.biomes_title',
          href: universePath(lang, 'environnement'),
          children: [
            { labelKey: 'climate.temperate', href: universePath(lang, 'environnement', 'temperate') },
            { labelKey: 'climate.cold', href: universePath(lang, 'environnement', 'cold') },
            { labelKey: 'climate.arid', href: universePath(lang, 'environnement', 'arid') },
            { labelKey: 'climate.tropical', href: universePath(lang, 'environnement', 'tropical') },
            { labelKey: 'climate.volcanic', href: universePath(lang, 'environnement', 'volcanic') },
            { labelKey: 'climate.ethereal', href: universePath(lang, 'environnement', 'ethereal') },
            { labelKey: 'climate.cursed', href: universePath(lang, 'environnement', 'cursed') },
          ],
        },
        {
          labelKey: 'universe.resources_title',
          href: universePath(lang, 'ressources'),
          children: [
            { labelKey: 'resources.cat_mineral', href: universePath(lang, 'ressources', 'mineral') },
            { labelKey: 'resources.cat_plant', href: universePath(lang, 'ressources', 'plant') },
            { labelKey: 'resources.cat_wood', href: universePath(lang, 'ressources', 'wood') },
            { labelKey: 'resources.cat_fabric', href: universePath(lang, 'ressources', 'fabric') },
            { labelKey: 'resources.cat_magic', href: universePath(lang, 'ressources', 'magic') },
            { labelKey: 'resources.cat_food', href: universePath(lang, 'ressources', 'food') },
            { labelKey: 'resources.cat_relic', href: universePath(lang, 'ressources', 'relic') },
          ],
        },
        {
          labelKey: 'universe.weapons_title',
          href: universePath(lang, 'armes'),
          children: [
            { labelKey: 'weapon.sword', href: universePath(lang, 'armes', 'sword') },
            { labelKey: 'weapon.axe', href: universePath(lang, 'armes', 'axe') },
            { labelKey: 'weapon.bow', href: universePath(lang, 'armes', 'bow') },
            { labelKey: 'weapon.staff', href: universePath(lang, 'armes', 'staff') },
            { labelKey: 'weapon.dagger', href: universePath(lang, 'armes', 'dagger') },
            { labelKey: 'weapon.spear', href: universePath(lang, 'armes', 'spear') },
            { labelKey: 'weapon.hammer', href: universePath(lang, 'armes', 'hammer') },
            { labelKey: 'weapon.shield', href: universePath(lang, 'armes', 'shield') },
          ],
        },
        {
          labelKey: 'universe.skills_title',
          href: universePath(lang, 'competences'),
          children: [
            { labelKey: 'skill.combat', href: universePath(lang, 'competences', 'combat') },
            { labelKey: 'skill.magic', href: universePath(lang, 'competences', 'magic') },
            { labelKey: 'skill.craft', href: universePath(lang, 'competences', 'craft') },
            { labelKey: 'skill.social', href: universePath(lang, 'competences', 'social') },
          ],
        },
        {
          labelKey: 'universe.build_title',
          href: universePath(lang, 'construire'),
          children: [
            { labelKey: 'build_cat.structure', href: universePath(lang, 'construire', 'structure') },
            { labelKey: 'build_cat.functional', href: universePath(lang, 'construire', 'functional') },
            { labelKey: 'build_cat.defense', href: universePath(lang, 'construire', 'defense') },
            { labelKey: 'build_cat.decor', href: universePath(lang, 'construire', 'decor') },
          ],
        },
        {
          labelKey: 'universe.camps_title',
          href: universePath(lang, 'camps'),
        },
        {
          labelKey: 'universe.rules_title',
          href: universePath(lang, 'regles'),
        },
      ],
    },
    {
      labelKey: 'nav.shop',
      href: getLocalizedPath(lang, lang === 'fr' ? '/boutique/' : '/shop/'),
      accent: 'gold',
      categories: [
        {
          labelKey: 'shop.packs_title',
          href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources'),
          children: [
            { labelKey: 'pack.mineral', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'mineral') },
            { labelKey: 'pack.wood', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'wood') },
            { labelKey: 'pack.plant', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'plant') },
            { labelKey: 'pack.fabric', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'fabric') },
            { labelKey: 'pack.magic', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'magic') },
            { labelKey: 'pack.food', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'food') },
            { labelKey: 'pack.bundle', href: shopPath(lang, lang === 'fr' ? 'ressources' : 'resources', 'bundle') },
          ],
        },
        {
          labelKey: 'shop.mounts_title',
          href: shopPath(lang, lang === 'fr' ? 'montures' : 'mounts'),
          children: [
            { labelKey: 'mount.land', href: shopPath(lang, lang === 'fr' ? 'montures' : 'mounts', 'land') },
            { labelKey: 'mount.aerial', href: shopPath(lang, lang === 'fr' ? 'montures' : 'mounts', 'aerial') },
            { labelKey: 'mount.aquatic', href: shopPath(lang, lang === 'fr' ? 'montures' : 'mounts', 'aquatic') },
            { labelKey: 'mount.spectral', href: shopPath(lang, lang === 'fr' ? 'montures' : 'mounts', 'spectral') },
          ],
        },
        {
          labelKey: 'shop.pets_title',
          href: shopPath(lang, lang === 'fr' ? 'mascottes' : 'pets'),
          children: [
            { labelKey: 'pet.companion', href: shopPath(lang, lang === 'fr' ? 'mascottes' : 'pets', 'companion') },
            { labelKey: 'pet.familiar', href: shopPath(lang, lang === 'fr' ? 'mascottes' : 'pets', 'familiar') },
            { labelKey: 'pet.guardian', href: shopPath(lang, lang === 'fr' ? 'mascottes' : 'pets', 'guardian') },
            { labelKey: 'pet.spirit', href: shopPath(lang, lang === 'fr' ? 'mascottes' : 'pets', 'spirit') },
          ],
        },
        {
          labelKey: 'shop.cosmetics_title',
          href: shopPath(lang, lang === 'fr' ? 'cosmetiques' : 'cosmetics'),
          children: [
            { labelKey: 'cosmetic.skin', href: shopPath(lang, lang === 'fr' ? 'cosmetiques' : 'cosmetics', 'skin') },
            { labelKey: 'cosmetic.armor', href: shopPath(lang, lang === 'fr' ? 'cosmetiques' : 'cosmetics', 'armor') },
            { labelKey: 'cosmetic.weapon', href: shopPath(lang, lang === 'fr' ? 'cosmetiques' : 'cosmetics', 'weapon') },
            { labelKey: 'cosmetic.weapon_effect', href: shopPath(lang, lang === 'fr' ? 'cosmetiques' : 'cosmetics', 'weapon_effect') },
          ],
        },
      ],
    },
    {
      labelKey: 'nav.events',
      href: eventsPath(lang),
      accent: 'white',
      categories: [
        { labelKey: 'event_cat.festival', href: eventsPath(lang, 'festival') },
        { labelKey: 'event_cat.pvp', href: eventsPath(lang, 'pvp') },
        { labelKey: 'event_cat.coronation', href: eventsPath(lang, 'coronation') },
        { labelKey: 'event_cat.update', href: eventsPath(lang, 'update') },
        { labelKey: 'event_cat.community', href: eventsPath(lang, 'community') },
        { labelKey: 'event_cat.dungeon', href: eventsPath(lang, 'dungeon') },
        { labelKey: 'event_cat.economy', href: eventsPath(lang, 'economy') },
      ],
    },
    {
      labelKey: 'nav.devlog',
      href: getLocalizedPath(lang, '/devlog/'),
      accent: 'white',
    },
  ];
}

export { useTranslations };
