import { Router } from "express";
import OnlinePaymentsController from "../controllers/online-payments-controller";

const router = Router();

router.get("/", OnlinePaymentsController.getAllOnlinePayments);
router.get("/:id", OnlinePaymentsController.getOneOnlinePayment);
router.post("/", OnlinePaymentsController.createOnlinePayment);
router.put("/:id", OnlinePaymentsController.updateOnlinePayment);
router.delete("/:id", OnlinePaymentsController.deleteOnlinePayment);

export const online_payment_routes = router;