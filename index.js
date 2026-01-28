const express = require('express');
const app = express();
const PORT = 3000;

const { dbConnection } = require('./config/config');
dbConnection()


app.listen(PORT, () => console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`));