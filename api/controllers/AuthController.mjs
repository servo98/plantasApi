import User from '../models/UserModel.mjs'
import jwt from 'jwt-simple'

export function login(req, res) {
    User.findOne({"email": req.body.email, "password": req.body.password}, (err, user) => {
        if(err){
            res.status(500).send('Error al hacer login')
        }else if(!user){
            res.status(404).send('Cradenciales inválidas o usuario no existe')
        }else{
            const token = jwt.encode({id: user.id}, process.env.JWT_TOKEN_SECRET)
            res.send({token})
        }
    });
}

export function logout(req, res) {
    console.log('TODO: login');
}
