const Operador = require('../models/Operador');

class OperadorService {
    constructor() {
        this.operadores = [];
    }

    async crearOperador(datos) {
        const nuevoOperador = new Operador(
            datos.id,
            datos.tipoDocumento,
            datos.numeroDocumento,
            datos.primerNombre,
            datos.segundoNombre,
            datos.primerApellido,
            datos.segundoApellido,
            datos.direccionCorreo,
            datos.numeroCelular,
            datos.fotoPerfil,
            datos.estado,
            datos.clave
        );
        this.operadores.push(nuevoOperador);
        return nuevoOperador;
    }

    async obtenerOperadores() {
        return this.operadores;
    }

    async obtenerOperadorPorId(id) {
        const operador = this.operadores.find(o => o.getId() === id);
        if (!operador) throw new Error('Operador no encontrado');
        return operador;
    }

    async actualizarOperador(id, datosActualizados) {
        return { message: "Operador actualizado logic pending." };
    }

    async eliminarOperador(id) {
        this.operadores = this.operadores.filter(o => o.getId() !== id);
        return { message: "Operador eliminado" };
    }
}

module.exports = new OperadorService();
