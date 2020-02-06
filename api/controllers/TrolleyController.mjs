import Trolley from '../models/TrolleyModel.mjs'
import Plant from '../models/PlantModel.mjs'

export async function index(__, res) {

    try {
        const trolleys = await Trolley.find({});
        return res.send({trolleys});

    } catch(error) {
        return res.status(500).send({message: 'Error al buscar carritos de compra', error})
    }
}

export async function show(req, res) {
    try {
        const trolley = await Trolley.find({"_id": req.params.id});
        if(!trolley)
            return res.status(404).send({message: 'Carrito no encontrado'});
        return res.send({trolley});
    } catch (error) {
        return res.status(500).send({message: 'Error al buscar carrito', error});
    }
}

export async function create(req, res){
    const newTrolley = new Trolley({
        user: req.body.userId
    });
    try {
        const trolley = await newTrolley.save();
        return res.send({trolley});
    } catch (error) {
        return res.status(500).send({message: 'Error al crear carrito', error});
    }
}

export async function update(req, res) {
    try {
        const trolley = await Trolley.findOneAndUpdate({"_id":req.params.id}, req.body, { new: true });
        if(!trolley)
            return res.status(404).send({message: 'Carrito no encontrado'});
        return res.send({trolley})
    } catch (error) {
        return res.status(500).send({message: 'Error al actualizar los datos del carrito', error});
    }
}

export async function destroy(req, res){
    try {
        const trolley = await Trolley.findOneAndDelete({"_id":req.params.is});
        return res.send({trolley});
    } catch (error) {
        return res.status(500).send({message: 'Error al borrar carrito', error});
    }
}

export async function showByUser(req, res) {
    try {
        const trolley = await Trolley.findOne({"user": req.params.id});
        if(!trolley)
            return res.status(404).send({message: 'Carrito no encontrado para el usuario'});
        return res.send({trolley});
    } catch (error) {
        return res.status(500).send({message: 'Error al buscar cartito del usuario', error});
    }
}


//buscar carrito, buscar planta y hacerle un push 
export async function add(req,res){
    try {
        const plant = await Plant.findById(req.params.id_plant);
        if(!plant)
            return res.status(404).send({message: 'No se encontró la planta solicitada'});
        const trolley = await Trolley.findById(req.params.id);
        if(!trolley)
            return res.status(404).send({message: 'Carrito no encontrado'});
        
        trolley.plants.push(plant._id);
    
        const newTrolley = await trolley.save();
        return res.send({trolley: newTrolley});
        
    } catch (error) {
        return res.status(500).send({message: 'Error al agregar planta al carrito', error});
    }
}

export async function remove(req,res){

    try {
        const trolley = await Trolley.findById(req.params.id);
        if(!trolley)
            return res.status(404).send({message: 'Carrino no encontrado'});

        const indexOfPlant = trolley.plants.indexOf(req.params.id_plant)
        if(indexOfPlant == -1)
            return res.status(404).send({message: 'No existe esa planta en el carrito seleccionado'})
        
        troll.plants.splice(indexOfPlant, 1)
        
        const newTrolley = await troll.save();
        return res.send({trolley: newTrolley});
        
    } catch (error) {
        return res.status(500).send({message: 'Error al eliminar planta del carrito', error});
    }
        
}
