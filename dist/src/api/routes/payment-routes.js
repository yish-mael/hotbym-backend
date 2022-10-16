"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment_routes = void 0;
const express_1 = require("express");
const payments_controller_1 = __importDefault(require("../controllers/payments-controller"));
const router = (0, express_1.Router)();
router.get("/", payments_controller_1.default.getAllPayments);
router.get("/:id", payments_controller_1.default.getOnePayment);
router.post("/", payments_controller_1.default.createPayment);
router.put("/:id", payments_controller_1.default.updatePayment);
router.delete("/:id", payments_controller_1.default.deletePayment);
exports.payment_routes = router;
