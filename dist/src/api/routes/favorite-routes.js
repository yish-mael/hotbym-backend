"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favorite_routes = void 0;
const express_1 = require("express");
const favorites_controller_1 = __importDefault(require("../controllers/favorites-controller"));
const router = (0, express_1.Router)();
router.get("/user/:userId", favorites_controller_1.default.getUserFavorites);
router.get("/property/:propertyId", favorites_controller_1.default.getPropertyFavorites);
router.post("/", favorites_controller_1.default.createFavorite);
router.delete("/:id", favorites_controller_1.default.deleteFavorite);
exports.favorite_routes = router;
