import Trolley from '../models/TrolleyModel.mjs'
import Plant from '../models/PlantModel.mjs'
export function index(__, res) {
    console.log('llegamos aqca')
    Trolley.find({}, (err, plant) => {
        if(err){
            res.status(500).send({message: 'Error al buscar carro de compra'});
        }else{
            res.send(plant)
        }
    });
}

export function show(req, res) {
    Trolley.find({"_id": req.params.id}, (err, trolley) => {
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
    Trolley.findOneAndDelete({"_id":req.params.id},
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
    Plant.findById(req.params.id_plant,(err, plant) => {
        if(err)
            return res.status(500).send({message: 'Error buscando planta', err});
        
        if(!plant)
            return res.status(404).send({message: 'No se encontró la planta seleccionada'})

        Trolley.findById(req.params.id, (err2,troll) => {
            if(err2)
                return res.status(500).send({message: 'Error buscando carrito', err2});
            if(!troll)
                return res.status(404).send({message: 'Carrito no encontrado'})
            
            troll.plants.push(plant._id)
            troll.save((err, trolley) => {
                if(err)
                    return res.status(500).send({message: 'Error al actualizar carrito'})
                return res.send(trolley)
            })
        })
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
