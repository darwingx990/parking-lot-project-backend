const ReporteIncidencia = require('../models/ReporteIncidencia');

class ReporteIncidenciaService {
    constructor() {
        this.reportes = [];
    }

    async crearReporteIncidencia(datos) {
        const nuevoReporte = new ReporteIncidencia(
            datos.incidencia,
            datos.vehiculo,
            datos.fechaIncidencia
        );
        this.reportes.push(nuevoReporte);
        return nuevoReporte;
    }

    async obtenerReportesIncidencia() {
        return this.reportes;
    }

    /* Since ReporteIncidencia doesn't have an explicit ID in the current diagram, 
       we might need a different way to find/update/delete, or assume an ID index 
       for now as placeholders if they were to get an ID later */

    async obtenerReportesPorVehiculo(vehiculoId) {
        return this.reportes.filter(r => r.getVehiculo() === vehiculoId);
    }

    async actualizarReporteIncidencia(id, datosActualizados) {
        return { message: "ReporteIncidencia actualizado logic pending." };
    }

    async eliminarReporteIncidencia(id) {
        return { message: "ReporteIncidencia eliminado logic pending." };
    }
}

module.exports = new ReporteIncidenciaService();
