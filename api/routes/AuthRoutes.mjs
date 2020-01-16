import express from 'express'
import * as AuthController from '../controllers/AuthController.mjs'
const api = express.Router();

api.post('/login', AuthController.login);
api.post('/logout', AuthController.logout);

export default api;