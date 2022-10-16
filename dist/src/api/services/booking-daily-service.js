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
class BookingDailyService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingDailyModel.findAll();
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingDailyModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookingDaily = yield models_1.BookingDailyModel.findAll({ where: criteria, order: [['quantity', 'DESC']] });
            console.log(bookingDaily);
            return bookingDaily;
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { roomId, date, timeIn, timeOut, quantity } = values;
            // console.log(values);
            const [bookingDaily, created] = yield models_1.BookingDailyModel.findOrCreate({ where: { roomId, date, timeIn, timeOut, quantity } });
            if (created == false)
                throw "Bookings Daily already exists.";
            return bookingDaily;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.BookingDailyModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookingDaily = yield this.getById(id);
            return yield (bookingDaily === null || bookingDaily === void 0 ? void 0 : bookingDaily.destroy());
        });
    }
}
exports.default = BookingDailyService;
