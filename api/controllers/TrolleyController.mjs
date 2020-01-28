import Trolley from '../models/TrolleyModel.mjs'
import Plant from '../models/PlantModel.mjs'
export function index(__, res) {
    Trolley.find({}, (err, plant) => {
        if(err){
            res.status(500).send({message: 'Error al buscar carro de compra'});
        }else{
            res.send(plant)
        }
    });
}

export function show(req, res) {
    Trolley.find({"user": req.params.id}, (err, trolley) => {
        if(err){
            res.status(404).send({message: 'Carro de compra no encontrado'});
        }else{
            res.send({trolley});
        }
    })
}

export function create(req, res){
         const newTrolley = new Trolley({
        user: req.body.userId
        });
    newTrolley.save( (err, trolley) => {
        if(err){
            res.status(500).send({message: 'Error al crear nuevo carro', err: err});
       }else{
           res.send(trolley);
       }
    })
}

export function update(req, res) {
    Trolley.findOneAndUpdate({"_id":req.params.id},
        req.body,
        {
            new: true
        },
    (err, trolley) => {
        if(err){
            res.status(500).send("error")
        } else {
            res.send({trolley})
       }
   })
}

export function destroy(req, res){
    console.log(req.params.id)
    Trolley.findOneAndDelete({"user":req.params.id},
    (err, deleted) => {
        if(err){
            res.status(500).send("error");
       }else{
            res.send({message: 'Carrito vaciado exitosamente', deleted});
       }
   })
}


//buscar carrito, buscar planta y hacerle un push 
export function add(req,res){
   Plant.findById(id,(err, plant) => {
    if(err){
        res.status(500).send({message: 'Error planta no existe', err: err});
    }else{
        Trolley.findById(id,(err,troll) => {
            if(err){
                res.status(500).send({message: 'Error carro no existe', err: err});
            }else{
                troll.push(plant)
            }
        })
    }
   })



}

export function remove(req,res){
    newPlantTrolley.findOneAndDelete({"user":req.params.id},
    (err, remove) => {
        if(err){
            res.status(500).send("error");
       }else{
            res.send({message: 'Carrito vaciado exitosamente', remove});
       }
   })
}