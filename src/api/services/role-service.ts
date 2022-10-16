import { RoleModel, PermissionModel, RolePermissionModel } from "../models/";

interface IRole {
    title: string,
    slug: string,
    description: string,
}

class RoleService{

    constructor(){}

    static async getAll()
    {
        return await RoleModel.findAll({
            include: [PermissionModel],
        });
    }


    static async getById(id: number)
    {
        return await RoleModel.findByPk(id, {
            include: PermissionModel
        });
    }


    static async addPermissions(id: number, permissions: number[])
    {
        return permissions.map(async (item) => {
            return await RolePermissionModel.findOrCreate({ where: { roleId: id, permissionId: item } });
        });
    }


    static async removePermissions(id: number, permissions: number[])
    {
        // console.log(id, " Here", permissions)
        return permissions.map(async (item) => {
            return await RolePermissionModel.destroy({ where: { roleId: id, permissionId: item } });
        });
    }


    static async getWhere(criteria: any)
    {
        return await RoleModel.findAll({ where: criteria });
    }


    static async create(values: IRole)
    {
        const { title, slug, description } = values;
        const [role, created] = await RoleModel.findOrCreate({ where: { title, slug, description }});
        if(created == false) throw "Role already exists.";
        return role;
    }


    static async update(id: number, values: IRole)
    {
        return await RoleModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const role = await this.getById(id); 
        return await role?.destroy();
    }

}

export default RoleService;

// Get all roles
// Get role by Id
// Get role where
// Update role by Id
// Delete role by Id