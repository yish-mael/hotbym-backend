import { connect, sequelize } from "../../config/connection";
import Country from "./Country";
import Role from "./Role";
import Permission from "./Permission";
import RolePermission from "./RolePermission";
import User from "./User";
import PasswordReset from "./PasswordReset";
import Amenity from "./Amenity";
import Category from "./Category";
import Comment from "./Comment";
import Favorite from "./Favorite";
import Property from "./Property";
import Rating from "./Rating";
import Room from "./Room";
import RefreshToken from "./RefreshToken";


// const models = [
//     Country, 
//     Role,
//     Permission,
//     User,
//     PasswordReset,
//     Category,
//     Amenity,
//     Property,
//     Favorite,
//     Rating,
//     Room,
//     RolePermission,
//     Comment,
// ];

async function syncronize(){

    try{
        const con  = await connect();
        if(con) await sequelize.sync({ alter: true}); 
    }catch(err){
        throw err;
    }
}

 syncronize();


export const CountryModel = Country;
export const RoleModel = Role;
export const PermissionModel = Permission;
export const UserModel = User;
export const RolePermissionModel = RolePermission;
export const PasswordResetModel = PasswordReset;
export const AmenityModel = Amenity;
export const CategoryModel = Category;
export const CommentModel = Comment;
export const FavoriteModel = Favorite;
export const PropertyModel = Property;
export const RatingModel = Rating;
export const RoomModel = Room;
export const RefreshTokenModel = RefreshToken;