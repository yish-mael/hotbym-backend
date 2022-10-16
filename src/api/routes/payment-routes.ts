import { Router } from "express";
import PaymentsController from "../controllers/payments-controller";

const router = Router();

router.get("/", PaymentsController.getAllPayments);
router.get("/:id", PaymentsController.getOnePayment);
router.post("/", PaymentsController.createPayment);
router.put("/:id", PaymentsController.updatePayment);
router.delete("/:id", PaymentsController.deletePayment);

export const payment_routes = router;