import { Request, Response } from "express";
import BookingGuestService from "../services/booking-guest-service";

class BookingGuestController {

    constructor() {}

    static async getAllBookingGuests(req: Request, res: Response)
    {
        try{
            const allBookingGuests =  await BookingGuestService.getAll();
            return res.status(200).json(allBookingGuests);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneBookingGuest(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneBookingGuest = await BookingGuestService.getById(id);
            return res.status(200).json(oneBookingGuest);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createBookingGuest(req: Request, res: Response)
    {
        try{
            const createdBookingGuest = await BookingGuestService.create(req.body);
            return res.status(200).json({
                message: "Booking Guest created successfully.",
                data: createdBookingGuest
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateBookingGuest(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedBookingGuest = await BookingGuestService.update(id, req.body);
            return res.status(200).json({
                message: "Booking Guest updated successfully.",
                data: updatedBookingGuest
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteBookingGuest(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedBookingGuest = await BookingGuestService.delete(id);
            return res.status(200).json({
                message: "Booking Guest deleted successfully.",
                data: deletedBookingGuest
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default BookingGuestController;