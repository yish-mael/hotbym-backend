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
class BookingService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingModel.findAll({
                include: [models_1.UserModel, { model: models_1.RoomModel, include: [models_1.PropertyModel] }],
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingModel.findAll({ where: criteria, include: [models_1.RoomModel] });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { roomId, userId, orderId, organisationId, type, status, price, commission, markup, totalAmount, arrivalDate, departureDate, quantity } = values;
            const [booking, created] = yield models_1.BookingModel.findOrCreate({ where: { roomId, userId, orderId, organisationId, type, status, price, commission, markup, totalAmount, arrivalDate, departureDate, quantity } });
            if (created == false)
                throw "Booking already exists.";
            return booking;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const booking = yield this.getById(id);
            return yield (booking === null || booking === void 0 ? void 0 : booking.destroy());
        });
    }
}
exports.default = BookingService;
