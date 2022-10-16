import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
// import Booking from './Booking';
import Payment from './Payment';
import User from './User';


  class Transaction extends Model {
    declare id: number;
    declare userId: number;
    declare orderId: string;
    declare paymentId: number;
    declare reference: string;
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
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentId: {
      type: DataTypes.INTEGER,
      references: {
          model: Payment, 
          key: 'id'
      },
      allowNull: true,
    },
    reference: {
        type: DataTypes.STRING,
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
  // Transaction.belongsTo(Booking, { foreignKey: "bookingId" } );
  Transaction.belongsTo(Payment, { foreignKey: "PaymentId" } );

export default Transaction;