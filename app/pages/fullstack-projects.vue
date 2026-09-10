<script setup lang="ts">
type Projet = {
  id: string
  titre: string
  description: string
}

type Niveau = {
  nom: string
  projets: Projet[]
}

const niveaux: Niveau[] = [
  {
    nom: 'Niveau débutant',
    projets: [
      {
        id: 'portfolio-website',
        titre: 'Site portfolio personnel',
        description:
            "Un site vitrine pour présenter tes projets, tes compétences et te contacter. L'occasion de travailler la mise en page et le responsive avant tout le reste.",
      },
      {
        id: 'simple-blog-platform',
        titre: 'Plateforme de blog simple',
        description:
            "Un blog basique où l'on peut publier, afficher et lire des articles. Bon exercice pour manipuler du contenu dynamique et une base de données simple.",
      },
      {
        id: 'todo-list-application',
        titre: 'Application de liste de tâches',
        description:
            "Le grand classique : créer, cocher et supprimer des tâches. Idéal pour s'entraîner à la gestion d'état et au CRUD de base.",
      },
      {
        id: 'weather-app',
        titre: 'Application météo',
        description:
            "Une appli qui affiche la météo d'une ville via une API publique. Parfait pour pratiquer les appels asynchrones et la gestion des erreurs.",
      },
      {
        id: 'url-shortener',
        titre: "Raccourcisseur d'URL",
        description:
            "Un service qui transforme un lien long en lien court et redirige vers l'original. Bon exercice de logique backend et de génération d'identifiants uniques.",
      },
      {
        id: 'basic-ecommerce-website',
        titre: 'Site e-commerce basique',
        description:
            "Une boutique simple avec liste de produits, fiche produit et panier. Première approche des relations entre produits, panier et commandes.",
      },
      {
        id: 'recipe-sharing-platform',
        titre: 'Plateforme de partage de recettes',
        description:
            "Une plateforme où chacun peut publier et consulter des recettes de cuisine. Bon terrain pour travailler la recherche et le filtrage de contenu.",
      },
      {
        id: 'contact-manager',
        titre: 'Gestionnaire de contacts',
        description:
            "Un carnet d'adresses en ligne pour ajouter, modifier et organiser des contacts. Simple mais complet pour un CRUD avec plusieurs champs.",
      },
      {
        id: 'quiz-application',
        titre: 'Application de quiz',
        description:
            "Une appli de quiz avec questions à choix multiples et calcul du score final. L'occasion de travailler la logique de jeu et l'enchaînement d'étapes.",
      },
      {
        id: 'personal-budget-tracker',
        titre: 'Suivi de budget personnel',
        description:
            "Un outil pour suivre ses revenus et dépenses au quotidien. Bonne intro à la manipulation de données chiffrées et aux totaux calculés.",
      },
    ],
  },
  {
    nom: 'Niveau intermédiaire',
    projets: [
      {
        id: 'social-media-dashboard',
        titre: 'Tableau de bord réseaux sociaux',
        description:
            "Un tableau de bord centralisant des statistiques ou publications de réseaux sociaux. Bon exercice de visualisation et d'organisation de données variées.",
      },
      {
        id: 'realtime-chat-application',
        titre: 'Application de chat en temps réel',
        description:
            "Une messagerie instantanée entre utilisateurs, avec mise à jour en direct des messages. Introduction au temps réel (WebSockets ou équivalent).",
      },
      {
        id: 'task-management-system',
        titre: 'Système de gestion de tâches',
        description:
            "Un outil de gestion de tâches plus poussé qu'une simple to-do, avec statuts, échéances et organisation par projet.",
      },
      {
        id: 'multi-user-blog-comments',
        titre: 'Blog multi-utilisateurs avec commentaires',
        description:
            "Un blog où plusieurs auteurs publient et où les lecteurs peuvent commenter. Ajoute la gestion des rôles et des relations article/commentaire.",
      },
      {
        id: 'event-management-system',
        titre: "Système de gestion d'événements",
        description:
            "Une application pour créer des événements, gérer les inscriptions et suivre les participants. Bon exercice de relations entre entités.",
      },
      {
        id: 'file-upload-sharing-system',
        titre: "Système d'upload et de partage de fichiers",
        description:
            "Un système pour uploader, organiser et partager des fichiers entre utilisateurs. Permet de pratiquer la gestion de fichiers côté serveur.",
      },
      {
        id: 'job-board-platform',
        titre: "Plateforme d'offres d'emploi",
        description:
            "Une plateforme d'offres d'emploi avec publication d'annonces et candidature. Bon cas pratique de recherche, filtres et rôles utilisateurs distincts.",
      },
      {
        id: 'online-learning-platform',
        titre: "Plateforme d'apprentissage en ligne",
        description:
            "Une mini plateforme de cours en ligne avec modules, leçons et suivi de progression. Fait travailler la structuration de contenu hiérarchisé.",
      },
      {
        id: 'booking-system-appointments',
        titre: 'Système de prise de rendez-vous',
        description:
            "Un système de prise de rendez-vous avec créneaux disponibles et confirmation. Bon exercice de gestion du temps et des conflits de disponibilité.",
      },
      {
        id: 'content-management-system',
        titre: 'Système de gestion de contenu (CMS)',
        description:
            "Un CMS permettant de créer et gérer du contenu via une interface admin, affiché ensuite côté public. Base solide de séparation admin/public.",
      },
    ],
  },
  {
    nom: 'Niveau avancé',
    projets: [
      {
        id: 'ecommerce-payment-integration',
        titre: 'Plateforme e-commerce avec intégration de paiement',
        description:
            "Une boutique en ligne complète avec un vrai processeur de paiement (Stripe, PayPal...). Ajoute la gestion des transactions, des remboursements et de la sécurité liée à l'argent.",
      },
      {
        id: 'realtime-collaborative-text-editor',
        titre: 'Éditeur de texte collaboratif en temps réel',
        description:
            "Un éditeur type Google Docs où plusieurs utilisateurs modifient le même document en direct. Bon défi de synchronisation et de gestion des conflits d'édition.",
      },
      {
        id: 'saas-subscription-platform',
        titre: 'Plateforme SaaS par abonnement',
        description:
            "Une application avec plusieurs formules d'abonnement, facturation récurrente et gestion des accès selon le plan choisi.",
      },
      {
        id: 'project-management-tool',
        titre: 'Outil de gestion de projet',
        description:
            "Un outil type Trello/Asana avec équipes, tableaux, tâches assignées et suivi d'avancement. Fait travailler des relations de données plus complexes.",
      },
      {
        id: 'blogging-platform-full-text-search',
        titre: 'Plateforme de blog avec recherche full-text',
        description:
            "Un blog capable de faire de la recherche avancée dans le contenu des articles, pas juste par titre. Introduction à l'indexation de texte.",
      },
      {
        id: 'realtime-notification-system',
        titre: 'Système de notifications en temps réel',
        description:
            "Un système qui pousse des notifications instantanées aux utilisateurs (nouveau message, activité, alerte...). Bon exercice de temps réel appliqué à un vrai cas d'usage.",
      },
      {
        id: 'multi-tenant-application',
        titre: 'Application multi-tenant',
        description:
            "Une application où plusieurs clients/organisations utilisent la même base de code tout en gardant leurs données isolées. Fait travailler l'architecture et la séparation des données.",
      },
      {
        id: 'video-streaming-service',
        titre: 'Service de streaming vidéo',
        description:
            "Une plateforme qui héberge et diffuse des vidéos en streaming, avec gestion de la lecture progressive. Bon exercice de gestion de fichiers volumineux.",
      },
      {
        id: 'realtime-analytics-dashboard',
        titre: 'Tableau de bord analytique en temps réel',
        description:
            "Un dashboard qui affiche des métriques mises à jour en direct (visites, ventes, activité...). Combine visualisation de données et flux temps réel.",
      },
      {
        id: 'enterprise-resource-planning',
        titre: 'Progiciel de gestion intégré (ERP)',
        description:
            "Un outil qui centralise plusieurs processus d'une entreprise (stocks, ventes, RH...) dans une seule application. Projet ambitieux qui demande une architecture solide.",
      },
    ],
  },
  {
    nom: 'Niveau expert',
    projets: [
      {
        id: 'ai-content-recommendation-engine',
        titre: 'Moteur de recommandation de contenu par IA',
        description:
            "Un système qui suggère du contenu personnalisé selon le comportement de l'utilisateur. Demande de combiner données, algorithmes de recommandation et backend robuste.",
      },
      {
        id: 'blockchain-voting-system',
        titre: 'Système de vote basé sur la blockchain',
        description:
            "Une application de vote qui utilise la blockchain pour garantir la transparence et l'intégrité des résultats. Bon terrain d'exploration pour la Web3.",
      },
      {
        id: 'full-scale-social-media-platform',
        titre: 'Plateforme de réseau social complète',
        description:
            "Un réseau social avec profils, publications, abonnements et fil d'actualité. Un des projets les plus complets de la liste, à l'échelle d'une vraie application.",
      },
      {
        id: 'multi-language-support-platform',
        titre: 'Plateforme multilingue',
        description:
            "Une application pensée dès le départ pour gérer plusieurs langues côté contenu et interface. Fait travailler l'internationalisation (i18n) en profondeur.",
      },
      {
        id: 'iot-dashboard-realtime-data',
        titre: 'Tableau de bord IoT avec données en temps réel',
        description:
            "Un dashboard qui affiche des données provenant d'objets connectés en direct (capteurs, températures...). Combine temps réel et traitement de flux de données.",
      },
      {
        id: 'high-performance-ecommerce-microservices',
        titre: 'E-commerce haute performance avec microservices',
        description:
            "Une boutique en ligne découpée en microservices indépendants plutôt qu'une seule grosse application. Bon exercice d'architecture distribuée.",
      },
      {
        id: 'pwa-offline-support',
        titre: 'Progressive Web App (PWA) avec support hors-ligne',
        description:
            "Une application web installable qui continue de fonctionner sans connexion internet. Fait travailler le cache, les service workers et la synchronisation différée.",
      },
      {
        id: 'serverless-fullstack-application',
        titre: 'Application fullstack serverless',
        description:
            "Une application entière construite sans gérer de serveur classique, avec des fonctions cloud à la demande. Bon exercice d'architecture serverless moderne.",
      },
      {
        id: 'realtime-collaboration-platform',
        titre: 'Plateforme de collaboration en temps réel',
        description:
            "Un espace de travail partagé où plusieurs utilisateurs interagissent en direct (tableau blanc, documents, tâches...). Combine plusieurs briques temps réel dans un seul produit.",
      },
      {
        id: 'ai-personal-assistant-platform',
        titre: "Plateforme d'assistant personnel par IA",
        description:
            "Un assistant intelligent capable de répondre à des requêtes et d'automatiser des tâches pour l'utilisateur. Projet complet mêlant IA, backend et interface conversationnelle.",
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
    <div class="mx-auto max-w-3xl pt-24">
      <header class="mb-12 text-center sm:mb-16">
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-lime">Ressource</p>
        <h1 class="text-3xl font-bold text-white sm:text-4xl">
          40 idées de projets fullstack
        </h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Une liste de 40 idées de projets fullstack à réaliser pour progresser, classées en 4
          niveaux : débutant, intermédiaire, avancé et expert.
        </p>
      </header>

      <section v-for="niveau in niveaux" :key="niveau.nom" class="mb-10 last:mb-0">
        <div class="mb-4 flex items-baseline gap-3">
          <h2 class="text-lg font-semibold text-[#f5f5f5] sm:text-xl">
            {{ niveau.nom }}
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
              <p class="truncate font-medium text-[#f5f5f5]">{{ projet.titre }}</p>
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

            <div v-show="estOuvert(projet.id)" class="border-t border-white/10 px-5 py-4">
              <p class="text-sm leading-relaxed text-[#f5f5f5]/80">{{ projet.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>