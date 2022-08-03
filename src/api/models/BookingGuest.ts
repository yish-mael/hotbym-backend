import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Booking from './Booking';


  class BookingGuest extends Model {
    declare id: number;
    declare bookingId: number;
    declare firstName: string;
    declare middleName: string;
    declare lastName: string;
    declare email: string;
    declare telephone: string;
    declare gender: string;
  }

  BookingGuest.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    bookingId: {
        type: DataTypes.INTEGER,
        references: {
            model: Booking, 
            key: 'id'
          },
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    }

  }, {
      tableName: "booking_guests",
      sequelize
  });

  BookingGuest.belongsTo(Booking, { foreignKey: "bookingId" } );

export default BookingGuest;