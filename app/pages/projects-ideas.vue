<script setup lang="ts">
type Projet = {
  id: string
  titre: string
  tags: string[]
  contexte: string
  objectif: string
  mvp: string[]
  regles: string[]
  exemplesLabel?: string
  exemples?: string[]
  bonus: string[]
  conseils: string[]
}

type Niveau = {
  numero: number
  titre: string
  projets: Projet[]
}

const niveaux: Niveau[] = [
  {
    numero: 1,
    titre: 'Passer du tuto au projet terminé',
    projets: [
      {
        id: 'tracker-habitudes',
        titre: "Tracker d'habitudes",
        tags: ['Frontend', "Gestion d'états", 'Formulaire', 'Logique métier', 'Persistance locale'],
        contexte:
            "Tu veux suivre certaines habitudes (sport, lecture, code, hydratation…). Plutôt que d'utiliser une app existante, tu crées ton propre tracker, simple et adapté à tes besoins.",
        objectif: "L'utilisateur peut créer des habitudes et suivre s'il les a réalisées chaque jour.",
        mvp: [
          'Créer une habitude (nom + fréquence)',
          'Afficher la liste des habitudes',
          'Marquer une habitude comme faite / non faite pour la journée',
          "Voir visuellement l'état du jour",
          'Conserver les données entre deux sessions',
        ],
        regles: [
          "Pas d'authentification",
          'Pas de backend',
          'Données stockées localement',
          'Interface simple et lisible',
        ],
        bonus: [
          'Modifier et supprimer une habitude',
          'Ajouter une couleur et/ou une icône par habitude',
          'Vue hebdomadaire ou mensuelle',
          'Statistiques simples (taux de réussite)',
          'Sauvegarder les données en base',
        ],
        conseils: [
          'Commence par le noyau obligatoire, sans chercher à tout optimiser',
          "Termine le projet avant d'ajouter des extensions",
          'Garde le code simple et lisible',
          "Tu pourras toujours revenir plus tard pour l'améliorer",
        ],
      },
      {
        id: 'api-publique',
        titre: 'Application avec API publique',
        tags: ['Frontend', 'API', 'Formulaire', 'Asynchrone', 'Gestion des états'],
        contexte:
            "Tu veux créer une application qui affiche des données réelles provenant d'un service externe. Pour comprendre comment fonctionnent les vraies applications, tu construis ta propre interface connectée à une API publique.",
        objectif:
            "L'utilisateur peut consulter des informations réelles récupérées depuis une API externe, via une interface claire.",
        mvp: [
          'Récupérer des données depuis une API publique',
          "Afficher ces données dans l'interface",
          'Gérer les états de chargement',
          "Afficher un message en cas d'erreur",
        ],
        regles: [
          "API publique libre d'accès",
          "Pas d'authentification",
          'Pas de backend',
          'Compréhension des données avant le design',
          'Interface simple et fonctionnelle',
        ],
        exemplesLabel: "Exemples d'API",
        exemples: ['Sport : Basketball, football, tennis...', 'Divertissement : Youtube, films, Pokemon...', 'Voyage : Hôtels, vols...'],
        bonus: [
          'Permettre une interaction simple (recherche, filtre ou tri)',
          'Pagination ou chargement progressif',
          'Ajout de favoris',
        ],
        conseils: [
          'Commence par afficher les données brutes',
          "Lis bien la structure de la réponse de l'API",
          "Gère tous les cas où l'API ne répond pas",
          "Termine le MVP avant d'améliorer l'UI",
        ],
      },
      {
        id: 'mini-jeu',
        titre: 'Mini-jeu web',
        tags: ['Frontend', 'Logique', 'Interactions', 'Gestion des états'],
        contexte:
            'Tu veux créer une application ludique pour apprendre à gérer des règles, des états et des interactions utilisateur. Tu peux copier un jeu existant ou bien développer ton propre mini-jeu, simple mais complet.',
        objectif: "L'utilisateur peut jouer à un mini-jeu, comprendre les règles et voir son score évoluer.",
        mvp: [
          'Afficher une interface de jeu claire',
          'Définir des règles simples et compréhensibles',
          "Gérer l'état du jeu (début, en cours, fin)",
          'Mettre à jour un score ou un résultat',
          'Permettre de relancer une partie',
        ],
        regles: [
          'Pas de backend',
          "Pas d'authentification",
          'Jeu jouable en une seule session',
          'Règles simples et explicites',
          'Interface lisible et fonctionnelle',
        ],
        exemplesLabel: 'Exemples de mini-jeux',
        exemples: ['Tic Tac Toe', 'Jeu de mémoire', 'Jeu de réflexe (timer, clic rapide)', 'Devinette (nombre, mot, logique simple)', 'Quiz'],
        bonus: [
          'Ajouter un feedback visuel lors des actions',
          'Ajouter un chronomètre ou un nombre de tentatives',
          'Sauvegarder le meilleur score localement (ou dans une base de données)',
          'Ajouter plusieurs niveaux de difficulté',
          'Ajouter des animations ou des effets sonores',
        ],
        conseils: [
          'Commence par définir les règles',
          'Teste souvent ton jeu pour vérifier la logique',
          'Garde les règles simples et cohérentes',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
    ],
  },
  {
    numero: 2,
    titre: 'Structurer proprement une application',
    projets: [
      {
        id: 'gestionnaire-taches',
        titre: 'Gestionnaire de tâches avancé',
        tags: ['Frontend', 'Structuration', 'Logique métier', 'Gestion des états'],
        contexte:
            "Tu veux aller plus loin qu'une simple todo-list. L'objectif est de construire une application de gestion de tâches mieux structurée, avec de vraies règles et une organisation claire du code.",
        objectif: "L'utilisateur peut organiser ses tâches, les suivre dans le temps et garder une vue claire de ce qu'il a à faire.",
        mvp: [
          'Créer une tâche avec plusieurs informations (titre, description, statut)',
          'Afficher une liste de tâches organisée',
          'Modifier et supprimer une tâche',
          "Changer l'état d'une tâche (à faire, en cours, terminée)",
          'Conserver les données entre deux sessions',
        ],
        regles: [
          'Pas de backend',
          "Pas d'authentification",
          'Données stockées localement',
          'Code organisé en composants clairs',
          'Séparation logique entre UI et logique métier',
        ],
        bonus: [
          'Ajouter des filtres (par statut, priorité)',
          'Ajouter un système de priorités',
          'Ajouter des catégories ou projets',
          'Sauvegarder les données en base',
        ],
        conseils: [
          'Commence par une structure simple et claire',
          'Évite de tout mettre dans un seul composant',
          'Donne des noms explicites à tes variables et fonctions',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
      {
        id: 'planificateur-evenements',
        titre: "Planificateur d'événements",
        tags: ['Frontend', 'Structuration', 'Relations', 'Logique métier'],
        contexte:
            "Tu organises un événement (soirée, voyage, projet de groupe, hackathon…). Pour centraliser les informations et les participants, tu crées une application de planification simple, mais structurée.",
        objectif: "L'utilisateur peut créer un événement, inviter des participants et organiser les informations liées à cet événement.",
        mvp: [
          'Créer un événement (nom, date, description)',
          'Ajouter et supprimer des participants',
          'Associer des informations à un événement (lieu, notes, étapes)',
          "Afficher le détail d'un événement",
          'Conserver les données entre deux sessions',
        ],
        regles: [
          'Pas de backend',
          "Pas d'authentification",
          'Données stockées localement',
          'Gestion claire des relations (événement ↔ participants)',
          'Interface simple et lisible',
        ],
        bonus: [
          'Ajouter un statut aux participants (invité, confirmé)',
          "Permettre l'édition complète d'un événement",
          'Gérer plusieurs événements en parallèle',
          'Sauvegarder les données en base',
        ],
        conseils: [
          "Commence par modéliser les données avant de coder l'interface",
          'Sépare clairement les entités (événement, participant)',
          'Garde une logique simple et cohérente',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
      {
        id: 'dashboard-donnees',
        titre: 'Dashboard de données',
        tags: ['Frontend', 'Données', 'Visualisation', 'Structuration'],
        contexte:
            "Tu veux avoir une vue claire et synthétique de certaines données (personnelles ou simulées). Plutôt que d'afficher des listes brutes, tu construis un dashboard qui organise et met en valeur ces informations.",
        objectif: "L'utilisateur peut consulter des données organisées et comprendre rapidement les informations importantes.",
        mvp: [
          'Afficher un ensemble de données structurées',
          'Présenter des indicateurs clés (chiffres, états, tendances simples)',
          'Organiser les données en sections claires',
          "Mettre à jour l'affichage en fonction des données",
        ],
        regles: [
          'Pas de backend',
          "Pas d'authentification",
          'Données locales ou simulées',
          'Interface lisible et hiérarchisée',
          'Code organisé et maintenable',
        ],
        exemplesLabel: 'Exemples de thématiques',
        exemples: [
          'Suivi personnel : Sport, habitudes, finances...',
          'Données : Ventes, utilisateurs, stats fictives...',
          "Données issues d'une API publique (voir le projet « Application avec API publique »)",
        ],
        bonus: [
          'Ajouter des filtres ou sélecteurs de période',
          'Ajouter des graphiques simples',
          'Gérer des données vides ou incomplètes',
          'Rendre le dashboard responsive',
        ],
        conseils: [
          'Commence par définir les indicateurs à afficher',
          "Évite d'afficher trop d'informations en même temps",
          'Hiérarchise visuellement les données',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
    ],
  },
  {
    numero: 3,
    titre: 'Réaliser des projets réalistes et valorisables',
    projets: [
      {
        id: 'preferences-live',
        titre: 'Préférences utilisateur live',
        tags: ['Frontend', 'UX', "Gestion d'états", 'Logique métier'],
        contexte:
            "Tu veux créer une application qui s'adapte réellement à l'utilisateur. Plutôt que de simples paramètres décoratifs, tu construis une app où les préférences modifient visiblement le comportement et l'interface.",
        objectif: "L'utilisateur peut configurer ses préférences et voir immédiatement leur impact dans l'application.",
        mvp: [
          'Définir plusieurs préférences utilisateur',
          "Modifier l'interface ou le contenu en fonction de ces préférences",
          "Sauvegarder les préférences de l'utilisateur",
          'Appliquer automatiquement les préférences au chargement',
          'Réinitialiser les préférences',
        ],
        regles: [
          'Pas de backend',
          "Pas d'authentification",
          'Préférences stockées localement',
          'Impact visible et compréhensible des réglages',
        ],
        exemplesLabel: 'Exemples de préférences',
        exemples: ['Thème (clair / sombre / contrasté)', 'Langue ou format de date', 'Niveau de détails affichés', 'Mode « débutant / avancé »'],
        bonus: [
          'Ajouter des préférences avancées',
          'Ajouter des profils de préférences',
          'Gérer des cas de conflit entre préférences',
        ],
        conseils: [
          "Commence par définir clairement l'impact de chaque préférence",
          'Évite les réglages purement décoratifs',
          'Teste chaque combinaison de paramètres',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
      {
        id: 'outil-cas-precis',
        titre: 'Mini outil pour un cas précis',
        tags: ['Produit', 'UX', 'Logique métier'],
        contexte:
            "Tu identifies un besoin concret pour un profil précis (freelance, étudiant, créateur de contenu, association…). Plutôt que de créer une app générique, tu conçois un outil ciblé, pensé pour résoudre un problème réel.",
        objectif: "L'utilisateur peut accomplir plus facilement une tâche spécifique liée à son activité.",
        mvp: [
          'Définir clairement le profil utilisateur ciblé',
          'Identifier un problème précis à résoudre',
          'Proposer une fonctionnalité principale utile',
          'Permettre à l\u2019utilisateur d\u2019accomplir cette tâche simplement',
          "Conserver les données liées à l'usage de l'outil",
        ],
        regles: [
          'Un seul profil utilisateur ciblé',
          'Une problématique principale à résoudre',
          'Interface simple et orientée usage',
        ],
        exemplesLabel: 'Exemples de problèmes',
        exemples: ['Suivre des missions ou projets', 'Organiser des révisions', 'Suivre des actions ou événements', 'Centraliser des infos importantes'],
        bonus: [
          'Ajouter des fonctionnalités secondaires utiles',
          'Améliorer le parcours utilisateur',
          'Ajouter des aides ou messages contextuels',
          "Gérer davantage de cas d'usage",
        ],
        conseils: [
          'Choisis un profil que tu connais ou comprends bien',
          'Commence par une seule fonctionnalité clé',
          "Évite d'ajouter des options inutiles",
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
      {
        id: 'mini-cms',
        titre: 'Mini CMS',
        tags: ['CRUD', 'UX', 'Structuration', 'Logique métier'],
        contexte:
            "Tu veux gérer et afficher du contenu sans le modifier directement dans le code. Pour cela, tu construis un mini CMS, avec une interface d'administration et une partie publique.",
        objectif: "L'utilisateur peut créer et gérer du contenu via une interface admin, et le voir affiché côté public.",
        mvp: [
          'Créer, modifier et supprimer du contenu',
          'Afficher une liste de contenus côté public',
          "Afficher le détail d'un contenu",
          "Mettre à jour l'affichage public après modification",
        ],
        regles: ['Données stockées en base', 'Séparation claire entre admin et public', 'Structure de code lisible'],
        exemplesLabel: 'Exemples de contenus',
        exemples: ['Articles', 'Événements', 'Ressources', 'Produits fictifs'],
        bonus: [
          'Ajouter des champs personnalisés au contenu',
          'Ajouter un tri ou filtre côté public',
          "Améliorer l'interface d'administration",
          'Gérer des états vides et erreurs',
        ],
        conseils: [
          'Commence par définir le modèle de contenu',
          'Sépare clairement les responsabilités (admin / public)',
          'Garde une logique simple et cohérente',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
    ],
  },
  {
    numero: 4,
    titre: "Se différencier et se rapprocher d'un contexte professionnel",
    projets: [
      {
        id: 'amelioration-projet',
        titre: "Amélioration d'un projet existant",
        tags: ['CRUD', 'UX', 'Structuration', 'Logique métier'],
        contexte:
            "En entreprise, tu travailles rarement sur un projet neuf. Tu dois souvent comprendre un code existant, identifier ses limites et l'améliorer. Dans ce projet, tu pars d'une application déjà développée pour la faire évoluer.",
        objectif: "L'utilisateur bénéficie d'une application plus claire, plus stable et plus agréable à utiliser.",
        mvp: [
          'Comprendre le fonctionnement global du projet existant',
          "Identifier des points d'amélioration clairs",
          'Refactoriser une partie du code',
          'Améliorer la lisibilité ou la structure du projet',
          'Vérifier que le comportement reste correct',
        ],
        regles: [
          "Projet de départ existant (le tien ou celui d'un tiers)",
          'Pas d\u2019ajout massif de nouvelles fonctionnalités',
          'Focus sur la qualité et la lisibilité',
          'Améliorations progressives et ciblées',
          'Comportement fonctionnel inchangé',
        ],
        exemplesLabel: "Exemples d'amélioration",
        exemples: ['Lisibilité et qualité du code', 'Organisation des fichiers', 'Duplication de logique', 'Gestion des erreurs', 'Nommage'],
        bonus: [
          'Simplifier une logique complexe',
          'Ajouter des validations ou sécurités simples',
          'Améliorer les performances ou la maintenabilité',
          'Ajouter de nouvelles fonctionnalités',
        ],
        conseils: [
          'Commence par lire le code sans le modifier',
          'Change une chose à la fois',
          'Teste régulièrement pour éviter les régressions',
          'Sois toujours capable d\u2019expliquer pourquoi tu as refactorisé',
        ],
      },
      {
        id: 'roles-permissions',
        titre: 'App avec rôles et permissions',
        tags: ['Permissions', 'UX', 'Structuration', 'Logique métier'],
        contexte:
            "Dans de nombreuses applications, tous les utilisateurs n'ont pas accès aux mêmes fonctionnalités. Tu construis ici une application avec différents rôles, chacun ayant des droits spécifiques.",
        objectif: "L'utilisateur peut accéder à des fonctionnalités différentes selon son rôle.",
        mvp: [
          'Définir plusieurs rôles utilisateurs',
          'Associer des permissions à chaque rôle',
          "Restreindre l'accès à certaines fonctionnalités",
          'Afficher une interface adaptée selon le rôle',
          "Gérer les tentatives d'accès non autorisées",
        ],
        regles: [
          'Rôles gérés côté backend',
          'Affichage géré côté frontend',
          'Logique de permissions centralisée',
          "Règles d'accès claires et explicites",
        ],
        exemplesLabel: 'Exemples de contextes',
        exemples: ['Outil interne d\u2019entreprise', 'Plateforme de gestion', 'App collaborative', 'Tableau de bord partagé'],
        bonus: [
          'Ajouter de nouveaux rôles',
          'Gérer des permissions plus fines',
          'Afficher des messages d\u2019erreur adaptés',
          'Ajouter une interface de gestion des rôles',
        ],
        conseils: [
          'Commence par lister clairement les rôles et droits',
          "Centralise la logique d'accès",
          'Teste tous les cas possibles',
          "Termine le MVP avant d'ajouter des améliorations",
        ],
      },
      {
        id: 'contraintes-reelles',
        titre: 'Projet avec contraintes réelles',
        tags: ['Organisation', 'Adaptation', 'Logique métier', 'Prise de décision'],
        contexte:
            'Dans un contexte professionnel, les contraintes font partie du quotidien : délais, règles imposées, changements en cours de route. Dans ce projet, tu construis une application en respectant des contraintes précises, comme dans la vraie vie.',
        objectif: "L'utilisateur peut utiliser une application fonctionnelle malgré des contraintes imposées.",
        mvp: [
          'Comprendre les contraintes imposées',
          'Construire une application respectant ces contraintes',
          'Prioriser les fonctionnalités essentielles',
          "Adapter son approche en cas de changement",
          'Livrer une version fonctionnelle',
        ],
        regles: [
          'Contraintes définies avant de commencer (temps, règles, fonctionnalités)',
          "Pas de sur-optimisation",
          "Focus sur la livraison et l'adaptation",
          'Documentation simple des choix faits',
        ],
        exemplesLabel: 'Exemples de contraintes',
        exemples: ['Temps limité (ex : 2 jours)', 'Fonctionnalités imposées', 'Règles métier strictes', 'Changement de besoin en cours', 'Priorités contradictoires'],
        bonus: [
          'Ajouter de nouvelles contraintes',
          'Reprioriser les fonctionnalités',
          "Améliorer l'expérience utilisateur",
          'Nettoyer ou refactoriser le code',
        ],
        conseils: [
          'Accepte de ne pas tout faire',
          "Priorise ce qui apporte le plus de valeur",
          'Reste flexible face aux changements',
          "Termine une version utilisable avant d'améliorer",
        ],
      },
    ],
  },
]

const ouverts = ref<Set<string>>(new Set())

function toggle(id: string) {
  const next = new Set(ouverts.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  ouverts.value = next
}

function estOuvert(id: string) {
  return ouverts.value.has(id)
}
</script>

<template>
  <div class="min-h-screen px-4 py-12 sm:px-8 md:py-16">
    <div class="mx-auto max-w-3xl">
      <header class="mb-12 text-center sm:mb-16">
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-lime">Ressource</p>
        <h1 class="text-3xl font-bold text-white sm:text-4xl">
          12 idées de projets pour développeurs web juniors
        </h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Quand on est développeur junior, le plus dur n'est souvent pas de coder, mais de savoir
          quoi coder. 12 idées de projets, réparties en 4 niveaux, pour pratiquer et construire
          des projets concrets jusqu'au bout.
        </p>
      </header>

      <section v-for="niveau in niveaux" :key="niveau.numero" class="mb-10 last:mb-0">
        <div class="mb-4 flex items-baseline gap-3">
          <h2 class="text-lg font-semibold text-[#f5f5f5] sm:text-xl">
            Niveau {{ niveau.numero }} - {{ niveau.titre }}
          </h2>
        </div>

        <div class="flex flex-col gap-3">
          <div
              v-for="projet in niveau.projets"
              :key="projet.id"
              class="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors"
              :class="{ 'border-lime/40': estOuvert(projet.id) }"
          >
            <button
                type="button"
                class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-lime"
                :aria-expanded="estOuvert(projet.id)"
                @click="toggle(projet.id)"
            >
              <div class="flex min-w-0 items-center gap-3">
                <div class="min-w-0">
                  <p class="truncate font-medium text-[#f5f5f5]">{{ projet.titre }}</p>
                  <p class="mt-0.5 truncate text-xs text-[#f5f5f5]/50">
                    {{ projet.tags.join(' · ') }}
                  </p>
                </div>
              </div>
              <svg
                  class="h-5 w-5 shrink-0 text-lime transition-transform duration-200"
                  :class="{ 'rotate-180': estOuvert(projet.id) }"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <!-- Contenu de la fiche -->
            <div v-show="estOuvert(projet.id)" class="border-t border-white/10 px-5 py-5">
              <div class="mb-5">
                <p class="mb-1.5 text-xs font-semibold uppercase tracking-wide text-lime">Contexte</p>
                <p class="text-sm leading-relaxed text-[#f5f5f5]/80">{{ projet.contexte }}</p>
              </div>

              <div class="mb-5">
                <p class="mb-1.5 text-xs font-semibold uppercase tracking-wide text-lime">Objectif</p>
                <p class="text-sm leading-relaxed text-[#f5f5f5]/80">{{ projet.objectif }}</p>
              </div>

              <div class="mb-5">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-lime">
                  Noyau obligatoire (MVP)
                </p>
                <ul class="flex flex-col gap-1.5">
                  <li v-for="(item, i) in projet.mvp" :key="i" class="flex gap-2 text-sm text-[#f5f5f5]/80">
                    <span class="text-lime">›</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div class="mb-5">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-lime">
                  Règles &amp; contraintes
                </p>
                <ul class="flex flex-col gap-1.5">
                  <li v-for="(item, i) in projet.regles" :key="i" class="flex gap-2 text-sm text-[#f5f5f5]/80">
                    <span class="text-lime">›</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="projet.exemples?.length" class="mb-5">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-lime">
                  {{ projet.exemplesLabel }}
                </p>
                <ul class="flex flex-col gap-1.5">
                  <li v-for="(item, i) in projet.exemples" :key="i" class="flex gap-2 text-sm text-[#f5f5f5]/70">
                    <span class="text-[#f5f5f5]/40">•</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div class="mb-5">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-lime">Bonus</p>
                <ul class="flex flex-col gap-1.5">
                  <li v-for="(item, i) in projet.bonus" :key="i" class="flex gap-2 text-sm text-[#f5f5f5]/80">
                    <span class="text-lime">+</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div class="rounded-lg border border-lime/20 bg-lime/[0.06] px-4 py-3.5">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-lime">Conseils</p>
                <ul class="flex flex-col gap-1.5">
                  <li v-for="(item, i) in projet.conseils" :key="i" class="text-sm leading-relaxed text-[#f5f5f5]/80">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pied de page -->
      <footer class="mt-16 rounded-xl border border-lime bg-white/[0.03] px-6 py-8 text-center">
        <p class="text-sm leading-relaxed text-lime">
          Le plus important n'est pas de tout faire, mais de coder des projets et les terminer.
        </p>
      </footer>
    </div>
  </div>
</template>