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
                    console.log(req.body);
                    const dailyBookingCheckD = yield booking_daily_service_1.default.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateOnly), timeIn: null, timeOut: null });
                    const dailyBookingCheckDT = yield booking_daily_service_1.default.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateTime), timeIn: { [sequelize_1.Op.not]: null }, timeOut: { [sequelize_1.Op.not]: null } });
                    if (dailyBookingCheckD.length > 0) {
                        const roomId = req.body.roomId;
                        const date = req.body.dateOnly;
                        const quantity = (1 + dailyBookingCheckD[0].quantity);
                        if (dailyBookingCheckDT.length > 0) {
                            let lastEndTime = 0;
                            let intTimeIn = parseInt(req.body.timeIn);
                            console.log("here ----- start");
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
                            // const timeO = dailyBookingCheckDT.map((item) =>  {
                            //     return parseInt(item.timeOut);
                            // });
                            // console.log(timeO);
                            console.log(lastEndTime, " < ", intTimeIn);
                            //console.log(dailyBookingCheckDT.map((item) => { item.timeOut }));
                            // if timeIn is greater than result highest timeOut
                            console.log("here ----- end");
                            //
                            //
                            //
                        }
                        //  await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                        // const savedDailyBooking = await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                        //  await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                        // // if daily not fully booked and there is an existing hourly booking
                        // if (dailyBookingCheckDT.length > 0){
                        //     // dailyBookingCheckDT.map((item) => {
                        //     // });
                        //     // const quantity = (parseInt(req.body.quantity) + dailyBookingCheckD[0].quantity);
                        //     // const quantity = (parseInt(req.body.quantity) + dailyBookingCheckD[0].quantity);
                        //     // await BookingDailyService.update(dailyBookingCheckDT[0].id, {roomId, date: req.body.dateTime, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity});
                        // }else{
                        //      // if daily not fully booked and there is no existing hourly booking
                        //     await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateTime, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                        // }
                        return res.status(200).json({
                            message: "Daily Booking added successfully. Exists",
                            // data: savedDailyBooking
                        });
                    }
                    else {
                        // console.log("here ..........")
                        // const roomId = req.body.roomId;
                        yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: 1 });
                        // const savedDailyBooking = await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: 1 });
                        // console.log("here ..........1 with : ", savedDailyBooking);
                        yield booking_daily_service_1.default.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                        // console.log("here ..........2")
                        // if (dailyBookingCheckDT.length > 0){
                        //     const quantity = (parseInt(req.body.quantity) + dailyBookingCheckD[0].quantity);
                        //     await BookingDailyService.update(dailyBookingCheckDT[0].id, {roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity});
                        // } else{
                        //     await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateTime, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: req.body.quantity });
                        // }
                        return res.status(200).json({
                            message: "Daily Booking added successfully. Not Exists",
                            // data: savedDailyBooking
                        });
                    }
                }
                else {
                    const dailyBookingCheck = yield booking_daily_service_1.default.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateTime) });
                    console.log(dailyBookingCheck);
                    if (dailyBookingCheck.length > 0) {
                        const roomId = req.body.roomId;
                        const date = req.body.dateTime;
                        const quantity = (parseInt(req.body.quantity) + dailyBookingCheck[0].quantity);
                        const savedDailyBooking = yield booking_daily_service_1.default.update(dailyBookingCheck[0].id, { roomId, date, quantity });
                        return res.status(200).json({
                            message: "Daily Booking added successfully. Exists",
                            data: savedDailyBooking
                        });
                    }
                    else {
                        const savedDailyBooking = yield booking_daily_service_1.default.create(req.body);
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
