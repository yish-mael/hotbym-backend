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
const notification_service_1 = __importDefault(require("../services/notification-service"));
class NotificationsController {
    constructor() { }
    static getAllNotifications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allNotifications = yield notification_service_1.default.getAll();
                return res.status(200).json(allNotifications);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const oneNotification = yield notification_service_1.default.getById(id);
                return res.status(200).json(oneNotification);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdNotification = yield notification_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Notification created successfully.",
                    data: createdNotification
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedNotification = yield notification_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Notification updated successfully.",
                    data: updatedNotification
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedNotification = yield notification_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Notification deleted successfully.",
                    data: deletedNotification
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
exports.default = NotificationsController;
