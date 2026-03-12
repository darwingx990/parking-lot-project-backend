const PicoPlaca = require('../models/PicoPlaca');

class PicoPlacaService {
    constructor() {
        this.picoPlacas = [];
    }

    async crearPicoPlaca(datos) {
        const nuevoPicoPlaca = new PicoPlaca(
            datos.id,
            datos.tipoVehiculo,
            datos.numero,
            datos.dia
        );
        this.picoPlacas.push(nuevoPicoPlaca);
        return nuevoPicoPlaca;
    }

    async obtenerPicoPlacas() {
        return this.picoPlacas;
    }

    async obtenerPicoPlacaPorId(id) {
        const picoPlaca = this.picoPlacas.find(p => p.getId() === id);
        if (!picoPlaca) throw new Error('PicoPlaca no encontrado');
        return picoPlaca;
    }

    async actualizarPicoPlaca(id, datosActualizados) {
        return { message: "PicoPlaca actualizado logic pending." };
    }

    async eliminarPicoPlaca(id) {
        this.picoPlacas = this.picoPlacas.filter(p => p.getId() !== id);
        return { message: "PicoPlaca eliminado" };
    }
}

module.exports = new PicoPlacaService();
