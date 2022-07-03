import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';

  class Country extends Model {
    declare id: number;
    declare name: string;
    declare phoneCode: string;
    declare abbreviation: string;
    declare symbol: number;
  }

  Country.init({
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
    phoneCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    symbol: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  }, {
      tableName: "countries",
      sequelize
  });


 export default Country;