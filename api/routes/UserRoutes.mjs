import express from 'express'
import * as UserController from '../controllers/UserController.mjs'
const api = express.Router();

api.get('/', UserController.index);
api.get('/:id', UserController.show)
api.post('/', UserController.create);
api.put('/:id', UserController.update)
api.delete('/:id', UserController.destroy)

export default api;