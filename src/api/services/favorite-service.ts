import { FavoriteModel } from "../models/";

interface IFavorite {
    propertyId: number,
    userId: number,
}

class FavoriteService{

    constructor(){}

    static async getAll()
    {
        return await FavoriteModel.findAll();
    }


    static async getById(id: number)
    {
        return await FavoriteModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await FavoriteModel.findAll({ where: { criteria } });
    }


    static async create(values: IFavorite)
    {
        const { propertyId, userId } = values;
        const [favorite, created] = await FavoriteModel.findOrCreate({ where: { propertyId, userId }});
        if(created == false) throw "Favorite already exists.";
        return favorite;
    }


    static async update(id: number, values: IFavorite)
    {
        return await FavoriteModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const category = await this.getById(id); 
        return await category?.destroy();
    }

}

export default FavoriteService;