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
const role_service_1 = __importDefault(require("../services/role-service"));
class RolesController {
    constructor() { }
    static getAllRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allRoles = yield role_service_1.default.getAll();
                return res.status(200).json(allRoles);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static getOneRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const oneRole = yield role_service_1.default.getById(id);
                return res.status(200).json(oneRole);
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdRole = yield role_service_1.default.create(req.body);
                return res.status(200).json({
                    message: "Role created successfully.",
                    data: createdRole
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static addPermissionsToRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.body.id);
                const permissions = req.body.permissions;
                yield role_service_1.default.addPermissions(id, permissions);
                return res.status(200).json({
                    message: "Permissions added successfully.",
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static removePermissionsFromRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.id);
            try {
                const id = parseInt(req.body.id);
                const permissions = req.body.permissions;
                yield role_service_1.default.removePermissions(id, permissions);
                return res.status(200).json({
                    message: "Permissions removed successfully.",
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static updateRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const updatedRole = yield role_service_1.default.update(id, req.body);
                return res.status(200).json({
                    message: "Role updated successfully.",
                    data: updatedRole
                });
            }
            catch (err) {
                return res.status(500).json({
                    error: err
                });
            }
        });
    }
    static deleteRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deletedRole = yield role_service_1.default.delete(id);
                return res.status(200).json({
                    message: "Role deleted successfully.",
                    data: deletedRole
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
exports.default = RolesController;
