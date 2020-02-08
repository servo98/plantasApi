import jwt from 'jwt-simple'
import User from '../models/UserModel.mjs';

export async function verifyAuth(req, res, next) {
    if(!req.headers.auth)
        return res.status(403).send({message: "Auth missing"})

    try {
        const payload = jwt.decode(req.headers.auth, process.env.JWT_TOKEN_SECRET);
        const user = await User.findOne({_id: payload.id});
        if(!user)
            return res.status(403).send({message: 'User not found'});
        
        req.body.decodedUserId = user._id
        
    } catch (error) {
        return res.status(404).send({message: 'Invalid token', error})
    }
    //guardar en cookie el token o algo asi
    next()

}

export async function onlyAdmin(req, res, next) {
    if(!req.headers.auth)
        return res.status(403).send({message: "Auth missing"})

    try {
        const payload = jwt.decode(req.headers.auth, process.env.JWT_TOKEN_SECRET);
        const user = await User.find({_id: payload.id});
        if(!user)
            return res.status(403).send({message: 'User not found'});
        if(user.rol !== 'admin')
            return res.status(403).send({message: 'Only admin allowed'});
        
        req.body.decodedUserId = payload.id
        
    } catch (error) {
        return res.status(404).send({message: 'Invalid token', error})
    }
    //guardar en cookie el token o algo asi
    next()
}