import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import UserService from "./user-service";
import { forgotPasswordEmail } from "../templates/email-messages";
import { PasswordResetModel, UserModel, RefreshTokenModel } from "../models";
import MailService from "./mail-service";


class AuthenticationService{


    constructor(){}


    static async generateAccessToken(refreshToken: any)
    {
        const secret = (process.env.JWT_REFRESH_SECRET as string);
        if(refreshToken == null) throw "Refresh token is required.";

        const checkRefreshToken = await RefreshTokenModel.findAll({ where: { token: refreshToken} });

        if(checkRefreshToken.length < 1) throw "Invalid refresh token.";
        // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
        return jwt.verify(refreshToken, secret, (err: any, user: any) => {
            if(err) throw err;
            delete user.iat;
            delete user.exp;
            return this.generateToken(user);
        
        });
    }


    static generateToken(tokenObject: object)
    {
        const secret = (process.env.JWT_SECRET as string);
        return jwt.sign(tokenObject, secret, { expiresIn: '15m' });
    }


    static async generateRefreshToken(tokenObject: any)
    {
        const secret = (process.env.JWT_REFRESH_SECRET as string);
        const refreshToken = jwt.sign(tokenObject, secret, { expiresIn: '1hr' });
        await RefreshTokenModel.create({ token: refreshToken, userId: tokenObject.id });
        return refreshToken;
    }
    
    
    static async removeRefreshToken(token: any)
    {
        const refreshToken = await RefreshTokenModel.findOne({ where: {token: token} }); 
        return await refreshToken?.destroy();
    }


    static async signIn(credentials: {email: string, password: string, rememberToken?: string})
    {
        const user: any = await UserService.getWhere({email: credentials.email});
        if(user.length < 1) throw "Email doesn't exists.";

        const match = await bcrypt.compare(credentials.password, user[0].password);
        if (!match) throw "Invalid password.";

        return [await this.generateToken(user[0].dataValues), await this.generateRefreshToken(user[0].dataValues)];
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