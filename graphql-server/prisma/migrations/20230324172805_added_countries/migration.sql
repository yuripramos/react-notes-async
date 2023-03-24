-- CreateTable
CREATE TABLE "Countries" (
    "id" SERIAL NOT NULL,
    "list" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Countries" ADD CONSTRAINT "Countries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
