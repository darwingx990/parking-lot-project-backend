const Vehiculo = require('../models/vehiculo');
const Usuario = require('../models/Usuario');
const Operador = require('../models/Operador');

class VehiculoService {
  constructor() {
    this.vehiculos = [];
  }

  async crearVehiculo(datos) {
    const nuevoVehiculo = new Vehiculo(
      datos.id || Date.now().toString(),
      datos.placa,
      datos.color,
      datos.modelo,
      datos.marca,
      datos.tipo,
      datos.usuario
    );
    this.vehiculos.push(nuevoVehiculo);
    return nuevoVehiculo;
  }

  async obtenerVehiculos() {
    return this.vehiculos;
  }

  async obtenerVehiculoPorId(id) {
    const vehiculo = this.vehiculos.find(v => v.getId() === id);
    if (!vehiculo) throw new Error('Vehículo no encontrado');
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
    const indice = this.vehiculos.findIndex(v => v.getId() === id);
    if (indice === -1) throw new Error('Vehículo no encontrado');
    
    const vehiculoEliminado = this.vehiculos.splice(indice, 1);
    return vehiculoEliminado[0];
  }
}

module.exports = new VehiculoService();
