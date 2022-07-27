import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Category from './Category';
import Country from './Country';
import User from './User';

  class Property extends Model {
    declare id: number;
    declare categoryId: number;
    declare countryId: number;
    declare userId: number;
    declare name: string;
    declare status: string;
    declare address: string;
    declare description: string;
  }

  Property.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category, 
            key: 'id'
          },
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Country, 
            key: 'id'
          },
        allowNull: false,
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
    status: {
        type: DataTypes.ENUM("pending", "active", "inactive"),
        defaultValue: "pending",
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

  }, {
      tableName: "properties",
      sequelize
  });

 Property.belongsTo(Category, { foreignKey: "categoryId" });
 Property.belongsTo(Country, { foreignKey: "countryId" });
 Property.belongsTo(User, { foreignKey: "userId" });
//  Category.hasMany(Property, { sourceKey: "id", foreignKey: "categoryId"});
//  Category.hasMany(Country, { sourceKey: "id", foreignKey: "countryId"});
//  Category.hasMany(User, { sourceKey: "id", foreignKey: "userId"});
  

export default Property;