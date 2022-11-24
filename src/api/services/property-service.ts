import { BookingModel, CategoryModel, CountryModel, PropertyModel, RoomModel, StateModel, UserModel } from "../models/";
import UploadService from "./upload-service";

interface IProperty {
    categoryId: number,
    stateId: number,
    userId: number,
    name: string,
    email: string,
    telephone: string,
    status: string,
    address: string,
    description: string,
}

class PropertyService{

    constructor(){}

    static async getAll()
    {
        return await PropertyModel.findAll({
            include: [UserModel, CategoryModel, {model: RoomModel, include: [BookingModel]}, {model: StateModel, include: [{model: CountryModel, include: [StateModel]} ]}]
        });
    }


    static async getById(id: number)
    {
        return await PropertyModel.findByPk(id, {
            include: [UserModel, CategoryModel, {model: RoomModel, include: [BookingModel]}, {model: StateModel, include: [{model: CountryModel, include: [StateModel]} ]}]
        });
    }


    static async getWhere(criteria: object)
    {
        return await PropertyModel.findAll({ where: { criteria } });
    }


    static async create(values: IProperty)
    {
        const { categoryId, stateId, userId, name, email, telephone, status, address, description } = values;
        
        const [property, created] = await PropertyModel.findOrCreate({ where: { categoryId, stateId, userId, name, email, telephone, status, address, description }});
        if(created == false) throw "Property already exists.";
        return property;
    }


    static async update(id: number, values: IProperty)
    {
        return await PropertyModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const property = await this.getById(id); 
        return await property?.destroy();
    }

}

export default PropertyService;