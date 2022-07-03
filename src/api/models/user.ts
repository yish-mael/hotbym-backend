import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Country from './country';
import Role from './role';

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
    declare countryId: number;
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
        type: DataTypes.STRING
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
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("pending", "active", "inactive"),
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rememberToken: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: Country,
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


 export default User;