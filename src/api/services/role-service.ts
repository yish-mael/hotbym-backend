import Role from "../models/role";

interface IRole {
    title: string,
    slug: string,
    description: string,
}

class RoleService{

    constructor(){}

    static async getAll()
    {
        return await Role.findAll();
    }


    static async getById(id: number)
    {
        return await Role.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await Role.findAll({ where: { criteria } });
    }


    static async create(values: IRole)
    {
        const { title, slug, description } = values;
        return await Role.create({ title, slug, description });
    }


    static async update(id: number, values: IRole)
    {
        return await Role.update( values, { where: { id: id } });
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