import Trolley from '../models/TrolleyModel.mjs'
import User from '../models/UserModel.mjs'
export function index(__, res) {
    res.send('Hol desde trolley controller')
    // Trolley.find({}, (err, plant) => {
    //     if(err){
    //         res.status(500).send({message: 'Error al buscar carro de compra'});
    //     }else{
    //         res.send(plant)
    //     }
    // });
}

export function show(req, res) {
    Trolley.find({_id: req.params.id}, (err, user) => {
        if(err){
            res.status(404).send({message: 'Carro de compra no encontrado'});
        }else{
            res.send({user});
        }
    })
}

export function create(req, res){
    console.log(req.body.userId)
    const newTrolley = new Trolley({
        user: req.body.userId
        });
    newTrolley.save( (err, Trolley) => {
        if(err){
            res.status(500).send({message: 'Error al crear nuevo carro', err: err});
       }else{
           res.send(Trolley);
       }
    })
}

export function update(req, res) {
    Trolley.findOneAndUpdate({"_id":req.params.id},
        req.body,
        {
            new: true
        },
    (err, Trolley) => {
        if(err){
            res.status(500).send("error")
       }else{
            res.send({Trolley})
       }
   })
}

export function destroy(req, res){
    Trolley.findOneAndDelete({"_id":req.params.id},req.body,
    (err, deleted) => {
        if(err){
            res.status(500).send("error");
       }else{
            res.send({message: 'Carrito vaciado exitosamente', deleted});
       }
   })
}