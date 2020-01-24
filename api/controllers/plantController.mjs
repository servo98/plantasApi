import Plant from '../models/PlantModel.mjs'

export function index(__, res) {
    Plant.find({}, (err, plant) => {
        if(err){
            res.status(500).send({message: 'Error al buscar plantas'});
        }else{
            res.send(plant)
        }
    });
}

export function show(req, res) {
    Plant.find({_id: req.params.id}, (err, user) => {
        if(err){
            res.status(404).send({message: 'Usuario no encontrado'});
        }else{
            res.send({user});
        }
    })
}

export function create(req, res){
    const newPlant = new plant({
        name: req.body.name,
        especie: req.body.especie,
        agua: req.body.agua,
        tamaño: req.body.tamaño,
    });
    newPlant.save( (err, plant) => {
        if(err){
            res.status(500).send({message: 'Error al crear nueva planta'});
       }else{
           res.send(plant);
       }
    })
}

export function update(req, res) {
    Plant.findOneAndUpdate({"_id":req.params.id},
        req.body,
        {
            new: true
        },
    (err, plant) => {
        if(err){
            res.status(500).send("error")
       }else{
            res.send({plant})
       }
   })
}

export function destroy(req, res){
    Plant.findOneAndDelete({"_id":req.params.id},req.body,
    (err, deleted) => {
        if(err){
            res.status(500).send("error");
       }else{
            res.send({message: 'Planta borrada exitosamente', deleted});
       }
   })
}