"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload_routes = void 0;
const express_1 = require("express");
const uploads_controller_1 = __importDefault(require("../controllers/uploads-controller"));
const router = (0, express_1.Router)();
router.get("/", uploads_controller_1.default.getAllUploads);
router.get("/:id", uploads_controller_1.default.getOneUpload);
router.post("/", uploads_controller_1.default.createUpload);
router.put("/:id", uploads_controller_1.default.updateUpload);
router.delete("/:id", uploads_controller_1.default.deleteUpload);
exports.upload_routes = router;
