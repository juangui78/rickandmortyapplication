const express = require('express');
const server = express();
const router = require("./routes/index")
const cors = require("cors")
const PORT = 3001;
const {conn} = require("./DB_connection")

conn.sync({force: true})
    .then(() => {
        server.use(cors())

    server.use(express.json())

    server.use("/rickandmorty", router)

    server.listen(PORT, () => {
        console.log('Server raised in port 3001')
    });
})

