"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.state_routes = void 0;
const express_1 = require("express");
const states_controller_1 = __importDefault(require("../controllers/states-controller"));
const router = (0, express_1.Router)();
router.get("/", states_controller_1.default.getAllStates);
router.get("/country/:id", states_controller_1.default.getCountryStates);
router.get("/:id", states_controller_1.default.getOneState);
router.post("/images", states_controller_1.default.getStateImages);
router.post("/", states_controller_1.default.createState);
router.put("/:id", states_controller_1.default.updateState);
router.delete("/:id", states_controller_1.default.deleteState);
exports.state_routes = router;
