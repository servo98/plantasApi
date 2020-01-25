import express from 'express'
import * as PlantController from '../controllers/PlantController.mjs'
const api = express.Router();

api.route('/')
    .get('/', PlantController.index)
    .post('/', PlantController.create);

api.route('/:id')
    .get(PlantController.show)
    .put(PlantController.update)
    .delete(PlantController.destroy)

export default api;