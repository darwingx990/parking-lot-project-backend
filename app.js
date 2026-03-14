const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const vehiculoRoutes = require('./src/routes/vehiculoRoutes');
const accesoSalidasRoutes = require('./src/routes/accesoSalidasRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const administradorRoutes = require('./src/routes/administradorRoutes');
const operadorRoutes = require('./src/routes/operadorRoutes');
const picoPlacaRoutes = require('./src/routes/picoPlacaRoutes');
const reporteIncidenciaRoutes = require('./src/routes/reporteIncidenciaRoutes');

// Registrar rutas
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/acceso-salidas', accesoSalidasRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/administradores', administradorRoutes);
app.use('/api/operadores', operadorRoutes);
app.use('/api/pico-placa', picoPlacaRoutes);
app.use('/api/reporte-incidencia', reporteIncidenciaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Servidor del Parking Lot corriendo correctamente' });
});

// Manejo de errores (debe ser la última ruta)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor', message: err.message });
});

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
});

module.exports = app;
