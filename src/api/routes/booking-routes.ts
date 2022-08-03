import { Router } from "express";
import BookingsController from "../controllers/bookings-controller";

const router = Router();

router.get("/", BookingsController.getAllBookings);
router.get("/:id", BookingsController.getOneBooking);
router.post("/", BookingsController.createBooking);
router.put("/:id", BookingsController.updateBooking);
router.delete("/:id", BookingsController.deleteBooking);

export const booking_routes = router;