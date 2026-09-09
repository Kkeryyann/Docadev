# ==========================================
# Étape 1 : Construction (Builder)
# ==========================================
FROM node:20-alpine AS builder

# Prisma utilise des binaires en C qui nécessitent OpenSSL sous Alpine Linux
RUN apk update && apk add --no-cache openssl

WORKDIR /app

# Copie des fichiers de gestion des dépendances
COPY package.json package-lock.json ./

# Installation de toutes les dépendances (y compris devDependencies pour le build)
RUN npm ci

# Copie du reste du code source
COPY . .

# Génération du client Prisma
RUN npx prisma generate

# Build du projet Nuxt (compile l'application dans le dossier .output)
RUN npm run build

# ==========================================
# Étape 2 : Production (Runner)
# ==========================================
FROM node:22-alpine

# Ajout d'OpenSSL pour l'environnement d'exécution de Prisma
RUN apk update && apk add --no-cache openssl

WORKDIR /app

# Copie des fichiers générés depuis l'étape précédente
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./

# Installation des dépendances de production uniquement (nécessaire pour la CLI Prisma)
RUN npm ci --omit=dev

# Génération du client Prisma pour l'environnement de production
RUN npx prisma generate

# Récupère la variable en tant que build argument et la fixe en ENV runtime
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Définition des variables d'environnement nécessaires pour Nuxt/Nitro dans Docker
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

# Commande de démarrage :
# 1. Applique les migrations Prisma en attente sur la base de données de prod
# 2. Démarre le serveur Nuxt
CMD ["sh", "-c", "npx prisma migrate deploy && node .output/server/index.mjs"]