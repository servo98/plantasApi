import mongoose from 'mongoose'

export function connect(user, pass, name, cluster) {
    mongoose.connect(`mongodb+srv://${user}:${pass}@${cluster}.mongodb.net/${name}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Database Connection stablished');
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    })
}
