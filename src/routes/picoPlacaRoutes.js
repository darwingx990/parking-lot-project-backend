const express = require('express');
const router = express.Router();
const picoPlacaService = require('../services/picoPlacaService');

// POST /api/picoplacas
router.post('/', async (req, res) => {
    try {
        const nuevoPicoPlaca = await picoPlacaService.crearPicoPlaca(req.body);
        res.status(201).json({ message: 'PicoPlaca creado exitosamente', picoPlaca: nuevoPicoPlaca.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/picoplacas
router.get('/', async (req, res) => {
    try {
        const picoPlacas = await picoPlacaService.obtenerPicoPlacas();
        res.status(200).json(picoPlacas.map(p => p.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/picoplacas/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const picoPlaca = await picoPlacaService.obtenerPicoPlacaPorId(id);
        res.status(200).json(picoPlaca.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/pico-placa/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await picoPlacaService.actualizarPicoPlaca(id, req.body);
        res.status(200).json(resultado.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/pico-placa/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await picoPlacaService.eliminarPicoPlaca(id);
        res.status(200).json({ message: 'Pico y Placa eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
