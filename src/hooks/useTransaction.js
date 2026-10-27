import { useContext } from "react";
import { TransactionContext } from "../context/transactionContext/transactionContext";

export function useTransactions() {
  const ctx = useContext(TransactionContext);
  if (!ctx) throw new Error("useTransactions doit être utilisé dans un TransactionProvider");
  return ctx;
}