const Vehiculo = require('../models/vehiculoModel');
const AccesoSalida = require('../models/accesoSalidaModel');
const Operador = require('../models/operadorModel');

class VehiculoService {
    constructor() {
        this.vehiculoModel = [];
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
        this.vehiculoModel.push(nuevoVehiculo);
        return nuevoVehiculo;
    }

    async obtenerVehiculos() {
        return this.vehiculoModel;
    }

    async obtenerVehiculoPorId(id) {
        const vehiculo = this.vehiculoModel.find(v => v.getId() === id);
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
        const indice = this.vehiculoModel.findIndex(v => v.getId() === id);
        if (indice === -1) throw new Error('Vehiculo no encontrado');
        
        const vehiculoEliminado = this.vehiculoModel.splice(indice, 1);
        return vehiculoEliminado[0];
    }
}

module.exports = VehiculoService;