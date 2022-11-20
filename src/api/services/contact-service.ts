import { contactEmail } from "../templates/email-messages";
import MailService from "./mail-service";

interface IContact {
    firstName: string,
    lastName?: string,
    email: string,
    subject: string,
    message?: string,
}

class ContactService{

    constructor(){}


    static async send(values: IContact)
    {
        const message  =  contactEmail(values);

        // send email with password reset link.
        return await MailService.mailer({ subject: "Hotbym Contact Form", recipient: 'tolu.akinnubi@yahoo.com', message });

    }

}

export default ContactService;