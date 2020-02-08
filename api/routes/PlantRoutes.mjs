import express from 'express';
import * as PlantController from '../controllers/PlantController.mjs';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const uploadFile = multer({ storage });

const api = express.Router();

api.route('/')
    .get(PlantController.index)
    .post(uploadFile.single('image'), PlantController.create);

api.route('/:id')
    .get(PlantController.show)
    .put(PlantController.update)
    .delete(PlantController.destroy)

export default api;
