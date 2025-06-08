import dotenv from 'dotenv';

dotenv.config({
    path : "src/.env",
})

import { app } from "./app.js";

app.get('/', (req, res) => {
    res.json({
        success : true,
        message : "Everything is working fine",
    })
})

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})