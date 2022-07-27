import { RatingModel } from "../models/";

interface IRating {
    propertyId: string,
    userId: string,
    rate: string,
}

class RatingService{

    constructor(){}

    static async getAll()
    {
        return await RatingModel.findAll();
    }


    static async getById(id: number)
    {
        return await RatingModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await RatingModel.findAll({ where: { criteria } });
    }


    static async create(values: IRating)
    {
        const { propertyId, userId, rate } = values;
        const [rating, created] = await RatingModel.findOrCreate({ where: { propertyId, userId, rate }});
        if(created == false) throw "Rating already exists.";
        return rating;
    }


    static async update(id: number, values: IRating)
    {
        return await RatingModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const rating = await this.getById(id); 
        return await rating?.destroy();
    }

}

export default RatingService;