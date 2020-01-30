/**
 * Configuration
 */
import express from 'express'
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

db.connect(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_CLUSTER);

/**
 * APP
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

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