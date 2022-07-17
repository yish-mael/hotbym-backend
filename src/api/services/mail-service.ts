import "dotenv/config";
import nodemailer from "nodemailer";


class MailService {

    constructor() {}

    static async mailer(mailOptions: {subject: string, recipient: string, message: string})
    {
        let transporter = nodemailer.createTransport({
            host: (process.env.MAILER_HOST as string),
            port: 2525 || parseInt(process.env.MAILER_HOST as string),
            secure: false, // true for 465, false for other ports
            auth: {
              user: (process.env.MAILER_USER as string), // generated ethereal user
              pass: (process.env.MAILER_PASSWORD as string), // generated ethereal password
            },
        });


        // send mail with defined transport object
        return await transporter.sendMail({
            from: (process.env.MAILER_EMAIL as string), // sender address
            to: mailOptions.recipient, // list of receivers
            subject: mailOptions.subject, // Subject line
            // text: "Hello world?", // plain text body
            html: mailOptions.message, // html body
        });

        
    }
    
}

export default MailService;