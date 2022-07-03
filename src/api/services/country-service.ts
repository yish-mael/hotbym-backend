import Country from "../models/country";

class CountryService{

    constructor(){}

    static async getAll()
    {
        return await Country.findAll();
    }

    static async getById(id:number)
    {
        return await Country.findByPk(id);
    }

    static async getWhere(criteria: object)
    {
        return await Country.findAll({ where: { criteria } });
    }

    static async create(values: object)
    {
        return await Country.create({ values });
    }

    static async update(id:number, values:object)
    {
        return await Country.update({ values },{ where: { id: id } });
    }

    static async delete(id:number)
    {
        const country = await this.getById(id); 
        return await country?.destroy();
    }

}

export default CountryService;