import Plant from '../models/PlantModel.mjs'

export function index(__, res) {
    Plant.find({})
        .then(plants => {
            if(!plants)
                return res.status(404).send({message: 'No hay plantas registradas'});

            return res.send({plants});
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al buscar plantas', err});
        });
}

export function show(req, res) {
    Plant.findOne({_id: req.params.id})
        .then(plant => {
            if(!plant)
                return res.status(404).send({message: 'Planta no encontrada'})
            return res.send({plant})
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al buscar planta'});
        });
}

export function create(req, res) {
    const newPlant = new Plant({
        name: req.body.name,
        specie: req.body.specie,
        water: req.body.water,
        size: req.body.size,
        price: req.body.price,
    });
    newPlant.save()
        .then(plant => {
            return res.send({plant})
        })
        .catch(err => {
            return res.status(500).send({message: 'Error al crear nueva planta', err});
        });
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
