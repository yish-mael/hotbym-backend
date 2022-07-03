import 'dotenv/config';
import { Sequelize } from 'sequelize';


const dbName = (process.env.DB_NAME as string);
const dbUser = (process.env.DB_USER as string);
const dbPassword = (process.env.DB_PASSWORD as string);
const dbHost = (process.env.DB_HOST as string);
const dbPort = parseInt(process.env.DB_PORT as string);

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost, 
    port:  dbPort,
    dialect: 'mysql',
});


export async function connect() 
{
    try {
        await sequelize.authenticate();
        console.log(`Database connection has been established.`);
    } catch(e) {
        console.error(`Database connection error: ${e}.`);
    }
}