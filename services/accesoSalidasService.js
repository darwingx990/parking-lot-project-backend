const AccesoSalidas = require('../models/AccesoSalidas');
const Vehiculo = require('../models/Vehiculo');

class AccesoSalidasService {
  constructor() {
    // Por ahora, usamos un arreglo en memoria temporal
    // hasta que se implemente la base de datos (MySQL/MongoDB)
    this.accesoSalidas = [];
  }

  async crearAccesoSalidas(datos) {
    // En el futuro aquí se conecta con el ORM para crear en BD
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
    const accesoSalidas = this.accesoSalidas.find(a => a.getId() === id);
    if (!accesoSalidas) throw new Error('Acceso/Salida no encontrado');
    return accesoSalidas;
  }

  async actualizarAccesoSalidas(id, datosActualizados) {
    // Lógica de actualización a implementar con BD
    const accesoSalidas = await this.obtenerAccesoSalidasPorId(id);
    
    if (datosActualizados.movimiento) accesoSalidas.setMovimiento(datosActualizados.movimiento);
    if (datosActualizados.fechaHora) accesoSalidas.setFechaHora(datosActualizados.fechaHora);
    if (datosActualizados.puerta) accesoSalidas.setPuerta(datosActualizados.puerta);
    if (datosActualizados.tiempo_estadia) accesoSalidas.setTiempo_estadia(datosActualizados.tiempo_estadia);
    if (datosActualizados.vehiculo) accesoSalidas.setVehiculo(datosActualizados.vehiculo);
    
    return accesoSalidas;
  }

  async eliminarAccesoSalidas(id) {
    const indice = this.accesoSalidas.findIndex(a => a.getId() === id);
    if (indice === -1) throw new Error('Acceso/Salida no encontrado');
    
    const accesoSalidaEliminado = this.accesoSalidas.splice(indice, 1);
    return accesoSalidaEliminado[0];
  }
}

module.exports = AccesoSalidasService;