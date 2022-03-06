-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "reference" TEXT,
    "currency" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "status" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
