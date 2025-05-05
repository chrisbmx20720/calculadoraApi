const mongoose = require('mongoose');

const PuestoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cantidades: {
    dia1: { type: Number, default: 0 },
    dia2: { type: Number, default: 0 },
    dia3: { type: Number, default: 0 },
  },
  agregado: { type: Number, default: 0 },
  perdidas: { type: Number, default: 0 },
  devolucion: { type: Number, default: 0 },
  porcentaje: { type: Boolean, default: false },
  total: { type: String, default: '0.00' }, // puede ser Number si prefieres
}, {
  timestamps: true
});

module.exports = mongoose.model('Puesto', PuestoSchema);

