import { BookingGuestModel } from "../models";

interface IBookingGuest {
    bookingId: number,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    telephone: string,
    gender: string,
}

class BookingGuestService{

    constructor(){}

    static async getAll()
    {
        return await BookingGuestModel.findAll();
    }


    static async getById(id: number)
    {
        return await BookingGuestModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await BookingGuestModel.findAll({ where: { criteria } });
    }


    static async create(values: IBookingGuest)
    {
        const { bookingId, firstName, middleName, lastName, email, telephone, gender } = values;
        
        const [BookingGuest, created] = await BookingGuestModel.findOrCreate({ where: { bookingId, firstName, middleName, lastName, email, telephone, gender }});
        if(created == false) throw "Booking Guest already exists.";
        return BookingGuest;
    }


    static async update(id: number, values: IBookingGuest)
    {
        return await BookingGuestModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const BookingGuest = await this.getById(id); 
        return await BookingGuest?.destroy();
    }

}

export default BookingGuestService;