"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
// import Booking from './Booking';
const Payment_1 = __importDefault(require("./Payment"));
const User_1 = __importDefault(require("./User"));
class Transaction extends sequelize_1.Model {
}
Transaction.init({
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
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    paymentId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Payment_1.default,
            key: 'id'
        },
        allowNull: true,
    },
    reference: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "completed", "cancelled"),
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "transactions",
    sequelize: connection_1.sequelize
});
Transaction.belongsTo(User_1.default, { foreignKey: "userId" });
// Transaction.belongsTo(Booking, { foreignKey: "bookingId" } );
Transaction.belongsTo(Payment_1.default, { foreignKey: "PaymentId" });
exports.default = Transaction;
