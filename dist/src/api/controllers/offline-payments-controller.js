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
const offline_payment_service_1 = __importDefault(require("../services/offline-payment-service"));
class OfflinePaymentsController {
    constructor() { }
    static getAllOfflinePayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allOfflinePayments = yield offline_payment_service_1.default.getAll();
                return res.status(200).json(allOfflinePayments);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneOfflinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneOfflinePayment = yield offline_payment_service_1.default.getById(id);
                return res.status(200).json(oneOfflinePayment);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createOfflinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdOfflinePayment = yield offline_payment_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Offline Payment created successfully.",
                    data: createdOfflinePayment
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateOfflinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedOfflinePayment = yield offline_payment_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Offline Payment updated successfully.",
                    data: updatedOfflinePayment
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteOfflinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedOfflinePayment = yield offline_payment_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Offline Payment deleted successfully.",
                    data: deletedOfflinePayment
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
exports.default = OfflinePaymentsController;
