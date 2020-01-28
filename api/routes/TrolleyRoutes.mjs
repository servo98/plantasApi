import express from 'express'
import * as TrolleyController from '../controllers/TrolleyController.mjs'
import {verifyAuth, verifyUser} from '../middlewares/auth.mjs'

const api = express.Router();

api.route('/')
    .get(TrolleyController.index)
    .post([verifyAuth], TrolleyController.create);

api.use('/:id', [verifyAuth])   
api.route('/:id')
    .get(TrolleyController.show)
    .put( TrolleyController.update)
    .delete( TrolleyController.destroy);

// add, delete plants trolley//
api.post('/:id/add/:id_plant', TrolleyController.add);
api.delete('/:id/delete/:id_plant', TrolleyController.remove)

export default api;

