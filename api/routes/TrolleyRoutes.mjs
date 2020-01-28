import express from 'express'
import * as TrolleyController from '../controllers/TrolleyController.mjs'
import {verifyAuth} from '../middlewares/auth.mjs'

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
api.put('/:id/add/:id_plant', TrolleyController.add);
<<<<<<< HEAD
api.delete('/:id/delete/:id_plant', TrolleyController.remove)
=======
api.delete('/:id/remove/:id_plant', TrolleyController.remove)
>>>>>>> 5e67c905a089f856c9a7ce8ba184254e0bcf6a14

export default api;

