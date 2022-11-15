"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Category_1 = __importDefault(require("./Category"));
const State_1 = __importDefault(require("./State"));
const User_1 = __importDefault(require("./User"));
class Property extends sequelize_1.Model {
}
Property.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Category_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    stateId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: State_1.default,
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
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "active", "inactive"),
        defaultValue: "pending",
        allowNull: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "properties",
    sequelize: connection_1.sequelize
});
Property.belongsTo(Category_1.default, { foreignKey: "categoryId" });
Property.belongsTo(State_1.default, { foreignKey: "stateId" });
Property.belongsTo(User_1.default, { foreignKey: "userId" });
//  Category.hasMany(Property, { sourceKey: "id", foreignKey: "categoryId"});
//  Category.hasMany(Country, { sourceKey: "id", foreignKey: "countryId"});
//  Category.hasMany(User, { sourceKey: "id", foreignKey: "userId"});
exports.default = Property;
