import Plant from '../models/PlantModel.mjs'

export async function index(__, res) {
    try {
        const plants = await Plant.find({});
        if(!plants)
            return res.status(404).send({message: 'No hay plantas'});
        return res.send({plants});
    } catch(error) {
        return res.status(500).send({message: 'Error al buscar plantas', error})
    }
}

export async function show(req, res) {
    try {
        const plant = await Plant.findOne({_id: req.params.id});
        if(!plant)
            return res.status(404).send({message: 'Planta no encontrada'});
        return res.send({plant});
    } catch(error) {
        return res.status(500).send({message: 'Error al mostrar planta', error});
    }
}

export async function create(req, res) {
    const newPlant = new Plant({
        name: req.body.name,
        specie: req.body.specie,
        water: req.body.water,
        size: req.body.size,
        price: req.body.price,
    });
    try {
        const plant = await newPlant.save();
        return res.send({plant});

    } catch(error) {
        return res.status(500).send({message: 'Error al crear nueva planta', error});
    }
}

export async function update(req, res) {
    try {
        const plant = await Plant.findOneAndUpdate({"_id":req.params.id}, req.body, { new: true })
        return res.send({plant});
    } catch(error) {
        return res.status(500).send({message: 'Error al actualizar planta', error});
    }
}

export async function destroy(req, res){
    try {
        const plant = await Plant.findOneAndDelete({"_id":req.params.id},req.body);
        return res.send({plant});
    } catch (error) {
        return res.status(500).send({message: 'Error al borrar planta', error});
    }
}
