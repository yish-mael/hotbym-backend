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
const permission_service_1 = __importDefault(require("../services/permission-service"));
class PermissionsController {
    constructor() { }
    static getAllPermissions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allPermissions = yield permission_service_1.default.getAll();
                return res.status(200).json(allPermissions);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOnePermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                console.log(req.params.id);
                const onePermission = yield permission_service_1.default.getById(id);
                return res.status(200).json(onePermission);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createPermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdPermission = yield permission_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Permission created successfully.",
                    data: createdPermission
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updatePermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedPermission = yield permission_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Permission updated successfully.",
                    data: updatedPermission
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deletePermission(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedPermission = yield permission_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Permission deleted successfully.",
                    data: deletedPermission
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
exports.default = PermissionsController;
