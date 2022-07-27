import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Property from './Property';
import User from './User';

  class Rating extends Model {
    declare id: number;
    declare propertyId: number;
    declare userId: number;
    declare rate: string;
  }

  Rating.init({
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
    },
    rate: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }

  }, {
      tableName: "ratings",
      sequelize
  });

Rating.belongsTo(User, { foreignKey: "userId" });
Rating.belongsTo(Property, { foreignKey: "propertyId" });
// User.hasMany(Rating, { sourceKey: "id", foreignKey: "userId" });
// User.hasMany(Property, { sourceKey: "id", foreignKey: "propertyId" });


export default Rating;