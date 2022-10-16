"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Property_1 = __importDefault(require("./Property"));
const User_1 = __importDefault(require("./User"));
class Rating extends sequelize_1.Model {
}
Rating.init({
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
    },
    rate: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
}, {
    tableName: "ratings",
    sequelize: connection_1.sequelize
});
Rating.belongsTo(User_1.default, { foreignKey: "userId" });
Rating.belongsTo(Property_1.default, { foreignKey: "propertyId" });
// User.hasMany(Rating, { sourceKey: "id", foreignKey: "userId" });
// User.hasMany(Property, { sourceKey: "id", foreignKey: "propertyId" });
exports.default = Rating;
