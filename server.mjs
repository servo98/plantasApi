import {app} from './api/app.mjs'

import dotenv from 'dotenv'

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Plants Server Running on port ${process.env.PORT}`);
})