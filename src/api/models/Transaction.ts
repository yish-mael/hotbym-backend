import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Booking from './Booking';
import OfflinePayment from './OfflinePayment';
import OnlinePayment from './OnlinePayment';
import User from './User';


  class Transaction extends Model {
    declare id: number;
    declare userId: number;
    declare bookingId: number;
    declare offlinePaymentId: number;
    declare onlinePaymentId: number;
    declare status: string;
    declare amount: string;
  }

  Transaction.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User, 
            key: 'id'
          },
        allowNull: false,
    },
    bookingId: {
        type: DataTypes.INTEGER,
        references: {
            model: Booking, 
            key: 'id'
          },
        allowNull: false,
    },
    offlinePaymentId: {
        type: DataTypes.INTEGER,
        references: {
            model: OfflinePayment, 
            key: 'id'
          },
        allowNull: true,
    },
    onlinePaymentId: {
        type: DataTypes.INTEGER,
        references: {
            model: OnlinePayment, 
            key: 'id'
          },
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        allowNull: false,
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    }

  }, {
      tableName: "transactions",
      sequelize
  });

  Transaction.belongsTo(User, { foreignKey: "userId" } );
  Transaction.belongsTo(Booking, { foreignKey: "bookingId" } );
  Transaction.belongsTo(OfflinePayment, { foreignKey: "offlinePaymentId" } );
  Transaction.belongsTo(OnlinePayment, { foreignKey: "onlinePaymentId" } );

export default Transaction;