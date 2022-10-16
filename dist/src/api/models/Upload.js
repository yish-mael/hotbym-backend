"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const User_1 = __importDefault(require("./User"));
const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;
class Upload extends sequelize_1.Model {
}
Upload.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: User_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    typeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    format: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "uploads",
    sequelize: connection_1.sequelize,
});
Upload.belongsTo(User_1.default, { foreignKey: "userId" });
exports.default = Upload;
