import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Permission from './permission';
import Role from './role';

  class RolePermission extends Model {
    declare id: number;
    declare title: string;
    declare slug: string;
    declare description: string;
  }

  RolePermission.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role, 
            key: 'id'
        },
        allowNull: false,
    },
    permissionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Permission, 
            key: 'id'
        },
        allowNull: false,
    },

  }, {
      tableName: "role_permissions",
      sequelize
  });


 export default RolePermission;