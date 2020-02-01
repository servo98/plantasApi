import User from '../models/UserModel.mjs'
import bcrypt from 'bcrypt'
import Trolley from '../models/TrolleyModel.mjs'

export function index(req, res) {
    User.find({}, (err, users) => {
        if(err){
            res.status(500).send({message: 'Error al buscar usuarios'});
        }else{
            res.send(users)
        }
    });
}

export function show(req, res) {
    User.find({_id: req.params.id}, (err, user) => {
        if(err){
            res.status(404).send({message: 'Usuario no encontrado'})
        }else{
            res.send({user})
        }
    })
}

export function create(req, res) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
            return res.status(500).send({message: `No se pudo crear el usuario ${err}`});
        }
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthday: req.body.birthday,
            phone: req.body.phone,
            gender: req.body.gender,
            password: hash
        });
        newUser.save( (err, user) => {
            if(err) {
                res.status(500).send({message: `No se pudo crear el usuario ${err}`});
            } else {
                const newTrolley = new Trolley({
                    user: user._id
                });
                newTrolley.save( (err, trolley) => {
                    if(err){
                        res.status(500).send({message: 'Error al crear nuevo carro', err: err});
                   }else{
                       res.send({trolley,user});
                   }
                })
                
            }
        })
    });
}

export function update(req, res) {
    User.findOneAndUpdate({"_id":req.params.id},req.body,{
        new: true
    },
    (err, user) => {
        if(err){
            res.status(500).send("error")
       }else{
            res.send({user})
       }
   })
}

export function destroy(req, res){
    User.findOneAndDelete({"_id":req.params.id},
    (err, user) => {
        if(err){
            res.status(500).send("error")
       }else{
            res.send({message: 'User deleted', user})
       }
   })
}

