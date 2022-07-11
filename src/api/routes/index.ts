import { Router } from "express";
import { country_routes } from "./country-routes";
import { role_routes } from "./role-routes";
import { permission_routes } from "./permission-routes";
import { user_routes } from "./user-routes";

const router = Router();

router.use("/countries", country_routes);
router.use("/roles", role_routes);
router.use("/permissions", permission_routes);
router.use("/users", user_routes);

// router.get("/countries", CountriesController.getAllCountries);

export default router;