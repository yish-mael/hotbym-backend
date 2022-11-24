import { BookingModel, PropertyModel, RoomModel, UserModel } from "../models";

interface IBooking {
    roomId: number,
    userId: number,
    organisationId: number,
    orderId: string,
    type: string,
    status: string,
    price: string,
    commission: string,
    markup: string,
    totalAmount: string,
    arrivalDate: string,
    departureDate: string,
    quantity: number,
}

class BookingService{

    constructor(){}

    static async getAll()
    {
        return await BookingModel.findAll({
            include: [UserModel, {model: RoomModel, include: [PropertyModel]}],
        });
    }


    static async getById(id: number)
    {
        return await BookingModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        return await BookingModel.findAll({ where: criteria, include: [RoomModel, UserModel] });
    }


    static async create(values: IBooking)
    {
        const { roomId, userId, orderId, organisationId, type, status, price, commission, markup, totalAmount, arrivalDate, departureDate, quantity} = values; 
        const [booking, created] = await BookingModel.findOrCreate({ where: { roomId, userId, orderId, organisationId, type, status, price, commission, markup, totalAmount, arrivalDate, departureDate, quantity}});
        if(created == false) throw "Booking already exists.";
        return booking;
    }


    static async update(id: number, values: IBooking)
    {
        return await BookingModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const booking = await this.getById(id); 
        return await booking?.destroy();
    }

}

export default BookingService;