"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.property_routes = void 0;
const express_1 = require("express");
const properties_controller_1 = __importDefault(require("../controllers/properties-controller"));
const router = (0, express_1.Router)();
router.get("/", properties_controller_1.default.getAllProperties);
router.get("/:id", properties_controller_1.default.getOneProperty);
router.post("/", properties_controller_1.default.createProperty);
router.post("/images", properties_controller_1.default.getPropertyImages);
router.put("/:id", properties_controller_1.default.updateProperty);
router.delete("/:id", properties_controller_1.default.deleteProperty);
exports.property_routes = router;
