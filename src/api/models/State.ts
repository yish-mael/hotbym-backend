import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';
import Country from './Country';

  class State extends Model {
    declare id: number;
    declare name: string;
    declare countryId: number;
  }

  State.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: Country,
          key: 'id',
        },
        allowNull: false
    }

  }, {
      tableName: "states",
      sequelize
  });

  State.belongsTo(Country, {foreignKey: 'countryId'});

export default State;