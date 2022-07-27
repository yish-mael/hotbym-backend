import { AmenityModel } from "../models/";

interface IAmenity {
    name: string,
    icon: string,
    description: string,
}

class AmenityService{

    constructor(){}

    static async getAll()
    {
        return await AmenityModel.findAll();
    }


    static async getById(id: number)
    {
        return await AmenityModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await AmenityModel.findAll({ where: { criteria } });
    }


    static async create(values: IAmenity)
    {
        const { name, icon, description } = values;
        
        const [amenity, created] = await AmenityModel.findOrCreate({ where: { name, icon, description }});
        if(created == false) throw "Amenity already exists.";
        return amenity;
    }


    static async update(id: number, values: IAmenity)
    {
        return await AmenityModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const amenity = await this.getById(id); 
        return await amenity?.destroy();
    }

}

export default AmenityService;