import express from 'express'
import * as TrolleyController from '../controllers/TrolleyController.mjs'
import * as AuthMiddleware from '../middlewares/auth.mjs'
const api = express.Router();

api.get('/', TrolleyController.index);
api.get('/:id',[AuthMiddleware.verifyAuth], TrolleyController.show)
api.post('/', [AuthMiddleware.verifyAuth],TrolleyController.create);
api.put('/:id', TrolleyController.update)
api.delete('/:id', TrolleyController.destroy)

export default api;

