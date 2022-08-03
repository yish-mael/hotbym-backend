import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';


  class OnlinePayment extends Model {
    declare id: number;
    declare title: number;
    declare status: string;
    declare image: string;
    declare url: string;
    declare secretKey: string;
    declare publicKey: string;
  }

  OnlinePayment.init({
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
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("active", "deactivate"),
        allowNull: false,
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
      tableName: "online_payments",
      sequelize
  });


export default OnlinePayment;