const ReporteIncidencia = require('../models/ReporteIncidencia');

class ReporteIncidenciaService {
    constructor() {
        this.reportes = [];
    }

    async crearReporteIncidencia(datos) {
        const nuevoReporte = new ReporteIncidencia(
            datos.id || Date.now().toString(),
            datos.incidencia,
            datos.vehiculo,
            datos.fechaIncidencia || new Date().toISOString()
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

    async obtenerReporteIncidenciaPorId(id) {
        const reporte = this.reportes.find(r => r.getId() === id);
        if (!reporte) throw new Error('Reporte de incidencia no encontrado');
        return reporte;
    }

    async obtenerReportesPorVehiculo(vehiculoId) {
        return this.reportes.filter(r => r.getVehiculo() === vehiculoId);
    }

    async actualizarReporteIncidencia(id, datosActualizados) {
        const reporte = await this.obtenerReporteIncidenciaPorId(id);
        
        if (datosActualizados.incidencia) reporte.setIncidencia(datosActualizados.incidencia);
        if (datosActualizados.vehiculo) reporte.setVehiculo(datosActualizados.vehiculo);
        if (datosActualizados.fechaIncidencia) reporte.setFechaIncidencia(datosActualizados.fechaIncidencia);
        
        return reporte;
    }

    async eliminarReporteIncidencia(id) {
        const indice = this.reportes.findIndex(r => r.getId() === id);
        if (indice === -1) throw new Error('Reporte de incidencia no encontrado');
        
        const reporteEliminado = this.reportes.splice(indice, 1);
        return reporteEliminado[0];
    }
}

module.exports = new ReporteIncidenciaService();
