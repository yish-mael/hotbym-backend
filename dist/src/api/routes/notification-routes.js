"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notification_routes = void 0;
const express_1 = require("express");
const notifications_controller_1 = __importDefault(require("../controllers/notifications-controller"));
const router = (0, express_1.Router)();
router.get("/", notifications_controller_1.default.getAllNotifications);
router.get("/:id", notifications_controller_1.default.getOneNotification);
router.post("/", notifications_controller_1.default.createNotification);
router.put("/:id", notifications_controller_1.default.updateNotification);
router.delete("/:id", notifications_controller_1.default.deleteNotification);
exports.notification_routes = router;
