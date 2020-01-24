import mongoose from 'mongoose'
export default mongoose.model('Plant', new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    especie: {
        type: String,
        required: true,
        enum: ['luz','sombra','ambas']
    },
    cantidadDeLuz:{
        type: String,
        required: true,
        enum: ['constante','media','no necesaria']

    },
    agua: {
        type: String,
        required: true,
        enum: ['unaVezAlaSemana','dosVecesALaSemana','diario']
     },
    tamaño: {
        type: String,
        required: true,
        enum: ['pequeña','mediana','grande']
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0, 
    },   
    image:{
        type: String,
        required: true
    },
    
}))


    