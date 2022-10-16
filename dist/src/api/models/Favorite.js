"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Property_1 = __importDefault(require("./Property"));
const User_1 = __importDefault(require("./User"));
class Favorite extends sequelize_1.Model {
}
Favorite.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    propertyId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Property_1.default,
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
    }
}, {
    tableName: "favorites",
    sequelize: connection_1.sequelize
});
Favorite.belongsTo(User_1.default, { foreignKey: "userId" });
Favorite.belongsTo(Property_1.default, { foreignKey: "propertyId" });
//  User.hasMany(Favorite, { sourceKey: "id", foreignKey: "userId" });
//  User.hasMany(Property, { sourceKey: "id", foreignKey: "propertyId" });
exports.default = Favorite;
