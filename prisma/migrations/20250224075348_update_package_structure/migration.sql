/*
  Warnings:

  - The primary key for the `Package` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `price_range` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Package` table. All the data in the column will be lost.
  - The `id` column on the `Package` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Detail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_packageId_fkey";

-- AlterTable
ALTER TABLE "Package" DROP CONSTRAINT "Package_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "price_range",
DROP COLUMN "updatedAt",
ADD COLUMN     "ceiling" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "floor" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "foundation" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "frame" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paint" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "price" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "roof" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "sanitary" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "structure" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "wall" TEXT NOT NULL DEFAULT '',
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Package_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Detail";
