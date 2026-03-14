const express = require('express');
const router = express.Router();
const vehiculoService = require('../services/vehiculoService');

// POST /api/vehiculos
router.post('/', async (req, res) => {
  try {
    const nuevoVehiculo = await vehiculoService.crearVehiculo(
      req.body
    );
    res.status(201).json({ message: 'Vehículo creado exitosamente', data: nuevoVehiculo.toJSON() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/vehiculos
router.get('/', async (req, res) => {
  try {
    const vehiculos = await vehiculoService.obtenerVehiculos();
    res.status(200).json(vehiculos.map(v => v.toJSON()));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/vehiculos/:id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const vehiculo = await vehiculoService.obtenerVehiculoPorId(id);
    res.status(200).json(vehiculo.toJSON());
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// PUT /api/vehiculos/:id
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await vehiculoService.actualizarVehiculo(id, req.body);
    res.status(200).json(resultado.toJSON());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/vehiculos/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await vehiculoService.eliminarVehiculo(id);
    res.status(200).json({ message: 'Vehículo eliminado correctamente', data: resultado.toJSON() });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
