import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Permission from './Permission';
import Role from './Role';

class RolePermission extends Model {
    declare id: number;
    declare roleId: number;
    declare permissionId: number;
}

RolePermission.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

Role.belongsToMany(Permission, { through: RolePermission, foreignKey: "roleId" });
Permission.belongsToMany(Role, { through: RolePermission, foreignKey: "permissionId" });

export default RolePermission;