/*
  Warnings:

  - The values [librairie,illustration] on the enum `TypeRessource` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `lien` on table `Ressource` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeRessource_new" AS ENUM ('animation', 'apprentissage', 'dev', 'idee_projet', 'inspiration', 'typographie', 'visuel');
ALTER TABLE "Ressource" ALTER COLUMN "type" TYPE "TypeRessource_new" USING ("type"::text::"TypeRessource_new");
ALTER TYPE "TypeRessource" RENAME TO "TypeRessource_old";
ALTER TYPE "TypeRessource_new" RENAME TO "TypeRessource";
DROP TYPE "public"."TypeRessource_old";
COMMIT;

-- AlterTable
ALTER TABLE "Ressource" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "lien" SET NOT NULL;
