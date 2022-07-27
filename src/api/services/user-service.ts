import bcrypt from "bcrypt";
import { UserModel, RoleModel } from "../models/";
import { accountCreatedEmail } from "../templates/email-messages";
import MailService from "./mail-service";

interface IUser {
    firstName: string,
    middleName?: string,
    lastName: string,
    email: string,
    telephone?: string,
    gender?: string,
    address?: string,
    password: string,
    status?: string,
    avatar?: string,
    countryId?: number,
    roleId?: number,
}


class UserService{

    constructor(){}

    static async getAll()
    {
        return await UserModel.findAll({
            include: RoleModel
        });
    }


    static async getById(id: number)
    {
        return await UserModel.findByPk(id);
    }


    static async getWhere(criteria: any)
    {
        return await UserModel.findAll({ where: criteria  });
    }


    static async create(values: IUser)
    {
        const { firstName,
                middleName,
                lastName,
                email,
                telephone,
                gender,
                address,
                password,
                status,
                avatar,
                countryId,
                roleId } = values;

                
        const user = await UserService.getWhere({email: email});
        if(user.length > 0){
            throw "Email already exists.";
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword  = await bcrypt.hash(password, salt);
        const message  =  accountCreatedEmail(firstName);
        await MailService.mailer({ 
            subject: "Account Created",
            recipient: email,
            message
        });
        // console.log("here");
        return await UserModel.create({
            firstName,
            middleName,
            lastName,
            email,
            telephone,
            gender,
            address,
            password: hashedPassword,
            status,
            avatar,
            countryId,
            roleId
        });
    }

    static async update(id: number, values: IUser)
    {
        return await UserModel.update( values, { where: { id: id } });
    }


    static async delete(id: number)
    {
        const country = await this.getById(id); 
        return await country?.destroy();
    }

}

export default UserService;

// Get user by Id
// Get all users
// Get all active users
// Get all inactive users
// Get all pending users
// Get all users where
// Create user
// Update user by Id
// Delete user by Id
