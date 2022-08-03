import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';

  class Category extends Model {
    declare id: number;
    declare parentId: number;
    declare name: string;
    declare slug: string;
    declare description: string;
  }

  Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    parentId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    name: {
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
        allowNull: true,
    },

  }, {
      tableName: "categories",
      sequelize
  });


export default Category;