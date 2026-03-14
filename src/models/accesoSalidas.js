class AccesoSalidas {
  #id;
  #movimiento;
  #fechaHora;
  #puerta;
  #tiempo_estadia;
  #vehiculo;

  constructor(id, movimiento, fechaHora, puerta, tiempo_estadia, vehiculo) {
    this.#id = id;
    this.#movimiento = movimiento;
    this.#fechaHora = fechaHora;
    this.#puerta = puerta;
    this.#tiempo_estadia = tiempo_estadia;
    this.#vehiculo = vehiculo;
  }

  // Getters
  getId() { return this.#id; }
  getMovimiento() { return this.#movimiento; }
  getFechaHora() { return this.#fechaHora; }
  getPuerta() { return this.#puerta; }
  getTiempo_estadia() { return this.#tiempo_estadia; }
  getVehiculo() { return this.#vehiculo; }

  // Setters
  setId(id) { this.#id = id; }
  setMovimiento(movimiento) { this.#movimiento = movimiento; }
  setFechaHora(fechaHora) { this.#fechaHora = fechaHora; }
  setPuerta(puerta) { this.#puerta = puerta; }
  setTiempo_estadia(tiempo_estadia) { this.#tiempo_estadia = tiempo_estadia; }
  setVehiculo(vehiculo) { this.#vehiculo = vehiculo; }

  toJSON() {
    return {
      id: this.#id,
      movimiento: this.#movimiento,
      fechaHora: this.#fechaHora,
      puerta: this.#puerta,
      tiempo_estadia: this.#tiempo_estadia,
      vehiculo: this.#vehiculo
    };
  }
}

module.exports = AccesoSalidas;
