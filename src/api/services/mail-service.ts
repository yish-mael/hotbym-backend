import "dotenv/config";
import nodemailer from "nodemailer";


class MailService {

    constructor() {}

    static async mailer(mailOptions: {subject: string, recipient: string, message: string})
    {
        let transporter = nodemailer.createTransport({
            host: (process.env.MAILER_HOST as string),
            port: 2525 || parseInt(process.env.MAILER_HOST as string),
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
            // text: "Hello world?", // plain text body
            html: mailOptions.message,
        });
    }
    
}

export default MailService;