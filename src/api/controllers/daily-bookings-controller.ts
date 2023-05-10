import { Request, Response } from "express";
import BookingDailyService from "../services/booking-daily-service";
import BookingService from "../services/booking-service";
import { Op } from "sequelize";

class DailyBookingsController {

    constructor() {}

    static async getAllDailyBookings(req: Request, res: Response)
    {
        try{
            const allDailyBookings =  await BookingDailyService.getAll();
            return res.status(200).json(allDailyBookings);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async getOneDailyBooking(req: Request, res: Response)
    {
        try{
            const id =  parseInt(req.params.id);
            console.log(req.params.id);
            const oneDailyBooking = await BookingDailyService.getById(id);
            return res.status(200).json(oneDailyBooking);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

    static async saveDailyBooking(req: Request, res: Response)
    {
        try{

            if(req.body?.type == "hourly"){

                console.log(req.body);

                const dailyBookingCheckD = await BookingDailyService.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateOnly), timeIn: null, timeOut: null, orderId: req.body.orderId });
                const dailyBookingCheckDT = await BookingDailyService.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateTime), timeIn: { [Op.not]: null }, timeOut: { [Op.not]: null }, orderId: req.body.orderId });

                if (dailyBookingCheckD.length > 0){
                    const roomId = req.body.roomId;
                    const date = req.body.dateOnly;
                    const quantity = (1 + dailyBookingCheckD[0].quantity);

                    if(dailyBookingCheckDT.length > 0){
                        
                        let lastEndTime = 0;
                        let intTimeIn = parseInt(req.body.timeIn);
                        //console.log("here ----- start");

                        dailyBookingCheckDT.map((item) =>  {
                            const intTime = parseInt(item.timeOut); 
                            if (lastEndTime < intTime){
                                lastEndTime = intTime;
                            }
                        });

                        if (lastEndTime < intTimeIn){
                            //  await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                            await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity), orderId: req.body.orderId });
                        }else{
                            await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity, orderId: req.body.orderId });
                            await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity), orderId: req.body.orderId });
                        }
                    }

                    return res.status(200).json({
                        message: "Daily Booking added successfully. Exists",
                        // data: savedDailyBooking
                    });

                }else {
                    await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: 1, orderId: req.body.orderId });
                    await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity), orderId: req.body.orderId });
                    return res.status(200).json({
                        message: "Hourly Booking added successfully. Not Exists",
                        // data: savedDailyBooking
                    });

                }

            }else{
                
                const dailyBookingCheck = await BookingDailyService.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateOnly) });
                console.log("Here Now ",dailyBookingCheck);
                if (dailyBookingCheck.length > 0){
                    const roomId = req.body.roomId;
                    const date = req.body.dateOnly;
                    const quantity = (parseInt(req.body.quantity) + dailyBookingCheck[0].quantity);
                    const savedDailyBooking = await BookingDailyService.update(dailyBookingCheck[0].id, {roomId, date, quantity, orderId: req.body.orderId });
                    return res.status(200).json({
                        message: "Daily Booking added successfully. Exists",
                        data: savedDailyBooking
                    });
    
                } else{
                    const savedDailyBooking = await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: parseInt(req.body.quantity), orderId: req.body.orderId });
                    return res.status(200).json({
                        message: "Daily Booking added successfully. Not Exists",
                        data: savedDailyBooking
                    });
    
                }
            }
            
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }


    static async deleteDailyBooking(req: Request, res: Response)
    {
        try{
            const id  =  parseInt(req.params.id);
            const deletedDailyBooking = await BookingDailyService.delete(id);
            return res.status(200).json({
                message: "Daily Booking deleted successfully.",
                data: deletedDailyBooking
            });
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }
}

export default DailyBookingsController;