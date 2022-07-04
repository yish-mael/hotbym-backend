import { Request, Response } from "express";
import PermissionService from "../services/permission-service";

class PermissionsController {

    constructor() {}

    static async getAllPermissions(req: Request, res: Response)
    {
        try{
            const allPermissions =  await PermissionService.getAll();
            return res.status(200).json(allPermissions);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOnePermission(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const onePermission = await PermissionService.getById(id);
            return res.status(200).json(onePermission);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createPermission(req: Request, res: Response)
    {
        try{
            const createdPermission = await PermissionService.create(req.body);
            return res.status(200).json({
                message: "Permission created successfully.",
                data: createdPermission
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updatePermission(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedPermission = await PermissionService.update(id, req.body);
            return res.status(200).json({
                message: "Permission updated successfully.",
                data: updatedPermission
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deletePermission(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedPermission = await PermissionService.delete(id);
            return res.status(200).json({
                message: "Permission deleted successfully.",
                data: deletedPermission
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default PermissionsController;