import { PermissionModel } from "../models/";

interface IPermission {
    title: string,
    slug: string,
    description: string,
}

class PermissionService{

    constructor(){}

    static async getAll()
    {
        return await PermissionModel.findAll();
    }


    static async getById(id: number)
    {
        return await PermissionModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await PermissionModel.findAll({ where: { criteria } });
    }


    static async create(values: IPermission)
    {
        const { title, slug, description } = values;
        const [permission, created] = await PermissionModel.findOrCreate({ where: { title, slug, description }});
        if(created == false) throw "Permission already exists."
        return permission;
    }


    static async update(id: number, values: IPermission)
    {
        return await PermissionModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const permission = await this.getById(id); 
        return await permission?.destroy();
    }

}

export default PermissionService;

// Get all Permissions
// Get Permission by Id
// Get Permission where
// Update Permission by Id
// Delete Permission by Id
// Get all permissions
// Get permission by Id
// Get permission where
// Update permission by Id
// Delete permission by Id