"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Property_1 = __importDefault(require("./Property"));
class Room extends sequelize_1.Model {
}
Room.init({
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
    roomType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    beds: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    adults: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    children: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    limit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    pricePerHour: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    discount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "active", "inactive"),
        defaultValue: "pending",
        allowNull: true
    }
}, {
    tableName: "rooms",
    sequelize: connection_1.sequelize
});
Room.belongsTo(Property_1.default, { foreignKey: "propertyId" });
//  Room.belongsTo(BookingDaily, { foreignKey: "propertyId" });
//Amenity.hasMany(Room, { sourceKey: "id", foreignKey: "amenityId" });
Property_1.default.hasMany(Room, { sourceKey: "id", foreignKey: "propertyId" });
exports.default = Room;
