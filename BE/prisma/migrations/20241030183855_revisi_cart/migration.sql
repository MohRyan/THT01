/*
  Warnings:

  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `storeId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `Products` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Store_userId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Store";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "status" TEXT,
    "cartId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total_price" REAL,
    "quantity" INTEGER,
    "diskon" REAL,
    "status" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cart" ("createdAt", "diskon", "id", "quantity", "status", "total_price", "updatedAt") SELECT "createdAt", "diskon", "id", "quantity", "status", "total_price", "updatedAt" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_product" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Products" ("description", "id", "image", "name_product", "price", "stock") SELECT "description", "id", "image", "name_product", "price", "stock" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_productId_key" ON "CartItem"("productId");
