import { BookingHourlyModel } from "../models";

interface IBookingHourly {
    roomId: number,
    date: number,
    quantity: string,
}

class BookingHourlyService{

    constructor(){}

    static async getAll()
    {
        return await BookingHourlyModel.findAll();
    }


    static async getById(id: number)
    {
        return await BookingHourlyModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await BookingHourlyModel.findAll({ where: { criteria } });
    }


    static async create(values: IBookingHourly)
    {
        const { roomId, date, quantity } = values;
        
        const [bookingHourly, created] = await BookingHourlyModel.findOrCreate({ where: { roomId, date, quantity }});
        if(created == false) throw "Booking Hourly already exists.";
        return bookingHourly;
    }


    static async update(id: number, values: IBookingHourly)
    {
        return await BookingHourlyModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const bookingHourly = await this.getById(id); 
        return await bookingHourly?.destroy();
    }

}

export default BookingHourlyService;