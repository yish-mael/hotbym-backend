"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Room_1 = __importDefault(require("./Room"));
class BookingHourly extends sequelize_1.Model {
}
BookingHourly.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    roomId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Room_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "hourly_bookings",
    sequelize: connection_1.sequelize
});
exports.default = BookingHourly;
