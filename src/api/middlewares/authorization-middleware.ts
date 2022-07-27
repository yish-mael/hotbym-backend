import { NextFunction, Request, Response } from "express";
import RoleService from "../services/role-service";

function hasPermission(permission: string)
{
    return async (req: Request, res: Response, next: NextFunction) => {
        const role: any = await RoleService.getById(req.body.authUser.roleId);
        const permissions = role?.Permissions;

        let check = false;
        for(let i = 0; i< permissions.length; i++){
            if(permissions[i].slug === permission) check = true;
        }
        if(check === false){
            return res.status(401).json({ error: "You are not authorized to perform this action." });
        }
        next();
    }
}

export { hasPermission };