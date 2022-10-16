import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import User from './User';


  class RefreshToken extends Model {
    declare id: number;
    declare token: string;
    declare userId: number;
  }

  RefreshToken.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(1000),
        unique: true,
        allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false
  }

  }, {
      tableName: "refresh_tokens",
      sequelize
  });

  RefreshToken.belongsTo(User, { foreignKey: "userId"} );


export default RefreshToken;