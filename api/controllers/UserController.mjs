import User from '../models/UserModel.mjs'


export function index(req, res) {
    console.log('TODO: mostrar usuarios');
}

export function show(req, res) {
    console.log('TODO: mostrar un usuario');
}

export function create(req, res) {

    
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password,

      });
  
     newUser.save( (err, user) => {
         if(err){
             console.log("error", err)
        }else{
            console.log(user)
        }


     })

  
}

export function update(req, res) {
    console.log('TODO: actualizar usuario');
}

export function destroy(req, res) {
    console.log('TODO: borrar usuario');
}