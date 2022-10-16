"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booking_routes = void 0;
const express_1 = require("express");
const bookings_controller_1 = __importDefault(require("../controllers/bookings-controller"));
const router = (0, express_1.Router)();
router.get("/", bookings_controller_1.default.getAllBookings);
router.get("/:id", bookings_controller_1.default.getOneBooking);
router.post("/order/", bookings_controller_1.default.getBooking);
router.post("/unavailable", bookings_controller_1.default.getUnavailableBookings);
router.post("/unavailable/range", bookings_controller_1.default.getUnavailableBookingsInRange);
router.post("/available", bookings_controller_1.default.getAvailableBookingQuantity);
router.post("/", bookings_controller_1.default.createBooking);
router.put("/:id", bookings_controller_1.default.updateBooking);
router.delete("/:id", bookings_controller_1.default.deleteBooking);
exports.booking_routes = router;
