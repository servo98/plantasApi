import express from 'express'
import * as UserController from '../controllers/UserController'
const api = express.Router();

api.get('/', UserController.create)

export default api;