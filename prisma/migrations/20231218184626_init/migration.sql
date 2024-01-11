/*
  Warnings:

  - You are about to drop the column `title` on the `Solve` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Solve` table. All the data in the column will be lost.
  - Added the required column `scramble` to the `Solve` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Solve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solve" DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "scramble" VARCHAR(255) NOT NULL,
ADD COLUMN     "time" INTEGER NOT NULL;
