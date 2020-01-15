import mongoose from 'mongoose'

export function connect(user, pass, name) {
    mongoose.connect(`mongodb+srv://${user}:${pass}@datacluster-my6rl.mongodb.net/${name}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Database Connection stablished');
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    })
}
