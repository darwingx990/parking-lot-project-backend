const Administrador = require('../models/Administrador');

class AdministradorService {
    constructor() {
        this.administradores = [];
    }

    async crearAdministrador(datos) {
        const nuevoAdmin = new Administrador(
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
        return { message: "Administrador actualizado logic pending." };
    }

    async eliminarAdministrador(id) {
        this.administradores = this.administradores.filter(a => a.getId() !== id);
        return { message: "Administrador eliminado" };
    }
}

module.exports = new AdministradorService();
