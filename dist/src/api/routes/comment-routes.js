"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments_routes = void 0;
const express_1 = require("express");
const comments_controller_1 = __importDefault(require("../controllers/comments-controller"));
const router = (0, express_1.Router)();
router.get("/", comments_controller_1.default.getAllComments);
router.get("/:id", comments_controller_1.default.getOneComment);
router.post("/", comments_controller_1.default.createComment);
router.put("/:id", comments_controller_1.default.updateComment);
router.delete("/:id", comments_controller_1.default.deleteComment);
exports.comments_routes = router;
