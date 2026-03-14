const express = require('express');
const router = express.Router();
const operadorService = require('../services/operadorService');

// POST /api/operadores
router.post('/', async (req, res) => {
    try {
        const nuevoOperador = await operadorService.crearOperador(req.body);
        res.status(201).json({ message: 'Operador creado exitosamente', operador: nuevoOperador.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/operadores
router.get('/', async (req, res) => {
    try {
        const operadores = await operadorService.obtenerOperadores();
        res.status(200).json(operadores.map(o => o.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/operadores/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const operador = await operadorService.obtenerOperadorPorId(id);
        res.status(200).json(operador.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/operadores/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await operadorService.actualizarOperador(id, req.body);
        res.status(200).json(resultado.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/operadores/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await operadorService.eliminarOperador(id);
        res.status(200).json({ message: 'Operador eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
