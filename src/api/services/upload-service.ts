import { UploadModel, UserModel } from "../models";

interface IUpload {
    userId: number,
    typeId: number,
    type: string,
    format: string,
    url: string,
}

class UploadService{

    constructor(){}

    static async getAll()
    {
        return await UploadModel.findAll({
            include: [UserModel],
        });
    }


    static async getById(id: number)
    {
        return await UploadModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        return await UploadModel.findAll({ where: criteria });
    }


    static async create(values: IUpload)
    {
        const { userId, typeId, type, format, url } = values;
        
        const [upload, created] = await UploadModel.findOrCreate({ where: { userId, typeId, type, format, url }});
        if(created == false) throw "Upload already exists.";
        return upload;
    }


    static async update(id: number, values: IUpload)
    {
        return await UploadModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const upload = await this.getById(id); 
        return await upload?.destroy();
    }

}

export default UploadService;