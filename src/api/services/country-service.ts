import Country from "../models/country";

interface ICountry {
    name: string,
    phoneCode: string,
    abbreviation: string,
    symbol: string,
}

class CountryService{

    constructor(){}

    static async getAll()
    {
        return await Country.findAll();
    }


    static async getById(id: number)
    {
        return await Country.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await Country.findAll({ where: { criteria } });
    }


    static async create(values: ICountry)
    {
        const { name, phoneCode, abbreviation, symbol } = values;
        return await Country.create({ name, phoneCode, abbreviation, symbol });
    }


    static async update(id: number, values: ICountry)
    {
        return await Country.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const country = await this.getById(id); 
        return await country?.destroy();
    }

}

export default CountryService;