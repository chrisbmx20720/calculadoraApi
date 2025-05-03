// routes/puestos.js
const express = require('express');
const router = express.Router();
const Puesto = require('../models/Puesto');

router.get('/', async (req, res) => {
  const puestos = await Puesto.find();
  res.json(puestos);
});

router.post('/', async (req, res) => {
  const nuevo = new Puesto(req.body);
  const guardado = await nuevo.save();
  res.json(guardado);
});

router.put('/:id', async (req, res) => {
  const actualizado = await Puesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actualizado);
});

router.delete('/:id', async (req, res) => {
  await Puesto.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
