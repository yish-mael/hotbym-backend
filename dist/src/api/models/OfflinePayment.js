"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
class OfflinePayment extends sequelize_1.Model {
}
OfflinePayment.init({
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
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("active", "deactivate"),
        allowNull: false,
    },
    bankName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    accountName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    accountNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    iban: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sort: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    swift: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "offline_payments",
    sequelize: connection_1.sequelize
});
exports.default = OfflinePayment;
