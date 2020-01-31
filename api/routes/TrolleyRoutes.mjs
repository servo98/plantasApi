import express from 'express'
import * as TrolleyController from '../controllers/TrolleyController.mjs'
import {verifyAuth} from '../middlewares/auth.mjs'

const api = express.Router();

api.route('/')
    .get(TrolleyController.index)
    .post([verifyAuth], TrolleyController.create);

api.get('/trolleyByUser/:id', TrolleyController.showByUser)

api.use('/:id', [verifyAuth])   
api.route('/:id')
    .get(TrolleyController.show)
    .put( TrolleyController.update)
    .delete( TrolleyController.destroy);

// add, delete plants trolley//
api.put('/:id/add/:id_plant', TrolleyController.add);
api.delete('/:id/remove/:id_plant', TrolleyController.remove)

export default api;

