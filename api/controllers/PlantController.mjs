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
    Plant.find({_id: req.params.id}, (err, plant) => {
        if(err)
            res.status(500).send({message: 'Error al buscar planta'});
        
        if(!plant)
            res.status(404).send({message: 'Plant not found'});
        
        res.send(plant)
    })
}

export function create(req, res) {
    const newPlant = new Plant({
        name: req.body.name,
        specie: req.body.specie,
        water: req.body.water,
        size: req.body.size,
    });
    newPlant.save( (err, plant) => {
        if(err){
            res.status(500).send({message: 'Error al crear nueva planta', err});
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
