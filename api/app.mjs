/**
 * Configuration
 */
import express from 'express'
import * as db from './utils/db' 
import dotenv from 'dotenv'

/**
 * Middlewares
 */
import * as auth from './middlewares/auth'


/**
 * Routes imports
 */
import UserRoutes from './routes/UserRoutes';

dotenv.config();

db.connect(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);

/**
 * APP
 */
const app = express();
app.use(express.json());


/**
 * App routes
 */
app.use('/users', auth.verifyAuth, UserRoutes)


/**
 * TESTS
 */
app.get('/', (req, res) => {
    res.send('hola');
});


/**
 * 
 */

app.use(function (_, res, __) {
    res.status(404).send("Data not found!")
})
export {app}