import { PaymentModel, TransactionModel, UserModel } from "../models";
import Room from "../models/Room";
import { adminOfflineBookingEmail, adminOnlineBookingEmail, hotelOnlineBookingEmail, userBookingOfflineEmail, userBookingOnlineEmail } from "../templates/email-messages";
import BookingDailyService from "./booking-daily-service";
import BookingService from "./booking-service";
import MailService from "./mail-service";
import PaymentService from "./payment-service";
import PropertyService from "./property-service";
import RoomService from "./room-service";
import UserService from "./user-service";
import { Op } from "sequelize";

interface ITransaction {
    userId: number,
    orderId: string,
    paymentId: number,
    reference: string
    status: string,
    amount: string,
}

class TransactionService{

    constructor(){}

    static async getAll()
    {
        return await TransactionModel.findAll({
            include: [UserModel, PaymentModel],
        });
    }


    static async getById(id: number)
    {
        return await TransactionModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        return await TransactionModel.findAll({ where: criteria });
    }


    static async create(values: ITransaction)
    {
        // console.log("Here now now nowx xxxx");
        const { userId, orderId, paymentId, reference, status, amount } = values;

        // console.log(values);
        
        const [transaction, created] = await TransactionModel.findOrCreate({ where: { userId, orderId, paymentId, reference, status, amount }});
        if(created == false) throw "Transaction already exists.";

        //console.log("next one: ", transaction);
        let timeIn = "00:00";
        let timeOut = "00:00";

        // console.log("Payment : ", paymentId);
        const paymentDetails = await PaymentService.getById(paymentId);
        // console.log("Payment : ", paymentDetails);
        const bookingDetails = await BookingService.getWhere({ orderId: orderId });
        // console.log("Bookings : ", JSON.stringify(bookingDetails[0].arrivalDate).split("T")[0]+" 00:00:00");
        const dailyBookingDetails = await BookingDailyService.getWhere({ orderId: orderId, timeIn: { [Op.not]: null } });
        // console.log("Daily XXX : ", dailyBookingDetails[0]);
        if(dailyBookingDetails.length > 0){
            timeIn = dailyBookingDetails[0].timeIn;
            timeOut = dailyBookingDetails[0].timeOut;
        }
        
        const userDetails = await UserService.getById(userId);
        // console.log("User : ", userDetails);
        const roomDetails = await RoomService.getById(bookingDetails[0].roomId);
        // console.log("room : ", roomDetails);
        const propertyDetailsx = await PropertyService.getById(roomDetails?.propertyId || 1);
        // console.log("property : ", propertyDetailsx);
        
        
        if (paymentDetails?.type == "offline"){
            
            const offlineObj = {
                firstName: userDetails?.firstName,
                orderId: orderId,
                checkIn: JSON.stringify(bookingDetails[0].arrivalDate).split("T")[0].replace('"', ''),
                checkOut: JSON.stringify(bookingDetails[0].departureDate).split("T")[0].replace('"', ''),
                timeIn: timeIn,
                timeOut: timeOut,
                accomodation: propertyDetailsx?.name,
                room: roomDetails?.roomType,
                bank: paymentDetails.bankName,
                accountName: paymentDetails.accountName,
                accountNo: paymentDetails.accountNumber,
                amount: amount 
            }
            // console.log(bookingDetails[0]);
            console.log(offlineObj);
            // throw "Stop here";
            const userMail  = userBookingOfflineEmail(offlineObj); 
            const adminMail  = adminOfflineBookingEmail(offlineObj); 
            
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
            await MailService.mailer({ subject: "Hotbym Booking", recipient: userDetails?.email|| "", message: userMail });
            
        }else{
            
            const onlineObj = {
                firstName: userDetails?.firstName,
                orderId: orderId,
                checkIn: JSON.stringify(bookingDetails[0].arrivalDate).split("T")[0].replace('"', ''),
                checkOut: JSON.stringify(bookingDetails[0].departureDate).split("T")[0].replace('"', ''),
                timeIn: timeIn,
                timeOut: timeOut,
                room: roomDetails?.roomType,
                accomodation: propertyDetailsx?.name,
                channel: paymentDetails?.title,
                amount: amount 
            }
            
            // console.log("online");
            console.log(onlineObj);
            const userMail  = userBookingOnlineEmail(onlineObj); 
            const adminMail  = adminOnlineBookingEmail(onlineObj); 
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
            const propertyDetails = await PropertyService.getById(roomDetails?.propertyId || 1);
            const hotelMail  = hotelOnlineBookingEmail(onlineObj); 
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: propertyDetails?.email || "", message: hotelMail });
            await MailService.mailer({ subject: "Hotbym Booking", recipient: userDetails?.email|| "", message: userMail });
            // const hotelMail  = adminOfflineBookingEmail({ }); 

        }

        return transaction;
    }


    static async update(id: number, values: ITransaction)
    {
        let timeIn = "00:00";
        let timeOut = "00:00";

        if (values?.status == "completed"){
            const transaction = await this.getById(id);
            const bookingDetails = await BookingService.getWhere({ orderId: transaction?.orderId });
            const roomDetails = await RoomService.getById(bookingDetails[0].roomId);
            const userDetails = await UserService.getById(transaction?.userId || 1);
            const propertyDetails = await PropertyService.getById(roomDetails?.propertyId || 1);
            const dailyBookingDetails = await BookingDailyService.getWhere({ orderId: transaction?.orderId, timeIn: { [Op.not]: null } });
            // console.log("Daily XXX : ", dailyBookingDetails[0]);
            if(dailyBookingDetails.length > 0){
                timeIn = dailyBookingDetails[0].timeIn;
                timeOut = dailyBookingDetails[0].timeOut;
            }

            const offlineObj = {
                orderId: transaction?.orderId,
                checkIn: bookingDetails[0].arrivalDate,
                checkOut: bookingDetails[0].departureDate,
                timeIn: timeIn,
                timeOut: timeOut,
                room: roomDetails?.roomType,
                accomodation: propertyDetails?.name,
                amount: transaction?.amount,
                firstName: userDetails?.firstName,
                lastName: userDetails?.lastName
            }
            const hotelMail  = hotelOnlineBookingEmail(offlineObj);
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: propertyDetails?.email || "", message: hotelMail });
        }
        return await TransactionModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const transaction = await this.getById(id); 
        return await transaction?.destroy();
    }

}

export default TransactionService;