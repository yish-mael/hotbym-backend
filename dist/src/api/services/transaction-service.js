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
const booking_service_1 = __importDefault(require("./booking-service"));
const mail_service_1 = __importDefault(require("./mail-service"));
const payment_service_1 = __importDefault(require("./payment-service"));
const room_service_1 = __importDefault(require("./room-service"));
const user_service_1 = __importDefault(require("./user-service"));
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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, orderId, paymentId, reference, status, amount } = values;
            // console.log(values);
            const [transaction, created] = yield models_1.TransactionModel.findOrCreate({ where: { userId, orderId, paymentId, reference, status, amount } });
            if (created == false)
                throw "Transaction already exists.";
            const paymentDetails = yield payment_service_1.default.getWhere({ id: paymentId });
            const bookingDetails = yield booking_service_1.default.getWhere({ orderId: orderId });
            const userDetails = yield user_service_1.default.getWhere({ id: userId });
            const roomDetails = yield room_service_1.default.getWhere({ id: bookingDetails[0].roomId });
            if (((_a = paymentDetails[0]) === null || _a === void 0 ? void 0 : _a.type) == "offline") {
                const offlineObj = {
                    firstName: userDetails[0].firstName,
                    orderId: orderId,
                    checkIn: bookingDetails[0].arrivalDate,
                    checkOut: bookingDetails[0].departureDate,
                    room: roomDetails[0].roomType,
                    bank: paymentDetails[0].bankName,
                    accountName: paymentDetails[0].accountName,
                    accountNo: paymentDetails[0].accountNumber,
                    amount: amount
                };
                const userMail = (0, email_messages_1.userBookingOfflineEmail)(offlineObj);
                const adminMail = (0, email_messages_1.adminOfflineBookingEmail)(offlineObj);
                yield mail_service_1.default.mailer({ subject: "Hotbym Booking", recipient: userDetails[0].email, message: userMail });
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
            }
            else {
                const onlineObj = {
                    firstName: userDetails[0].firstName,
                    orderId: orderId,
                    checkIn: bookingDetails[0].arrivalDate,
                    checkOut: bookingDetails[0].departureDate,
                    room: roomDetails[0].roomType,
                    channel: paymentDetails[0].title,
                    amount: amount
                };
                const userMail = (0, email_messages_1.userBookingOnlineEmail)(onlineObj);
                const adminMail = (0, email_messages_1.adminOnlineBookingEmail)(onlineObj);
                yield mail_service_1.default.mailer({ subject: "Hotbym Booking", recipient: userDetails[0].email, message: userMail });
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
                yield mail_service_1.default.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
                // const hotelMail  = adminOfflineBookingEmail({ }); 
            }
            return transaction;
        });
    }
    static update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
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
