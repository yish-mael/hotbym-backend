import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Room from './Room';


  class BookingDaily extends Model {
    declare id: number;
    declare roomId: number;
    declare date: string;
    declare timeIn: string;
    declare timeOut: string;
    declare quantity: number;
    declare  orderId: string;
  }

  BookingDaily.init({
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
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    timeIn: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    timeOut: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: true,
  },

  }, {
      tableName: "daily_bookings",
      sequelize
  });

  BookingDaily.belongsTo(Room, { foreignKey: "roomId" });
  Room.hasMany(BookingDaily, { sourceKey: "id", foreignKey: "roomId" });



export default BookingDaily;