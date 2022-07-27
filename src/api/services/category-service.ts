import { CategoryModel } from "../models/";

interface ICategory {
    parentId?: number,
    name: string,
    slug: string,
    description: string,
}

class CategoryService{

    constructor(){}

    static async getAll()
    {
        return await CategoryModel.findAll();
    }


    static async getById(id: number)
    {
        return await CategoryModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await CategoryModel.findAll({ where: { criteria } });
    }


    static async create(values: ICategory)
    {
        const { parentId, name, slug, description } = values;
        const [category, created] = await CategoryModel.findOrCreate({ where: { parentId, name, slug, description }});
        if(created == false) throw "Category already exists.";
        return category;
    }


    static async update(id: number, values: ICategory)
    {
        return await CategoryModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const category = await this.getById(id); 
        return await category?.destroy();
    }

}

export default CategoryService;