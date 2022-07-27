import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../../config/connection';


  class Amenity extends Model {
    declare id: number;
    declare name: string;
    declare icon: string;
    declare description: string;
  }

  Amenity.init({
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
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

  }, {
      tableName: "amenities",
      sequelize
  });


export default Amenity;