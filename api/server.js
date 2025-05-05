const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB:', err.message);
});

// Ruta de saludo en la raíz
app.get('/', (req, res) => {
  res.send('<h1>Loteria API</h1>');
});

// Rutas
app.use('/api/puestos', require('./routes/puestos'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
