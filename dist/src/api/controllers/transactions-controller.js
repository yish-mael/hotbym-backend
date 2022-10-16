"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_service_1 = __importDefault(require("../services/transaction-service"));
class TransactionsController {
    constructor() { }
    static getAllTransactions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allTransaction = yield transaction_service_1.default.getAll();
                return res.status(200).json(allTransaction);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneTransaction = yield transaction_service_1.default.getById(id);
                return res.status(200).json(oneTransaction);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdTransaction = yield transaction_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Transaction created successfully.",
                    data: createdTransaction
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedTransaction = yield transaction_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Transaction updated successfully.",
                    data: updatedTransaction
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedTransaction = yield transaction_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Transaction deleted successfully.",
                    data: deletedTransaction
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
}
exports.default = TransactionsController;
