const PicoPlaca = require('../models/PicoPlaca');

class PicoPlacaService {
    constructor() {
        this.picoPlacas = [];
    }

    async crearPicoPlaca(datos) {
        const nuevoPicoPlaca = new PicoPlaca(
            datos.id || Date.now().toString(),
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
        const picoPlaca = await this.obtenerPicoPlacaPorId(id);
        
        if (datosActualizados.tipoVehiculo) picoPlaca.setTipoVehiculo(datosActualizados.tipoVehiculo);
        if (datosActualizados.numero) picoPlaca.setNumero(datosActualizados.numero);
        if (datosActualizados.dia) picoPlaca.setDia(datosActualizados.dia);
        
        return picoPlaca;
    }

    async eliminarPicoPlaca(id) {
        this.picoPlacas = this.picoPlacas.filter(p => p.getId() !== id);
        return { message: "PicoPlaca eliminado" };
    }
}

module.exports = new PicoPlacaService();
