import { Request, Response } from "express";
import UserService from "../services/user-service";
import AuthenticationService from "../services/authentication-service";

class AuthenticationController {

    constructor() {}

    static async signIn(req: Request, res: Response)
    {
        try{
            const authUser =  await AuthenticationService.signIn(req.body);
            res.cookie('jwt', authUser[1], { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });
            return res.status(200).json({
                message: "Sign-in successful.",
                accessToken: authUser[0],
                refreshToken: authUser[1],
                userId: authUser[3],
                roleId: authUser[2],
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async signUp(req: Request, res: Response)
    {   
        try{
            const createdUser: any = await UserService.create(req.body);
            //console.log("here");
            const accessToken = await AuthenticationService.generateToken(createdUser.dataValues);
            const refreshToken = await AuthenticationService.generateRefreshToken(createdUser.dataValues);
            res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 })
            return res.status(200).json({
                message: "User registered successfully.",
                data: createdUser,
                accessToken: accessToken,
                refreshToken: refreshToken
            });

        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async logout(req: Request, res: Response)
    {
        //console.log(req.cookies.jwt);
        try{
            await AuthenticationService.removeRefreshToken(req.cookies.jwt);
            res.clearCookie('jwt', { httpOnly: true, secure: true });
            return res.status(200).json({
                message: "Logout successful."
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
    
    
    static async refreshToken(req: Request, res: Response)
    {
        try{
            // await AuthenticationService.removeRefreshToken(req.cookies.jwt);
            //console.log("Hello there");
            //console.log(req.body);
            const access = await AuthenticationService.generateAccessToken(req.cookies.jwt);
            console.log(req.cookies.jwt);
            console.log("access : ", access);
            return res.status(200).json({
                message: "Access token generated.",
                accessToken: access.token,
                userId: access.userId
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async forgotPassword(req: Request, res: Response)
    {
        try{
            const forgotPassRequest = await AuthenticationService.forgotPassword(req.body.email);
            return res.status(200).json({
                message: "Password reset link sent.",
                data: forgotPassRequest
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async resetPassword(req: Request, res: Response)
    {
        try{
            await AuthenticationService.resetPassword({ token: req.params.token, password: req.body.password });
            return res.status(200).json({
                message: "Password reset successful."
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


}

export default AuthenticationController;