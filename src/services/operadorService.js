const Operador = require('../models/Operador');

class OperadorService {
    constructor() {
        this.operadores = [];
    }

    async crearOperador(datos) {
        const nuevoOperador = new Operador(
            datos.id || Date.now().toString(),
            datos.tipoDocumento,
            datos.numeroDocumento,
            datos.primerNombre,
            datos.segundoNombre,
            datos.primerApellido,
            datos.segundoApellido,
            datos.direccionCorreo,
            datos.numeroCelular,
            datos.fotoPerfil,
            datos.estado || 'activo',
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
        const operador = await this.obtenerOperadorPorId(id);
        
        if (datosActualizados.tipoDocumento) operador.setTipoDocumento(datosActualizados.tipoDocumento);
        if (datosActualizados.numeroDocumento) operador.setNumeroDocumento(datosActualizados.numeroDocumento);
        if (datosActualizados.primerNombre) operador.setPrimerNombre(datosActualizados.primerNombre);
        if (datosActualizados.segundoNombre) operador.setSegundoNombre(datosActualizados.segundoNombre);
        if (datosActualizados.primerApellido) operador.setPrimerApellido(datosActualizados.primerApellido);
        if (datosActualizados.segundoApellido) operador.setSegundoApellido(datosActualizados.segundoApellido);
        if (datosActualizados.direccionCorreo) operador.setDireccionCorreo(datosActualizados.direccionCorreo);
        if (datosActualizados.numeroCelular) operador.setNumeroCelular(datosActualizados.numeroCelular);
        if (datosActualizados.fotoPerfil) operador.setFotoPerfil(datosActualizados.fotoPerfil);
        if (datosActualizados.estado) operador.setEstado(datosActualizados.estado);
        if (datosActualizados.clave) operador.setClave(datosActualizados.clave);
        
        return operador;
    }

    async eliminarOperador(id) {
        this.operadores = this.operadores.filter(o => o.getId() !== id);
        return { message: "Operador eliminado" };
    }
}

module.exports = new OperadorService();
