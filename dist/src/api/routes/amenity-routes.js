"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.amenity_routes = void 0;
const express_1 = require("express");
const amenities_controller_1 = __importDefault(require("../controllers/amenities-controller"));
const router = (0, express_1.Router)();
/**
 * @openapi
 * /amenities:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/", amenities_controller_1.default.getAllAmenities);
router.get("/:id", amenities_controller_1.default.getOneAmenity);
router.post("/", amenities_controller_1.default.createAmenity);
router.put("/:id", amenities_controller_1.default.updateAmenity);
router.delete("/:id", amenities_controller_1.default.deleteAmenity);
exports.amenity_routes = router;
