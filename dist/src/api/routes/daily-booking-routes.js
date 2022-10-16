"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.daily_booking_routes = void 0;
const express_1 = require("express");
const daily_bookings_controller_1 = __importDefault(require("../controllers/daily-bookings-controller"));
const router = (0, express_1.Router)();
router.get("/", daily_bookings_controller_1.default.getAllDailyBookings);
router.get("/:id", daily_bookings_controller_1.default.getOneDailyBooking);
router.post("/", daily_bookings_controller_1.default.saveDailyBooking);
// router.put("/:id", DailyBookingsController.updateBooking);
router.delete("/:id", daily_bookings_controller_1.default.deleteDailyBooking);
exports.daily_booking_routes = router;
