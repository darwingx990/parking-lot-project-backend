const GetEstado = require('../models/GetEstado');

class GetEstadoService {
    constructor() {
        // Arreglo en memoria hasta que se implemente la base de datos (MySQL/MongoDB).
        this.estados = [];
    }

    async crearEstado(datos) {
        const nuevoEstado = new GetEstado(
            datos.id,
            datos.tipo,
            datos.estado
        );
        this.estados.push(nuevoEstado);
        return nuevoEstado;
    }

    async obtenerEstados() {
        return this.estados;
    }

    async obtenerEstadoPorId(id) {
        const estado = this.estados.find(e => e.getId() === id);
        if (!estado) throw new Error('Estado no encontrado');
        return estado;
    }

    async actualizarEstado(id, datosActualizados) {
        const estado = await this.obtenerEstadoPorId(id);
        if (datosActualizados.tipo !== undefined) estado.setTipo(datosActualizados.tipo);
        if (datosActualizados.estado !== undefined) estado.setEstado(datosActualizados.estado);
        return { message: 'Estado actualizado exitosamente', estado: estado.toJSON() };
    }

    async eliminarEstado(id) {
        const existe = await this.obtenerEstadoPorId(id);
        if (!existe) throw new Error('Estado no encontrado');
        this.estados = this.estados.filter(e => e.getId() !== id);
        return { message: 'Estado eliminado exitosamente' };
    }
}

module.exports = new GetEstadoService();
