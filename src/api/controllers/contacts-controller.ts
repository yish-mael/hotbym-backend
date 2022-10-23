import { Request, Response } from "express";
import ContactService from "../services/contact-service";

class ContactsController {

    constructor() {}

    static async sendContacts(req: Request, res: Response)
    {
        try{
            const sent = await ContactService.send(req.body);
            return res.status(200).json(sent);
        }catch(err){
            return res.status(500).json({
                error: err
            });
        }
    }

}

export default ContactsController;