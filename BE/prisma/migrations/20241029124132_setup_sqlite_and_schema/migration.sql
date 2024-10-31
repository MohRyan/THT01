-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT,
    "email" TEXT,
    "password" TEXT,
    "role" TEXT,
    "profile" TEXT
);

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_store" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_product" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total_price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "diskon" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    CONSTRAINT "Cart_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_userId_key" ON "Store"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_storeId_key" ON "Cart"("storeId");
