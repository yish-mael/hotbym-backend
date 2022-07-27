import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Property from './Property';
import User from './User';

  class Comment extends Model {
    declare id: number;
    declare parentId: number;
    declare propertyId: number;
    declare userId: number;
    declare comment: string;
    declare status: string;
  }

  Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    parentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Comment, 
            key: 'id'
          },
        defaultValue: 0,
        allowNull: true,
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
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("pending", "approved", "flagged"),
        defaultValue: "pending",
        allowNull: true
    }

  }, {
      tableName: "comments",
      sequelize
  });

 Comment.belongsTo(User, { foreignKey: "userId"});
 Comment.belongsTo(Property, { foreignKey: "propertyId" });
//  User.hasMany(Comment,  { sourceKey: "id", foreignKey: "userId" });
//  Property.hasMany(Comment,  { sourceKey: "id", foreignKey: "propertyId" });


export default Comment;