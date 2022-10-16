"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organisations_routes = void 0;
const express_1 = require("express");
const organisations_controller_1 = __importDefault(require("../controllers/organisations-controller"));
const router = (0, express_1.Router)();
router.get("/", organisations_controller_1.default.getAllOrganisations);
router.get("/:id", organisations_controller_1.default.getOneOrganisation);
router.post("/", organisations_controller_1.default.createOrganisation);
router.put("/:id", organisations_controller_1.default.updateOrganisation);
router.delete("/:id", organisations_controller_1.default.deleteOrganisation);
exports.organisations_routes = router;
