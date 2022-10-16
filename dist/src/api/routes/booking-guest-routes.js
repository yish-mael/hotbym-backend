"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booking_guest_routes = void 0;
const express_1 = require("express");
const booking_guests_controller_1 = __importDefault(require("../controllers/booking-guests-controller"));
const router = (0, express_1.Router)();
router.get("/", booking_guests_controller_1.default.getAllBookingGuests);
router.get("/:id", booking_guests_controller_1.default.getOneBookingGuest);
router.post("/", booking_guests_controller_1.default.createBookingGuest);
router.put("/:id", booking_guests_controller_1.default.updateBookingGuest);
router.delete("/:id", booking_guests_controller_1.default.deleteBookingGuest);
exports.booking_guest_routes = router;
