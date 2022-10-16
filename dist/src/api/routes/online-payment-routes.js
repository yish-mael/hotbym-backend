"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.online_payment_routes = void 0;
const express_1 = require("express");
const online_payments_controller_1 = __importDefault(require("../controllers/online-payments-controller"));
const router = (0, express_1.Router)();
router.get("/", online_payments_controller_1.default.getAllOnlinePayments);
router.get("/:id", online_payments_controller_1.default.getOneOnlinePayment);
router.post("/", online_payments_controller_1.default.createOnlinePayment);
router.put("/:id", online_payments_controller_1.default.updateOnlinePayment);
router.delete("/:id", online_payments_controller_1.default.deleteOnlinePayment);
exports.online_payment_routes = router;
