import User from '../models/plantModel'

export function create(req, res){
    const newPlant = new plant({
        name: req.body.name,
        especie: req.body.especie,
        agua: req.body.agua,
        tamaño: req.body.tamaño,
    });
    newPlant.save( (err, user) => {
        if(err){
            console.log("error", err)
       }else{
           console.log(user)
       }


    })

}