import 'dotenv/config';
import express from 'express';
import { connect } from '../config/database';

connect(process.env);
const app = express();

app.set('port', process.env.SERVER_PORT);
app.use(express.json());


export default app;