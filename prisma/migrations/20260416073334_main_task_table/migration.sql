-- CreateTable
CREATE TABLE "MainTask" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countTasks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "MainTask_pkey" PRIMARY KEY ("id")
);
