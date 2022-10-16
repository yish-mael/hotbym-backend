import { Router } from "express";
import CategoriesController from "../controllers/categories-controller";

const router = Router();

router.get("/", CategoriesController.getAllCategories);
router.get("/:id", CategoriesController.getOneCategory);
router.post("/images", CategoriesController.getCategoryImages);
router.post("/", CategoriesController.createCategory);
router.put("/:id", CategoriesController.updateCategory);
router.delete("/:id", CategoriesController.deleteCategory);

export const category_routes = router;