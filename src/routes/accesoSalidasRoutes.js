const express = require('express');
const router = express.Router();
const accesoSalidasService = require('../services/accesoSalidasService');

// POST /api/acceso-salidas
router.post('/', async (req, res) => {
  try {
    const nuevoAccesoSalidas = await accesoSalidasService.crearAccesoSalidas(
      req.body
    );
    res.status(201).json({ message: 'Acceso/Salida registrado exitosamente', data: nuevoAccesoSalidas.toJSON() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/acceso-salidas
router.get('/', async (req, res) => {
  try {
    const accesoSalidas = await accesoSalidasService.obtenerAccesoSalidas();
    res.status(200).json(accesoSalidas.map(a => a.toJSON()));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/acceso-salidas/:id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const accesoSalida = await accesoSalidasService.obtenerAccesoSalidasPorId(id);
    res.status(200).json(accesoSalida.toJSON());
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// PUT /api/acceso-salidas/:id
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await accesoSalidasService.actualizarAccesoSalidas(id, req.body);
    res.status(200).json(resultado.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/acceso-salidas/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await accesoSalidasService.eliminarAccesoSalidas(id);
    res.status(200).json({ message: 'Acceso/Salida eliminado correctamente', data: resultado.toJSON() });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
