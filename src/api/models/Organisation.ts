import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import User from './User';


  class Organisation extends Model {
    declare id: number;
    declare userId: number;
    declare name: string;
    declare email: string;
    declare telephone: string;
    declare address: string;
    declare description: string;
  }

  Organisation.init({
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
    name: {
        type: DataTypes.STRING,
        unique: true,
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
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

  }, {
      tableName: "organisations",
      sequelize
  });

  Organisation.belongsTo(User, { foreignKey: "userId"} );

export default Organisation;