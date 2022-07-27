import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Amenity from './Amenity';
import Category from './Category';
import Country from './Country';
import Property from './Property';
import User from './User';

  class Room extends Model {
    declare id: number;
    declare amenityId: number;
    declare propertyId: number;
    declare roomType: string;
    declare beds: string;
    declare adults: string;
    declare children: string;
    declare limit: string;
    declare price: string;
    declare discount: string;
    declare status: string;
  }

  Room.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amenityId: {
        type: DataTypes.INTEGER,
        references: {
            model: Amenity, 
            key: 'id'
          },
        allowNull: false,
    },
    propertyId: {
        type: DataTypes.INTEGER,
        references: {
            model: Property, 
            key: 'id'
          },
        allowNull: false,
    },
    roomType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    beds: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adults: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    children: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    limit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "active", "inactive"),
        defaultValue: "pending",
        allowNull: true
    }

  }, {
      tableName: "rooms",
      sequelize
  });

 Room.belongsTo(Amenity, { foreignKey: "amenityId" });
 Room.belongsTo(Property, { foreignKey: "propertyId" });
 //Amenity.hasMany(Room, { sourceKey: "id", foreignKey: "amenityId" });
 //Property.hasMany(Room, { sourceKey: "id", foreignKey: "propertyId" });

export default Room;