import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Role from './Role';
import State from './State';

  class User extends Model {
    declare id: number;
    declare firstName: string;
    declare middleName: string;
    declare lastName: string;
    declare email: string;
    declare telephone: string;
    declare gender: string;
    declare address: string;
    declare password: string;
    declare status: string;
    declare avatar: string;
    declare rememberToken: string;
    declare stateId: number;
    declare roleId: number;
  }

  User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        defaultValue: null,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("pending", "active", "inactive"),
        defaultValue: "pending",
        allowNull: true
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    rememberToken: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
    },
    stateId: {
        type: DataTypes.INTEGER,
        references: {
          model: State,
          key: 'id',
        },
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: Role,
          key: 'id',
        },
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }

  }, {
      tableName: "users",
      sequelize
  });

User.belongsTo(Role, { foreignKey: "roleId"} );
User.belongsTo(State, { foreignKey: "stateId"} );
// Role.hasMany(User, { sourceKey: "id", foreignKey: "roleId" });
// Country.hasMany(User, { sourceKey: "id", foreignKey: "stateId" });


export default User;