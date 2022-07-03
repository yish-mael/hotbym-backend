import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';

  class Role extends Model {
    declare id: number;
    declare title: string;
    declare slug: string;
    declare description: string;
  }

  Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  }, {
      tableName: "roles",
      sequelize
  });


 export default Role;