import mongoose from 'mongoose'
export default mongoose.model('User', new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    especie: {
        type: String,
        required: true,
        enum: ['luz','sombra','ambas']
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
    image:{
        type: String,
        required: true
    }
}))