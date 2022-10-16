import { Request, Response } from "express";
import BookingDailyService from "../services/booking-daily-service";
import BookingService from "../services/booking-service";
import { Op } from "sequelize";

class BookingsController {

    constructor() {}

    static async getAllBookings(req: Request, res: Response)
    {
        try{
            const allBookings =  await BookingService.getAll();
            return res.status(200).json(allBookings);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneBooking(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneBooking = await BookingService.getById(id);
            return res.status(200).json(oneBooking);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
    static async getBooking(req: Request, res: Response)
    {
        try{
            const id =  req.body.orderId;
            console.log(id);
            const oneBooking = await BookingService.getWhere({orderId: id});
            return res.status(200).json(oneBooking);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getUnavailableBookings(req: Request, res: Response)
    {
        // console.log(req.body.limit)
        try{
            const unavailableBookings =  await BookingDailyService.getWhere({ date: { [Op.gte]: new Date() }, roomId: parseInt(req.body.roomId), quantity: req.body.limit,  timeIn: null, timeOut: null, });
            return res.status(200).json(unavailableBookings);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getUnavailableBookingsInRange(req: Request, res: Response)
    {
        // console.log(req.body.limit)
        try{
            const unavailableBookings =  await BookingDailyService.getWhere({ date: { [Op.between]: [new Date(req.body.start), new Date(req.body.end)] }, roomId: parseInt(req.body.roomId), quantity: req.body.limit,  timeIn: null, timeOut: null, });
            return res.status(200).json(unavailableBookings);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getAvailableBookingQuantity(req: Request, res: Response)
    {
        try{
            const availableBookings =  await BookingDailyService.getWhere({ date: { [Op.between]: [new Date(req.body.start), new Date(req.body.end)] }, roomId: parseInt(req.body.roomId), quantity: { [Op.lt]: parseInt(req.body.limit)},  timeIn: null, timeOut: null, });
            return res.status(200).json(availableBookings);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async createBooking(req: Request, res: Response)
    {
        try{
            const createdBooking = await BookingService.create(req.body);
            return res.status(200).json({
                message: "Booking created successfully.",
                data: createdBooking
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async updateBooking(req: Request, res: Response)
    {
        try{
            const id = parseInt(req.params.id);
            const updatedBooking = await BookingService.update(id, req.body);
            return res.status(200).json({
                message: "Booking updated successfully.",
                data: updatedBooking
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async deleteBooking(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedBooking = await BookingService.delete(id);
            return res.status(200).json({
                message: "Booking deleted successfully.",
                data: deletedBooking
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default BookingsController;