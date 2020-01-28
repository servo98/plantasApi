import express from 'express'
import * as TrolleyController from '../controllers/TrolleyController.mjs'


const api = express.Router();

api.route('/')
    .get(TrolleyController.index)
    .post(TrolleyController.create);

api.route('/:id')
    .get(TrolleyController.show)
    .put( TrolleyController.update)
    .delete( TrolleyController.destroy);

// add, delete plants trolley//
api.post('/add/:id', TrolleyController.add);
api.delete('/delete/:id', TrolleyController.remove)

export default api;

