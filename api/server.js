const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI no está definido en .env');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json()); // Reemplaza body-parser, que ya está incluido en Express desde v4.16+

// Conexión a MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:', err.message);
    process.exit(1);
  });

// Ruta raíz
app.get('/', (req, res) => {
  res.send('<h1>Lotería API</h1>');
});

// Rutas
app.use('/api/puestos', require('./routes/puestos'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;
