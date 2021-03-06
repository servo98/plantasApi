import express from 'express'
import * as UserController from '../controllers/UserController.mjs'
import {verifyAuth} from '../middlewares/auth.mjs'


const api = express.Router();

api.route('/')
    .get(UserController.index)
    .post(UserController.create);

// api.use('/:id')
api.route('/:id')
    .get(UserController.show)
    .put(UserController.update)
    .delete(UserController.destroy);

export default api;
