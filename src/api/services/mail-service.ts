import "dotenv/config";
import nodemailer from "nodemailer";


class MailService {

    constructor() {}

    static async mailer(mailOptions: {subject: string, recipient: string, message: string})
    {
        let transporter = nodemailer.createTransport({
            pool: true,
            host: (process.env.MAILER_HOST as string),
            port: parseInt(process.env.MAILER_PORT as string) || 2525,
            secure: false, 
            auth: {
              user: (process.env.MAILER_USER as string), 
              pass: (process.env.MAILER_PASSWORD as string),
            },
        });

        return await transporter.sendMail({
            from: (process.env.MAILER_EMAIL as string),
            to: mailOptions.recipient, 
            subject: mailOptions.subject, 
            html: mailOptions.message,
        });
    }
    
}

export default MailService;