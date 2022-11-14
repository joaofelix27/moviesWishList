-- CreateEnum
CREATE TYPE "statusType" AS ENUM ('Watched', 'toWatch');

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "plataform" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "status" "statusType" NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");
