const Vehiculo = require('../models/Vehiculo');
const accesoSalidas= require('../models/AccesoSalidas');
const Operador = require('../models/Operador');

class VehiculoService {
    constructor() {
        this.vehiculo = [];
    }

    async crearVehiculo(datos) {
        const nuevoVehiculo = new Vehiculo(
            datos.id,
            datos.placa,
            datos.color,
            datos.modelo,
            datos.marca,
            datos.tipo,
            datos.usuario
        );
        this.vehiculo.push(nuevoVehiculo);
        return nuevoVehiculo;
    }

    async obtenerVehiculos() {
        return this.vehiculo;
    }

    async obtenerVehiculoPorId(id) {
        const vehiculo = this.vehiculo.find(v => v.getId() === id);
        if (!vehiculo) throw new Error('Vehiculo no encontrado');
        return vehiculo;
    }

    async actualizarVehiculo(id, datosActualizados) {
        const vehiculo = await this.obtenerVehiculoPorId(id);

        if (datosActualizados.placa) vehiculo.setPlaca(datosActualizados.placa);
        if (datosActualizados.color) vehiculo.setColor(datosActualizados.color);
        if (datosActualizados.modelo) vehiculo.setModelo(datosActualizados.modelo);
        if (datosActualizados.marca) vehiculo.setMarca(datosActualizados.marca);
        if (datosActualizados.tipo) vehiculo.setTipo(datosActualizados.tipo);
        if (datosActualizados.usuario) vehiculo.setUsuario(datosActualizados.usuario);

        return vehiculo;

    }

    async eliminarVehiculo(id) {
        const indice = this.vehiculo.findIndex(v => v.getId() === id);
        if (indice === -1) throw new Error('Vehiculo no encontrado');
        
        const vehiculoEliminado = this.vehiculo.splice(indice, 1);
        return vehiculoEliminado[0];
    }
}

module.exports = VehiculoService;