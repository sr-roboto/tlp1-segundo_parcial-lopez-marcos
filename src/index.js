const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/books.routes');

//inicializamos
const app = express()
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/books', router)

//ponemos en escucha al servidor
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto:", PORT)
})