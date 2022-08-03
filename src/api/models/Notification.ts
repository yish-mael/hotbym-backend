import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import User from './User';


  class Notification extends Model {
    declare id: number;
    declare userId: number;
    declare userNotifiedId: number;
    declare typeId: number;
    declare type: string;
    declare message: string;
    declare seenAt: string;
  }

  Notification.init({
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
        allowNull: true,
    },
    userNotifiedId: {
        type: DataTypes.INTEGER,
        references: {
            model: User, 
            key: 'id'
          },
        allowNull: true,
    },
    typeId: {
        type: DataTypes.INTEGER,
        references: {
            model: User, 
            key: 'id'
          },
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    seenAt: {
        type: DataTypes.DATE,
        allowNull: true,
    }

  }, {
      tableName: "notifications",
      sequelize
  });

  Notification.belongsTo(User, { foreignKey: "userId" } );
  Notification.belongsTo(User, { foreignKey: "userNotifiedId" } );


export default Notification;