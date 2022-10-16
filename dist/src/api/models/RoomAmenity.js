"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Amenity_1 = __importDefault(require("./Amenity"));
const Room_1 = __importDefault(require("./Room"));
class RoomAmenity extends sequelize_1.Model {
}
RoomAmenity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roomId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Room_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    amenityId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Amenity_1.default,
            key: 'id'
        },
        allowNull: false,
    },
}, {
    tableName: "room_amenities",
    sequelize: connection_1.sequelize
});
Room_1.default.belongsToMany(Amenity_1.default, { through: RoomAmenity, foreignKey: "roomId" });
Amenity_1.default.belongsToMany(Room_1.default, { through: RoomAmenity, foreignKey: "amenityId" });
exports.default = RoomAmenity;
