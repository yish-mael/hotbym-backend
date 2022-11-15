"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contact_routes = void 0;
const express_1 = require("express");
const contacts_controller_1 = __importDefault(require("../controllers/contacts-controller"));
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
router.post("/", contacts_controller_1.default.sendContacts);
exports.contact_routes = router;
