import { BookingDailyModel } from "../models";

interface IBookingDaily {
    roomId: number,
    date: string,
    timeIn?: string | null,
    timeOut?: string | null,
    quantity: number,
}

class BookingDailyService{

    constructor(){}

    static async getAll()
    {
        return await BookingDailyModel.findAll();
    }


    static async getById(id: number)
    {
        return await BookingDailyModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        const bookingDaily = await BookingDailyModel.findAll({ where: criteria, order: [['quantity', 'DESC']] });
        console.log(bookingDaily);
        return bookingDaily
    }


    static async create(values: IBookingDaily)
    {
        const { roomId, date, timeIn, timeOut, quantity} = values;

        // console.log(values);
        
        const [bookingDaily, created] = await BookingDailyModel.findOrCreate({ where: {roomId, date, timeIn, timeOut, quantity }});
        if(created == false) throw "Bookings Daily already exists.";
        return bookingDaily;
    }


    static async update(id: number, values: IBookingDaily)
    {
        return await BookingDailyModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const bookingDaily = await this.getById(id); 
        return await bookingDaily?.destroy();
    }

}

export default BookingDailyService;