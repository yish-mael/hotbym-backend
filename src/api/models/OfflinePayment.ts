import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';


  class OfflinePayment extends Model {
    declare id: number;
    declare title: string;
    declare image: string;
    declare status: string;
    declare bankName: string;
    declare accountName: string;
    declare accountNumber: string;
    declare iban: string;
    declare sort: string;
    declare swift: string;
  }

  OfflinePayment.init({
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
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("active", "deactivate"),
        allowNull: false,
    },
    bankName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accountName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    iban: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sort: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    swift: {
        type: DataTypes.STRING,
        allowNull: false,
    }

  }, {
      tableName: "offline_payments",
      sequelize
  });


export default OfflinePayment;