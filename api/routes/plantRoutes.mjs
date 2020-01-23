import express from 'express'
import * as plantController from '../controllers/PlantController.mjs'
const api = express.Router();
api.get('/', PlantController.index);
api.get('/:id', PlantController.show)
api.post('/', PlantController.create);
api.put('/:id', PlantController.update)
api.delete('/:id', PlantController.destroy)

export default api;