import User from '../models/UserModel.mjs'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'

export function login(req, res) {
    User.findOne({ "email": req.body.email })
        .then(user => {
            if (!user)
                return res.status(404).send({ message: 'Credenciales inválidas' });

            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.encode({ id: user.id }, process.env.JWT_TOKEN_SECRET);
                return res.send({ token, userId: user._id });
            } 
            
            return res.status(403).send({ message: 'Credenciales inválidas' });
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al hacer login', err});
        });
}

export function logout(req, res) {
    //make invalid token
    console.log('TODO: login');
}
