const express = require('express');
const router = express.Router();
const accesoSalidasService = require('../services/accesoSalidasService');


// POST /api/acceso-salidas
router.post('/', async (req, res) => {
    try {     const nuevoaccesoSalida= await accesoSalidasService.crearAccesoSalida(req.body);
        res.status(201).json({ message: 'AccesoSalida creado exitosamente', accesoSalidas: nuevoAccesoSalida.toJSON() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// GET /api/acceso-salidas
router.get('/', async (req, res) => {
    try {     const accesoSalidas = await accesoSalidasService.obtenerAccesoSalidas();                    
        res.status(200).json(accesoSalidas.map(a => a.toJSON()));        
    } catch (error) {
        res.status(500).json({ error: error.message });                         
    }
});

// GET /api/acceso-salidas/:id
router.get('/:id', async (req, res) => {
    try {     const id = req.params.id;
        const accesoSalidas= await accesoSalidasService.obtenerAccesoSalidaPorId(id);
        res.status(200).json(accesoSalidas.toJSON());
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//PUT /api/acceso-salidas/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await accesoSalidasService.actualizarAccesoSalida(id, req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//DELETE /api/acceso-salidas/:id
router.delete('/:id', async (req, res) => {
    try {        const id = req.params.id;
        const resultado = await accesoSalidasService.eliminarAccesoSalida(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;