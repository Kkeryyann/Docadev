# DocADev

DocADev est une plateforme collaborative regroupant plusieurs outils, ressources et idées de projets pour les développeurs. Le but est de centraliser en un seul endroit les trouvailles utiles au quotidien (libs, apprentissages, illustrations...) pour progresser et coder, afin que chacun puisse participer et enrichir la base de connaissances.

Le site est consultable publiquement par tous, présentant les différentes trouvailles sous forme de cartes visuelles. Il dispose d'un système de modération garantissant la qualité du contenu via un back-office administrateur.

## Fonctionnalités

* **Liste publique de ressources** : affichage sous forme de cartes avec filtres dynamiques par type (Animation, Apprentissage, Dev, Idée de projet, etc.).
* **Soumission publique** : n'importe qui peut proposer une nouvelle ressource (qui ne serait pas encore présente sur le site) via un formulaire simple comprenant le titre, le thème, la description et le lien.
* **Back-office admin (Modération)** :
    * Vérification et validation (ou refus) des ressources soumises par la communauté avant leur apparition sur le site.
    * Ajout direct de ressources (validées immédiatement).
    * Vue sur l'ensemble des ressources avec édition inline.
    * Upload d'images pour illustrer les ressources.

## Types de ressources

Qu'il s'agisse de générateurs de dégradés, d'alternatives aux couleurs pures ou de listes de projets pour s'exercer, chaque ressource appartient à l'une des catégories suivantes :

* Animation
* Apprentissage
* Dev
* Idée de projet
* Inspiration
* Typographie
* Visuel

## Stack technique

* Nuxt 4 (Full-Stack, Vue)
* Prisma 7 + PostgreSQL
* nuxt-auth-utils pour l'authentification admin (session/cookie)
* Tailwind CSS v4 via @tailwindcss/vite