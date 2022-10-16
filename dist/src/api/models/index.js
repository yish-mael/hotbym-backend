"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationModel = exports.BookingHourlyModel = exports.BookingDailyModel = exports.BookingGuestModel = exports.NotificationModel = exports.TransactionModel = exports.UploadModel = exports.PaymentModel = exports.OnlinePaymentModel = exports.OfflinePaymentModel = exports.BookingModel = exports.RefreshTokenModel = exports.RoomAmenityModel = exports.RoomModel = exports.RatingModel = exports.PropertyModel = exports.FavoriteModel = exports.CommentModel = exports.CategoryModel = exports.AmenityModel = exports.PasswordResetModel = exports.RolePermissionModel = exports.UserModel = exports.PermissionModel = exports.RoleModel = exports.StateModel = exports.CountryModel = void 0;
const connection_1 = require("../../config/connection");
const Country_1 = __importDefault(require("./Country"));
const Role_1 = __importDefault(require("./Role"));
const Permission_1 = __importDefault(require("./Permission"));
const RolePermission_1 = __importDefault(require("./RolePermission"));
const User_1 = __importDefault(require("./User"));
const PasswordReset_1 = __importDefault(require("./PasswordReset"));
const Amenity_1 = __importDefault(require("./Amenity"));
const Category_1 = __importDefault(require("./Category"));
const Comment_1 = __importDefault(require("./Comment"));
const Favorite_1 = __importDefault(require("./Favorite"));
const Property_1 = __importDefault(require("./Property"));
const Rating_1 = __importDefault(require("./Rating"));
const Room_1 = __importDefault(require("./Room"));
const RefreshToken_1 = __importDefault(require("./RefreshToken"));
const Booking_1 = __importDefault(require("./Booking"));
const Notification_1 = __importDefault(require("./Notification"));
const Upload_1 = __importDefault(require("./Upload"));
const OfflinePayment_1 = __importDefault(require("./OfflinePayment"));
const OnlinePayment_1 = __importDefault(require("./OnlinePayment"));
const Payment_1 = __importDefault(require("./Payment"));
const Transaction_1 = __importDefault(require("./Transaction"));
const State_1 = __importDefault(require("./State"));
const RoomAmenity_1 = __importDefault(require("./RoomAmenity"));
const BookingGuest_1 = __importDefault(require("./BookingGuest"));
const Organisation_1 = __importDefault(require("./Organisation"));
const BookingDaily_1 = __importDefault(require("./BookingDaily"));
const BookingHourly_1 = __importDefault(require("./BookingHourly"));
function syncronize() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const con = yield (0, connection_1.connect)();
            if (con)
                yield connection_1.sequelize.sync();
        }
        catch (err) {
            throw err;
        }
    });
}
syncronize();
exports.CountryModel = Country_1.default;
exports.StateModel = State_1.default;
exports.RoleModel = Role_1.default;
exports.PermissionModel = Permission_1.default;
exports.UserModel = User_1.default;
exports.RolePermissionModel = RolePermission_1.default;
exports.PasswordResetModel = PasswordReset_1.default;
exports.AmenityModel = Amenity_1.default;
exports.CategoryModel = Category_1.default;
exports.CommentModel = Comment_1.default;
exports.FavoriteModel = Favorite_1.default;
exports.PropertyModel = Property_1.default;
exports.RatingModel = Rating_1.default;
exports.RoomModel = Room_1.default;
exports.RoomAmenityModel = RoomAmenity_1.default;
exports.RefreshTokenModel = RefreshToken_1.default;
exports.BookingModel = Booking_1.default;
exports.OfflinePaymentModel = OfflinePayment_1.default;
exports.OnlinePaymentModel = OnlinePayment_1.default;
exports.PaymentModel = Payment_1.default;
exports.UploadModel = Upload_1.default;
exports.TransactionModel = Transaction_1.default;
exports.NotificationModel = Notification_1.default;
exports.BookingGuestModel = BookingGuest_1.default;
exports.BookingDailyModel = BookingDaily_1.default;
exports.BookingHourlyModel = BookingHourly_1.default;
exports.OrganisationModel = Organisation_1.default;
