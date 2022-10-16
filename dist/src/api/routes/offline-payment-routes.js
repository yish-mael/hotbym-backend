"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offline_payment_routes = void 0;
const express_1 = require("express");
const offline_payments_controller_1 = __importDefault(require("../controllers/offline-payments-controller"));
const router = (0, express_1.Router)();
router.get("/", offline_payments_controller_1.default.getAllOfflinePayments);
router.get("/:id", offline_payments_controller_1.default.getOneOfflinePayment);
router.post("/", offline_payments_controller_1.default.createOfflinePayment);
router.put("/:id", offline_payments_controller_1.default.updateOfflinePayment);
router.delete("/:id", offline_payments_controller_1.default.deleteOfflinePayment);
exports.offline_payment_routes = router;
