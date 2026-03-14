const express = require('express');
const router = express.Router();
const administradorService = require('../services/administradorService');

// POST /api/administradores
router.post('/', async (req, res) => {
    try {
        const nuevoAdmin = await administradorService.crearAdministrador(req.body);
        res.status(201).json({ message: 'Administrador creado exitosamente', administrador: nuevoAdmin.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/administradores
router.get('/', async (req, res) => {
    try {
        const admins = await administradorService.obtenerAdministradores();
        res.status(200).json(admins.map(a => a.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/administradores/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await administradorService.obtenerAdministradorPorId(id);
        res.status(200).json(admin.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/administradores/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await administradorService.actualizarAdministrador(id, req.body);
        res.status(200).json(resultado.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/administradores/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await administradorService.eliminarAdministrador(id);
        res.status(200).json({ message: 'Administrador eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
