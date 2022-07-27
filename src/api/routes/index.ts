import { Router } from "express";
import { country_routes } from "./country-routes";
import { role_routes } from "./role-routes";
import { permission_routes } from "./permission-routes";
import { user_routes } from "./user-routes";
import { authentication_routes } from "./authentication-routes";
import { amenity_routes } from "./amenity-routes";
import { category_routes } from "./category-routes";
import { comments_routes } from "./comment-routes";

const router = Router();

router.use("/countries", country_routes);
router.use("/roles", role_routes);
router.use("/permissions", permission_routes);
router.use("/users", user_routes);
router.use("/auth", authentication_routes);
router.use("/amenities", amenity_routes);
router.use("/categories", category_routes);
router.use("/comments", comments_routes);

// router.get("/countries", CountriesController.getAllCountries);

export default router;