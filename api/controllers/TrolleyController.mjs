import Trolley from '../models/TrolleyModel.mjs'
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
    Trolley.find({"user": req.params.id}, (err, user) => {
        if(err){
            res.status(404).send({message: 'Carro de compra no encontrado'});
        }else{
            res.send({user});
        }
    })
}

export function create(req, res){
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