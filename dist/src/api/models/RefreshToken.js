"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const User_1 = __importDefault(require("./User"));
class RefreshToken extends sequelize_1.Model {
}
RefreshToken.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    token: {
        type: sequelize_1.DataTypes.STRING(1000),
        unique: true,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: User_1.default,
            key: 'id',
        },
        allowNull: false
    }
}, {
    tableName: "refresh_tokens",
    sequelize: connection_1.sequelize
});
RefreshToken.belongsTo(User_1.default, { foreignKey: "userId" });
exports.default = RefreshToken;
