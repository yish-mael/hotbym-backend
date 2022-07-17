import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import UserService from "./user-service";
import { forgotPasswordEmail } from "../templates/email-messages";
import { PasswordResetModel, UserModel } from "../models";
import MailService from "./mail-service";


class AuthenticationService{


    constructor(){}


    static async generateToken(tokenObject: object)
    {
        return jwt.sign(tokenObject, process.env.SERVER_PORT as string, { expiresIn: '1hr' });
    }


    static async signIn(credentials: {email: string, password: string, rememberToken?: string})
    {
        const user = await UserService.getWhere({email: credentials.email});
        if(user.length < 1) throw "Email doesn't exists.";

        const match = await bcrypt.compare(credentials.password, user[0].password);
        if (!match) throw "invalid password.";

        return this.generateToken({ id: user[0].id, email: user[0].email });
    }

    
    static async forgotPassword(email: string)
    {
        const user = await UserService.getWhere({email: email});
        if(user.length < 1) throw "Email doesn't exists.";

        // insert into the password reset table.
        const token = crypto.randomBytes(10).toString('hex');
        const currentDate = new Date();

        await PasswordResetModel.upsert({
            email: email,
            token: token,
            token_created_at: currentDate
        });

        const link = token;
        const message  =  forgotPasswordEmail(link);

        // send email with password reset link.
        return await MailService.mailer({ subject: "Password Reset Request", recipient: email, message });

    }


    static async resetPassword(values: { token: string, password: string })
    {
        // check if token exists.
        const tokenCheck = await PasswordResetModel.findAll({ where: { token: values.token }});
        if(tokenCheck.length < 1) throw "Token doesn't exists.";

        // check token expiry.
        const tokenDate = new Date(tokenCheck[0].token_created_at);
        const currentDate = new Date();
        const difference = currentDate.getTime() - tokenDate.getTime(); 
        const resultInMinutes = Math.round(difference / 60000);
        if(resultInMinutes > 20) throw "Password reset token expired.";
        await tokenCheck[0].destroy();

        // update user password.
        const updatedUser = await UserModel.update({ password: values.password }, { where: { email: tokenCheck[0].email } });
        return updatedUser;
    }

}

export default AuthenticationService;