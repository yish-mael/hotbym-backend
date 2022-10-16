import { Router } from "express";
import DailyBookingsController from "../controllers/daily-bookings-controller";

const router = Router();

router.get("/", DailyBookingsController.getAllDailyBookings);
router.get("/:id", DailyBookingsController.getOneDailyBooking);
router.post("/", DailyBookingsController.saveDailyBooking);
// router.put("/:id", DailyBookingsController.updateBooking);
router.delete("/:id", DailyBookingsController.deleteDailyBooking);

export const daily_booking_routes = router;