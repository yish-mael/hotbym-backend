"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request_routes = void 0;
const express_1 = require("express");
const requests_controller_1 = __importDefault(require("../controllers/requests-controller"));
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
router.post("/", requests_controller_1.default.sendRequests);
exports.request_routes = router;
