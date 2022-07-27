import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Property from './Property';
import User from './User';

  class Favorite extends Model {
    declare id: number;
    declare propertyId: number;
    declare userId: number;
  }

  Favorite.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    propertyId: {
        type: DataTypes.INTEGER,
        references: {
            model: Property, 
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
    }

  }, {
      tableName: "favorites",
      sequelize
  });

Favorite.belongsTo(User, { foreignKey: "userId" });
Favorite.belongsTo(Property, { foreignKey: "propertyId" });
//  User.hasMany(Favorite, { sourceKey: "id", foreignKey: "userId" });
//  User.hasMany(Property, { sourceKey: "id", foreignKey: "propertyId" });
 

export default Favorite;