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
            datos.estado
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
        // Lógica de actualización a implementar
        return { message: "Usuario actualizado logic pending." };
    }

    async eliminarUsuario(id) {
        // Lógica de eliminación
        this.usuarios = this.usuarios.filter(u => u.getId() !== id);
        return { message: "Usuario eliminado" };
    }
}

module.exports = new UsuarioService();
