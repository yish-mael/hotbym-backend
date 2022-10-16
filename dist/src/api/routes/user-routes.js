"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_routes = void 0;
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users-controller"));
const router = (0, express_1.Router)();
router.get("/", users_controller_1.default.getAllUsers);
router.get("/:id", users_controller_1.default.getOneUser);
router.post("/", users_controller_1.default.createUser);
router.post("/images", users_controller_1.default.getUserImages);
router.put("/:id", users_controller_1.default.updateUser);
router.delete("/:id", users_controller_1.default.deleteUser);
exports.user_routes = router;
