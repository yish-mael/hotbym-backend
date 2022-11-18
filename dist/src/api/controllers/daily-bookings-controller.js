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
const sequelize_1 = require("sequelize");
class DailyBookingsController {
    constructor() { }
    static getAllDailyBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allDailyBookings = yield booking_daily_service_1.default.getAll();
                return res.status(200).json(allDailyBookings);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneDailyBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneDailyBooking = yield booking_daily_service_1.default.getById(id);
                return res.status(200).json(oneDailyBooking);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static saveDailyBooking(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.type) == "hourly") {
                    //console.log(req.body);
                    const dailyBookingCheckD = yield booking_daily_service_1.default.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateOnly), timeIn: null, timeOut: null });
                    const dailyBookingCheckDT = yield booking_daily_service_1.default.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateTime), timeIn: { [sequelize_1.Op.not]: null }, timeOut: { [sequelize_1.Op.not]: null } });
                    if (dailyBookingCheckD.length > 0) {
                        const roomId = req.body.roomId;
                        const date = req.body.dateOnly;
                        const quantity = (1 + dailyBookingCheckD[0].quantity);
                        if (dailyBookingCheckDT.length > 0) {
                            let lastEndTime = 0;
                            let intTimeIn = parseInt(req.body.timeIn);
                            //console.log("here ----- start");
                            dailyBookingCheckDT.map((item) => {
                                const intTime = parseInt(item.timeOut);
                                if (lastEndTime < intTime) {
                                    lastEndTime = intTime;
                                }
                            });
                            if (lastEndTime < intTimeIn) {
                                //  await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                                yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                            }
                            else {
                                yield booking_daily_service_1.default.update(dailyBookingCheckD[0].id, { roomId, date, quantity });
                                yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                            }
                        }
                        return res.status(200).json({
                            message: "Daily Booking added successfully. Exists",
                            // data: savedDailyBooking
                        });
                    }
                    else {
                        yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: 1 });
                        yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                        return res.status(200).json({
                            message: "Hourly Booking added successfully. Not Exists",
                            // data: savedDailyBooking
                        });
                    }
                }
                else {
                    const dailyBookingCheck = yield booking_daily_service_1.default.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateOnly) });
                    console.log("Here Now ", dailyBookingCheck);
                    if (dailyBookingCheck.length > 0) {
                        const roomId = req.body.roomId;
                        const date = req.body.dateOnly;
                        const quantity = (parseInt(req.body.quantity) + dailyBookingCheck[0].quantity);
                        const savedDailyBooking = yield booking_daily_service_1.default.update(dailyBookingCheck[0].id, { roomId, date, quantity });
                        return res.status(200).json({
                            message: "Daily Booking added successfully. Exists",
                            data: savedDailyBooking
                        });
                    }
                    else {
                        const savedDailyBooking = yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: parseInt(req.body.quantity) });
                        return res.status(200).json({
                            message: "Daily Booking added successfully. Not Exists",
                            data: savedDailyBooking
                        });
                    }
                }
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteDailyBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedDailyBooking = yield booking_daily_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Daily Booking deleted successfully.",
                    data: deletedDailyBooking
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
exports.default = DailyBookingsController;
