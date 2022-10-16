"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_service_1 = __importDefault(require("../services/room-service"));
const upload_service_1 = __importDefault(require("../services/upload-service"));
class RoomsController {
    constructor() { }
    static getAllRooms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allRooms = yield room_service_1.default.getAll();
                return res.status(200).json(allRooms);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneRoom = yield room_service_1.default.getById(id);
                return res.status(200).json(oneRoom);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getRoomSearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roomSearch = yield room_service_1.default.getWhereSearch(req.body);
                return res.status(200).json(roomSearch);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getRoomImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allRoomImages = yield upload_service_1.default.getWhere({ type: "room", typeId: req.body.roomId });
                return res.status(200).json(allRoomImages);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdRoom = yield room_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Room created successfully.",
                    data: createdRoom
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedRoom = yield room_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Room updated successfully.",
                    data: updatedRoom
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedRoom = yield room_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Room deleted successfully.",
                    data: deletedRoom
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
}
exports.default = RoomsController;
