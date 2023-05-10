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
const models_1 = require("../models");
const email_messages_1 = require("../templates/email-messages");
const booking_daily_service_1 = __importDefault(require("./booking-daily-service"));
const booking_service_1 = __importDefault(require("./booking-service"));
const mail_service_1 = __importDefault(require("./mail-service"));
const payment_service_1 = __importDefault(require("./payment-service"));
const property_service_1 = __importDefault(require("./property-service"));
const room_service_1 = __importDefault(require("./room-service"));
const user_service_1 = __importDefault(require("./user-service"));
const sequelize_1 = require("sequelize");
class TransactionService {
    constructor() { }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.findAll({
                include: [models_1.UserModel, models_1.PaymentModel],
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.findByPk(id);
        });
    }
    static getWhere(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.TransactionModel.findAll({ where: criteria });
        });
    }
    static create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("Here now now nowx xxxx");
            const { userId, orderId, paymentId, reference, status, amount } = values;
            // console.log(values);
            const [transaction, created] = yield models_1.TransactionModel.findOrCreate({ where: { userId, orderId, paymentId, reference, status, amount } });
            if (created == false)
                throw "Transaction already exists.";
            //console.log("next one: ", transaction);
            let timeIn = "00:00";
            let timeOut = "00:00";
            // console.log("Payment : ", paymentId);
            const paymentDetails = yield payment_service_1.default.getById(paymentId);
            // console.log("Payment : ", paymentDetails);
            const bookingDetails = yield booking_service_1.default.getWhere({ orderId: orderId });
            // console.log("Bookings : ", JSON.stringify(bookingDetails[0].arrivalDate).split("T")[0]+" 00:00:00");
            const dailyBookingDetails = yield booking_daily_service_1.default.getWhere({ orderId: orderId, timeIn: { [sequelize_1.Op.not]: null } });
            // console.log("Daily XXX : ", dailyBookingDetails[0]);
            if (dailyBookingDetails.length > 0) {
                timeIn = dailyBookingDetails[0].timeIn;
                timeOut = dailyBookingDetails[0].timeOut;
            }
            const userDetails = yield user_service_1.default.getById(userId);
            // console.log("User : ", userDetails);
            const roomDetails = yield room_service_1.default.getById(bookingDetails[0].roomId);
            // console.log("room : ", roomDetails);
            const propertyDetailsx = yield property_service_1.default.getById((roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.propertyId) || 1);
            // console.log("property : ", propertyDetailsx);
            if ((paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.type) == "offline") {
                const offlineObj = {
                    firstName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.firstName,
                    orderId: orderId,
                    checkIn: JSON.stringify(bookingDetails[0].arrivalDate).split("T")[0].replace('"', ''),
                    checkOut: JSON.stringify(bookingDetails[0].departureDate).split("T")[0].replace('"', ''),
                    timeIn: timeIn,
                    timeOut: timeOut,
                    accomodation: propertyDetailsx === null || propertyDetailsx === void 0 ? void 0 : propertyDetailsx.name,
                    room: roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.roomType,
                    bank: paymentDetails.bankName,
                    accountName: paymentDetails.accountName,
                    accountNo: paymentDetails.accountNumber,
                    amount: amount
                };
                // console.log(bookingDetails[0]);
                console.log(offlineObj);
                // throw "Stop here";
                const userMail = (0, email_messages_1.userBookingOfflineEmail)(offlineObj);
                const adminMail = (0, email_messages_1.adminOfflineBookingEmail)(offlineObj);
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
                yield mail_service_1.default.mailer({ subject: "Hotbym Booking", recipient: (userDetails === null || userDetails === void 0 ? void 0 : userDetails.email) || "", message: userMail });
            }
            else {
                const onlineObj = {
                    firstName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.firstName,
                    orderId: orderId,
                    checkIn: JSON.stringify(bookingDetails[0].arrivalDate).split("T")[0].replace('"', ''),
                    checkOut: JSON.stringify(bookingDetails[0].departureDate).split("T")[0].replace('"', ''),
                    timeIn: timeIn,
                    timeOut: timeOut,
                    room: roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.roomType,
                    accomodation: propertyDetailsx === null || propertyDetailsx === void 0 ? void 0 : propertyDetailsx.name,
                    channel: paymentDetails === null || paymentDetails === void 0 ? void 0 : paymentDetails.title,
                    amount: amount
                };
                // console.log("online");
                console.log(onlineObj);
                const userMail = (0, email_messages_1.userBookingOnlineEmail)(onlineObj);
                const adminMail = (0, email_messages_1.adminOnlineBookingEmail)(onlineObj);
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
                const propertyDetails = yield property_service_1.default.getById((roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.propertyId) || 1);
                const hotelMail = (0, email_messages_1.hotelOnlineBookingEmail)(onlineObj);
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: (propertyDetails === null || propertyDetails === void 0 ? void 0 : propertyDetails.email) || "", message: hotelMail });
                yield mail_service_1.default.mailer({ subject: "Hotbym Booking", recipient: (userDetails === null || userDetails === void 0 ? void 0 : userDetails.email) || "", message: userMail });
                // const hotelMail  = adminOfflineBookingEmail({ }); 
            }
            return transaction;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            let timeIn = "00:00";
            let timeOut = "00:00";
            if ((values === null || values === void 0 ? void 0 : values.status) == "completed") {
                const transaction = yield this.getById(id);
                const bookingDetails = yield booking_service_1.default.getWhere({ orderId: transaction === null || transaction === void 0 ? void 0 : transaction.orderId });
                const roomDetails = yield room_service_1.default.getById(bookingDetails[0].roomId);
                const userDetails = yield user_service_1.default.getById((transaction === null || transaction === void 0 ? void 0 : transaction.userId) || 1);
                const propertyDetails = yield property_service_1.default.getById((roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.propertyId) || 1);
                const dailyBookingDetails = yield booking_daily_service_1.default.getWhere({ orderId: transaction === null || transaction === void 0 ? void 0 : transaction.orderId, timeIn: { [sequelize_1.Op.not]: null } });
                // console.log("Daily XXX : ", dailyBookingDetails[0]);
                if (dailyBookingDetails.length > 0) {
                    timeIn = dailyBookingDetails[0].timeIn;
                    timeOut = dailyBookingDetails[0].timeOut;
                }
                const offlineObj = {
                    orderId: transaction === null || transaction === void 0 ? void 0 : transaction.orderId,
                    checkIn: bookingDetails[0].arrivalDate,
                    checkOut: bookingDetails[0].departureDate,
                    timeIn: timeIn,
                    timeOut: timeOut,
                    room: roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.roomType,
                    accomodation: propertyDetails === null || propertyDetails === void 0 ? void 0 : propertyDetails.name,
                    amount: transaction === null || transaction === void 0 ? void 0 : transaction.amount,
                    firstName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.firstName,
                    lastName: userDetails === null || userDetails === void 0 ? void 0 : userDetails.lastName
                };
                const hotelMail = (0, email_messages_1.hotelOnlineBookingEmail)(offlineObj);
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: (propertyDetails === null || propertyDetails === void 0 ? void 0 : propertyDetails.email) || "", message: hotelMail });
            }
            return yield models_1.TransactionModel.update(values, { where: { id: id } });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield this.getById(id);
            return yield (transaction === null || transaction === void 0 ? void 0 : transaction.destroy());
        });
    }
}
exports.default = TransactionService;
