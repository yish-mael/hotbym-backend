import { Router } from "express";
import CountriesController from "../controllers/countries-controller";

const router = Router();

router.get("/", CountriesController.getAllCountries);
router.get("/:id", CountriesController.getOneCountry);

export const country_routes = router;