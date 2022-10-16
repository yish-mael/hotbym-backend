import { Request, Response } from "express";
import UploadService from "../services/upload-service";
import UserService from "../services/user-service";

class UserController {

    constructor() {}

    static async getAllUsers(req: Request, res: Response)
    {
        try{
            const allUsers =  await UserService.getAll();
            return res.status(200).json(allUsers);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneUser(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneUser = await UserService.getById(id);
            return res.status(200).json(oneUser);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getUserImages(req: Request, res: Response)
    {
        try{
            const allUserImages =  await UploadService.getWhere({type: "user", typeId: req.body.userId});
            return res.status(200).json(allUserImages);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createUser(req: Request, res: Response)
    {
        try{
            const createdUser = await UserService.create(req.body);
            return res.status(200).json({
                message: "User created successfully.",
                data: createdUser
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateUser(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedUser = await UserService.update(id, req.body);
            return res.status(200).json({
                message: "User updated successfully.",
                data: updatedUser
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteUser(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedUser = await UserService.delete(id);
            return res.status(200).json({
                message: "User deleted successfully.",
                data: deletedUser
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default UserController;