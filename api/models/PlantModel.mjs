import mongoose from 'mongoose'
export default mongoose.model('Plant', new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,
    },
    specie: {
        type: String,
        required: true,
        enum: ['luz','sombra','ambas']
    },
    lightQuantity:{
        type: String,
        required: true,
        enum: ['constante','media','no necesaria']

    },
    water: {
        type: String,
        required: true,
        enum: ['unaVezAlaSemana','dosVecesALaSemana','diario']
     },
    size: {
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
        type: String
    },
    price: {
        type: Number,
        required: true
    }
    
}))


    