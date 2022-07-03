import { Router } from "express";
import { country_routes } from "./country-routes";
const router = Router();

router.use("/countries", country_routes);

//router.get("/countries", CountriesController.getAllCountries);

export default router;