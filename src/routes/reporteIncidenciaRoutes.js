const express = require('express');
const router = express.Router();
const reporteIncidenciaService = require('../services/reporteIncidenciaService');

// POST /api/reportes-incidencia
router.post('/', async (req, res) => {
    try {
        const nuevoReporte = await reporteIncidenciaService.crearReporteIncidencia(req.body);
        res.status(201).json({ message: 'ReporteIncidencia creado exitosamente', reporte: nuevoReporte.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET /api/reportes-incidencia
router.get('/', async (req, res) => {
    try {
        const reportes = await reporteIncidenciaService.obtenerReportesIncidencia();
        res.status(200).json(reportes.map(r => r.toJSON()));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/reportes-incidencia/:id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const reporte = await reporteIncidenciaService.obtenerReporteIncidenciaPorId(id);
        res.status(200).json(reporte.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// GET /api/reportes-incidencia/vehiculo/:vehiculoId
router.get('/vehiculo/:vehiculoId', async (req, res) => {
    try {
        const vehiculoId = req.params.vehiculoId;
        const reportes = await reporteIncidenciaService.obtenerReportesPorVehiculo(vehiculoId);
        res.status(200).json(reportes.map(r => r.toJSON()));
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// PUT /api/reportes-incidencia/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await reporteIncidenciaService.actualizarReporteIncidencia(id, req.body);
        res.status(200).json(resultado.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/reportes-incidencia/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await reporteIncidenciaService.eliminarReporteIncidencia(id);
        res.status(200).json({ message: 'Reporte de incidencia eliminado correctamente', reporte: resultado.toJSON() });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
