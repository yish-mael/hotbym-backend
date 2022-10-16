import { Router } from "express";
import BookingsController from "../controllers/bookings-controller";

const router = Router();

router.get("/", BookingsController.getAllBookings);
router.get("/:id", BookingsController.getOneBooking);
router.post("/order/", BookingsController.getBooking);
router.post("/unavailable", BookingsController.getUnavailableBookings);
router.post("/unavailable/range", BookingsController.getUnavailableBookingsInRange);
router.post("/available", BookingsController.getAvailableBookingQuantity);
router.post("/", BookingsController.createBooking);
router.put("/:id", BookingsController.updateBooking);
router.delete("/:id", BookingsController.deleteBooking);

export const booking_routes = router;