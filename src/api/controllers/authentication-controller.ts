import { Request, Response } from "express";
import UserService from "../services/user-service";
import AuthenticationService from "../services/authentication-service";

class AuthenticationController {

    constructor() {}

    static async signIn(req: Request, res: Response)
    {
        try{
            const authUser =  await AuthenticationService.signIn(req.body);
            return res.status(200).json({
                message: "Sign-in successfull.",
                token: authUser
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
            const createdUser = await UserService.create(req.body);
            const generatedToken = await AuthenticationService.generateToken({ id: createdUser.id, email: createdUser.email });
            return res.status(200).json({
                message: "User registered successfully.",
                data: createdUser,
                token: generatedToken
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
            const resetPassword = await AuthenticationService.resetPassword({ token: req.params.token, password: req.body.password });
            return res.status(200).json({
                message: "Password reset successfull."
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


}

export default AuthenticationController;