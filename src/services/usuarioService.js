const Usuario = require('../models/Usuario');
const Administrador = require('../models/Administrador');
const Operador = require('../models/Operador');

class UsuarioService {
    constructor() {
        // Por ahora, usamos un arreglo en memoria temporalmente 
        // hasta que se implemente la base de datos (MySQL/MongoDB).
        this.usuarios = [];
    }

    async crearUsuario(datos) {
        // En el futuro aquí se conecta con el ORM para crear
        const nuevoUsuario = new Usuario(
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
            datos.estado || 'activo'
        );
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    async obtenerUsuarios() {
        return this.usuarios;
    }

    async obtenerUsuarioPorId(id) {
        const usuario = this.usuarios.find(u => u.getId() === id);
        if (!usuario) throw new Error('Usuario no encontrado');
        return usuario;
    }

    async actualizarUsuario(id, datosActualizados) {
        const usuario = await this.obtenerUsuarioPorId(id);
        
        if (datosActualizados.tipoDocumento) usuario.setTipoDocumento(datosActualizados.tipoDocumento);
        if (datosActualizados.numeroDocumento) usuario.setNumeroDocumento(datosActualizados.numeroDocumento);
        if (datosActualizados.primerNombre) usuario.setPrimerNombre(datosActualizados.primerNombre);
        if (datosActualizados.segundoNombre) usuario.setSegundoNombre(datosActualizados.segundoNombre);
        if (datosActualizados.primerApellido) usuario.setPrimerApellido(datosActualizados.primerApellido);
        if (datosActualizados.segundoApellido) usuario.setSegundoApellido(datosActualizados.segundoApellido);
        if (datosActualizados.direccionCorreo) usuario.setDireccionCorreo(datosActualizados.direccionCorreo);
        if (datosActualizados.numeroCelular) usuario.setNumeroCelular(datosActualizados.numeroCelular);
        if (datosActualizados.fotoPerfil) usuario.setFotoPerfil(datosActualizados.fotoPerfil);
        if (datosActualizados.estado) usuario.setEstado(datosActualizados.estado);
        
        return usuario;
    }

    async eliminarUsuario(id) {
        // Lógica de eliminación
        this.usuarios = this.usuarios.filter(u => u.getId() !== id);
        return { message: "Usuario eliminado" };
    }
}

module.exports = new UsuarioService();
