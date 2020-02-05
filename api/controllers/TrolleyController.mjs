import Trolley from '../models/TrolleyModel.mjs'
import Plant from '../models/PlantModel.mjs'

export function index(__, res) {
    Trolley.find({})
        .then(trolleys => {
            return res.send({trolleys});
        })
        .catch(err => {
            res.status(500).send({message: 'Error al buscar carritos', err})
        });
}

export function show(req, res) {
    Trolley.find({"_id": req.params.id})
        .then(trolley => {
            if(!trolley)
                return res.status(404).send({message: 'Carrito no encontrado'});
            return res.send({trolley});
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al buscar carrito', err})
        });
}

export function create(req, res){
    const newTrolley = new Trolley({
        user: req.body.userId
    });
    newTrolley.save()
    .then(trolley => {
        return res.send({trolley});
    })
    .catch(err => {
        res.status(500).send({message: 'Error al crear carrito', err});
    });
}

export function update(req, res) {
    Trolley.findOneAndUpdate({"_id":req.params.id}, req.body, { new: true })
        .then(trolley => {
            return res.send({trolley});
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al actualizar datos del carrito', err});
        });
}

export function destroy(req, res){
    Trolley.findOneAndDelete({"_id":req.params.is})
        .then(trolley => {
            return res.send({message: 'Trolley deleted', trolley})
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al borrar carrito', err})
        });
}

export function showByUser(req, res) {
    Trolley.findOne({"user": req.params.id})
        .then(trolley => {
            if(!trolley)
                return res.status(404).send({message: 'Trolley not found'});
            
            return res.send({trolley})
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al buscar carrito de persona', err});
        });
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

    Trolley.findById(req.params.id, (err,troll) => {
        if(err)
            return res.status(500).send({message: 'Error buscando carrito', err});
        if(!troll)
            return res.status(404).send({message: 'Carrito no encontrado'})
        
        const indexOfPlant = troll.plants.indexOf(req.params.id_plant)
        if(indexOfPlant == -1)
            return res.status(404).send({message: 'No existe esa planta en el carrito seleccionado'})
        
        
        troll.plants.splice(indexOfPlant, 1)
        
        troll.save((err, trolley) => {
            if(err)
                return res.status(500).send({message: 'Error al actualizar carrito'})
            return res.send({message: 'Carrito actualizado', trolley})
        })
    })
        
}
