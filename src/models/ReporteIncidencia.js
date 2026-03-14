class ReporteIncidencia {
    #id;
    #incidencia;
    #vehiculo;
    #fechaIncidencia;

    constructor(id, incidencia, vehiculo, fechaIncidencia) {
        this.#id = id;
        this.#incidencia = incidencia;
        this.#vehiculo = vehiculo;
        this.#fechaIncidencia = fechaIncidencia;
    }

    // Getters
    getId() { return this.#id; }
    getIncidencia() { return this.#incidencia; }
    getVehiculo() { return this.#vehiculo; }
    getFechaIncidencia() { return this.#fechaIncidencia; }

    // Setters
    setId(id) { this.#id = id; }
    setIncidencia(incidencia) { this.#incidencia = incidencia; }
    setVehiculo(vehiculo) { this.#vehiculo = vehiculo; }
    setFechaIncidencia(fecha) { this.#fechaIncidencia = fecha; }

    toJSON() {
        return {
            id: this.#id,
            incidencia: this.#incidencia,
            vehiculo: this.#vehiculo,
            fechaIncidencia: this.#fechaIncidencia
        };
    }
}

module.exports = ReporteIncidencia;
