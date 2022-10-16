"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction_routes = void 0;
const express_1 = require("express");
const transactions_controller_1 = __importDefault(require("../controllers/transactions-controller"));
const router = (0, express_1.Router)();
router.get("/", transactions_controller_1.default.getAllTransactions);
router.get("/:id", transactions_controller_1.default.getOneTransaction);
router.post("/", transactions_controller_1.default.createTransaction);
router.put("/:id", transactions_controller_1.default.updateTransaction);
router.delete("/:id", transactions_controller_1.default.deleteTransaction);
exports.transaction_routes = router;
