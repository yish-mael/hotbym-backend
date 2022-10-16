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
class OnlinePaymentService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.OnlinePaymentModel.findAll();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.OnlinePaymentModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.OnlinePaymentModel.findAll({ where: { criteria } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, status, image, url, secretKey, publicKey } = values;
            const [onlinePayment, created] = yield models_1.OnlinePaymentModel.findOrCreate({ where: { title, status, image, url, secretKey, publicKey } });
            if (created == false)
                throw "Online Payment already exists.";
            return onlinePayment;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.OnlinePaymentModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const onlinePayment = yield this.getById(id);
            return yield (onlinePayment === null || onlinePayment === void 0 ? void 0 : onlinePayment.destroy());
        });
    }
}
exports.default = OnlinePaymentService;
