"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category_routes = void 0;
const express_1 = require("express");
const categories_controller_1 = __importDefault(require("../controllers/categories-controller"));
const router = (0, express_1.Router)();
router.get("/", categories_controller_1.default.getAllCategories);
router.get("/:id", categories_controller_1.default.getOneCategory);
router.post("/images", categories_controller_1.default.getCategoryImages);
router.post("/", categories_controller_1.default.createCategory);
router.put("/:id", categories_controller_1.default.updateCategory);
router.delete("/:id", categories_controller_1.default.deleteCategory);
exports.category_routes = router;
