"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.role_routes = void 0;
const express_1 = require("express");
const roles_controller_1 = __importDefault(require("../controllers/roles-controller"));
const router = (0, express_1.Router)();
router.get("/", roles_controller_1.default.getAllRoles);
router.get("/:id", roles_controller_1.default.getOneRole);
router.post("/permissions", roles_controller_1.default.addPermissionsToRole);
router.post("/permissions/remove", roles_controller_1.default.removePermissionsFromRole);
router.post("/", roles_controller_1.default.createRole);
router.put("/:id", roles_controller_1.default.updateRole);
router.delete("/:id", roles_controller_1.default.deleteRole);
exports.role_routes = router;
