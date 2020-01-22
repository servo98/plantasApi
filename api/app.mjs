/**
 * Configuration
 */
import express from 'express'
import * as db from './utils/db.mjs' 
import dotenv from 'dotenv'

/**
 * Middlewares
 */
import * as AuthMiddleware from './middlewares/auth.mjs'


/**
 * Routes imports
 */
import AuthRoutes from './routes/AuthRoutes.mjs'
import UserRoutes from './routes/UserRoutes.mjs';

dotenv.config();

db.connect(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_CLUSTER);

/**
 * APP
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

/**
 * App routes
 */
app.use('/auth', AuthRoutes)
app.use('/users',  UserRoutes)


/**
 * TESTS
 */
app.get('/', (req, res) => {
    res.send('Plantas API Working');
});


/**
 * 
 */

app.use(function (_, res, __) {
    res.status(404).send("Data not found!")
})
export {app}