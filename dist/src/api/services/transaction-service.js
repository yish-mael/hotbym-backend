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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class TransactionService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.findAll({
                include: [models_1.UserModel, models_1.PaymentModel],
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.findAll({ where: criteria });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, orderId, paymentId, reference, status, amount } = values;
            // console.log(values);
            const [transaction, created] = yield models_1.TransactionModel.findOrCreate({ where: { userId, orderId, paymentId, reference, status, amount } });
            if (created == false)
                throw "Transaction already exists.";
            return transaction;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.getById(id);
            return yield (transaction === null || transaction === void 0 ? void 0 : transaction.destroy());
        });
    }
}
exports.default = TransactionService;
