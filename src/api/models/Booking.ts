import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Organisation from './Organisation';
import Room from './Room';
import User from './User';


  class Booking extends Model {
    declare id: number;
    declare roomId: number;
    declare userId: number;
    declare orderId: string;
    declare organisationId: number;
    declare type: string;
    declare status: string;
    declare price: string;
    declare commission: string;
    declare markup: string;
    declare totalAmount: string;
    declare arrivalDate: string;
    declare departureDate: string;
    declare quantity: number;
  }

  Booking.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    roomId: {
        type: DataTypes.INTEGER,
        references: {
            model: Room, 
            key: 'id'
          },
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User, 
            key: 'id'
          },
        allowNull: false,
    },
    organisationId: {
        type: DataTypes.INTEGER,
        references: {
            model: Organisation, 
            key: 'id'
          },
        allowNull: true,
    },
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "cancelled", "completed"),
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    commission: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    markup: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arrivalDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    departureDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.STRING,
        allowNull: true,
    },

  }, {
      tableName: "bookings",
      sequelize
  });

  Booking.belongsTo(User, { foreignKey: "userId" } );
  Booking.belongsTo(Room, { foreignKey: "roomId" } );
  Booking.belongsTo(Organisation, { foreignKey: "organisationId" } );
  Room.hasMany(Booking, { sourceKey: "id", foreignKey: "roomId" });


export default Booking;