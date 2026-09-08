/*
  Warnings:

  - You are about to drop the column `source` on the `Ressource` table. All the data in the column will be lost.
  - You are about to drop the column `sourceAutrePrecision` on the `Ressource` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ressource" DROP COLUMN "source",
DROP COLUMN "sourceAutrePrecision";

-- DropEnum
DROP TYPE "SourceRessource";
