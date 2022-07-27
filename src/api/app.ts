import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
//import { connect } from '../config/connection';
import router from './routes';
//connect();

const app = express();

app.set('port', process.env.SERVER_PORT);
app.use(express.json());
app.use("/api", router);

app.use((req:Request, res:Response, next:NextFunction) => {
    const error = {
        message: "Not found",
        status: 404
    }
    next(error);
});

app.use((error:any, req:Request, res:Response, next:NextFunction) => {
    res.status(error.status || 500);
    res.json({ error });
});

export default app;