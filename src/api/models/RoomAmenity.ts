import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Amenity from './Amenity';
import Room from './Room';

class RoomAmenity extends Model {
    declare id: number;
    declare roomId: number;
    declare amenityId: number;
}

RoomAmenity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roomId: {
        type: DataTypes.INTEGER,
        references: {
            model: Room, 
            key: 'id'
          },
        allowNull: false,
    },
    amenityId: {
        type: DataTypes.INTEGER,
        references: {
            model: Amenity,
            key: 'id'
          },
        allowNull: false,
    },
}, {
    tableName: "room_amenities",
    sequelize
});

Room.belongsToMany(Amenity, { through: RoomAmenity, foreignKey: "roomId" });
Amenity.belongsToMany(Room, { through: RoomAmenity, foreignKey: "amenityId" });

export default RoomAmenity;