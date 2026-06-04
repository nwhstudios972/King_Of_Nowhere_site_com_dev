export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr' as const;

export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    'meta.title': 'King Of Nowhere — Forge ton monde. Choisis ton camp.',
    'meta.description':
      "King Of Nowhere est un MMORPG où tu bâtis ton univers avec tes amis et où la guerre éternelle entre Anges et Démons attend ton serment.",

    'nav.devlog': 'Devlog',
    'nav.beta': 'Rejoindre la beta',
    'nav.home': 'Accueil',
    'nav.universe': 'Univers',

    'universe.eyebrow': 'Codex de King Of Nowhere',
    'universe.title': "L'univers, ses âmes et ses pierres.",
    'universe.lead':
      "Plonge dans le monde de King Of Nowhere : ses races, ses personnages mythiques, et les ressources qui forgent ses royaumes.",
    'universe.characters_title': 'Personnages',
    'universe.characters_lead': 'Héros, marchands, gardiens, aubergistes et habitants — ceux qui peuplent le monde.',
    'universe.races_title': 'Races',
    'universe.races_lead': 'Six lignées originelles. Six manières d’habiter le néant.',
    'universe.resources_title': 'Ressources',
    'universe.resources_lead': 'Minerais, plantes, reliques. Tout ce qui se cueille, se forge et se troque.',
    'universe.weapons_title': 'Armes',
    'universe.weapons_lead': 'Lames forgées, arcs anciens, bâtons rituels. Ce que l’on tient pour défendre ou conquérir.',
    'universe.skills_title': 'Compétences',
    'universe.skills_lead': 'Combat, magie, artisanat, parole. Les voies que ton âme peut emprunter.',
    'universe.biomes_title': 'Environnement',
    'universe.biomes_lead': 'Forêts, montagnes, plaines maudites. Les terres où s’écrit ton histoire.',

    'weapons.eyebrow': 'Armes',
    'weapons.title': 'Ce que la main empoigne.',
    'weapons.lead':
      "De la dague gravée à l'épée tombée du ciel, chaque arme a un forgeron, une histoire, un prix à payer.",
    'weapons.filter_all': 'Toutes',
    'weapons.type': 'Type',
    'weapons.rarity': 'Rareté',
    'weapons.faction': 'Camp',
    'weapons.materials': 'Matériaux requis',
    'weapons.how_to_obtain': 'Comment l’obtenir',
    'weapons.back': '← Toutes les armes',
    'weapons.empty': "L'arsenal s'écrit encore.",
    'weapon.sword': 'Épée',
    'weapon.axe': 'Hache',
    'weapon.bow': 'Arc',
    'weapon.staff': 'Bâton',
    'weapon.dagger': 'Dague',
    'weapon.spear': 'Lance',
    'weapon.hammer': 'Marteau',
    'weapon.shield': 'Bouclier',

    'skills.eyebrow': 'Compétences',
    'skills.title': 'Les voies de l’âme.',
    'skills.lead':
      "Combattre, lancer un sort, forger, négocier. Chaque compétence trace une trajectoire dans le monde.",
    'skills.filter_all': 'Toutes',
    'skills.category': 'Catégorie',
    'skills.faction': 'Camp',
    'skills.races': 'Races liées',
    'skills.required_level': 'Niveau requis',
    'skills.progression': 'Progression',
    'skills.back': '← Toutes les compétences',
    'skills.empty': "Les premières compétences s'éveillent.",
    'skill.combat': 'Combat',
    'skill.magic': 'Magie',
    'skill.craft': 'Artisanat',
    'skill.social': 'Social',

    'biomes.eyebrow': 'Environnement',
    'biomes.title': 'Les terres du monde.',
    'biomes.lead':
      "Chaque biome a son climat, sa faune, ses ressources et ses dangers. Connais le terrain avant d'y marcher.",
    'biomes.filter_all': 'Tous',
    'biomes.climate': 'Climat',
    'biomes.danger': 'Danger',
    'biomes.fauna': 'Faune',
    'biomes.resources': 'Ressources',
    'biomes.dangers': 'Dangers',
    'biomes.back': '← Tous les biomes',
    'biomes.empty': "La cartographie est en cours.",
    'climate.temperate': 'Tempéré',
    'climate.cold': 'Froid',
    'climate.arid': 'Aride',
    'climate.tropical': 'Tropical',
    'climate.volcanic': 'Volcanique',
    'climate.ethereal': 'Éthéré',
    'climate.cursed': 'Maudit',
    'danger.safe': 'Paisible',
    'danger.low': 'Faible',
    'danger.moderate': 'Modéré',
    'danger.high': 'Élevé',
    'danger.deadly': 'Mortel',

    'characters.eyebrow': 'Personnages',
    'characters.title': 'Les âmes du monde.',
    'characters.lead':
      "Des Élites légendaires aux humbles aubergistes, chaque PNJ a son rôle, son passé, sa raison d’être croisé.",
    'characters.filter_all': 'Tous',
    'characters.filter_entite': 'Divinités',
    'characters.filter_elite': 'Élites',
    'characters.filter_marchand': 'Marchands',
    'characters.filter_aubergiste': 'Aubergistes',
    'characters.filter_gardien': 'Gardiens',
    'characters.filter_basique': 'PNJ',
    'characters.type_entite': 'Divinité',
    'characters.type_elite': 'Élite',
    'characters.type_marchand': 'Marchand',
    'characters.type_aubergiste': 'Aubergiste',
    'characters.type_gardien': 'Gardien',
    'characters.type_basique': 'PNJ',
    'characters.race': 'Race',
    'characters.faction': 'Camp',
    'characters.location': 'Présent à',
    'characters.role': 'Rôle',
    'characters.back': '← Tous les personnages',
    'characters.empty': "Aucun personnage pour l'instant. Le codex s'écrit.",

    'races.eyebrow': 'Races',
    'races.title': 'Six lignées originelles.',
    'races.lead': 'Chaque race porte une histoire, une éthique, un rapport au monde — et un style de jeu distinct.',
    'races.alignment': 'Alignement',
    'races.origin': 'Origine',
    'races.traits': 'Traits',
    'races.strengths': 'Forces',
    'races.weaknesses': 'Faiblesses',
    'races.back': '← Toutes les races',
    'races.empty': "Le bestiaire arrive bientôt.",

    'resources.eyebrow': 'Ressources',
    'resources.title': 'Ce que le monde donne.',
    'resources.lead':
      "Du fer brut à l'essence éthérée, voici ce que les mines, les forêts et les ruines offrent à ceux qui savent chercher.",
    'resources.filter_all': 'Toutes',
    'resources.category': 'Catégorie',
    'resources.rarity': 'Rareté',
    'resources.uses': 'Utilisations',
    'resources.where_found': 'Où la trouver',
    'resources.back': '← Toutes les ressources',
    'resources.empty': "Les premières fiches arrivent.",

    'rarity.common': 'Commune',
    'rarity.uncommon': 'Peu commune',
    'rarity.rare': 'Rare',
    'rarity.epic': 'Épique',
    'rarity.legendary': 'Légendaire',

    'alignment.good': 'Lumière',
    'alignment.neutral': 'Neutre',
    'alignment.evil': 'Ombre',

    'faction.angel': 'Anges',
    'faction.demon': 'Démons',
    'faction.neutral': 'Indépendant',

    'hero.eyebrow': 'MMORPG · Nowhere Studios',
    'hero.title': 'Forge ton monde.\nChoisis ton camp.',
    'hero.subtitle':
      "Un MMORPG où chaque pierre du monde est posée par les joueurs, et où la guerre éternelle entre Anges et Démons attend ton serment.",
    'hero.cta_primary': 'Rejoindre la beta',
    'hero.cta_secondary': 'Découvrir le monde',

    'world.eyebrow': 'Le Monde',
    'world.title': 'Un univers que vous bâtissez ensemble.',
    'world.lead':
      "Chaque royaume, chaque forteresse, chaque sanctuaire. Rien n'existe avant que vous ne le décidiez. King Of Nowhere est un monde sandbox vivant où vos amis sont vos alliés, et où vos constructions deviennent l'histoire du serveur.",
    'world.point1_title': 'Construis sans limites',
    'world.point1_text':
      "Du humble abri au temple monumental, la totalité du monde est façonnable. Pas de zones interdites, pas de cartes figées.",
    'world.point2_title': 'Jouez en clan',
    'world.point2_text':
      "Levez une cité avec vos amis, partagez les ressources, défendez vos murs ensemble. Le MMO devient votre projet commun.",
    'world.point3_title': 'Un monde qui se souvient',
    'world.point3_text':
      "Les ruines de batailles passées, les bannières des clans tombés, les autels oubliés. Le monde garde la trace de tout.",

    'war.eyebrow': 'La Guerre',
    'war.title': 'Avant que le monde ne soit, ils se faisaient déjà la guerre.',
    'war.lead':
      "Les Anges ont juré d'illuminer le néant. Les Démons ont juré de le posséder. Vous arrivez au milieu de ce conflit ancien. Votre voix, votre épée, votre serment feront pencher la balance — pour des siècles.",

    'sides.eyebrow': 'Choisis ton camp',
    'sides.title': 'Lumière ou ombre. Il n’y a pas de neutralité.',

    'sides.angels_name': 'Les Anges',
    'sides.angels_tagline': 'Bâtisseurs de royaumes éternels.',
    'sides.angels_text':
      "Au nom de l'ordre, vous érigez des cathédrales qui défient le ciel, vous unissez les âmes égarées, vous repoussez les ténèbres rampantes. Votre force est celle des serments tenus et des fidélités gravées dans la pierre.",
    'sides.angels_cta': 'Prête le serment de lumière',

    'sides.demons_name': 'Les Démons',
    'sides.demons_tagline': 'Maîtres de la liberté brûlante.',
    'sides.demons_text':
      "Au nom de la conquête, vous arrachez ce qui doit l'être, vous transformez la peur en pouvoir, vous écrivez vos lois dans le feu. Votre force est celle de ceux qui ne s'agenouillent devant personne.",
    'sides.demons_cta': 'Scelle le pacte d’ombre',

    'devlog.eyebrow': 'Carnet de Forge',
    'devlog.title': 'Le devlog de Nowhere Studios.',
    'devlog.lead':
      "Suivez le développement du jeu, les coulisses, les choix de design et les annonces officielles.",
    'devlog.see_all': 'Voir tout le devlog',
    'devlog.back': '← Retour au devlog',
    'devlog.empty': 'Les premiers articles arrivent bientôt.',
    'devlog.read_more': 'Lire l’article',
    'devlog.published_on': 'Publié le',

    'beta.eyebrow': 'Liste d’attente',
    'beta.title': 'Les premières âmes recrutées entreront en premières.',
    'beta.lead':
      "Inscris-toi à la beta de King Of Nowhere. Tu recevras les accès anticipés, les annonces du studio et l'invitation aux tests fermés.",
    'beta.email_label': 'Adresse e-mail',
    'beta.email_placeholder': 'ton.email@exemple.com',
    'beta.side_label': 'Vers quel camp penches-tu déjà ?',
    'beta.side_undecided': 'Je n’ai pas encore choisi',
    'beta.side_angel': 'Les Anges',
    'beta.side_demon': 'Les Démons',
    'beta.submit': 'Sceller mon serment',
    'beta.submitting': 'Envoi en cours...',
    'beta.success_title': 'Ton serment est scellé.',
    'beta.success_text':
      'Surveille ta boîte mail. Nous reviendrons vers toi avant les premiers tests.',
    'beta.error_generic':
      'Une erreur est survenue. Réessaie dans quelques instants.',
    'beta.error_duplicate':
      'Cette adresse est déjà inscrite. Le serment ne se prête qu’une fois.',
    'beta.error_invalid': 'Adresse e-mail invalide.',
    'beta.privacy': 'Nous ne partagerons jamais ton adresse. Désinscription possible à tout moment.',

    'footer.studio': 'Un jeu signé Nowhere Studios.',
    'footer.copyright': '© 2026 Nowhere Studios. Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.contact': 'Contact',

    'comingSoon.eyebrow': 'Le royaume s’éveille',
    'comingSoon.title': 'King Of Nowhere',
    'comingSoon.tagline': 'Le MMORPG qui réécrit les règles arrive bientôt.',
    'comingSoon.lead':
      'Bâtissez sans limites. Forgez des clans. Choisissez votre camp dans la guerre éternelle entre Anges et Démons. Le site ouvre ses portes au public dans quelques semaines — d’ici là, seules les âmes invitées peuvent franchir le seuil.',
    'comingSoon.beta_intro': 'Inscrivez-vous pour être prévenu en premier.',
    'comingSoon.locked_notice': 'Accès restreint pendant la phase de développement.',

    'adminLogin.eyebrow': 'Accès restreint',
    'adminLogin.title': 'Le seuil du royaume.',
    'adminLogin.lead': 'Seuls les forgerons du studio peuvent franchir cette porte.',
    'adminLogin.email_label': 'Adresse e-mail',
    'adminLogin.password_label': 'Mot de passe',
    'adminLogin.submit': 'Entrer',
    'adminLogin.back': '← Retour à l’accueil',
    'adminLogin.error_denied': 'Identifiants invalides.',
    'adminLogin.error_invalid': 'Veuillez renseigner email et mot de passe.',
    'adminLogin.error_config': 'Configuration serveur manquante. Contactez le studio.',
    'adminLogin.error_rate': 'Trop de tentatives. Réessayez dans 15 minutes.',
  },
  en: {
    'meta.title': 'King Of Nowhere — Forge your world. Choose your side.',
    'meta.description':
      'King Of Nowhere is an MMORPG where you build your universe with your friends and where the eternal war between Angels and Demons awaits your oath.',

    'nav.devlog': 'Devlog',
    'nav.beta': 'Join the beta',
    'nav.home': 'Home',
    'nav.universe': 'Universe',

    'universe.eyebrow': 'King Of Nowhere Codex',
    'universe.title': 'The world, its souls and its stones.',
    'universe.lead':
      'Step into the world of King Of Nowhere: its races, its mythic characters, and the resources that forge its realms.',
    'universe.characters_title': 'Characters',
    'universe.characters_lead': 'Heroes, merchants, wardens, innkeepers and the common folk — those who inhabit the world.',
    'universe.races_title': 'Races',
    'universe.races_lead': 'Six original bloodlines. Six ways to dwell in the void.',
    'universe.resources_title': 'Resources',
    'universe.resources_lead': 'Ores, herbs, relics. Everything that is gathered, forged and bartered.',
    'universe.weapons_title': 'Weapons',
    'universe.weapons_lead': 'Forged blades, ancient bows, ritual staves. What you wield to defend or to conquer.',
    'universe.skills_title': 'Skills',
    'universe.skills_lead': 'Combat, magic, craft, words. The paths your soul can walk.',
    'universe.biomes_title': 'Environment',
    'universe.biomes_lead': 'Forests, mountains, cursed plains. The lands where your story is written.',

    'weapons.eyebrow': 'Weapons',
    'weapons.title': 'What the hand grips.',
    'weapons.lead':
      'From the etched dagger to the sky-fallen sword, every weapon has a smith, a story, a price to pay.',
    'weapons.filter_all': 'All',
    'weapons.type': 'Type',
    'weapons.rarity': 'Rarity',
    'weapons.faction': 'Side',
    'weapons.materials': 'Required materials',
    'weapons.how_to_obtain': 'How to obtain',
    'weapons.back': '← All weapons',
    'weapons.empty': 'The armory is still being written.',
    'weapon.sword': 'Sword',
    'weapon.axe': 'Axe',
    'weapon.bow': 'Bow',
    'weapon.staff': 'Staff',
    'weapon.dagger': 'Dagger',
    'weapon.spear': 'Spear',
    'weapon.hammer': 'Hammer',
    'weapon.shield': 'Shield',

    'skills.eyebrow': 'Skills',
    'skills.title': 'The paths of the soul.',
    'skills.lead':
      'Fight, cast a spell, forge, negotiate. Every skill traces a trajectory through the world.',
    'skills.filter_all': 'All',
    'skills.category': 'Category',
    'skills.faction': 'Side',
    'skills.races': 'Related races',
    'skills.required_level': 'Required level',
    'skills.progression': 'Progression',
    'skills.back': '← All skills',
    'skills.empty': 'The first skills are awakening.',
    'skill.combat': 'Combat',
    'skill.magic': 'Magic',
    'skill.craft': 'Craft',
    'skill.social': 'Social',

    'biomes.eyebrow': 'Environment',
    'biomes.title': 'The lands of the world.',
    'biomes.lead':
      'Each biome has its climate, its wildlife, its resources and its dangers. Know the terrain before you walk it.',
    'biomes.filter_all': 'All',
    'biomes.climate': 'Climate',
    'biomes.danger': 'Danger',
    'biomes.fauna': 'Wildlife',
    'biomes.resources': 'Resources',
    'biomes.dangers': 'Dangers',
    'biomes.back': '← All biomes',
    'biomes.empty': 'The cartography is in progress.',
    'climate.temperate': 'Temperate',
    'climate.cold': 'Cold',
    'climate.arid': 'Arid',
    'climate.tropical': 'Tropical',
    'climate.volcanic': 'Volcanic',
    'climate.ethereal': 'Ethereal',
    'climate.cursed': 'Cursed',
    'danger.safe': 'Safe',
    'danger.low': 'Low',
    'danger.moderate': 'Moderate',
    'danger.high': 'High',
    'danger.deadly': 'Deadly',

    'characters.eyebrow': 'Characters',
    'characters.title': 'The souls of the world.',
    'characters.lead':
      'From legendary Elites to humble innkeepers, every NPC has a role, a past, a reason to be crossed.',
    'characters.filter_all': 'All',
    'characters.filter_entite': 'Deities',
    'characters.filter_elite': 'Elites',
    'characters.filter_marchand': 'Merchants',
    'characters.filter_aubergiste': 'Innkeepers',
    'characters.filter_gardien': 'Wardens',
    'characters.filter_basique': 'NPCs',
    'characters.type_entite': 'Deity',
    'characters.type_elite': 'Elite',
    'characters.type_marchand': 'Merchant',
    'characters.type_aubergiste': 'Innkeeper',
    'characters.type_gardien': 'Warden',
    'characters.type_basique': 'NPC',
    'characters.race': 'Race',
    'characters.faction': 'Side',
    'characters.location': 'Found in',
    'characters.role': 'Role',
    'characters.back': '← All characters',
    'characters.empty': 'No characters yet. The codex is being written.',

    'races.eyebrow': 'Races',
    'races.title': 'Six original bloodlines.',
    'races.lead': 'Each race carries a story, an ethic, a relationship to the world — and a distinct playstyle.',
    'races.alignment': 'Alignment',
    'races.origin': 'Origin',
    'races.traits': 'Traits',
    'races.strengths': 'Strengths',
    'races.weaknesses': 'Weaknesses',
    'races.back': '← All races',
    'races.empty': 'The bestiary will arrive soon.',

    'resources.eyebrow': 'Resources',
    'resources.title': 'What the world gives.',
    'resources.lead':
      'From raw iron to ethereal essence, here is what mines, forests and ruins offer to those who know how to look.',
    'resources.filter_all': 'All',
    'resources.category': 'Category',
    'resources.rarity': 'Rarity',
    'resources.uses': 'Uses',
    'resources.where_found': 'Where to find',
    'resources.back': '← All resources',
    'resources.empty': 'The first entries are coming.',

    'rarity.common': 'Common',
    'rarity.uncommon': 'Uncommon',
    'rarity.rare': 'Rare',
    'rarity.epic': 'Epic',
    'rarity.legendary': 'Legendary',

    'alignment.good': 'Light',
    'alignment.neutral': 'Neutral',
    'alignment.evil': 'Shadow',

    'faction.angel': 'Angels',
    'faction.demon': 'Demons',
    'faction.neutral': 'Independent',

    'hero.eyebrow': 'MMORPG · Nowhere Studios',
    'hero.title': 'Forge your world.\nChoose your side.',
    'hero.subtitle':
      'An MMORPG where every stone of the world is placed by players, and where the eternal war between Angels and Demons awaits your oath.',
    'hero.cta_primary': 'Join the beta',
    'hero.cta_secondary': 'Discover the world',

    'world.eyebrow': 'The World',
    'world.title': 'A universe you build together.',
    'world.lead':
      'Every kingdom, every fortress, every sanctuary. Nothing exists until you decide it does. King Of Nowhere is a living sandbox where your friends are your allies, and your buildings become the history of the server.',
    'world.point1_title': 'Build without limits',
    'world.point1_text':
      'From humble shelter to monumental temple, the whole world is shapeable. No forbidden zones, no fixed maps.',
    'world.point2_title': 'Play as a clan',
    'world.point2_text':
      'Raise a city with your friends, share resources, defend your walls together. The MMO becomes your shared project.',
    'world.point3_title': 'A world that remembers',
    'world.point3_text':
      'Ruins of past battles, banners of fallen clans, forgotten altars. The world keeps the trace of everything.',

    'war.eyebrow': 'The War',
    'war.title': 'Before the world was, they were already at war.',
    'war.lead':
      'The Angels swore to illuminate the void. The Demons swore to possess it. You arrive in the middle of this ancient conflict. Your voice, your sword, your oath will tip the balance — for centuries.',

    'sides.eyebrow': 'Choose your side',
    'sides.title': 'Light or shadow. There is no neutral ground.',

    'sides.angels_name': 'The Angels',
    'sides.angels_tagline': 'Builders of eternal kingdoms.',
    'sides.angels_text':
      'In the name of order, you raise cathedrals that defy the sky, you unite lost souls, you push back the creeping dark. Your strength is that of kept oaths and loyalties carved in stone.',
    'sides.angels_cta': 'Swear the oath of light',

    'sides.demons_name': 'The Demons',
    'sides.demons_tagline': 'Masters of burning freedom.',
    'sides.demons_text':
      'In the name of conquest, you tear away what must be taken, you turn fear into power, you write your laws in fire. Your strength is that of those who kneel for no one.',
    'sides.demons_cta': 'Seal the pact of shadow',

    'devlog.eyebrow': 'Forge Journal',
    'devlog.title': 'The Nowhere Studios devlog.',
    'devlog.lead':
      'Follow the development of the game, the behind-the-scenes, the design choices and official announcements.',
    'devlog.see_all': 'See the whole devlog',
    'devlog.back': '← Back to devlog',
    'devlog.empty': 'The first articles will arrive soon.',
    'devlog.read_more': 'Read the article',
    'devlog.published_on': 'Published on',

    'beta.eyebrow': 'Waiting list',
    'beta.title': 'The first souls recruited enter first.',
    'beta.lead':
      "Sign up for the King Of Nowhere beta. You'll receive early access, studio announcements and invitations to closed tests.",
    'beta.email_label': 'Email address',
    'beta.email_placeholder': 'your.email@example.com',
    'beta.side_label': 'Which side already calls to you?',
    'beta.side_undecided': "I haven't chosen yet",
    'beta.side_angel': 'The Angels',
    'beta.side_demon': 'The Demons',
    'beta.submit': 'Seal my oath',
    'beta.submitting': 'Sending...',
    'beta.success_title': 'Your oath is sealed.',
    'beta.success_text':
      "Watch your inbox. We'll reach out before the first tests begin.",
    'beta.error_generic': 'Something went wrong. Try again in a moment.',
    'beta.error_duplicate':
      'This address is already registered. An oath can only be sworn once.',
    'beta.error_invalid': 'Invalid email address.',
    'beta.privacy': 'We will never share your address. You can unsubscribe at any time.',

    'footer.studio': 'A game by Nowhere Studios.',
    'footer.copyright': '© 2026 Nowhere Studios. All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.contact': 'Contact',

    'comingSoon.eyebrow': 'The realm awakens',
    'comingSoon.title': 'King Of Nowhere',
    'comingSoon.tagline': 'The MMORPG that rewrites the rules is coming.',
    'comingSoon.lead':
      'Build without limits. Forge clans. Choose your side in the eternal war between Angels and Demons. The site opens to the public in a few weeks — until then, only invited souls may cross the threshold.',
    'comingSoon.beta_intro': 'Sign up to be the first to know.',
    'comingSoon.locked_notice': 'Restricted access during development.',

    'adminLogin.eyebrow': 'Restricted access',
    'adminLogin.title': 'The threshold of the realm.',
    'adminLogin.lead': 'Only the studio forgers may pass this gate.',
    'adminLogin.email_label': 'Email address',
    'adminLogin.password_label': 'Password',
    'adminLogin.submit': 'Enter',
    'adminLogin.back': '← Back to home',
    'adminLogin.error_denied': 'Invalid credentials.',
    'adminLogin.error_invalid': 'Please provide both email and password.',
    'adminLogin.error_config': 'Server configuration missing. Contact the studio.',
    'adminLogin.error_rate': 'Too many attempts. Try again in 15 minutes.',
  },
} as const;

export type UIKey = keyof (typeof ui)['fr'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<UIKey, string>)[key] ?? (ui[defaultLang] as Record<UIKey, string>)[key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `/${lang}/${clean}`.replace(/\/+$/, '/') || `/${lang}/`;
}
