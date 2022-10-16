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
import Booking from "./Booking";
import Notification from "./Notification";
import Upload from "./Upload";
import OfflinePayment from "./OfflinePayment";
import OnlinePayment from "./OnlinePayment";
import Payment from "./Payment";
import Transaction from "./Transaction";
import State from "./State";
import RoomAmenity from "./RoomAmenity";
import BookingGuest from "./BookingGuest";
import Organisation from "./Organisation";
import BookingDaily from "./BookingDaily";
import BookingHourly from "./BookingHourly";

async function syncronize(){

    try{
        const con  = await connect();
        if(con) await sequelize.sync(); 
    }catch(err){
        throw err;
    }
}

 syncronize();

export const CountryModel = Country;
export const StateModel = State;
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
export const RoomAmenityModel = RoomAmenity;
export const RefreshTokenModel = RefreshToken;
export const BookingModel = Booking;
export const OfflinePaymentModel = OfflinePayment;
export const OnlinePaymentModel = OnlinePayment;
export const PaymentModel = Payment;
export const UploadModel = Upload;
export const TransactionModel = Transaction;
export const NotificationModel = Notification;
export const BookingGuestModel = BookingGuest;
export const BookingDailyModel = BookingDaily;
export const BookingHourlyModel = BookingHourly;
export const OrganisationModel = Organisation;