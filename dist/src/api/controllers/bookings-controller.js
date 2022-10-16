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
const booking_daily_service_1 = __importDefault(require("../services/booking-daily-service"));
const booking_service_1 = __importDefault(require("../services/booking-service"));
const sequelize_1 = require("sequelize");
class BookingsController {
    constructor() { }
    static getAllBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allBookings = yield booking_service_1.default.getAll();
                return res.status(200).json(allBookings);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneBooking = yield booking_service_1.default.getById(id);
                return res.status(200).json(oneBooking);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.orderId;
                console.log(id);
                const oneBooking = yield booking_service_1.default.getWhere({ orderId: id });
                return res.status(200).json(oneBooking);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getUnavailableBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body.limit)
            try {
                const unavailableBookings = yield booking_daily_service_1.default.getWhere({ date: { [sequelize_1.Op.gte]: new Date() }, roomId: parseInt(req.body.roomId), quantity: req.body.limit, timeIn: null, timeOut: null, });
                return res.status(200).json(unavailableBookings);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getUnavailableBookingsInRange(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body.limit)
            try {
                const unavailableBookings = yield booking_daily_service_1.default.getWhere({ date: { [sequelize_1.Op.between]: [new Date(req.body.start), new Date(req.body.end)] }, roomId: parseInt(req.body.roomId), quantity: req.body.limit, timeIn: null, timeOut: null, });
                return res.status(200).json(unavailableBookings);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getAvailableBookingQuantity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const availableBookings = yield booking_daily_service_1.default.getWhere({ date: { [sequelize_1.Op.between]: [new Date(req.body.start), new Date(req.body.end)] }, roomId: parseInt(req.body.roomId), quantity: { [sequelize_1.Op.lt]: parseInt(req.body.limit) }, timeIn: null, timeOut: null, });
                return res.status(200).json(availableBookings);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBooking = yield booking_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Booking created successfully.",
                    data: createdBooking
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedBooking = yield booking_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Booking updated successfully.",
                    data: updatedBooking
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedBooking = yield booking_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Booking deleted successfully.",
                    data: deletedBooking
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
exports.default = BookingsController;
