/**
 * Configuration
 */
import express from 'express'
import * as db from './utils/db' 
import dotenv from 'dotenv'


/**
 * Routes
 */
import UserRoutes from './routes/UserRoutes';

dotenv.config();

db.connect(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);

const app = express();

app.use('/users', UserRoutes)

app.get('/', (req, res) => {
    res.send('hola');
});
export {app}