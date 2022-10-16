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
const online_payment_service_1 = __importDefault(require("../services/online-payment-service"));
class OnlinePaymentsController {
    constructor() { }
    static getAllOnlinePayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allOnlinePayments = yield online_payment_service_1.default.getAll();
                return res.status(200).json(allOnlinePayments);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneOnlinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneOnlinePayment = yield online_payment_service_1.default.getById(id);
                return res.status(200).json(oneOnlinePayment);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createOnlinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdOnlinePayment = yield online_payment_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Online Payment created successfully.",
                    data: createdOnlinePayment
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateOnlinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedOnlinePayment = yield online_payment_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Online Payment updated successfully.",
                    data: updatedOnlinePayment
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteOnlinePayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedOnlinePayment = yield online_payment_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Online Payment deleted successfully.",
                    data: deletedOnlinePayment
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
exports.default = OnlinePaymentsController;
