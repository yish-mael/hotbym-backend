import { requestEmail } from "../templates/email-messages";
import MailService from "./mail-service";

interface IRequest {
    companyName: string,
    email: string,
    telephone?: string,
    description?: string,
}

class RequestBookingService{

    constructor(){}


    static async send(values: IRequest)
    {
        const message  =  requestEmail(values);

        // send email with password reset link.
        return await MailService.mailer({ subject: "Hotbym Booking Request", recipient: 'info@hotbym.com', message });

    }

}

export default RequestBookingService;