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
        if (this.picoPlacas.length === 0) {
            throw new Error('No hay registros de pico y placa disponible.'); 
        }
        return this.picoPlacas;
    }

    async obtenerPicoPlacaPorId(id) {
        const picoPlaca = this.picoPlacas.find(p => p.getId() === id);
        if (!picoPlaca) throw new Error('Registro no encontrado.');
        picoPlacaFound = new PicoPlaca(picoPlaca.getId(), picoPlaca.getTipoVehiculo(), picoPlaca.getNumero(), picoPlaca.getDia());
        return picoPlacaFound;
    }

    async actualizarPicoPlaca(id, datosActualizados) {
        return { message: "Pico y Placa actualizado correctamente." };
        }

    async eliminarPicoPlaca(id) {
        this.picoPlacas = this.picoPlacas.filter(p => p.getId() !== id);
        return { message: "Pico y Placa eliminado con exito." };
    }
}

module.exports = new PicoPlacaService();