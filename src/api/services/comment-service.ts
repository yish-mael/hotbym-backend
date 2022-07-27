import { CommentModel } from "../models/";

interface IComment {
    parentId?: number;
    propertyId: number;
    userId: number;
    comment: string;
    status: string;
}

class CommentService{

    constructor(){}

    static async getAll()
    {
        return await CommentModel.findAll();
    }


    static async getById(id: number)
    {
        return await CommentModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await CommentModel.findAll({ where: { criteria } });
    }


    static async create(values: IComment)
    {
        const { parentId, propertyId, userId, comment, status } = values;
        const [commentDetails, created] = await CommentModel.findOrCreate({ where: { parentId, propertyId, userId, comment, status }});
        if(created == false) throw "Category already exists.";
        return commentDetails;
    }


    static async update(id: number, values: IComment)
    {
        return await CommentModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const comment = await this.getById(id); 
        return await comment?.destroy();
    }

}

export default CommentService;