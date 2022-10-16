"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication_routes = void 0;
const express_1 = require("express");
const authentication_controller_1 = __importDefault(require("../controllers/authentication-controller"));
const router = (0, express_1.Router)();
/**
 * @openapi
 * /auth:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/sign-up", authentication_controller_1.default.signUp);
router.post("/sign-in", authentication_controller_1.default.signIn);
router.post("/sign-out", authentication_controller_1.default.logout);
router.post("/forgot", authentication_controller_1.default.forgotPassword);
router.get("/token", authentication_controller_1.default.refreshToken);
router.post("/reset/:token", authentication_controller_1.default.resetPassword);
exports.authentication_routes = router;
