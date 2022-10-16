"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rating_routes = void 0;
const express_1 = require("express");
const ratings_controller_1 = __importDefault(require("../controllers/ratings-controller"));
const router = (0, express_1.Router)();
router.get("/", ratings_controller_1.default.getAllRatings);
router.get("/:id", ratings_controller_1.default.getOneRating);
router.post("/", ratings_controller_1.default.createRating);
router.put("/:id", ratings_controller_1.default.updateRating);
router.delete("/:id", ratings_controller_1.default.deleteRating);
exports.rating_routes = router;
