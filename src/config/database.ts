import { Sequelize } from 'sequelize';

export async function connect(config: any) {

    const dbName = (config.DB_NAME as string);
    const dbUser = (config.DB_USER as string);
    const dbPassword = (config.DB_PASSWORD as string);
    const dbHost = (config.DB_HOST as string);
    const dbPort = parseInt(config.DB_PORT as string);

    const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost, 
        port:  dbPort,
        dialect: 'mysql',
    });

    try {
        await sequelize.authenticate();
        console.log('Database connection has been established.');
    } catch(e) {
        console.error(e);
    }
}