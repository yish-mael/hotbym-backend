import { Router } from "express";
import FavoritesController from "../controllers/favorites-controller";

const router = Router();

router.get("/user/:userId", FavoritesController.getUserFavorites);
router.get("/property/:propertyId", FavoritesController.getPropertyFavorites);
router.post("/", FavoritesController.createFavorite);
router.delete("/:id", FavoritesController.deleteFavorite);

export const favorite_routes = router;