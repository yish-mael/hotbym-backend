"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("active", "deactivated"),
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("online", "offline"),
        allowNull: false,
    },
    bankName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    accountName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    iban: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    sort: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    swift: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    secretKey: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    publicKey: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "payments",
    sequelize: connection_1.sequelize
});
exports.default = Payment;
