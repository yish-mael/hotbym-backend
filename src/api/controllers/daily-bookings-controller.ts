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

                const dailyBookingCheckD = await BookingDailyService.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateOnly), timeIn: null, timeOut: null });
                const dailyBookingCheckDT = await BookingDailyService.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateTime), timeIn: { [Op.not]: null }, timeOut: { [Op.not]: null } });

                if (dailyBookingCheckD.length > 0){
                    const roomId = req.body.roomId;
                    const date = req.body.dateOnly;
                    const quantity = (1 + dailyBookingCheckD[0].quantity);

                    if(dailyBookingCheckDT.length > 0){
                        
                        let lastEndTime = 0;
                        let intTimeIn = parseInt(req.body.timeIn);
                        console.log("here ----- start");

                        dailyBookingCheckDT.map((item) =>  {
                            const intTime = parseInt(item.timeOut); 
                            if (lastEndTime < intTime){
                                lastEndTime = intTime;
                            }
                        });

                        if (lastEndTime < intTimeIn){
                            //  await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                            await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                        }else{
                            await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                            await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                        }
                        // const timeO = dailyBookingCheckDT.map((item) =>  {
                        //     return parseInt(item.timeOut);
                        // });
                        // console.log(timeO);
                        console.log(lastEndTime, " < ", intTimeIn);
                        
                        //console.log(dailyBookingCheckDT.map((item) => { item.timeOut }));
                        // if timeIn is greater than result highest timeOut
                        console.log("here ----- end");
                        //
                        //
                        //

                    }
                        //  await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                            // const savedDailyBooking = await BookingDailyService.update(dailyBookingCheckD[0].id, {roomId, date, quantity });
                        
                        //  await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                    
                    // // if daily not fully booked and there is an existing hourly booking
                    // if (dailyBookingCheckDT.length > 0){

                    //     // dailyBookingCheckDT.map((item) => {

                    //     // });

                    //     // const quantity = (parseInt(req.body.quantity) + dailyBookingCheckD[0].quantity);
                    //     // const quantity = (parseInt(req.body.quantity) + dailyBookingCheckD[0].quantity);
                    //     // await BookingDailyService.update(dailyBookingCheckDT[0].id, {roomId, date: req.body.dateTime, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity});
                    // }else{
                    //      // if daily not fully booked and there is no existing hourly booking
                    //     await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateTime, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                    // }

                    return res.status(200).json({
                        message: "Daily Booking added successfully. Exists",
                        // data: savedDailyBooking
                    });

                }else {
                    // console.log("here ..........")
                    // const roomId = req.body.roomId;
                    await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: 1 });
                    // const savedDailyBooking = await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: null, timeOut: null, quantity: 1 });
                    // console.log("here ..........1 with : ", savedDailyBooking);
                    await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: parseInt(req.body.quantity) });
                    // console.log("here ..........2")
                    // if (dailyBookingCheckDT.length > 0){
                    //     const quantity = (parseInt(req.body.quantity) + dailyBookingCheckD[0].quantity);
                    //     await BookingDailyService.update(dailyBookingCheckDT[0].id, {roomId, date: req.body.dateOnly, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity});
                    // } else{
                    //     await BookingDailyService.create({ roomId: req.body.roomId, date: req.body.dateTime, timeIn: req.body.timeIn, timeOut: req.body.timeOut, quantity: req.body.quantity });
                    // }

                    return res.status(200).json({
                        message: "Daily Booking added successfully. Not Exists",
                        // data: savedDailyBooking
                    });

                }

            }else{
                
                const dailyBookingCheck = await BookingDailyService.getWhere({ roomId: req.body.roomId, date: new Date(req.body.dateTime) });
                console.log(dailyBookingCheck);
                if (dailyBookingCheck.length > 0){
                    const roomId = req.body.roomId;
                    const date = req.body.dateTime;
                    const quantity = (parseInt(req.body.quantity) + dailyBookingCheck[0].quantity);
                    const savedDailyBooking = await BookingDailyService.update(dailyBookingCheck[0].id, {roomId, date, quantity });
                    return res.status(200).json({
                        message: "Daily Booking added successfully. Exists",
                        data: savedDailyBooking
                    });
    
                } else{
                    const savedDailyBooking = await BookingDailyService.create(req.body);
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