import { Router } from "express";
import NotificationsController from "../controllers/notifications-controller";

const router = Router();

router.get("/", NotificationsController.getAllNotifications);
router.get("/:id", NotificationsController.getOneNotification);
router.post("/", NotificationsController.createNotification);
router.put("/:id", NotificationsController.updateNotification);
router.delete("/:id", NotificationsController.deleteNotification);

export const notification_routes = router;