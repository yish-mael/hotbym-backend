import { Router } from "express";
import TransactionsController from "../controllers/transactions-controller";

const router = Router();

router.get("/", TransactionsController.getAllTransactions);
router.get("/:id", TransactionsController.getOneTransaction);
router.post("/", TransactionsController.createTransaction);
router.put("/:id", TransactionsController.updateTransaction);
router.delete("/:id", TransactionsController.deleteTransaction);

export const transaction_routes = router;