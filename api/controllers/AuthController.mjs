import User from '../models/UserModel.mjs'
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt'

export function login(req, res) {

    User.findOne({"email": req.body.email}, (err, user) => {
        if(err){
            res.status(500).send('Error al hacer login');
        }else if(!user){
            res.status(404).send('Cradenciales inválidas o usuario no existe')
        }else if(bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.encode({id: user.id}, process.env.JWT_TOKEN_SECRET);
            res.json({token, id: user._id});
        } else {
            res.status(403).send({message: 'invalid credentials'});
        }
    });
}

export function logout(req, res) {
    //make invalid token
    console.log('TODO: login');
}
