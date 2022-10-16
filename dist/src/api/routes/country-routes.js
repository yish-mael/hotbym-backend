"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.country_routes = void 0;
const express_1 = require("express");
const countries_controller_1 = __importDefault(require("../controllers/countries-controller"));
const router = (0, express_1.Router)();
router.get("/", countries_controller_1.default.getAllCountries);
router.get("/:id", countries_controller_1.default.getOneCountry);
router.post("/", countries_controller_1.default.createCountry);
router.put("/:id", countries_controller_1.default.updateCountry);
router.delete("/:id", countries_controller_1.default.deleteCountry);
exports.country_routes = router;
