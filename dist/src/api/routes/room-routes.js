"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.room_routes = void 0;
const express_1 = require("express");
const rooms_controller_1 = __importDefault(require("../controllers/rooms-controller"));
const router = (0, express_1.Router)();
router.get("/", rooms_controller_1.default.getAllRooms);
router.get("/:id", rooms_controller_1.default.getOneRoom);
router.post("/search", rooms_controller_1.default.getRoomSearch);
router.post("/", rooms_controller_1.default.createRoom);
router.post("/images", rooms_controller_1.default.getRoomImages);
router.put("/:id", rooms_controller_1.default.updateRoom);
router.delete("/:id", rooms_controller_1.default.deleteRoom);
exports.room_routes = router;
