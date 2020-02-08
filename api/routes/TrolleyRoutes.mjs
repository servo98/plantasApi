import express from 'express'
import * as TrolleyController from '../controllers/TrolleyController.mjs'
import {verifyAuth} from '../middlewares/auth.mjs'

const api = express.Router();

api.route('/')
    .get(TrolleyController.index)
    .post(TrolleyController.create);

api.get('/trolleyByUser/:id', TrolleyController.showByUser)

// api.use('/:id')   
api.route('/:id')
.put( TrolleyController.update)
.delete( TrolleyController.destroy);

api.get('/me', [verifyAuth], TrolleyController.show)
// add, delete plants trolley//
api.put('/add/:id_plant', [verifyAuth], TrolleyController.add);
api.delete('/remove/:id_plant', TrolleyController.remove)

export default api;

