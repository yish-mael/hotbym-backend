import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';


  class Payment extends Model {
    declare id: number;
    declare title: string;
    declare image: string;
    declare status: string;
    declare type: string;
    declare bankName: string;
    declare accountName: string;
    declare accountNumber: string;
    declare iban: string;
    declare sort: string;
    declare swift: string;
    declare url: string;
    declare secretKey: string;
    declare publicKey: string;
  }

  Payment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM("active", "deactivated"),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM("online", "offline"),
        allowNull: false,
    },
    bankName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    accountName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    iban: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sort: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    swift: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    secretKey: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    publicKey: {
        type: DataTypes.STRING,
        allowNull: true,
    }

  }, {
      tableName: "payments",
      sequelize
  });


export default Payment;