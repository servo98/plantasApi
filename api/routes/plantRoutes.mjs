import express from 'express'
import * as plantController from '../controllers/plantController.mjs'
const api = express.Router();
api.get('/', plantController.index);
api.get('/:id', plantController.show)
api.post('/', plantController.create);
api.put('/:id', plantController.update)
api.delete('/:id', plantController.destroy)

export default api;