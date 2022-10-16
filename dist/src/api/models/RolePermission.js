"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Permission_1 = __importDefault(require("./Permission"));
const Role_1 = __importDefault(require("./Role"));
class RolePermission extends sequelize_1.Model {
}
RolePermission.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Role_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    permissionId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Permission_1.default,
            key: 'id'
        },
        allowNull: false,
    },
}, {
    tableName: "role_permissions",
    sequelize: connection_1.sequelize
});
Role_1.default.belongsToMany(Permission_1.default, { through: RolePermission, foreignKey: "roleId" });
Permission_1.default.belongsToMany(Role_1.default, { through: RolePermission, foreignKey: "permissionId" });
exports.default = RolePermission;
