import { Router } from "express";
import CountriesController from "../controllers/countries-controller";

const router = Router();

router.get("/", CountriesController.getAllCountries);
router.get("/:id", CountriesController.getOneCountry);
router.post("/", CountriesController.createCountry);
router.put("/:id", CountriesController.updateCountry);
router.delete("/:id", CountriesController.deleteCountry);

export const country_routes = router;