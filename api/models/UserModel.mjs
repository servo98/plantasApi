import mongoose from 'mongoose';


export default mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthday: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
    },
    gender: {
        type:  String,
        enum: ['male', 'female', 'other'],
        required: true,
        default: 'other'
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
}));
