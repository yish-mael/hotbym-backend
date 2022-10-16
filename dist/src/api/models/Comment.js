"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../../config/connection");
const Property_1 = __importDefault(require("./Property"));
const User_1 = __importDefault(require("./User"));
class Comment extends sequelize_1.Model {
}
Comment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    parentId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Comment,
            key: 'id'
        },
        defaultValue: 0,
        allowNull: true,
    },
    propertyId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Property_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: User_1.default,
            key: 'id'
        },
        allowNull: false,
    },
    comment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("pending", "approved", "flagged"),
        defaultValue: "pending",
        allowNull: true
    }
}, {
    tableName: "comments",
    sequelize: connection_1.sequelize
});
Comment.belongsTo(User_1.default, { foreignKey: "userId" });
Comment.belongsTo(Property_1.default, { foreignKey: "propertyId" });
//  User.hasMany(Comment,  { sourceKey: "id", foreignKey: "userId" });
//  Property.hasMany(Comment,  { sourceKey: "id", foreignKey: "propertyId" });
exports.default = Comment;
