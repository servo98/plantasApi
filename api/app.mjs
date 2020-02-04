/**
 * Configuration
 */
import express from 'express'
import cors from 'cors'
import * as db from './utils/db.mjs' 
import dotenv from 'dotenv'

/**
 * Routes imports
 */
import AuthRoutes from './routes/AuthRoutes.mjs';
import UserRoutes from './routes/UserRoutes.mjs';
import PlantRoutes from './routes/PlantRoutes.mjs';
import TrolleyRoutes from './routes/TrolleyRoutes.mjs';

dotenv.config();

db.init(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_CLUSTER);

/**
 * APP
 */
const app = express();
app.use(cors(
//     {
//     credentials: true,
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
  ))
  app.options('*', cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


/**
 * App routes
 */
app.use('/auth', AuthRoutes)
app.use('/users',  UserRoutes)
app.use('/plants', PlantRoutes)
app.use('/trolleys', TrolleyRoutes)


/**
 * TESTS
 */
app.get('/', (req, res) => {
    res.send('Plantas API Working');
});

/**
 * 
 */

app.use(function (_, res) {
    res.status(404).send("Recurso no encontrado")
})
export {app}