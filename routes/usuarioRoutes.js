const express = require('express');
const router = express.Router();
const usuarioService = require('../services/usuarioService');

// POST /api/usuarios
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json({ message: 'Usuario creado exitosamente', usuario: nuevoUsuario.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await usuarioService.obtenerUsuarios();
        res.status(200).json(usuarios.map(u => u.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/usuarios/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await usuarioService.obtenerUsuarioPorId(id);
        res.status(200).json(usuario.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/usuarios/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await usuarioService.actualizarUsuario(id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/usuarios/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await usuarioService.eliminarUsuario(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
