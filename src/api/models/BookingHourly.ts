import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Room from './Room';


class BookingHourly extends Model {
  declare id: number;
  declare roomId: number;
  declare date: string;
  declare quantity: string;
}

BookingHourly.init({
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
  quantity: {
      type: DataTypes.STRING,
      allowNull: false,
  },

}, {
    tableName: "hourly_bookings",
    sequelize
});


export default BookingHourly;