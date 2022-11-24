import { PaymentModel, TransactionModel, UserModel } from "../models";
import Room from "../models/Room";
import { adminOfflineBookingEmail, adminOnlineBookingEmail, userBookingOfflineEmail, userBookingOnlineEmail } from "../templates/email-messages";
import BookingService from "./booking-service";
import MailService from "./mail-service";
import PaymentService from "./payment-service";
import RoomService from "./room-service";
import UserService from "./user-service";

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
        const { userId, orderId, paymentId, reference, status, amount } = values;

        // console.log(values);
        
        const [transaction, created] = await TransactionModel.findOrCreate({ where: { userId, orderId, paymentId, reference, status, amount }});
        if(created == false) throw "Transaction already exists.";

        const paymentDetails = await PaymentService.getWhere({ id: paymentId });
        const bookingDetails = await BookingService.getWhere({ orderId: orderId });
        const userDetails = await UserService.getWhere({ id: userId });
        const roomDetails = await RoomService.getWhere({ id: bookingDetails[0].roomId });
        
        if (paymentDetails[0]?.type == "offline"){

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
            }
            const userMail  = userBookingOfflineEmail(offlineObj); 
            const adminMail  = adminOfflineBookingEmail(offlineObj); 

            await MailService.mailer({ subject: "Hotbym Booking", recipient: userDetails[0].email, message: userMail });
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
            
        }else{

            const onlineObj = {
                firstName: userDetails[0].firstName,
                orderId: orderId,
                checkIn: bookingDetails[0].arrivalDate,
                checkOut: bookingDetails[0].departureDate,
                room: roomDetails[0].roomType,
                channel: paymentDetails[0].title,
                amount: amount 
            }

            const userMail  = userBookingOnlineEmail(onlineObj); 
            const adminMail  = adminOnlineBookingEmail(onlineObj); 
            await MailService.mailer({ subject: "Hotbym Booking", recipient: userDetails[0].email, message: userMail });
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'reservations@hotbym.com', message: adminMail });
            await MailService.mailer({ subject: "New Hotbym Booking", recipient: 'customer@hotbym.com', message: adminMail });
            // const hotelMail  = adminOfflineBookingEmail({ }); 

        }

        return transaction;
    }


    static async update(id: number, values: ITransaction)
    {
        return await TransactionModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const transaction = await this.getById(id); 
        return await transaction?.destroy();
    }

}

export default TransactionService;