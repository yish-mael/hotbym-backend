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
class NotificationService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.NotificationModel.findAll();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.NotificationModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.NotificationModel.findAll({ where: { criteria } });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, userNotifiedId, typeId, type, message, seenAt } = values;
            const [notification, created] = yield models_1.NotificationModel.findOrCreate({ where: { userId, userNotifiedId, typeId, type, message, seenAt } });
            if (created == false)
                throw "Notification already exists.";
            return notification;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.NotificationModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const notification = yield this.getById(id);
            return yield (notification === null || notification === void 0 ? void 0 : notification.destroy());
        });
    }
}
exports.default = NotificationService;
