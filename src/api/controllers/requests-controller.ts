import { Request, Response } from "express";
import RequestBookingService from "../services/request-booking-service";

class RequestsController {

    constructor() {}

    static async sendRequests(req: Request, res: Response)
    {
        try{
            const sent = await RequestBookingService.send(req.body);
            return res.status(200).json(sent);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

}

export default RequestsController;