// Clase HistorialParqueo
const GetEstado = require('./GetEstado'); // Importa la clase GetEstado
const Vehiculo = require('./Vehiculo');   // Asumiendo que ya tienes la clase Vehiculo

class HistorialParqueo {
    #celda;     // instancia de GetEstado
    #vehiculo;  // instancia de Vehiculo
    #fechaHora;

    constructor(celda, vehiculo, fechaHora) {
        this.#celda = celda;
        this.#vehiculo = vehiculo;
        this.#fechaHora = fechaHora;
    }

    // Getters
    getCelda() { return this.#celda; }
    getVehiculo() { return this.#vehiculo; }
    getFechaHora() { return this.#fechaHora; }

    // Setters
    setCelda(celda) { this.#celda = celda; }
    setVehiculo(vehiculo) { this.#vehiculo = vehiculo; }
    setFechaHora(fechaHora) { this.#fechaHora = fechaHora; }

    toJSON() {
        return {
            celda: this.#celda ? this.#celda.toJSON() : null,
            vehiculo: this.#vehiculo ? this.#vehiculo.toJSON() : null,
            fechaHora: this.#fechaHora
        };
    }
}

module.exports = HistorialParqueo;