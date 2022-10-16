import { Op, Sequelize } from "sequelize";
import { BookingDailyModel, PropertyModel, RoomAmenityModel, RoomModel } from "../models";
import BookingDailyService from "./booking-daily-service";

interface IRoom {
    propertyId: number,
    roomType: string,
    beds: string,
    adults: string,
    children: string,
    limit: number,
    price: string,
    pricePerHour: string,
    discount: string,
    status: string,
}

class RoomService{

    constructor(){}

    static async getAll()
    {
        return await RoomModel.findAll({
            include: [PropertyModel],
        });
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


    static async getWhere(criteria: any)
    {
        return await RoomModel.findAll({ where: criteria });
    }


    static async getUnavailableRange(room: any, start: any, end: any)
    {
        // console.log(room.limit)
        try{
            const unavailableBookings =  await BookingDailyService.getWhere({ date: { [Op.between]: [new Date(start), new Date(end)] }, roomId: parseInt(room.id), quantity: room.limit,  timeIn: null, timeOut: null, });
            return unavailableBookings;
        }catch(err){
            return err;
        }
    }

    
    static async getWhereSearch(include: any)
    {

        const allActiveRooms = await RoomModel.findAll({

            where: {
                        status: "active",
                    },
            include: [
                        { 
                            model: PropertyModel,
                            where: { 
                                categoryId: include?.categoryId,
                                stateId: include?.stateId,
                                status: "active",
                            } 
                        }
                    ]
            }
        );

        const allAvailableRooms = allActiveRooms.map(async (room) => {

            const unavailableList: any = await this.getUnavailableRange(room, include.start, include.end);

            if (!(unavailableList.length > 0)){
                return room;
            }

        })

        return  (await Promise.all(allAvailableRooms)).filter(n => n);
    }


    static async create(values: IRoom)
    {
        const { propertyId, roomType, beds, adults, children, limit, price, pricePerHour, discount, status } = values;
        
        const [room, created] = await RoomModel.findOrCreate({ where: { propertyId, roomType, beds, adults, children, limit, price, pricePerHour, discount, status }});
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