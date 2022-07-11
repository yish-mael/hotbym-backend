import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';

  class PasswordReset extends Model {
    declare id: number;
    declare email: string;
    declare token: string;
  }

  PasswordReset.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    }

  }, {
      tableName: "password_resets",
      sequelize
  });


export default PasswordReset;