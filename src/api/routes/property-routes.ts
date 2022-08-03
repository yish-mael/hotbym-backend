import { Router } from "express";
import PropertiesController from "../controllers/properties-controller";

const router = Router();

router.get("/", PropertiesController.getAllProperties);
router.get("/:id", PropertiesController.getOneProperty);
router.post("/", PropertiesController.createProperty);
router.put("/:id", PropertiesController.updateProperty);
router.delete("/:id", PropertiesController.deleteProperty);

export const property_routes = router;