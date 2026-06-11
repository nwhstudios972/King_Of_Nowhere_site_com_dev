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
      "King Of Nowhere, le seul MMORPG où tu bâtis ton univers avec tes amis déchiré par la guerre éternelle entre tes désires d'Anges et de Démons qui attendent de scèler ton serment.",

    'nav.devlog': 'Devlog',
    'nav.beta': 'Rejoindre la beta',
    'nav.home': 'Accueil',
    'nav.universe': 'Univers',
    'nav.shop': 'Boutique',
    'nav.events': 'Évènements',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',

    'events.eyebrow': 'Calendrier du royaume',
    'events.title': 'Ce qui se trame dans le monde.',
    'events.lead':
      "Festivals, sièges, couronnements, raids éphémères, mises à jour. Le rythme du serveur, mois après mois — pour qu'aucune âme ne rate l'heure du rassemblement.",
    'events.empty': "Aucun évènement annoncé pour l'instant. Le calendrier s'écrit.",
    'events.empty_month': 'Mois calme. Aucun évènement annoncé.',
    'events.live_now': 'En ce moment',
    'events.upcoming': 'Prochains évènements',
    'events.past': 'Déjà passés',
    'events.month_prev': '← Mois précédent',
    'events.month_next': 'Mois suivant →',
    'events.today': "Aujourd'hui",
    'events.filter_all': 'Tout',
    'events.starts': 'Début',
    'events.ends': 'Fin',
    'events.server': 'Serveur',
    'events.location': 'Lieu',
    'events.recurring': 'Récurrence',
    'events.duration_single_day': 'Une journée',
    'events.back': '← Tout le calendrier',
    'events.details': 'Voir le détail',
    'events.status_live': 'En cours',
    'events.status_upcoming': 'À venir',
    'events.status_past': 'Terminé',

    'event_cat.festival': 'Fête & festival',
    'event_cat.pvp': 'PvP & guerre',
    'event_cat.coronation': 'Couronnement',
    'event_cat.update': 'Mise à jour',
    'event_cat.community': 'Communauté',
    'event_cat.dungeon': 'Donjon éphémère',
    'event_cat.economy': 'Économie & marché',

    'event_recur.once': 'Évènement unique',
    'event_recur.weekly': 'Hebdomadaire',
    'event_recur.monthly': 'Mensuel',
    'event_recur.yearly': 'Annuel',

    'cal.day_short_mon': 'Lun',
    'cal.day_short_tue': 'Mar',
    'cal.day_short_wed': 'Mer',
    'cal.day_short_thu': 'Jeu',
    'cal.day_short_fri': 'Ven',
    'cal.day_short_sat': 'Sam',
    'cal.day_short_sun': 'Dim',

    'shop.eyebrow': 'Boutique du royaume',
    'shop.title': 'Mascottes, montures et trésors du monde.',
    'shop.lead':
      "Pour habiller ton âme, monter plus vite, ou remplir ta bourse de matériaux. Tout ce que la forge prépare pour ton aventure se trouvera ici.",
    'shop.soon': 'Bientôt disponible',
    'shop.soon_notice': "Le paiement n'est pas encore activé. La boutique ouvrira ses portes avant la beta.",
    'shop.price_free': 'Offert',
    'shop.price_tbd': 'Prix à venir',
    'shop.buy': 'Acheter',
    'shop.details': 'Voir le détail',
    'shop.back': '← Toute la boutique',
    'shop.filter_all': 'Tout',
    'shop.empty': 'Le catalogue se prépare. Reviens bientôt.',

    'shop.pets_title': 'Mascottes',
    'shop.pets_lead': 'Compagnons fidèles. Familiers d’ombre ou de lumière. Une présence à tes côtés.',
    'shop.mounts_title': 'Montures',
    'shop.mounts_lead': 'Pour fendre les plaines, traverser les cieux, glisser sur les eaux maudites.',
    'shop.packs_title': 'Ressources',
    'shop.packs_lead': 'Packs de matériaux livrés dans ton inventaire in-game. Pour bâtir sans cueillir.',
    'shop.cosmetics_title': 'Cosmétiques',
    'shop.cosmetics_lead': 'Skins, apparences d’armure et d’arme, effets visuels. Tout ce qui change ton allure sans toucher tes stats.',

    'shop.pets_eyebrow': 'Mascottes',
    'shop.mounts_eyebrow': 'Montures',
    'shop.packs_eyebrow': 'Ressources in-game',
    'shop.cosmetics_eyebrow': 'Cosmétiques',

    'shop.slot': 'Emplacement',
    'shop.effect': 'Effet',

    'shop.type': 'Type',
    'shop.rarity': 'Rareté',
    'shop.faction': 'Camp',
    'shop.perks': 'Bonus',
    'shop.contents': 'Contenu du pack',
    'shop.speed': 'Vitesse',

    'pet.companion': 'Compagnon',
    'pet.familiar': 'Familier',
    'pet.guardian': 'Gardien',
    'pet.spirit': 'Esprit',

    'mount.land': 'Terrestre',
    'mount.aerial': 'Aérienne',
    'mount.aquatic': 'Aquatique',
    'mount.spectral': 'Spectrale',

    'pack.mineral': 'Minerais',
    'pack.wood': 'Bois',
    'pack.plant': 'Plantes',
    'pack.fabric': 'Tissus',
    'pack.magic': 'Magique',
    'pack.food': 'Vivres',
    'pack.bundle': 'Pack mixte',

    'cosmetic.skin': 'Skin personnage',
    'cosmetic.armor': 'Apparence d’armure',
    'cosmetic.weapon': 'Apparence d’arme',
    'cosmetic.weapon_effect': 'Effet d’arme',

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
    'universe.creatures_title': 'Créatures',
    'universe.creatures_lead': 'Bêtes, démons errants, gardiens ancestraux. Ce qui rôde au-delà des feux de camp — et ce qu’ils laissent derrière.',
    'universe.camps_title': 'Camps',
    'universe.camps_lead': 'Anges, Démons, et la voie qui se trace entre les deux. Ton serment n’est jamais figé.',
    'universe.build_title': 'Construire',
    'universe.build_lead': 'Une planche, une pierre, un trône, un rempart. Tout ce que le monde te laisse poser — et casser.',
    'universe.rules_title': 'Règles du Monde',
    'universe.rules_lead': 'Le pouvoir transforme. Chaque race a ses dons et son prix. Chaque école de magie a ses limites. Personne ne peut tout maîtriser.',

    'worldRules.eyebrow': 'Codex · Règles du Monde',
    'worldRules.title': 'Le pouvoir transforme. Toujours.',
    'worldRules.lead':
      "Tous les joueurs peuvent évoluer, apprendre, découvrir, débloquer des compétences. Mais certaines capacités restent interdites à certaines races ou lignées — et c'est ce qui rend chaque identité précieuse.",
    'worldRules.back': '← Codex de King Of Nowhere',

    'worldRules.principle_eyebrow': '⚖',
    'worldRules.principle_title': 'La règle principale du monde',
    'worldRules.principle_text':
      "Dans King Of Nowhere, le pouvoir transforme le joueur. Chaque capacité influence son apparence, change sa réputation, modifie ses relations, transforme sa place dans le monde. Le pouvoir n'est jamais gratuit. Chaque chemin demande des sacrifices.",
    'worldRules.principle_quote':
      "« Vous ne pouvez pas tout apprendre. Vous ne pouvez pas tout maîtriser. Vous ne pouvez pas devenir parfait. Ce que vous gagnez, vous le payez. »",

    'worldRules.races_section_eyebrow': '✦',
    'worldRules.races_section_title': 'Les lignées et leur prix',
    'worldRules.races_section_lead':
      "Trois lignées sont au cœur du conflit. Chacune porte ses dons — et le poids de ce qu'elle ne pourra jamais devenir.",

    'worldRules.humans_name': 'Les Humains',
    'worldRules.humans_tagline': 'Polyvalents. Adaptables. Vulnérables.',
    'worldRules.humans_text':
      "Les humains excellent dans le commerce, la stratégie, l'artisanat, la diplomatie, la survie. Ils apprennent beaucoup de métiers, manient armes et armures, pratiquent une magie simple. Ils créent des royaumes et des alliances qui tiennent.",
    'worldRules.humans_can': 'Polyvalence · Magie simple · Artisanat avancé · Royaumes & alliances · Diplomatie',
    'worldRules.humans_cannot':
      'Très mauvaise résistance à la corruption · Transformations interdites · Certaines magies trop puissantes détruisent leur corps',

    'worldRules.lycans_name': 'Les Lycans',
    'worldRules.lycans_tagline': 'Sang chaud. Crocs longs. Émotions à vif.',
    'worldRules.lycans_text':
      "Les Lycans vivent dans les forêts, les montagnes, les frontières, les zones sauvages. Ils appartiennent aux deux mondes sans appartenir totalement à aucun. La rage, l'instinct, la chasse, la vitesse — voilà leurs armes. La lune est leur calendrier.",
    'worldRules.lycans_can': 'Transformations · Régénération · Sens développés · Capacités sauvages · Hurlement de meute',
    'worldRules.lycans_cannot':
      'Magie complexe très difficile · Contrôle émotionnel fragile · Certaines émotions déclenchent des transformations incontrôlées',

    'worldRules.demons_name': 'Les Démons',
    'worldRules.demons_tagline': 'Rares. Dangereux. Marqués au fer ancien.',
    'worldRules.demons_text':
      "Les démons ne sont pas simplement « méchants ». Ils sont rares, mystérieux, liés à la corruption ancienne du monde. Certains portent cornes, yeux anormaux, aura sombre, marques visibles. Leur seule présence dérange le monde vivant — bétail nerveux, plantes qui se ferment, enfants qui se taisent.",
    'worldRules.demons_can': 'Feu noir · Corruption · Malédictions · Invocation · Magie interdite · Manipulation mentale',
    'worldRules.demons_cannot':
      "Tout pouvoir a un prix · Perte lente d'humanité · Instabilité croissante · Rejet des royaumes · Attire monstres et corruption",

    'worldRules.magic_section_eyebrow': '✺',
    'worldRules.magic_section_title': 'Les trois écoles',
    'worldRules.magic_section_lead':
      "Le monde possède trois écoles magiques principales. Aucune ne se mélange impunément. Choisir une voie, c'est en fermer deux autres.",

    'worldRules.magic_noble_name': 'Magie Noble',
    'worldRules.magic_noble_text':
      "Liée à la lumière, au soin, à la protection, aux royaumes. Très présente côté vivant. Pratiquée par les Anges et les humains pieux. S'affaiblit dans les nuits sans lune et les biomes maudits.",
    'worldRules.magic_wild_name': 'Magie Sauvage',
    'worldRules.magic_wild_text':
      "Liée à la lune, aux instincts, à la nature, aux transformations. Très utilisée par les Lycans. Puissante mais imprévisible — réagit aux saisons, aux émotions, à la phase lunaire.",
    'worldRules.magic_forbidden_name': 'Magie Interdite',
    'worldRules.magic_forbidden_text':
      "Liée à la corruption, aux malédictions, au chaos, aux Abyssaux. Très présente côté détruit. Quiconque la pratique paie de son corps, de sa réputation, ou de sa raison. Souvent les trois.",

    'worldRules.status_section_eyebrow': '🩸',
    'worldRules.status_section_title': 'Statuts & lignées rares',
    'worldRules.status_section_lead':
      "Certaines transformations ne sont pas de naissance. On les choisit, on les subit, ou on naît avec sans le savoir.",

    'worldRules.marked_name': 'Les Marqués',
    'worldRules.marked_text':
      "Humains ayant accepté le sang d'un démon par un rituel interdit. Ils restent humains — mais changent lentement. Magie interdite débloquée, puissance physique anormale, résistance à certaines corruptions, perception surnaturelle. Mais leur corps change, leur esprit devient instable, certains perdent totalement leur identité.",
    'worldRules.abyssal_name': 'Les Abyssaux',
    'worldRules.abyssal_text':
      "Démons extrêmes, anciens, presque non-humanoïdes. Ils ne ressemblent plus à des humains ni même à des démons normaux. Ils déforment la réalité, créent des monstres, corrompent des zones entières, marquent les humains. Leur présence détruit souvent le monde autour d'eux.",
    'worldRules.halfdemon_name': 'Les Demi-démons',
    'worldRules.halfdemon_text':
      "Souvent indiscernables des humains. Leur vraie nature peut rester secrète jusqu'à l'utilisation de leurs pouvoirs. Les enfants du Roi Fendu et de Rose en sont les exemples les plus célèbres — Blanche, l'Héritier du Néant, le Roi Décoiffé, Faël.",
    'worldRules.bloodbond_name': 'Le Lien de Sang',
    'worldRules.bloodbond_text':
      "Rituel interdit par lequel un démon lie son sang à un humain. Permet de transmettre une partie de son pouvoir, d'éveiller des capacités cachées, ou de créer des hybrides rares. Celui qui accepte devient Marqué. Celui qui donne perd un peu de lui-même à chaque rituel.",

    'worldRules.identity_section_eyebrow': '👁',
    'worldRules.identity_section_title': 'Ce que vous ne verrez pas',
    'worldRules.identity_section_lead':
      "Dans King Of Nowhere, les autres joueurs ne voient PAS vos compétences exactes, vos spécialisations, vos capacités cachées, vos transformations possibles. Vous devez découvrir les autres en parlant, en observant, en combattant — par réputation.",

    'worldRules.identity_lycan_title': 'Lycans cachés',
    'worldRules.identity_lycan_text':
      "Les Lycans peuvent souvent passer pour humains. Mais transformations, émotions fortes, blessures, pleine lune ou instincts incontrôlés peuvent révéler leur nature.",
    'worldRules.identity_demon_title': 'Démons visibles',
    'worldRules.identity_demon_text':
      "Certaines classes démoniaques ne peuvent pas cacher leurs yeux, leurs cornes, leur aura, leurs marques. On reconnaît immédiatement qu'ils ne sont pas humains.",
    'worldRules.identity_halfdemon_title': 'Demi-démons indétectables',
    'worldRules.identity_halfdemon_text':
      "Les demi-démons ressemblent souvent à des humains normaux. Leur vraie nature reste secrète jusqu'au premier sort lancé — et après, plus rien n'est jamais pareil.",

    'worldRules.example_eyebrow': '🔥',
    'worldRules.example_title': 'Un exemple concret',
    'worldRules.example_text':
      "Un humain qui accepte le sang d'un démon peut devenir extrêmement puissant. Mais il perd l'accès à certaines villes, devient instable, attire la corruption, est chassé par certains royaumes, et risque de devenir un Marqué à part entière. Le pouvoir n'est pas gratuit. Il ne le sera jamais.",

    'worldRules.closing_quote':
      "« Chaque pouvoir a son prix. Chaque chemin demande des sacrifices. C'est ce qui rend votre identité précieuse — et votre serment irrévocable. »",

    'camps.eyebrow': 'Camps',
    'camps.title': 'Lumière, ombre, et tout ce qui se joue entre.',
    'camps.lead':
      "Dans King Of Nowhere, ton camp n'est pas une case à cocher au début du jeu. C'est une rivière qui suit ce que tu fais. Chaque acte te rapproche d'un bord — ou de l'autre.",
    'camps.angels_name': 'Les Anges',
    'camps.angels_tagline': 'L’ordre qui bâtit, le serment qui tient.',
    'camps.angels_text':
      "Tu protèges les routes. Tu relèves un voyageur tombé. Tu honores un pacte ancien. Tu défends une cité. Chaque geste de fidélité, de construction, de salut t'attire vers la Lumière.",
    'camps.angels_powers': 'Soins amplifiés · Bénédictions de groupe · Forteresses indestructibles plus longtemps · Vol courte distance',
    'camps.demons_name': 'Les Démons',
    'camps.demons_tagline': 'La liberté qui prend, la force qui ne plie pas.',
    'camps.demons_text':
      "Tu pilles un convoi. Tu brûles un sanctuaire ennemi. Tu romps un serment. Tu fais peur. Chaque geste de conquête, de feu, de rupture t'attire vers l'Ombre.",
    'camps.demons_powers': 'Dégâts critiques accrus · Marques de terreur · Forge maudite · Téléportation courte par les ombres',
    'camps.dynamic_title': 'Le serment qui glisse.',
    'camps.dynamic_text':
      "À l'inscription, tu choisis un penchant. Mais ce n'est qu'un point de départ. Une jauge invisible (l'Inclinaison) bouge à chaque action significative : aider, trahir, tuer, sauver, construire, raser. Quand tu franchis certains seuils, ton apparence change, des skills s'ouvrent, d'autres se ferment, et les PNJ te traitent différemment. Tu peux passer toute une vie de personnage d'un côté, ou basculer trois fois.",
    'camps.archons_title': 'Archanges & Archdémons.',
    'camps.archons_lead': 'Les sommets de chaque camp — et des joueurs comme toi.',
    'camps.archons_text':
      "À l'extrême de chaque échelle se trouvent les Archanges et les Archdémons. Ce ne sont pas des PNJ : ce sont des joueurs qui ont prouvé, par leurs actes, qu'ils incarnent leur camp jusqu'au bout. Ils obtiennent des pouvoirs uniques, une apparence légendaire, et un pouvoir politique réel sur leur faction — assemblées, jugements, déclarations de guerre. Il n'y a qu'une poignée de places. Elles changent de mains quand un Archange tombe ou qu'un Archdémon est renversé.",
    'camps.archons_examples_title': 'Pouvoirs spécifiques',
    'camps.archons_examples':
      "Convoquer une armée de fidèles pour une heure · Marquer un joueur comme hérétique (chasse ouverte) · Bénir un territoire entier · Manifester sa présence depuis n'importe quelle cathédrale ou autel.",



    'build.eyebrow': 'Construire',
    'build.title': 'Tout est bâti. Tout peut tomber.',
    'build.lead':
      "Le monde n'arrive pas fini. Du clou de mur au monument rituel, c'est vous qui le posez. Toute la bibliothèque des Sims tient dans ce jeu — étirée, dénaturée, ré-imaginée pour un monde où chaque planche a un propriétaire et chaque mur peut s'effondrer.",
    'build.category': 'Catégorie',
    'build.faction': 'Camp',
    'build.durability': 'Durabilité',
    'build.required_level': 'Niveau requis',
    'build.materials': 'Matériaux requis',
    'build.how_to_destroy': 'Comment le détruire',
    'build.filter_all': 'Tout',
    'build.back': '← Tout ce qu’on peut construire',
    'build.empty': 'Le catalogue se remplit.',
    'build_cat.structure': 'Structures de base',
    'build_cat.functional': 'Bâtiments fonctionnels',
    'build_cat.defense': 'Défenses & fortifications',
    'build_cat.decor': 'Déco, mobilier & monuments',
    'durability.fragile': 'Fragile',
    'durability.standard': 'Standard',
    'durability.reinforced': 'Renforcé',
    'durability.indestructible': 'Indestructible',

    'creatures.eyebrow': 'Créatures',
    'creatures.title': 'Le bestiaire du monde.',
    'creatures.lead':
      "Ce qui te traque, ce qui te défie, ce qui te récompense. Chaque créature a son terrain, ses faiblesses, et ses dépouilles.",
    'creatures.type': 'Type',
    'creatures.threat': 'Menace',
    'creatures.faction': 'Allégeance',
    'creatures.biomes': 'Habitat',
    'creatures.behavior': 'Comportement',
    'creatures.weaknesses': 'Faiblesses',
    'creatures.loots': 'Butin',
    'creatures.back': '← Toutes les créatures',
    'creatures.empty': 'Les premières créatures émergent des brumes.',
    'creature.beast': 'Bête',
    'creature.undead': 'Mort-vivant',
    'creature.demon': 'Démon',
    'creature.angel': 'Ange',
    'creature.elemental': 'Élémentaire',
    'creature.aberration': 'Aberration',
    'creature.humanoid': 'Humanoïde',
    'creature.spirit': 'Esprit',
    'threat.minor': 'Mineure',
    'threat.standard': 'Standard',
    'threat.elite': 'Élite',
    'threat.boss': 'Boss',
    'threat.legendary': 'Légendaire',

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
    'biomes.named_entities': 'Entités Nommées',
    'biomes.back': '← Tous les biomes',
    'biomes.empty': "La cartographie est en cours.",
    'climate.temperate': 'Tempéré',
    'climate.cold': 'Froid',
    'climate.arid': 'Aride',
    'climate.tropical': 'Tropical',
    'climate.volcanic': 'Volcanique',
    'climate.ethereal': 'Éthéré',
    'climate.cursed': 'Maudit',
    'danger.city': 'Sanctuaire',
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

    'videoIntro.eyebrow': 'Bande-annonce',
    'videoIntro.title': "Plonge dans l'univers de King Of Nowhere.",
    'videoIntro.play_aria': 'Lire la vidéo',
    'videoIntro.pause_aria': 'Mettre en pause',
    'videoIntro.unmute_aria': 'Activer le son',
    'videoIntro.mute_aria': 'Couper le son',
    'videoIntro.volume_aria': 'Volume',
    'videoIntro.fullscreen_aria': 'Plein écran',

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
    'nav.shop': 'Shop',
    'nav.events': 'Events',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    'events.eyebrow': 'Realm calendar',
    'events.title': "What's brewing in the world.",
    'events.lead':
      'Festivals, sieges, coronations, fleeting raids, updates. The pulse of the server, month by month — so no soul misses the gathering.',
    'events.empty': 'No events announced yet. The calendar is being written.',
    'events.empty_month': 'A quiet month. No events announced.',
    'events.live_now': 'Live now',
    'events.upcoming': 'Upcoming events',
    'events.past': 'Past events',
    'events.month_prev': '← Previous month',
    'events.month_next': 'Next month →',
    'events.today': 'Today',
    'events.filter_all': 'All',
    'events.starts': 'Starts',
    'events.ends': 'Ends',
    'events.server': 'Server',
    'events.location': 'Location',
    'events.recurring': 'Recurrence',
    'events.duration_single_day': 'Single day',
    'events.back': '← Back to calendar',
    'events.details': 'See details',
    'events.status_live': 'Live',
    'events.status_upcoming': 'Upcoming',
    'events.status_past': 'Ended',

    'event_cat.festival': 'Festival',
    'event_cat.pvp': 'PvP & war',
    'event_cat.coronation': 'Coronation',
    'event_cat.update': 'Update',
    'event_cat.community': 'Community',
    'event_cat.dungeon': 'Fleeting dungeon',
    'event_cat.economy': 'Economy & market',

    'event_recur.once': 'One-off',
    'event_recur.weekly': 'Weekly',
    'event_recur.monthly': 'Monthly',
    'event_recur.yearly': 'Yearly',

    'cal.day_short_mon': 'Mon',
    'cal.day_short_tue': 'Tue',
    'cal.day_short_wed': 'Wed',
    'cal.day_short_thu': 'Thu',
    'cal.day_short_fri': 'Fri',
    'cal.day_short_sat': 'Sat',
    'cal.day_short_sun': 'Sun',

    'shop.eyebrow': 'Realm shop',
    'shop.title': 'Pets, mounts and treasures of the world.',
    'shop.lead':
      'To dress your soul, ride faster, or fill your purse with materials. Everything the forge prepares for your journey will land here.',
    'shop.soon': 'Coming soon',
    'shop.soon_notice': "Payment isn't enabled yet. The shop will open its doors before the beta.",
    'shop.price_free': 'Free',
    'shop.price_tbd': 'Price TBD',
    'shop.buy': 'Buy',
    'shop.details': 'See details',
    'shop.back': '← Back to the shop',
    'shop.filter_all': 'All',
    'shop.empty': 'The catalog is taking shape. Check back soon.',

    'shop.pets_title': 'Pets',
    'shop.pets_lead': 'Faithful companions. Shadow familiars or beings of light. A presence by your side.',
    'shop.mounts_title': 'Mounts',
    'shop.mounts_lead': 'To tear across plains, cut through the skies, glide over cursed waters.',
    'shop.packs_title': 'Resources',
    'shop.packs_lead': 'Material packs delivered straight to your in-game inventory. Build without gathering.',
    'shop.cosmetics_title': 'Cosmetics',
    'shop.cosmetics_lead': 'Skins, armor and weapon looks, visual effects. Everything that changes how you look without touching your stats.',

    'shop.pets_eyebrow': 'Pets',
    'shop.mounts_eyebrow': 'Mounts',
    'shop.packs_eyebrow': 'In-game resources',
    'shop.cosmetics_eyebrow': 'Cosmetics',

    'shop.slot': 'Slot',
    'shop.effect': 'Effect',

    'shop.type': 'Type',
    'shop.rarity': 'Rarity',
    'shop.faction': 'Side',
    'shop.perks': 'Perks',
    'shop.contents': 'Pack contents',
    'shop.speed': 'Speed',

    'pet.companion': 'Companion',
    'pet.familiar': 'Familiar',
    'pet.guardian': 'Guardian',
    'pet.spirit': 'Spirit',

    'mount.land': 'Land',
    'mount.aerial': 'Aerial',
    'mount.aquatic': 'Aquatic',
    'mount.spectral': 'Spectral',

    'pack.mineral': 'Ores',
    'pack.wood': 'Wood',
    'pack.plant': 'Plants',
    'pack.fabric': 'Fabrics',
    'pack.magic': 'Magic',
    'pack.food': 'Food',
    'pack.bundle': 'Mixed pack',

    'cosmetic.skin': 'Character skin',
    'cosmetic.armor': 'Armor look',
    'cosmetic.weapon': 'Weapon look',
    'cosmetic.weapon_effect': 'Weapon effect',

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
    'universe.creatures_title': 'Creatures',
    'universe.creatures_lead': 'Beasts, wandering demons, ancestral wardens. What prowls beyond the campfire — and what they leave behind.',
    'universe.camps_title': 'Sides',
    'universe.camps_lead': 'Angels, Demons, and the path traced between them. Your oath is never frozen.',
    'universe.build_title': 'Build',
    'universe.build_lead': 'A plank, a stone, a throne, a rampart. Everything the world lets you place — and break.',
    'universe.rules_title': 'World Rules',
    'universe.rules_lead': 'Power transforms. Each race has its gifts and its price. Each school of magic has its limits. No one can master it all.',

    'worldRules.eyebrow': 'Codex · World Rules',
    'worldRules.title': 'Power transforms. Always.',
    'worldRules.lead':
      "Every player can grow, learn, discover, unlock new skills. But some abilities remain forbidden to certain races or bloodlines — and that is what makes each identity precious.",
    'worldRules.back': '← King Of Nowhere Codex',

    'worldRules.principle_eyebrow': '⚖',
    'worldRules.principle_title': 'The main rule of the world',
    'worldRules.principle_text':
      "In King Of Nowhere, power transforms the player. Every ability influences appearance, shifts reputation, changes relationships, reshapes one's place in the world. Power is never free. Every path demands sacrifice.",
    'worldRules.principle_quote':
      "\"You cannot learn everything. You cannot master everything. You cannot become perfect. Whatever you gain, you pay for.\"",

    'worldRules.races_section_eyebrow': '✦',
    'worldRules.races_section_title': 'Bloodlines and their price',
    'worldRules.races_section_lead':
      "Three bloodlines stand at the heart of the conflict. Each carries gifts — and the weight of what it can never become.",

    'worldRules.humans_name': 'The Humans',
    'worldRules.humans_tagline': 'Versatile. Adaptable. Vulnerable.',
    'worldRules.humans_text':
      "Humans excel at trade, strategy, craft, diplomacy, survival. They learn many trades, wield weapons and armor, practice simple magic. They build kingdoms and alliances that hold.",
    'worldRules.humans_can': 'Versatility · Simple magic · Advanced craft · Kingdoms & alliances · Diplomacy',
    'worldRules.humans_cannot':
      'Very poor resistance to corruption · Transformations forbidden · Some powerful magics destroy their body',

    'worldRules.lycans_name': 'The Lycans',
    'worldRules.lycans_tagline': 'Hot blood. Long fangs. Raw emotion.',
    'worldRules.lycans_text':
      "Lycans live in forests, mountains, frontiers, wild lands. They belong to both worlds without fully belonging to either. Rage, instinct, hunt, speed — these are their weapons. The moon is their calendar.",
    'worldRules.lycans_can': 'Transformations · Regeneration · Heightened senses · Wild abilities · Pack-howl',
    'worldRules.lycans_cannot':
      'Complex magic very difficult · Fragile emotional control · Strong emotions trigger uncontrolled transformations',

    'worldRules.demons_name': 'The Demons',
    'worldRules.demons_tagline': 'Rare. Dangerous. Marked by ancient iron.',
    'worldRules.demons_text':
      "Demons are not simply \"evil\". They are rare, mysterious, bound to the world's ancient corruption. Some bear horns, abnormal eyes, dark aura, visible marks. Their mere presence unsettles the living world — nervous cattle, plants that close, children who fall silent.",
    'worldRules.demons_can': 'Black fire · Corruption · Curses · Summoning · Forbidden magic · Mental manipulation',
    'worldRules.demons_cannot':
      "Every power has a price · Slow loss of humanity · Growing instability · Rejection by kingdoms · Draws monsters and corruption",

    'worldRules.magic_section_eyebrow': '✺',
    'worldRules.magic_section_title': 'The three schools',
    'worldRules.magic_section_lead':
      "The world holds three main schools of magic. None mix safely. Choosing a path closes two others.",

    'worldRules.magic_noble_name': 'Noble Magic',
    'worldRules.magic_noble_text':
      "Bound to light, healing, protection, kingdoms. Strong on the living side. Practiced by Angels and pious humans. Weakens during moonless nights and in cursed biomes.",
    'worldRules.magic_wild_name': 'Wild Magic',
    'worldRules.magic_wild_text':
      "Bound to the moon, instincts, nature, transformations. Wielded mostly by Lycans. Powerful but unpredictable — reacts to seasons, emotions, the lunar phase.",
    'worldRules.magic_forbidden_name': 'Forbidden Magic',
    'worldRules.magic_forbidden_text':
      "Bound to corruption, curses, chaos, the Abyssals. Strong on the destroyed side. Whoever practices it pays with body, reputation, or sanity. Often all three.",

    'worldRules.status_section_eyebrow': '🩸',
    'worldRules.status_section_title': 'Statuses & rare bloodlines',
    'worldRules.status_section_lead':
      "Some transformations are not born. They are chosen, endured, or carried in secret since birth.",

    'worldRules.marked_name': 'The Marked',
    'worldRules.marked_text':
      "Humans who have accepted a demon's blood through a forbidden ritual. They remain human — but change slowly. Forbidden magic unlocked, abnormal physical strength, resistance to some corruptions, supernatural perception. But their body changes, their mind grows unstable, some lose their identity entirely.",
    'worldRules.abyssal_name': 'The Abyssals',
    'worldRules.abyssal_text':
      "Extreme demons, ancient, almost non-humanoid. They no longer resemble humans or even normal demons. They warp reality, breed monsters, corrupt entire zones, mark humans. Their presence often destroys the world around them.",
    'worldRules.halfdemon_name': 'The Half-demons',
    'worldRules.halfdemon_text':
      "Often indistinguishable from humans. Their true nature can stay secret until their powers are used. The children of the Cleaved King and Rose are the most famous examples — Blanche, the Heir of the Void, the Disheveled King, Faël.",
    'worldRules.bloodbond_name': 'The Blood Bond',
    'worldRules.bloodbond_text':
      "A forbidden ritual through which a demon binds its blood to a human. Transmits part of its power, awakens hidden abilities, or creates rare hybrids. The one who accepts becomes Marked. The one who gives loses a piece of themselves with each ritual.",

    'worldRules.identity_section_eyebrow': '👁',
    'worldRules.identity_section_title': 'What you will not see',
    'worldRules.identity_section_lead':
      "In King Of Nowhere, other players do NOT see your exact skills, your specializations, your hidden abilities, your possible transformations. You must discover others by speaking, observing, fighting — by reputation.",

    'worldRules.identity_lycan_title': 'Hidden Lycans',
    'worldRules.identity_lycan_text':
      "Lycans can often pass for human. But transformations, strong emotions, wounds, the full moon, or uncontrolled instincts can reveal their nature.",
    'worldRules.identity_demon_title': 'Visible Demons',
    'worldRules.identity_demon_text':
      "Some demonic classes cannot hide their eyes, their horns, their aura, their marks. They are recognized as non-human at first sight.",
    'worldRules.identity_halfdemon_title': 'Undetectable Half-demons',
    'worldRules.identity_halfdemon_text':
      "Half-demons often look like normal humans. Their true nature stays secret until the first spell is cast — and after that, nothing is ever the same.",

    'worldRules.example_eyebrow': '🔥',
    'worldRules.example_title': 'A concrete example',
    'worldRules.example_text':
      "A human who accepts a demon's blood can become extremely powerful. But they lose access to certain cities, grow unstable, attract corruption, are hunted by some kingdoms, and risk becoming a full Marked. Power is not free. It never will be.",

    'worldRules.closing_quote':
      "\"Every power has its price. Every path demands sacrifice. That is what makes your identity precious — and your oath irrevocable.\"",

    'camps.eyebrow': 'Sides',
    'camps.title': 'Light, shadow, and everything in between.',
    'camps.lead':
      "In King Of Nowhere, your side isn't a checkbox at the start of the game. It's a river that follows what you do. Every act draws you closer to one shore — or the other.",
    'camps.angels_name': 'The Angels',
    'camps.angels_tagline': 'The order that builds, the oath that holds.',
    'camps.angels_text':
      'You protect the roads. You raise a fallen traveler. You honor an ancient pact. You defend a city. Every act of loyalty, of building, of salvation pulls you toward the Light.',
    'camps.angels_powers': 'Amplified healing · Group blessings · Indestructible fortresses for longer · Short-range flight',
    'camps.demons_name': 'The Demons',
    'camps.demons_tagline': 'Freedom that takes, strength that does not bend.',
    'camps.demons_text':
      'You raid a convoy. You burn an enemy sanctuary. You break an oath. You make them afraid. Every act of conquest, of fire, of rupture pulls you toward the Shadow.',
    'camps.demons_powers': 'Increased critical damage · Marks of terror · Cursed forge · Short shadow teleport',
    'camps.dynamic_title': 'The oath that slides.',
    'camps.dynamic_text':
      "At sign-up, you choose a leaning. But it's only a starting point. An invisible gauge (the Inclination) shifts with every meaningful action: helping, betraying, killing, saving, building, razing. When you cross certain thresholds, your appearance changes, skills open up, others close, and NPCs treat you differently. You can live an entire character's life on one side, or swing across three times.",
    'camps.archons_title': 'Archangels & Archdemons.',
    'camps.archons_lead': 'The peaks of each side — and players just like you.',
    'camps.archons_text':
      "At the extreme of each scale stand the Archangels and the Archdemons. They are not NPCs: they are players who have proven, through their acts, that they embody their side to the bone. They gain unique powers, a legendary appearance, and real political power over their faction — assemblies, judgments, declarations of war. There are only a handful of seats. They change hands when an Archangel falls or an Archdemon is overthrown.",
    'camps.archons_examples_title': 'Signature powers',
    'camps.archons_examples':
      "Summon an army of faithful for one hour · Mark a player as a heretic (open hunt) · Bless an entire territory · Manifest from any cathedral or altar.",



    'build.eyebrow': 'Build',
    'build.title': 'Everything is built. Everything can fall.',
    'build.lead':
      "The world doesn't arrive finished. From a wall nail to a ritual monument, you place it. The entire Sims library fits inside this game — stretched, twisted, re-imagined for a world where every plank has an owner and every wall can collapse.",
    'build.category': 'Category',
    'build.faction': 'Side',
    'build.durability': 'Durability',
    'build.required_level': 'Required level',
    'build.materials': 'Required materials',
    'build.how_to_destroy': 'How to destroy it',
    'build.filter_all': 'All',
    'build.back': '← Everything you can build',
    'build.empty': 'The catalog is filling up.',
    'build_cat.structure': 'Core structures',
    'build_cat.functional': 'Functional buildings',
    'build_cat.defense': 'Defenses & fortifications',
    'build_cat.decor': 'Decor, furniture & monuments',
    'durability.fragile': 'Fragile',
    'durability.standard': 'Standard',
    'durability.reinforced': 'Reinforced',
    'durability.indestructible': 'Indestructible',

    'creatures.eyebrow': 'Creatures',
    'creatures.title': 'The bestiary of the world.',
    'creatures.lead':
      'What hunts you, what challenges you, what rewards you. Every creature has its terrain, its weaknesses, and its spoils.',
    'creatures.type': 'Type',
    'creatures.threat': 'Threat',
    'creatures.faction': 'Allegiance',
    'creatures.biomes': 'Habitat',
    'creatures.behavior': 'Behavior',
    'creatures.weaknesses': 'Weaknesses',
    'creatures.loots': 'Loot',
    'creatures.back': '← All creatures',
    'creatures.empty': 'The first creatures emerge from the mists.',
    'creature.beast': 'Beast',
    'creature.undead': 'Undead',
    'creature.demon': 'Demon',
    'creature.angel': 'Angel',
    'creature.elemental': 'Elemental',
    'creature.aberration': 'Aberration',
    'creature.humanoid': 'Humanoid',
    'creature.spirit': 'Spirit',
    'threat.minor': 'Minor',
    'threat.standard': 'Standard',
    'threat.elite': 'Elite',
    'threat.boss': 'Boss',
    'threat.legendary': 'Legendary',

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
    'biomes.named_entities': 'Named Entities',
    'biomes.back': '← All biomes',
    'biomes.empty': 'The cartography is in progress.',
    'climate.temperate': 'Temperate',
    'climate.cold': 'Cold',
    'climate.arid': 'Arid',
    'climate.tropical': 'Tropical',
    'climate.volcanic': 'Volcanic',
    'climate.ethereal': 'Ethereal',
    'climate.cursed': 'Cursed',
    'danger.city': 'Sanctuary',
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

    'videoIntro.eyebrow': 'Trailer',
    'videoIntro.title': 'Step into the world of King Of Nowhere.',
    'videoIntro.play_aria': 'Play video',
    'videoIntro.pause_aria': 'Pause video',
    'videoIntro.unmute_aria': 'Unmute',
    'videoIntro.mute_aria': 'Mute',
    'videoIntro.volume_aria': 'Volume',
    'videoIntro.fullscreen_aria': 'Fullscreen',

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
