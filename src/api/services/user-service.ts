import { UserModel } from "../models/";

interface IUser {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    telephone: string,
    gender: string,
    address: string,
    password: string,
    status: string,
    avatar: string,
    countryId: number,
    roleId: number,
}


class UserService{

    constructor(){}

    static async getAll()
    {
        return await UserModel.findAll();
    }


    static async getById(id: number)
    {
        return await UserModel.findByPk(id);
    }


    static async getWhere(criteria: object)
    {
        return await UserModel.findAll({ where: { criteria } });
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
        return await UserModel.create({ firstName, middleName, lastName, email, telephone, gender, address, password, status, avatar, countryId, roleId });
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
