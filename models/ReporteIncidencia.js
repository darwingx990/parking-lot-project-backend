class ReporteIncidencia {
    #incidencia;
    #vehiculo;
    #fechaIncidencia;

    constructor(incidencia, vehiculo, fechaIncidencia) {
        this.#incidencia = incidencia;
        this.#vehiculo = vehiculo;
        this.#fechaIncidencia = fechaIncidencia;
    }

    // Getters
    getIncidencia() { return this.#incidencia; }
    getVehiculo() { return this.#vehiculo; }
    getFechaIncidencia() { return this.#fechaIncidencia; }

    // Setters
    setIncidencia(incidencia) { this.#incidencia = incidencia; }
    setVehiculo(vehiculo) { this.#vehiculo = vehiculo; }
    setFechaIncidencia(fecha) { this.#fechaIncidencia = fecha; }

    toJSON() {
        return {
            incidencia: this.#incidencia,
            vehiculo: this.#vehiculo,
            fechaIncidencia: this.#fechaIncidencia
        };
    }
}

module.exports = ReporteIncidencia;
