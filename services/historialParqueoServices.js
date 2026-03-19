const HistorialParqueo = require('../models/HistorialParqueo');
const GetEstado = require('../models/GetEstado');
const Vehiculo = require('../models/Vehiculo');

class HistorialParqueoService {
    constructor() {
        // Arreglo en memoria hasta que se implemente la base de datos (MySQL/MongoDB).
        this.historiales = [];
    }

    async crearHistorial(datos) {
        const celda = new GetEstado(
            datos.celda.id,
            datos.celda.tipo,
            datos.celda.estado
        );

        const vehiculo = new Vehiculo(
            datos.vehiculo.id,
            datos.vehiculo.placa,
            datos.vehiculo.tipo,
            datos.vehiculo.estado
        );

        const nuevoHistorial = new HistorialParqueo(
            celda,
            vehiculo,
            datos.fechaHora || new Date().toISOString()
        );

        this.historiales.push(nuevoHistorial);
        return nuevoHistorial;
    }

    async obtenerHistoriales() {
        return this.historiales;
    }

    async obtenerHistorialPorIndice(indice) {
        const historial = this.historiales[indice];
        if (!historial) throw new Error('Historial no encontrado');
        return historial;
    }

    async actualizarHistorial(indice, datosActualizados) {
        const historial = await this.obtenerHistorialPorIndice(indice);

        if (datosActualizados.celda) {
            const celda = new GetEstado(
                datosActualizados.celda.id,
                datosActualizados.celda.tipo,
                datosActualizados.celda.estado
            );
            historial.setCelda(celda);
        }

        if (datosActualizados.vehiculo) {
            const vehiculo = new Vehiculo(
                datosActualizados.vehiculo.id,
                datosActualizados.vehiculo.placa,
                datosActualizados.vehiculo.tipo,
                datosActualizados.vehiculo.estado
            );
            historial.setVehiculo(vehiculo);
        }

        if (datosActualizados.fechaHora !== undefined) {
            historial.setFechaHora(datosActualizados.fechaHora);
        }

        return { message: 'Historial actualizado exitosamente', historial: historial.toJSON() };
    }

    async eliminarHistorial(indice) {
        await this.obtenerHistorialPorIndice(indice);
        this.historiales.splice(indice, 1);
        return { message: 'Historial eliminado exitosamente' };
    }
}

module.exports = new HistorialParqueoService();
