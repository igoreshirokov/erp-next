-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Variation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL,
    "sale_price" REAL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Variation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PropertyValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyValue_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VariationPropertyValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "variationId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "propertyValueId" INTEGER NOT NULL,
    CONSTRAINT "VariationPropertyValue_variationId_fkey" FOREIGN KEY ("variationId") REFERENCES "Variation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VariationPropertyValue_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VariationPropertyValue_propertyValueId_fkey" FOREIGN KEY ("propertyValueId") REFERENCES "PropertyValue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
