-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "manager" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "comments" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Good" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "barcode" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    CONSTRAINT "Good_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
