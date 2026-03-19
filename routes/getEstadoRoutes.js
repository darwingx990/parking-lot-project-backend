const express = require('express');
const router = express.Router();
const getEstadoService = require('../services/getEstadoService');

// POST /api/estados
router.post('/', async (req, res) => {
    try {
        const nuevoEstado = await getEstadoService.crearEstado(req.body);
        res.status(201).json({ message: 'Estado creado exitosamente', estado: nuevoEstado.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/estados
router.get('/', async (req, res) => {
    try {
        const estados = await getEstadoService.obtenerEstados();
        res.status(200).json(estados.map(e => e.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/estados/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const estado = await getEstadoService.obtenerEstadoPorId(id);
        res.status(200).json(estado.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/estados/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await getEstadoService.actualizarEstado(id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/estados/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await getEstadoService.eliminarEstado(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
