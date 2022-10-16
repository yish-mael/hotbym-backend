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
const booking_guest_service_1 = __importDefault(require("../services/booking-guest-service"));
class BookingGuestController {
    constructor() { }
    static getAllBookingGuests(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allBookingGuests = yield booking_guest_service_1.default.getAll();
                return res.status(200).json(allBookingGuests);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneBookingGuest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneBookingGuest = yield booking_guest_service_1.default.getById(id);
                return res.status(200).json(oneBookingGuest);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createBookingGuest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBookingGuest = yield booking_guest_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Booking Guest created successfully.",
                    data: createdBookingGuest
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateBookingGuest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedBookingGuest = yield booking_guest_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Booking Guest updated successfully.",
                    data: updatedBookingGuest
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteBookingGuest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedBookingGuest = yield booking_guest_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Booking Guest deleted successfully.",
                    data: deletedBookingGuest
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
exports.default = BookingGuestController;
