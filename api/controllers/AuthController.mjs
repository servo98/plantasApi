import User from '../models/UserModel.mjs'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'

export async function login(req, res) {
    try {
        const user = await User.findOne({ "email": req.body.email });
        if(!user)
            return res.status(404).send({ message: 'Credenciales inválidas' }); 
        
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.encode({ id: user.id }, process.env.JWT_TOKEN_SECRET);
            return res.send({ token, userId: user._id });
        } 
        
        return res.status(403).send({ message: 'Credenciales inválidas' });

    } catch(error) {
        return res.send({message: 'Error al hacer login', error})
    }
}

export function logout(req, res) {
    //make invalid token
    console.log('TODO: login');
}
