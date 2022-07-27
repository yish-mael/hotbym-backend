import { CountryModel } from '../models/';

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
        return await CountryModel.findAll();
    }


    static async getById(id: number)
    {
        return await CountryModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await CountryModel.findAll({ where: { criteria } });
    }


    static async create(values: ICountry)
    {
        const { name, phoneCode, abbreviation, symbol } = values;
        const [country, created] = await CountryModel.findOrCreate({ where: { name, phoneCode, abbreviation, symbol }});
        if(created == false) throw "Country already exists.";
        return country;
    }


    static async update(id: number, values: ICountry)
    {
        return await CountryModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const country = await this.getById(id); 
        return await country?.destroy();
    }

}

export default CountryService;