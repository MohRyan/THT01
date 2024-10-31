/*
  Warnings:

  - Added the required column `updatedAt` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total_price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "diskon" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cart_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cart" ("diskon", "id", "quantity", "status", "storeId", "total_price") SELECT "diskon", "id", "quantity", "status", "storeId", "total_price" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
CREATE UNIQUE INDEX "Cart_storeId_key" ON "Cart"("storeId");
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_product" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "cartId" TEXT,
    CONSTRAINT "Products_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("description", "id", "image", "name_product", "price", "stock") SELECT "description", "id", "image", "name_product", "price", "stock" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
