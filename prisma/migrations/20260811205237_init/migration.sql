-- CreateEnum
CREATE TYPE "TypeRessource" AS ENUM ('librairie', 'apprentissage', 'illustration', 'idee_projet');

-- CreateEnum
CREATE TYPE "SourceRessource" AS ENUM ('recherches', 'instagram', 'tiktok', 'youtube', 'github', 'autre');

-- CreateEnum
CREATE TYPE "StatutRessource" AS ENUM ('en_attente', 'valide', 'refuse');

-- CreateTable
CREATE TABLE "Ressource" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "type" "TypeRessource" NOT NULL,
    "description" TEXT NOT NULL,
    "lien" TEXT,
    "source" "SourceRessource" NOT NULL,
    "sourceAutrePrecision" TEXT,
    "statut" "StatutRessource" NOT NULL DEFAULT 'en_attente',
    "dateAjout" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ressource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
