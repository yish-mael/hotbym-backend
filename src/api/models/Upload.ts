import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import User from './User';


  class Upload extends Model {
    declare id: number;
    declare userId: number;
    declare typeId: number;
    declare type: string;
    declare format: string;
    declare url: string;
  }

  Upload.init({
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
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    format: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    }

  }, {
      tableName: "uploads",
      sequelize
  });

  Upload.belongsTo(User, { foreignKey: "userId" } );


export default Upload;