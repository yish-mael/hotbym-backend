import Permission from "../models/permission";

interface IPermission {
    title: string,
    slug: string,
    description: string,
}

class PermissionService{

    constructor(){}

    static async getAll()
    {
        return await Permission.findAll();
    }


    static async getById(id: number)
    {
        return await Permission.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await Permission.findAll({ where: { criteria } });
    }


    static async create(values: IPermission)
    {
        const { title, slug, description } = values;
        return await Permission.create({ title, slug, description });
    }


    static async update(id: number, values: IPermission)
    {
        return await Permission.update( values, { where: { id: id } });
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