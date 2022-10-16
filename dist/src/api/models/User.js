"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Role_1 = __importDefault(require("./Role"));
const State_1 = __importDefault(require("./State"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    gender: {
        type: sequelize_1.DataTypes.ENUM("male", "female", "other"),
        defaultValue: null,
        allowNull: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "active", "inactive"),
        defaultValue: "pending",
        allowNull: true
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    rememberToken: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    stateId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: State_1.default,
            key: 'id',
        },
        allowNull: true
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Role_1.default,
            key: 'id',
        },
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    }
}, {
    tableName: "users",
    sequelize: connection_1.sequelize
});
User.belongsTo(Role_1.default, { foreignKey: "roleId" });
User.belongsTo(State_1.default, { foreignKey: "stateId" });
// Role.hasMany(User, { sourceKey: "id", foreignKey: "roleId" });
// Country.hasMany(User, { sourceKey: "id", foreignKey: "stateId" });
exports.default = User;
