import { RoomAmenityModel, RoomModel } from "../models";

interface IRoom {
    propertyId: number,
    roomType: string,
    beds: string,
    adults: string,
    children: string,
    limit: string,
    price: string,
    discount: string,
    status: string,
}

class RoomService{

    constructor(){}

    static async getAll()
    {
        return await RoomModel.findAll();
    }


    static async getById(id: number)
    {
        return await RoomModel.findByPk(id);
    }

    static async addAmenities(id: number, amenities: number[])
    {
        return amenities.map(async (item) => {
            return await RoomAmenityModel.findOrCreate({ where: { roomId: id, amenityId: item } });
        });
    }


    static async removeAmenitiess(id: number, amenities: number[])
    {
        return amenities.map(async (item) => {
            return await RoomAmenityModel.destroy({ where: { roomId: id, amenityId: item } });
        });
    }


    static async getWhere(criteria: object)
    {
        return await RoomModel.findAll({ where: { criteria } });
    }


    static async create(values: IRoom)
    {
        const { propertyId, roomType, beds, adults, children, limit, price, discount, status } = values;
        
        const [room, created] = await RoomModel.findOrCreate({ where: { propertyId, roomType, beds, adults, children, limit, price, discount, status }});
        if(created == false) throw "Room already exists.";
        return room;
    }


    static async update(id: number, values: IRoom)
    {
        return await RoomModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const room = await this.getById(id); 
        return await room?.destroy();
    }

}

export default RoomService;