import {app} from './api/app.mjs'



app.listen(process.env.PORT, () => {
    console.log(`🌱 🌿 🌱 🌿 🌱 Plants Server Running on port ${process.env.PORT}`);
})