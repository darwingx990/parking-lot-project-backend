const sql = require('../config/db.js');
const PicoPlaca = require('../models/PicoPlaca');

class PicoPlacaService {
    async crearPicoPlaca(datos) {
        try {
            const { id, tipoVehiculo, numero, dia } = datos;
            
            const result = await sql`
                INSERT INTO pico_placa (id, tipo_vehiculo, numero, dia)
                VALUES (${id}, ${tipoVehiculo}, ${numero}, ${dia})
                RETURNING *
            `;
            
            const row = result[0];
            return new PicoPlaca(row.id, row.tipo_vehiculo, row.numero, row.dia);
        } catch (error) {
            throw new Error(`Error al crear pico y placa: ${error.message}`);
        }
    }

    async obtenerPicoPlacas() {
        try {
            const result = await sql`SELECT * FROM pico_placa`;
            
            if (result.length === 0) {
                throw new Error('No hay registros de pico y placa disponible.');
            }
            
            return result.map(row => 
                new PicoPlaca(row.id, row.tipo_vehiculo, row.numero, row.dia)
            );
        } catch (error) {
            throw new Error(`Error al obtener pico y placa: ${error.message}`);
        }
    }

    async obtenerPicoPlacaPorId(id) {
        try {
            const result = await sql`SELECT * FROM pico_placa WHERE id = ${id}`;
            
            if (result.length === 0) {
                throw new Error('Registro no encontrado.');
            }
            
            const row = result[0];
            return new PicoPlaca(row.id, row.tipo_vehiculo, row.numero, row.dia);
        } catch (error) {
            throw new Error(`Error al obtener pico y placa por ID: ${error.message}`);
        }
    }

    async actualizarPicoPlaca(id, datosActualizados) {
        try {
            const { tipoVehiculo, numero, dia } = datosActualizados;
            
            await sql`
                UPDATE pico_placa
                SET tipo_vehiculo = ${tipoVehiculo}, numero = ${numero}, dia = ${dia}
                WHERE id = ${id}
            `;
            
            return { message: "Pico y Placa actualizado correctamente." };
        } catch (error) {
            throw new Error(`Error al actualizar pico y placa: ${error.message}`);
        }
    }

    async eliminarPicoPlaca(id) {
        try {
            await sql`DELETE FROM pico_placa WHERE id = ${id}`;
            return { message: "Pico y Placa eliminado con exito." };
        } catch (error) {
            throw new Error(`Error al eliminar pico y placa: ${error.message}`);
        }
    }
}

module.exports = new PicoPlacaService();