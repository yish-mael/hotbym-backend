import "dotenv/config";
import express, { Request, Response, NextFunction, request } from 'express';
import router from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import cookieParser from "cookie-parser";

//import swaggerDocument from "../config/swagger.json";


// const options = {
//     swagger: "2.0",
//     swaggerOptions: {
//       url: 'http://localhost:5700/api/'
//     },
// }
//connect();

const app = express();

app.use(cors({credentials: true, origin: true}));

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Hotbym API",
            version: '1.0.0',
        },
    },
    apis: ["./src/api/routes/*.ts"],
};
  
const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocs)
);

app.set('port', process.env.SERVER_PORT);
app.use(express.json());
app.use(cookieParser());


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