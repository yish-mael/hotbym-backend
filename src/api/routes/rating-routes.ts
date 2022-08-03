import { Router } from "express";
import RatingsController from "../controllers/ratings-controller";

const router = Router();

router.get("/", RatingsController.getAllRatings);
router.get("/:id", RatingsController.getOneRating);
router.post("/", RatingsController.createRating);
router.put("/:id", RatingsController.updateRating);
router.delete("/:id", RatingsController.deleteRating);

export const rating_routes = router;