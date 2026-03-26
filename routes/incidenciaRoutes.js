const express = require('express');
const router = express.Router();
const incidenciaService = require('../services/incidenciaService');

const verificarAdminOOperador = (req, res, next) => {
    const { rol } = req.headers;
    if (rol !== 'administrador' && rol !== 'operador') {
        return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador u operador' });
    }
    next();
};

const verificarAdmin = (req, res, next) => {
    const { rol } = req.headers;
    if (rol !== 'administrador') {
        return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador' });
    }
    next();
};

router.post('/', verificarAdminOOperador, async (req, res) => {
    try {
        const nuevaIncidencia = await incidenciaService.crearIncidencia(req.body);
        res.status(201).json({ message: 'Incidencia creada exitosamente', incidencia: nuevaIncidencia.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', verificarAdminOOperador, async (req, res) => {
    try {
        const incidencia = await incidenciaService.obtenerIncidencias();
        res.status(200).json(incidencia.map(i => i.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:codigo', verificarAdminOOperador, async (req, res) => {
    try {
        const incidencia = await incidenciaService.obtenerIncidenciaPorCodigo(req.params.codigo);
        res.status(200).json(incidencia.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.put('/:codigo', verificarAdminOOperador, async (req, res) => {
    try {
        const resultado = await incidenciaService.actualizarIncidencia(req.params.codigo, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:codigo', verificarAdmin, async (req, res) => {
    try {
        const resultado = await incidenciaService.eliminarIncidencia(req.params.codigo);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
