import express from 'express'
import * as UserController from '../controllers/UserController.mjs'
import * as AuthMiddleware from '../middlewares/auth.mjs'
import TrolleyRoutes from './TrolleyRoutes.mjs';

const api = express.Router();

api.get('/', UserController.index);
api.get('/:id',[AuthMiddleware.verifyAuth, AuthMiddleware.verifyUser], UserController.show)
api.post('/', UserController.create);
api.put('/:id', UserController.update)
api.delete('/:id', UserController.destroy)


api.use('/:id/trolley', [AuthMiddleware.verifyAuth], TrolleyRoutes)

export default api;