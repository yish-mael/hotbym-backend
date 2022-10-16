"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission_routes = void 0;
const express_1 = require("express");
const permissions_controller_1 = __importDefault(require("../controllers/permissions-controller"));
const router = (0, express_1.Router)();
router.get("/", permissions_controller_1.default.getAllPermissions);
router.get("/:id", permissions_controller_1.default.getOnePermission);
router.post("/", permissions_controller_1.default.createPermission);
router.put("/:id", permissions_controller_1.default.updatePermission);
router.delete("/:id", permissions_controller_1.default.deletePermission);
exports.permission_routes = router;
