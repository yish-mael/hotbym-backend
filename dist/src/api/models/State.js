"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Country_1 = __importDefault(require("./Country"));
class State extends sequelize_1.Model {
}
State.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    countryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Country_1.default,
            key: 'id',
        },
        allowNull: false
    }
}, {
    tableName: "states",
    sequelize: connection_1.sequelize
});
State.belongsTo(Country_1.default, { foreignKey: 'countryId' });
Country_1.default.hasMany(State, { sourceKey: "id", foreignKey: "countryId" });
exports.default = State;
