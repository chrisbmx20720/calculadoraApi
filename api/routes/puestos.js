// routes/puestos.js
const express = require('express');
const router = express.Router();
const Puesto = require('../models/Puesto');

// Obtener todos los puestos
router.get('/', async (req, res) => {
  try {
    const puestos = await Puesto.find();
    res.json(puestos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los puestos'})
    console.err;
  }
});

// Crear un nuevo puesto
router.post('/', async (req, res) => {
  try {
    const nuevo = new Puesto(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar el puesto' });
  }
});

// Actualizar un puesto existente
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Puesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) {
      return res.status(404).json({ error: 'Puesto no encontrado' });
    }
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar el puesto' });
  }
});

// Eliminar un puesto
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Puesto.findByIdAndDelete(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ error: 'Puesto no encontrado' });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar el puesto' });
  }
});

module.exports = router;
