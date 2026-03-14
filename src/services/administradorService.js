const Administrador = require('../models/Administrador');

class AdministradorService {
    constructor() {
        this.administradores = [];
    }

    async crearAdministrador(datos) {
        const nuevoAdmin = new Administrador(
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
        this.administradores.push(nuevoAdmin);
        return nuevoAdmin;
    }

    async obtenerAdministradores() {
        return this.administradores;
    }

    async obtenerAdministradorPorId(id) {
        const admin = this.administradores.find(a => a.getId() === id);
        if (!admin) throw new Error('Administrador no encontrado');
        return admin;
    }

    async actualizarAdministrador(id, datosActualizados) {
        const admin = await this.obtenerAdministradorPorId(id);
        
        if (datosActualizados.tipoDocumento) admin.setTipoDocumento(datosActualizados.tipoDocumento);
        if (datosActualizados.numeroDocumento) admin.setNumeroDocumento(datosActualizados.numeroDocumento);
        if (datosActualizados.primerNombre) admin.setPrimerNombre(datosActualizados.primerNombre);
        if (datosActualizados.segundoNombre) admin.setSegundoNombre(datosActualizados.segundoNombre);
        if (datosActualizados.primerApellido) admin.setPrimerApellido(datosActualizados.primerApellido);
        if (datosActualizados.segundoApellido) admin.setSegundoApellido(datosActualizados.segundoApellido);
        if (datosActualizados.direccionCorreo) admin.setDireccionCorreo(datosActualizados.direccionCorreo);
        if (datosActualizados.numeroCelular) admin.setNumeroCelular(datosActualizados.numeroCelular);
        if (datosActualizados.fotoPerfil) admin.setFotoPerfil(datosActualizados.fotoPerfil);
        if (datosActualizados.estado) admin.setEstado(datosActualizados.estado);
        if (datosActualizados.clave) admin.setClave(datosActualizados.clave);
        
        return admin;
    }

    async eliminarAdministrador(id) {
        this.administradores = this.administradores.filter(a => a.getId() !== id);
        return { message: "Administrador eliminado" };
    }
}

module.exports = new AdministradorService();
