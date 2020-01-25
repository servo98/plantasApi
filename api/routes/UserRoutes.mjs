import express from 'express'
import * as UserController from '../controllers/UserController.mjs'
import {verifyAuth, verifyUser} from '../middlewares/auth.mjs'
import TrolleyRoutes from './TrolleyRoutes.mjs';

const api = express.Router();

api.route('/')
    .get(UserController.index)
    .post(UserController.create);

api.use('/:id', [verifyAuth, verifyUser])
api.route('/:id')
    .get(UserController.show)
    .put(UserController.update)
    .delete(UserController.destroy);


api.use('/:id/trolley', TrolleyRoutes);

export default api;