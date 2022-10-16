"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Organisation_1 = __importDefault(require("./Organisation"));
const Room_1 = __importDefault(require("./Room"));
const User_1 = __importDefault(require("./User"));
class Booking extends sequelize_1.Model {
}
Booking.init({
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
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: User_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    organisationId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Organisation_1.default,
            key: 'id'
        },
        allowNull: true,
    },
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "cancelled", "completed"),
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    commission: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    markup: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    totalAmount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    arrivalDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    departureDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "bookings",
    sequelize: connection_1.sequelize
});
Booking.belongsTo(User_1.default, { foreignKey: "userId" });
Booking.belongsTo(Room_1.default, { foreignKey: "roomId" });
Booking.belongsTo(Organisation_1.default, { foreignKey: "organisationId" });
Room_1.default.hasMany(Booking, { sourceKey: "id", foreignKey: "roomId" });
exports.default = Booking;
