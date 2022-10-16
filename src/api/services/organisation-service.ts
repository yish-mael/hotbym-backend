import { OrganisationModel, UserModel } from "../models";

interface IOrganisation {
    userId: number;
    name: string;
    email: string;
    telephone: string;
    address: string;
    description: string;
}

class OrganisationService {

    constructor(){}

    static async getAll()
    {
        return await OrganisationModel.findAll({
            include: UserModel,
        });
    }


    static async getById(id: number)
    {
        return await OrganisationModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await OrganisationModel.findAll({ where: { criteria } });
    }


    static async create(values: IOrganisation)
    {
        const { userId, name, email, telephone, address, description } = values;
        const [organisationDetails, created] = await OrganisationModel.findOrCreate({ where: { userId, name, email, telephone, address, description }});
        if(created == false) throw "Corporate client already exists.";
        return organisationDetails;
    }


    static async update(id: number, values: IOrganisation)
    {
        return await OrganisationModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const organisation = await this.getById(id); 
        return await organisation?.destroy();
    }

}

export default OrganisationService;