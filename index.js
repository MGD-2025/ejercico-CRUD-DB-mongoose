const express = require('express');
const app = express();
const router = require ('./routes/index');

const PORT = process.env.MONGO_URI || 3002
require ('dotenv').config()


app.use (express.json())
app.use (router)

app.listen(PORT, () => console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`));