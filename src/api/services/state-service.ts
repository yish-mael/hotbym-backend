import { CountryModel, StateModel } from "../models";

interface IState {
    name: string,
    countryId: number,
}

class StateService{

    constructor(){}

    static async getAll()
    {
        return await StateModel.findAll({
            include: CountryModel,
        });
    }

    static async getById(id: number)
    {
        return await StateModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        console.log(criteria);
        return await StateModel.findAll({ where: criteria });
    }

    static async getCountryStates(countryId: number)
    {
        //console.log(criteria);
        return await StateModel.findAll({ where: { countryId } });
    }


    static async create(values: IState)
    {
        const { name, countryId } = values;
        
        const [state, created] = await StateModel.findOrCreate({ where: { name, countryId }});
        if(created == false) throw "State already exists.";
        return state;
    }


    static async update(id: number, values: IState)
    {
        return await StateModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const state = await this.getById(id); 
        return await state?.destroy();
    }

}

export default StateService;