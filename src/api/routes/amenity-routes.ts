import { Router } from "express";
import AmenitiesController from "../controllers/amenities-controller";

const router = Router();

router.get("/", AmenitiesController.getAllAmenities);
router.get("/:id", AmenitiesController.getOneAmenity);
router.post("/", AmenitiesController.createAmenity);
router.put("/:id", AmenitiesController.updateAmenity);
router.delete("/:id", AmenitiesController.deleteAmenity);

export const amenity_routes = router;