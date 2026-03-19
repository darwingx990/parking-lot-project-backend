const express = require('express');
const router = express.Router();
const historialParqueoService = require('../services/historialParqueoService');

// POST /api/historial-parqueo
router.post('/', async (req, res) => {
    try {
        const nuevoHistorial = await historialParqueoService.crearHistorial(req.body);
        res.status(201).json({ message: 'Historial creado exitosamente', historial: nuevoHistorial.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/historial-parqueo
router.get('/', async (req, res) => {
    try {
        const historiales = await historialParqueoService.obtenerHistoriales();
        res.status(200).json(historiales.map(h => h.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/historial-parqueo/:indice
router.get('/:indice', async (req, res) => {
    try {
        const indice = parseInt(req.params.indice);
        const historial = await historialParqueoService.obtenerHistorialPorIndice(indice);
        res.status(200).json(historial.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/historial-parqueo/:indice
router.put('/:indice', async (req, res) => {
    try {
        const indice = parseInt(req.params.indice);
        const resultado = await historialParqueoService.actualizarHistorial(indice, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/historial-parqueo/:indice
router.delete('/:indice', async (req, res) => {
    try {
        const indice = parseInt(req.params.indice);
        const resultado = await historialParqueoService.eliminarHistorial(indice);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
