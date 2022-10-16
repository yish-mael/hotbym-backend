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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/");
class RoleService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoleModel.findAll({
                include: [models_1.PermissionModel],
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoleModel.findByPk(id, {
                include: models_1.PermissionModel
            });
        });
    }
    static addPermissions(id, permissions) {
        return __awaiter(this, void 0, void 0, function* () {
            return permissions.map((item) => __awaiter(this, void 0, void 0, function* () {
                return yield models_1.RolePermissionModel.findOrCreate({ where: { roleId: id, permissionId: item } });
            }));
        });
    }
    static removePermissions(id, permissions) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(id, " Here", permissions)
            return permissions.map((item) => __awaiter(this, void 0, void 0, function* () {
                return yield models_1.RolePermissionModel.destroy({ where: { roleId: id, permissionId: item } });
            }));
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoleModel.findAll({ where: criteria });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, slug, description } = values;
            const [role, created] = yield models_1.RoleModel.findOrCreate({ where: { title, slug, description } });
            if (created == false)
                throw "Role already exists.";
            return role;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.RoleModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield this.getById(id);
            return yield (role === null || role === void 0 ? void 0 : role.destroy());
        });
    }
}
exports.default = RoleService;
// Get all roles
// Get role by Id
// Get role where
// Update role by Id
// Delete role by Id
