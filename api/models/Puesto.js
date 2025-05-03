// models/Puesto.js
const mongoose = require('mongoose');

const PuestoSchema = new mongoose.Schema({
  nombre: String,
  cantidades: {
    dia1: { type: Number, default: 0 },
    dia2: { type: Number, default: 0 },
    dia3: { type: Number, default: 0 },
  },
  agregado: Number,
  perdidas: Number,
  devolucion: Number,
  porcentaje: Number,
  total: String
});

module.exports = mongoose.model('Puesto', PuestoSchema);
