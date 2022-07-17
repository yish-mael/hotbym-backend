import { Request, Response } from "express";
import RoleService from "../services/role-service";

class RolesController {

    constructor() {}

    static async getAllRoles(req: Request, res: Response)
    {
        try{
            const allRoles =  await RoleService.getAll();
            return res.status(200).json(allRoles);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneRole(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            const oneRole = await RoleService.getById(id);
            return res.status(200).json(oneRole);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createRole(req: Request, res: Response)
    {
        try{
            const createdRole = await RoleService.create(req.body);
            return res.status(200).json({
                message: "Role created successfully.",
                data: createdRole
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async addPermissionsToRole(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.body.id);
            const permissions =  req.body.permissions;
            await RoleService.addPermissions(id, permissions);
            return res.status(200).json({
                message: "Permissions added successfully.",
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async removePermissionsFromRole(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.body.id);
            const permissions =  req.body.permissions;
            await RoleService.removePermissions(id, permissions);
            return res.status(200).json({
                message: "Permissions removed successfully.",
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateRole(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedRole = await RoleService.update(id, req.body);
            return res.status(200).json({
                message: "Role updated successfully.",
                data: updatedRole
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteRole(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedRole = await RoleService.delete(id);
            return res.status(200).json({
                message: "Role deleted successfully.",
                data: deletedRole
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default RolesController;