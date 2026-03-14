const AccesoSalidas = require('./models/accesoSalidas');
const Vehiculo = require('./models/vehiculo');

class AccesoSalidasService {
  constructor() {
    this.accesoSalidas = [];
  }

  async crearAccesoSalidas(datos) {
    const nuevoAccesoSalidas = new AccesoSalidas(
      datos.id,
      datos.movimiento,
      datos.fechaHora,
      datos.puerta,
      datos.tiempo_estadia,
      datos.vehiculo
    );
    this.accesoSalidas.push(nuevoAccesoSalidas);
    return nuevoAccesoSalidas;
  }

  async obtenerAccesoSalidas() {
    return this.accesoSalidas;
  }

  async obtenerAccesoSalidasPorId(id) {
    const accesoSalida = this.accesoSalidas.find(a => a.getId() === id);
    if (!accesoSalida) throw new Error('Acceso/Salida no encontrado');
    return accesoSalida;
  }

  async actualizarAccesoSalidas(id, datosActualizados) {
    const accesoSalida = await this.obtenerAccesoSalidasPorId(id);
    
    if (datosActualizados.movimiento) accesoSalida.setMovimiento(datosActualizados.movimiento);
    if (datosActualizados.fechaHora) accesoSalida.setFechaHora(datosActualizados.fechaHora);
    if (datosActualizados.puerta) accesoSalida.setPuerta(datosActualizados.puerta);
    if (datosActualizados.tiempo_estadia) accesoSalida.setTiempo_estadia(datosActualizados.tiempo_estadia);
    if (datosActualizados.vehiculo) accesoSalida.setVehiculo(datosActualizados.vehiculo);
    
    return accesoSalida;
  }

  async eliminarAccesoSalidas(id) {
    const indice = this.accesoSalidas.findIndex(a => a.getId() === id);
    if (indice === -1) throw new Error('Acceso/Salida no encontrado');
    
    const accesoSalidaEliminado = this.accesoSalidas.splice(indice, 1);
    return accesoSalidaEliminado[0];
  }
}

module.exports = AccesoSalidasService;
