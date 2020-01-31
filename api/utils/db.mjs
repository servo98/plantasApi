import mongoose from 'mongoose'

export function init(user, pass, name, cluster) {
    const db = mongoose.connection;
    
    db.on('connecting', function () {
        console.log('Conectándose a la base de datos...');
    });

    db.on('error', function (error) {
        console.error('❌ ❌ ❌ Error en MongoDB: ' + error);
        mongoose.disconnect();
    });
    db.on('connected', function () {
        console.log('✅ ✅ ✅Base de datos conectada! 🗄️');
    });
    db.once('open', function () {
        console.log('Conexión abierta con MongoDB!');
    });
    db.on('reconnected', function () {
        console.log('MongoDB reconectado!');
    });
    db.on('disconnected', function () {
        console.log('MongoDB desconectado!');
        mongoose.connect(`mongodb+srv://${user}:${pass}@${cluster}.mongodb.net/${name}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    });
    mongoose.connect(`mongodb+srv://${user}:${pass}@${cluster}.mongodb.net/${name}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

}
