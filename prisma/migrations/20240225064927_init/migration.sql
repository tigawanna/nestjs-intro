-- CreateTable
CREATE TABLE "Ninja" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Weapon_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Ninja" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
