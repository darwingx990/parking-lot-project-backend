const Incidencia = require('../models/incidencia');

class IncidenciaService {
    constructor() {
        this.incidencia = [];
    }

    validarDatosIncidencia(datos) {
        if (!datos.vehiculo) {
            throw new Error('El vehículo es obligatorio');
        }
        if (!datos.fecha) {
            throw new Error('La fecha es obligatoria');
        }
        if (!datos.hora) {
            throw new Error('La hora es obligatoria');
        }
        if (!datos.tipoIncidencia || !Incidencia.TIPOS_INCIDENCIA.includes(datos.tipoIncidencia)) {
            throw new Error(`El tipo de incidencia es inválido. Debe ser uno de: ${Incidencia.TIPOS_INCIDENCIA.join(', ')}`);
        }
        return true;
    }

    async crearIncidencia(datos) {
        this.validarDatosIncidencia(datos);
        
        const nuevaIncidencia = new Incidencia(
            datos.vehiculo,
            datos.fecha,
            datos.hora,
            datos.tipoIncidencia
        );
        this.incidencia.push(nuevaIncidencia);
        return nuevaIncidencia;
    }

    async obtenerIncidencias() {
        return this.incidencia;
    }

    async obtenerIncidenciaPorCodigo(codigo) {
        const incidencia = this.incidencia.find(i => i.getCodigo() === codigo);
        if (!incidencia) throw new Error('Incidencia no encontrada');
        return incidencia;
    }

    async actualizarIncidencia(codigo, datosActualizados) {
        const incidencia = this.incidencia.find(i => i.getCodigo() === codigo);
        if (!incidencia) throw new Error('Incidencia no encontrada');

        if (datosActualizados.vehiculo) incidencia.setVehiculo(datosActualizados.vehiculo);
        if (datosActualizados.fecha) incidencia.setFecha(datosActualizados.fecha);
        if (datosActualizados.hora) incidencia.setHora(datosActualizados.hora);
        if (datosActualizados.tipoIncidencia) {
            if (!Incidencia.TIPOS_INCIDENCIA.includes(datosActualizados.tipoIncidencia)) {
                throw new Error(`El tipo de incidencia es inválido. Debe ser uno de: ${Incidencia.TIPOS_INCIDENCIA.join(', ')}`);
            }
            incidencia.setTipoIncidencia(datosActualizados.tipoIncidencia);
        }

        return { message: 'Incidencia actualizada', incidencia: incidencia.toJSON() };
    }

    async eliminarIncidencia(codigo) {
        const index = this.incidencia.findIndex(i => i.getCodigo() === codigo);
        if (index === -1) throw new Error('Incidencia no encontrada');
        
        this.incidencia.splice(index, 1);
        return { message: 'Incidencia eliminada' };
    }
}

module.exports = new IncidenciaService();
