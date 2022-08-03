import { Router } from "express";
import BookingGuestController from "../controllers/booking-guests-controller";

const router = Router();

router.get("/", BookingGuestController.getAllBookingGuests);
router.get("/:id", BookingGuestController.getOneBookingGuest);
router.post("/", BookingGuestController.createBookingGuest);
router.put("/:id", BookingGuestController.updateBookingGuest);
router.delete("/:id", BookingGuestController.deleteBookingGuest);

export const booking_guest_routes = router;