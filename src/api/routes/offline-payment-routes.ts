import { Router } from "express";
import OfflinePaymentsController from "../controllers/offline-payments-controller";

const router = Router();

router.get("/", OfflinePaymentsController.getAllOfflinePayments);
router.get("/:id", OfflinePaymentsController.getOneOfflinePayment);
router.post("/", OfflinePaymentsController.createOfflinePayment);
router.put("/:id", OfflinePaymentsController.updateOfflinePayment);
router.delete("/:id", OfflinePaymentsController.deleteOfflinePayment);

export const offline_payment_routes = router;